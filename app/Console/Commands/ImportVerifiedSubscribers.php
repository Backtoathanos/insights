<?php

namespace Acelle\Console\Commands;

use Acelle\Library\NewsletterSectorNormalizer;
use Acelle\Model\NewsletterPreference;
use Illuminate\Console\Command;

/**
 * Import verified subscriber emails from old-DB CSV into newsletter_preferences.
 *
 * Interest-to-sectors mapping rules:
 *   "All"                                   → all 12 configured sectors
 *   "Oil & Gas [Upstream]"                  → Oil & Gas
 *   "Power [Solar Power, Wind Power, ...]"  → Power
 *   "Utilities [Sewage Infrastructure, …]"  → Utilities
 *   "Industrial [Manufacturing Plants, …]"  → Industrial
 *   "Infrastructure [Airport …]"            → Infrastructure
 *   "Construction [Commercial …]"           → Construction
 *   "Data Centers []"                       → Data Centers
 *   "Chemical"                              → Chemical
 *   "Hydrogen []"                           → Hydrogen
 *   "Mining"                                → Mining
 *   "CCUS"                                  → CCUS
 *   "Electric Vehicles []"                  → Electric Vehicles
 *   "Oil and Gas [Upstream, …]"             → Oil & Gas  (legacy "and" alias)
 *   Non-sector values (e.g. "Book a Demo")  → ignored; if none match → all sectors
 */
class ImportVerifiedSubscribers extends Command
{
    protected $signature = 'newsletter:import-verified
                            {file=verified-subscriber-emails-2026-06-20.csv : Path to the CSV (relative to project root or absolute)}
                            {--frequency=weekly : Default frequency for new subscribers (daily or weekly)}
                            {--dry-run : Parse and report totals without inserting any rows}
                            {--update-existing : Also update sectors for already-existing records}
                            {--force : Skip the confirmation prompt}';

    protected $description = 'Import verified subscriber emails from old-DB CSV into newsletter_preferences, normalising sector interests.';

    /** @var list<string> */
    private array $allSectors;

    public function handle(): int
    {
        $this->allSectors = config('newsletter.sectors', []);

        // ── Resolve file path ────────────────────────────────────────────────
        $filePath = (string) $this->argument('file');
        if (!str_contains($filePath, '/') && !str_contains($filePath, '\\')) {
            $filePath = base_path($filePath);
        }

        if (!file_exists($filePath)) {
            $this->error("File not found: {$filePath}");
            return 1;
        }

        // ── Validate options ─────────────────────────────────────────────────
        $frequency = strtolower(trim((string) $this->option('frequency')));
        if (!in_array($frequency, [NewsletterPreference::FREQUENCY_DAILY, NewsletterPreference::FREQUENCY_WEEKLY], true)) {
            $frequency = NewsletterPreference::FREQUENCY_WEEKLY;
        }

        $dryRun        = (bool) $this->option('dry-run');
        $updateExisting = (bool) $this->option('update-existing');

        // ── Confirmation ─────────────────────────────────────────────────────
        if (!$dryRun && !$this->option('force')) {
            $mode = $updateExisting ? 'insert + update existing' : 'insert new only';
            $prompt = "Import from '{$filePath}' [frequency={$frequency}, mode={$mode}]?";
            if (!$this->confirm($prompt, true)) {
                $this->line('Aborted.');
                return 0;
            }
        }

        // ── Open CSV ─────────────────────────────────────────────────────────
        $handle = fopen($filePath, 'r');
        if ($handle === false) {
            $this->error("Cannot open file: {$filePath}");
            return 1;
        }

        // Detect and skip BOM (UTF-8 BOM = EF BB BF)
        $bom = fread($handle, 3);
        if ($bom !== "\xEF\xBB\xBF") {
            rewind($handle);
        }

        $header = fgetcsv($handle);
        if ($header === false || $header === null) {
            $this->error('File is empty or the header row could not be read.');
            fclose($handle);
            return 1;
        }

        $header    = array_map(fn ($h) => strtolower(trim((string) $h)), $header);
        $emailCol   = array_search('email', $header, true);
        $interestCol = array_search('interest', $header, true);

        if ($emailCol === false) {
            $this->error('CSV must contain an "email" column.');
            fclose($handle);
            return 1;
        }

        // ── Process rows ─────────────────────────────────────────────────────
        $inserted = 0;
        $skipped  = 0;
        $updated  = 0;
        $invalid  = 0;
        $rowNum   = 0;

        while (($data = fgetcsv($handle)) !== false) {
            $rowNum++;

            $email = isset($data[$emailCol]) ? trim((string) $data[$emailCol]) : '';

            if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $invalid++;
                if ($this->getOutput()->isVerbose()) {
                    $this->warn("  Row {$rowNum}: invalid/empty email → skipped");
                }
                continue;
            }

            $interest = ($interestCol !== false && isset($data[$interestCol]))
                ? trim((string) $data[$interestCol])
                : '';

            $sectors    = $this->resolveSectors($interest);
            $normalized = NewsletterPreference::normalizeEmail($email);
            $existing   = NewsletterPreference::where('email', $normalized)->first();

            if ($existing) {
                if ($updateExisting) {
                    if (!$dryRun) {
                        $existing->sectors = $sectors;
                        $existing->save();
                    }
                    $updated++;
                    if ($this->getOutput()->isVerbose()) {
                        $this->line("  [UPDATE] {$normalized}  →  " . implode(', ', $sectors));
                    }
                } else {
                    $skipped++;
                }
                continue;
            }

            if (!$dryRun) {
                NewsletterPreference::findOrCreateForEmail($normalized, [
                    'frequency' => $frequency,
                    'sectors'   => $sectors,
                    'token'     => NewsletterPreference::generateToken(),
                ]);
            }
            $inserted++;

            if ($this->getOutput()->isVerbose()) {
                $this->line("  [INSERT] {$normalized}  →  " . implode(', ', $sectors));
            }
        }

        fclose($handle);

        // ── Summary ──────────────────────────────────────────────────────────
        $tag = $dryRun ? '<comment>[DRY RUN]</comment> ' : '';

        $this->line('');
        $this->info("{$tag}Import complete.");
        $this->line("{$tag}  Rows processed : {$rowNum}");
        $this->line("{$tag}  Inserted       : {$inserted}");

        if ($updateExisting) {
            $this->line("{$tag}  Updated        : {$updated}");
        } else {
            $this->line("{$tag}  Skipped (exist): {$skipped}");
        }

        if ($invalid > 0) {
            $this->warn("{$tag}  Invalid emails : {$invalid}");
        }

        return 0;
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Sector normalisation
    // ─────────────────────────────────────────────────────────────────────────

    /**
     * Map a raw CSV interest string to an ordered list of canonical sector names.
     *
     * Strategy:
     * 1. Trim; empty → all sectors.
     * 2. "All" (case-insensitive) → all sectors.
     * 3. Strip every bracket group "[...]" (collapses "Power [Solar Power, …]" → "Power").
     * 4. Split remaining text by commas.
     * 5. Normalize "Oil and Gas" → "Oil & Gas" before lookup.
     * 6. Canonicalize each token via NewsletterSectorNormalizer::canonicalSector().
     * 7. If nothing matched (e.g. only "Book a Demo Now") → all sectors.
     *
     * @return list<string>
     */
    private function resolveSectors(string $raw): array
    {
        $raw = trim($raw);

        if ($raw === '' || strcasecmp($raw, 'All') === 0) {
            return $this->allSectors;
        }

        // Remove all "[...]" segments (handles commas inside brackets too)
        $stripped = (string) preg_replace('/\s*\[[^\]]*\]/', '', $raw);

        // Split by comma
        $parts = preg_split('/\s*,\s*/', $stripped, -1, PREG_SPLIT_NO_EMPTY);

        $seen = [];
        foreach ($parts as $part) {
            $part = trim($part);
            if ($part === '') {
                continue;
            }

            // "Oil and Gas [...]" legacy alias — normalise before canonical lookup
            $part = (string) preg_replace('/^Oil\s+and\s+Gas\b/ui', 'Oil & Gas', $part);

            $canonical = NewsletterSectorNormalizer::canonicalSector($part);
            if ($canonical !== null) {
                $seen[$canonical] = true;
            }
        }

        if ($seen === []) {
            // Non-sector interest (e.g. "Book a Demo Now") → default to all sectors
            return $this->allSectors;
        }

        // Return in config-defined order
        $ordered = [];
        foreach ($this->allSectors as $name) {
            if (isset($seen[$name])) {
                $ordered[] = $name;
            }
        }

        return $ordered;
    }
}
