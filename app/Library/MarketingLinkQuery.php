<?php

namespace Acelle\Library;

final class MarketingLinkQuery
{
    /**
     * Append sector + date query params to URL (handles existing ?query).
     */
    public static function append(string $baseUrl, string $sectorSingleOrCsv, ?string $dateDdMmYyyy, ?string $sectorKey = null, ?string $dateKey = null): string
    {
        $sectorKey = $sectorKey ?? (string) config('newsletter.marketing.link_query_sector', 'sector');
        $dateKey = $dateKey ?? (string) config('newsletter.marketing.link_query_date', 'date');

        $q = [];
        $sectorSingleOrCsv = trim($sectorSingleOrCsv);
        if ($sectorSingleOrCsv !== '') {
            $q[$sectorKey] = $sectorSingleOrCsv;
        }
        $dateDdMmYyyy = $dateDdMmYyyy !== null ? trim((string) $dateDdMmYyyy) : '';
        if ($dateDdMmYyyy !== '') {
            $q[$dateKey] = $dateDdMmYyyy;
        }
        if ($q === []) {
            return $baseUrl;
        }

        $glue = strpos($baseUrl, '?') !== false ? '&' : '?';

        return $baseUrl . $glue . http_build_query($q, '', '&', PHP_QUERY_RFC3986);
    }
}
