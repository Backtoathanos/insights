<?php

namespace Acelle\Services;

use Acelle\Library\NewsletterSectorNormalizer;
use Acelle\Model\MarketingMailSendLog;
use Acelle\Model\NewsletterPreference;
use Carbon\Carbon;

class NewsletterAdminDashboardService
{
    /**
     * @return array<string, mixed>
     */
    public static function build(string $timezone, string $chartPeriod): array
    {
        $chartPeriod = in_array($chartPeriod, ['week', 'month'], true) ? $chartPeriod : 'week';

        $nowTz = Carbon::now($timezone);
        // Weekly bar chart: buckets by calendar week (Mon start) vs month buckets
        if ($chartPeriod === 'month') {
            $rangeStart = $nowTz->copy()->startOfMonth()->startOfDay();
            $rangeEnd = $nowTz->copy()->endOfDay();
        } else {
            $rangeStart = $nowTz->copy()->startOfWeek(Carbon::MONDAY)->startOfDay();
            $rangeEnd = $nowTz->copy()->endOfWeek(Carbon::SUNDAY)->endOfDay();
        }

        $total = NewsletterPreference::query()->count();
        $active = NewsletterPreference::query()->whereNull('unsubscribed_at')->count();
        $inactive = max(0, $total - $active);

        $dailyActive = NewsletterPreference::query()
            ->whereNull('unsubscribed_at')
            ->where('frequency', NewsletterPreference::FREQUENCY_DAILY)
            ->count();
        $weeklyActive = NewsletterPreference::query()
            ->whereNull('unsubscribed_at')
            ->where('frequency', NewsletterPreference::FREQUENCY_WEEKLY)
            ->count();

        $pctOfTotal = static function (int $n) use ($total): ?float {
            if ($total <= 0) {
                return null;
            }

            return round(100 * $n / $total, 2);
        };

        $sectors = [];
        NewsletterPreference::query()
            ->whereNull('unsubscribed_at')
            ->select(['sectors'])
            ->orderBy('id')
            ->chunkById(200, function ($rows) use (&$sectors) {
                foreach ($rows as $row) {
                    $list = NewsletterSectorNormalizer::normalizeStoredSectors($row->sectors);
                    foreach ($list as $s) {
                        $s = trim((string) $s);
                        if ($s !== '' && strcasecmp($s, 'All') !== 0) {
                            $sectors[$s] = ($sectors[$s] ?? 0) + 1;
                        }
                    }
                }
            });

        arsort($sectors);
        $sectorChart = [];
        foreach (array_slice($sectors, 0, 12, true) as $label => $ct) {
            $sectorChart[] = ['name' => $label, 'value' => $ct];
        }

        /** @var array<int|string, mixed> */
        $emailsSentByBucket = [];

        // Build contiguous day labels in selected range for bar chart consistency
        $cursor = $rangeStart->copy();
        while ($cursor->lte($rangeEnd)) {
            $label = $chartPeriod === 'month' ? $cursor->format('j M') : $cursor->format('D');
            $emailsSentByBucket[$label] = 0;
            $cursor->addDay();
        }

        $fromUtc = $rangeStart->copy()->timezone('UTC');
        $toUtc = $rangeEnd->copy()->timezone('UTC');

        MarketingMailSendLog::query()
            ->where('status', MarketingMailSendLog::STATUS_SENT)
            ->whereBetween('sent_at', [$fromUtc, $toUtc])
            ->orderBy('id')
            ->chunkById(500, function ($logs) use ($timezone, &$emailsSentByBucket, $chartPeriod) {
                foreach ($logs as $log) {
                    $sent = $log->sent_at instanceof \Carbon\Carbon ? $log->sent_at : null;
                    if (!$sent) {
                        continue;
                    }
                    $local = $sent->copy()->timezone($timezone);
                    $label = $chartPeriod === 'month' ? $local->format('j M') : $local->format('D');
                    if (!array_key_exists($label, $emailsSentByBucket)) {
                        $emailsSentByBucket[$label] = 0;
                    }
                    $emailsSentByBucket[$label]++;
                }
            });

        [$deliveryPct, $failPct, $deliveryTrend] = static::deliveryStatsRolling(
            Carbon::now($timezone)->subDays(29)->startOfDay(),
            Carbon::now($timezone)->endOfDay()
        );

        [$prevDeliveryPct, ,] = static::deliveryStatsRolling(
            Carbon::now($timezone)->subDays(59)->startOfDay(),
            Carbon::now($timezone)->subDays(30)->endOfDay()
        );

        $unsubPct = ($total > 0) ? round(100 * $inactive / $total, 2) : null;

        return [
            'chart_period' => $chartPeriod,
            'timezone' => $timezone,
            'now' => $nowTz,

            'kpi_total' => $total,
            'kpi_active' => $active,
            'kpi_daily' => $dailyActive,
            'kpi_weekly' => $weeklyActive,
            'kpi_daily_pct_total' => $pctOfTotal($dailyActive),
            'kpi_weekly_pct_total' => $pctOfTotal($weeklyActive),
            'kpi_active_pct_total' => $pctOfTotal($active),

            'freq_donut' => [
                ['name' => 'daily_active', 'value' => $dailyActive],
                ['name' => 'weekly_active', 'value' => $weeklyActive],
                ['name' => 'inactive', 'value' => $inactive],
            ],

            'sector_pie' => $sectorChart,
            'emails_sent_bar' => [
                'labels' => array_keys($emailsSentByBucket),
                'values' => array_values($emailsSentByBucket),
            ],

            'triggers' => static::cronTriggers($timezone, $dailyActive, $weeklyActive),

            'activities' => static::recentActivities($timezone),

            'metrics' => [
                'delivery' => ['pct' => $deliveryPct, 'sent' => $deliveryTrend['sent'], 'attempts' => $deliveryTrend['attempts'], 'delta_vs_prior' => static::pctDeltaOptional($deliveryPct, $prevDeliveryPct)],
                'fail' => ['pct' => $failPct],
                'unsubscribe' => ['pct' => $unsubPct, 'inactive' => $inactive, 'total' => $total],
            ],
        ];
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    private static function cronTriggers(string $tz, int $dailyCount, int $weeklyCount): array
    {
        $nowTz = Carbon::now($tz);
        $marketingAt = (string) config('newsletter.marketing.send_at', '09:00');
        [$h, $m] = array_pad(array_map('intval', explode(':', $marketingAt, 2)), 2, 0);

        // Newsletter digest cron (Kernel): daily 08:00 local interpretation = same wall clock labels
        $digestDailyNext = $nowTz->copy()->setTime(8, 0, 0);
        if ($digestDailyNext->lte($nowTz)) {
            $digestDailyNext->addDay();
        }

        // Weekly digest: Monday 08:00 per scheduler
        $digestWeeklyNext = $nowTz->copy();
        if ($digestWeeklyNext->dayOfWeek !== Carbon::MONDAY) {
            $digestWeeklyNext->next(Carbon::MONDAY);
        }
        $digestWeeklyNext->setTime(8, 0, 0);
        if ($digestWeeklyNext->lte($nowTz)) {
            $digestWeeklyNext->addWeek();
        }

        $weeklyMarketingDow = NewsletterPreference::resolveMarketingWeeklySendDay();
        $marketingDailyNext = $nowTz->copy()->setTime($h, $m, 0);
        if ($marketingDailyNext->lte($nowTz)) {
            $marketingDailyNext->addDay();
        }

        $marketingWeeklyNext = $nowTz->copy()->startOfDay();
        while ((int) $marketingWeeklyNext->format('w') !== $weeklyMarketingDow) {
            $marketingWeeklyNext->addDay();
        }
        $marketingWeeklyNext->setTime($h, $m, 0);
        if ($marketingWeeklyNext->lte($nowTz)) {
            $marketingWeeklyNext->addWeek();
        }

        return [
            [
                'key' => 'newsletter_daily',
                'subscribers' => $dailyCount,
                'next' => $digestDailyNext,
                'schedule' => trans('messages.live_subscribers.schedule_digest_daily'),
            ],
            [
                'key' => 'newsletter_weekly',
                'subscribers' => $weeklyCount,
                'next' => $digestWeeklyNext,
                'schedule' => trans('messages.live_subscribers.schedule_digest_weekly'),
            ],
            [
                'key' => 'marketing_daily',
                'subscribers' => $dailyCount,
                'next' => $marketingDailyNext,
                'schedule' => trans('messages.live_subscribers.schedule_marketing_daily', ['time' => $marketingAt]),
            ],
            [
                'key' => 'marketing_weekly',
                'subscribers' => $weeklyCount,
                'next' => $marketingWeeklyNext,
                'schedule' => trans(
                    'messages.live_subscribers.schedule_marketing_weekly',
                    ['day' => self::weekdayEnglish($weeklyMarketingDow), 'time' => $marketingAt]
                ),
            ],
        ];
    }

    private static function weekdayEnglish(int $phpW): string
    {
        $days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        return $days[$phpW % 7];
    }

    /**
     * @return array{0:?float,1:?float,2:array{sent:int,attempts:int}}
     */
    private static function deliveryStatsRolling(Carbon $fromLocalTz, Carbon $toLocalTz): array
    {
        $fromUtc = $fromLocalTz->copy()->timezone('UTC');
        $toUtc = $toLocalTz->copy()->timezone('UTC');

        $attempts = MarketingMailSendLog::query()
            ->whereBetween('sent_at', [$fromUtc, $toUtc])
            ->count();

        $sent = MarketingMailSendLog::query()
            ->whereBetween('sent_at', [$fromUtc, $toUtc])
            ->where('status', MarketingMailSendLog::STATUS_SENT)
            ->count();

        $pct = $attempts > 0 ? round(100 * $sent / $attempts, 2) : null;
        $failPct = $attempts > 0 ? round(100 * ($attempts - $sent) / $attempts, 2) : null;

        return [$pct, $failPct, ['sent' => $sent, 'attempts' => $attempts]];
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    private static function recentActivities(string $timezone): array
    {
        $out = [];

        foreach (MarketingMailSendLog::query()->orderByDesc('sent_at')->limit(30)->get() as $log) {
            $at = $log->sent_at instanceof \Carbon\Carbon ? $log->sent_at->copy()->timezone($timezone) : null;
            if (!$at) {
                continue;
            }
            if ($log->status === MarketingMailSendLog::STATUS_SENT) {
                $out[] = [
                    'at' => $at,
                    'icon' => 'check_circle',
                    'class' => 'text-success',
                    'msg' => trans('messages.live_subscribers.activity.delivered_marketing'),
                ];
            } else {
                $out[] = [
                    'at' => $at,
                    'icon' => 'error_outline',
                    'class' => 'text-warning',
                    'msg' => trans('messages.live_subscribers.activity.marketing_failed', ['detail' => $log->error_message ? \Illuminate\Support\Str::limit($log->error_message, 120) : '—']),
                ];
            }
        }

        NewsletterPreference::query()
            ->orderByDesc('created_at')
            ->limit(25)
            ->get()
            ->each(function (NewsletterPreference $p) use (&$out, $timezone) {
                $at = $p->created_at instanceof \Carbon\CarbonInterface
                    ? $p->created_at->copy()->timezone($timezone)
                    : null;
                if ($at) {
                    $out[] = [
                        'at' => $at,
                        'icon' => 'person_add_alt',
                        'class' => 'text-primary',
                        'msg' => trans('messages.live_subscribers.activity.new_preference'),
                    ];
                }

                return true;
            });

        NewsletterPreference::query()
            ->orderByDesc('updated_at')
            ->limit(25)
            ->get()
            ->each(function (NewsletterPreference $p) use (&$out, $timezone) {
                if (!$p->created_at || !$p->updated_at) {
                    return true;
                }
                if ($p->updated_at->lte($p->created_at->copy()->addMinute())) {
                    return true;
                }

                $at = $p->updated_at instanceof \Carbon\CarbonInterface
                    ? $p->updated_at->copy()->timezone($timezone)
                    : null;

                if ($at) {
                    $out[] = [
                        'at' => $at,
                        'icon' => 'tune',
                        'class' => 'text-warning',
                        'msg' => trans('messages.live_subscribers.activity.preference_updated'),
                    ];
                }

                return true;
            });

        usort($out, function ($a, $b) {
            return $b['at']->timestamp <=> $a['at']->timestamp;
        });

        return array_slice($out, 0, 20);
    }

    private static function pctDeltaOptional(?float $curr, ?float $prev): ?float
    {
        if ($curr === null || $prev === null) {
            return null;
        }

        return round($curr - $prev, 2);
    }
}
