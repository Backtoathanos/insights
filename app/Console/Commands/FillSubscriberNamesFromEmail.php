<?php

namespace Acelle\Console\Commands;

use Acelle\Model\NewsletterPreference;
use Illuminate\Console\Command;

/**
 * For every newsletter_preferences row whose name is null/empty,
 * derive the name from the local part of the email address (text before @).
 *
 * Examples:
 *   john.doe@example.com  → "john.doe"
 *   john_doe99@gmail.com  → "john_doe99"
 *   abc@email.com         → "abc"
 */
class FillSubscriberNamesFromEmail extends Command
{
    protected $signature = 'newsletter:fill-names-from-email
                            {--dry-run : Show what would be updated without saving}
                            {--force  : Skip the confirmation prompt}';

    protected $description = 'Fill empty name fields in newsletter_preferences using the local part of the email address.';

    public function handle(): int
    {
        $query = NewsletterPreference::query()
            ->where(function ($q) {
                $q->whereNull('name')->orWhere('name', '');
            });

        $total = $query->count();

        if ($total === 0) {
            $this->info('No records with an empty name found. Nothing to do.');
            return 0;
        }

        $dryRun = (bool) $this->option('dry-run');

        if (!$dryRun) {
            $this->line("Found <comment>{$total}</comment> subscriber(s) with no name.");
            if (!$this->option('force') && !$this->confirm("Update name for all {$total} records?", true)) {
                $this->line('Aborted.');
                return 0;
            }
        }

        $updated = 0;

        $query->orderBy('id')->chunk(500, function ($records) use ($dryRun, &$updated) {
            foreach ($records as $pref) {
                $derived = $this->deriveNameFromEmail((string) $pref->email);
                if ($derived === '') {
                    continue;
                }

                if ($this->getOutput()->isVerbose()) {
                    $tag = $dryRun ? '[DRY RUN]' : '[UPDATE]';
                    $this->line("  {$tag} {$pref->email}  →  name = \"{$derived}\"");
                }

                if (!$dryRun) {
                    $pref->name = $derived;
                    $pref->save();
                }

                $updated++;
            }
        });

        $tag = $dryRun ? '<comment>[DRY RUN]</comment> ' : '';
        $this->info("{$tag}Done. {$updated} record(s) updated.");

        return 0;
    }

    /**
     * Extract the local part (before @) from an email address.
     *
     * abc@email.com        → "abc"
     * john.doe@example.com → "john.doe"
     */
    private function deriveNameFromEmail(string $email): string
    {
        $atPos = strrpos($email, '@');
        if ($atPos === false || $atPos === 0) {
            return '';
        }

        return substr($email, 0, $atPos);
    }
}
