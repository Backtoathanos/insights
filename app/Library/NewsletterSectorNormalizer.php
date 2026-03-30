<?php

namespace Acelle\Library;

/**
 * Normalize comma-separated interest strings and sector arrays for newsletter_preferences.
 * Collapses Oil & Gas [Upstream|Midstream|Downstream] and Oil_Gas into a single "Oil & Gas" entry.
 */
class NewsletterSectorNormalizer
{
    /**
     * Parse comma-separated input (e.g. interest + cinterest), canonicalize, unique, allowed-only.
     *
     * @return list<string>
     */
    public static function normalizeFromCommaSeparated(?string $raw): array
    {
        if ($raw === null || trim($raw) === '') {
            return [];
        }
        $parts = preg_split('/\s*,\s*/', (string) $raw, -1, PREG_SPLIT_NO_EMPTY);
        $seen = [];
        foreach ($parts as $part) {
            $canonical = self::canonicalSector(trim((string) $part));
            if ($canonical !== null) {
                $seen[$canonical] = true;
            }
        }

        return self::orderLikeConfig(array_keys($seen));
    }

    /**
     * Legacy / stored JSON may use old labels; map to current allowed names and drop unknown.
     *
     * @param  array<mixed>|null  $stored
     * @return list<string>
     */
    public static function normalizeStoredSectors(?array $stored): array
    {
        if (!is_array($stored) || $stored === []) {
            return [];
        }
        $seen = [];
        foreach ($stored as $item) {
            if (!is_string($item)) {
                continue;
            }
            $canonical = self::canonicalSector(trim($item));
            if ($canonical !== null) {
                $seen[$canonical] = true;
            }
        }

        return self::orderLikeConfig(array_keys($seen));
    }

    /**
     * POST body sectors[]: keep only allowed values, preserve config order, no duplicates.
     *
     * @param  mixed  $submitted
     * @return list<string>
     */
    public static function filterToAllowedSectors($submitted): array
    {
        if (!is_array($submitted)) {
            return [];
        }
        $set = [];
        foreach ($submitted as $item) {
            if (!is_string($item)) {
                continue;
            }
            $canonical = self::canonicalSector(trim($item));
            if ($canonical !== null) {
                $set[$canonical] = true;
            }
        }

        return self::orderLikeConfig(array_keys($set));
    }

    public static function canonicalSector(string $s): ?string
    {
        if ($s === '') {
            return null;
        }

        // Oil & Gas: plain, bracketed segments, legacy underscore key
        if (preg_match('/^Oil\s*&\s*Gas\b/ui', $s) || strcasecmp($s, 'Oil_Gas') === 0) {
            return 'Oil & Gas';
        }

        $allowed = config('newsletter.sectors', []);
        $lower = mb_strtolower($s, 'UTF-8');
        foreach ($allowed as $name) {
            if (mb_strtolower((string) $name, 'UTF-8') === $lower) {
                return (string) $name;
            }
        }

        return null;
    }

    /**
     * @param  list<string>  $sectors
     * @return list<string>
     */
    private static function orderLikeConfig(array $sectors): array
    {
        $allowed = config('newsletter.sectors', []);
        $want = array_flip($sectors);
        $out = [];
        foreach ($allowed as $name) {
            if (isset($want[$name])) {
                $out[] = $name;
            }
        }

        return $out;
    }
}
