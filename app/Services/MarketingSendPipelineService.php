<?php

namespace Acelle\Services;

use Acelle\Http\Controllers\DigestController;
use Acelle\Model\MarketingMailSendLog;
use Acelle\Model\NewsletterPreference;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class MarketingSendPipelineService
{
    /**
     * @return array{
     *     filter_date: \Carbon\Carbon,
     *     send_time_label: string,
     *     rows: array<int, array<string, mixed>>
     * }
     */
    public function buildPipeline(string $dateInput, ?string $keyword = null): array
    {
        $tz = config('app.timezone');
        $filterDate = $this->parseFilterDate($dateInput, $tz);
        $today = Carbon::now($tz)->startOfDay();
        $isPast = $filterDate->lt($today);

        $marketingAt = (string) config('newsletter.marketing.send_at', '09:00');
        [$h, $m] = array_pad(array_map('intval', explode(':', $marketingAt, 2)), 2, 0);
        $scheduledAt = $filterDate->copy()->setTime($h, $m, 0);

        $admin = Auth::user()->admin;
        $sendTimeLabel = $admin->formatDateTime($scheduledAt, 'datetime_full');

        $digest = app(DigestController::class);
        $categoryCache = [];

        $query = NewsletterPreference::subscribed()->orderBy('name')->orderBy('email');
        if ($keyword !== null && trim($keyword) !== '') {
            $kw = trim($keyword);
            $query->where(function ($q) use ($kw) {
                $q->where('email', 'like', '%' . addcslashes($kw, '%_\\') . '%')
                    ->orWhere('name', 'like', '%' . addcslashes($kw, '%_\\') . '%');
            });
        }

        $rows = [];
        foreach ($query->get() as $pref) {
            if (!$pref->isScheduledForMarketingMailOn($filterDate)) {
                continue;
            }

            $frequency = $pref->frequency ?: NewsletterPreference::FREQUENCY_DAILY;
            $log = $this->logForRecipientOnDate($pref->email, $frequency, $filterDate);
            $action = $this->resolveAction($log, $filterDate, $today, $pref->id);

            if (!isset($categoryCache[$frequency])) {
                $categoryCache[$frequency] = $digest->previewMarketingCategoriesForDate($frequency, $filterDate);
            }

            $filtered = $digest->filterMarketingCategoriesForEmail($pref->email, $categoryCache[$frequency]);
            $sectors = is_array($pref->sectors) ? $pref->sectors : [];
            $sectorText = $sectors === [] ? '—' : implode(', ', $sectors);

            $rows[] = [
                'preference_id' => $pref->id,
                'name' => $pref->name ?: '—',
                'email' => $pref->email,
                'interests' => $sectorText,
                'contents' => $this->summarizeContents($filtered),
                'frequency' => $frequency,
                'frequency_label' => $frequency === NewsletterPreference::FREQUENCY_WEEKLY
                    ? trans('messages.marketing_digest.frequency_weekly')
                    : trans('messages.marketing_digest.frequency_daily'),
                'send_at_label' => $sendTimeLabel,
                'delivery_status' => $this->deliveryStatusLabel($log, $isPast),
                'action' => $action,
            ];
        }

        return [
            'filter_date' => $filterDate,
            'send_time_label' => $sendTimeLabel,
            'rows' => $rows,
        ];
    }

    public function cancelScheduledSend(NewsletterPreference $preference, string $dateInput): void
    {
        $tz = config('app.timezone');
        $filterDate = $this->parseFilterDate($dateInput, $tz);
        $today = Carbon::now($tz)->startOfDay();

        if ($filterDate->lt($today)) {
            throw new \InvalidArgumentException(trans('messages.live_subscribers.pipeline_cancel_past'));
        }

        if (!$preference->isSubscribed() || !$preference->isScheduledForMarketingMailOn($filterDate)) {
            throw new \InvalidArgumentException(trans('messages.live_subscribers.pipeline_not_scheduled'));
        }

        $frequency = $preference->frequency ?: NewsletterPreference::FREQUENCY_DAILY;
        $existing = $this->logForRecipientOnDate($preference->email, $frequency, $filterDate);

        if ($existing && $existing->status === MarketingMailSendLog::STATUS_SENT) {
            throw new \InvalidArgumentException(trans('messages.live_subscribers.pipeline_already_sent'));
        }

        if ($existing && $existing->batch_source === MarketingMailSendLog::SOURCE_ADMIN_CANCEL) {
            return;
        }

        $digest = app(DigestController::class);
        $categories = $digest->previewMarketingCategoriesForDate($frequency, $filterDate);
        $filtered = $digest->filterMarketingCategoriesForEmail($preference->email, $categories);
        $contentDate = $frequency === NewsletterPreference::FREQUENCY_DAILY
            ? $digest->resolveDailyMarketingMetaForSchedule($filterDate)['api_date_dmY']
            : $filterDate->format('d-m-Y');

        $payload = [
            'content_ids' => $this->extractContentIds($filtered),
            'sent_at' => Carbon::now($tz),
            'content_date' => $contentDate,
            'batch_source' => MarketingMailSendLog::SOURCE_ADMIN_CANCEL,
            'status' => MarketingMailSendLog::STATUS_NOT_SENT,
            'error_message' => 'Cancelled from admin send pipeline',
        ];

        if ($existing) {
            $existing->update($payload);

            return;
        }

        MarketingMailSendLog::create(array_merge($payload, [
            'email' => NewsletterPreference::normalizeEmail($preference->email),
            'batch_frequency' => $frequency,
        ]));
    }

    private function parseFilterDate(string $dateInput, string $tz): Carbon
    {
        try {
            if (trim($dateInput) === '') {
                return Carbon::now($tz)->startOfDay();
            }

            return Carbon::parse($dateInput, $tz)->startOfDay();
        } catch (\Throwable $e) {
            return Carbon::now($tz)->startOfDay();
        }
    }

    private function logForRecipientOnDate(string $email, string $frequency, Carbon $calendarDay): ?MarketingMailSendLog
    {
        $tz = config('app.timezone');
        $start = $calendarDay->copy()->timezone($tz)->startOfDay();
        $end = $start->copy()->endOfDay();
        $emailKey = NewsletterPreference::normalizeEmail($email);

        return MarketingMailSendLog::query()
            ->where('email', $emailKey)
            ->where('batch_frequency', $frequency)
            ->whereBetween('sent_at', [$start, $end])
            ->orderByDesc('id')
            ->first();
    }

    /**
     * @return array{type: string, preference_id?: int, cancel_url?: string}
     */
    private function resolveAction(?MarketingMailSendLog $log, Carbon $filterDate, Carbon $today, int $preferenceId): array
    {
        if ($log && $log->status === MarketingMailSendLog::STATUS_SENT) {
            return ['type' => 'none'];
        }

        if ($log && $log->batch_source === MarketingMailSendLog::SOURCE_ADMIN_CANCEL) {
            return ['type' => 'cancelled'];
        }

        if ($filterDate->lt($today)) {
            return ['type' => 'none'];
        }

        return [
            'type' => 'cancel',
            'preference_id' => $preferenceId,
        ];
    }

    private function deliveryStatusLabel(?MarketingMailSendLog $log, bool $isPast): string
    {
        if (!$log) {
            return $isPast
                ? trans('messages.live_subscribers.pipeline_status_not_sent')
                : trans('messages.live_subscribers.pipeline_status_scheduled');
        }

        if ($log->status === MarketingMailSendLog::STATUS_SENT) {
            return trans('messages.marketing_digest.send_status.sent');
        }

        if ($log->batch_source === MarketingMailSendLog::SOURCE_ADMIN_CANCEL) {
            return trans('messages.live_subscribers.pipeline_status_cancelled');
        }

        return trans('messages.marketing_digest.send_status.not_sent');
    }

    /**
     * @param  array<string, array{label?: string, articles?: array}>  $categories
     */
    private function summarizeContents(array $categories): string
    {
        if ($categories === []) {
            return trans('messages.live_subscribers.pipeline_no_content');
        }

        $parts = [];
        foreach ($categories as $key => $data) {
            $label = $data['label'] ?? $key;
            $count = count($data['articles'] ?? []);
            $titles = [];
            foreach (array_slice($data['articles'] ?? [], 0, 2) as $article) {
                if (!empty($article['title'])) {
                    $titles[] = (string) $article['title'];
                }
            }
            $snippet = $titles !== [] ? ': ' . implode('; ', $titles) : '';
            $parts[] = $label . ' (' . $count . ')' . $snippet;
        }

        return Str::limit(implode(' · ', $parts), 200);
    }

    /**
     * @param  array<string, array{label?: string, articles?: array}>  $categories
     * @return array<int>|null
     */
    private function extractContentIds(array $categories): ?array
    {
        $ids = [];
        foreach ($categories as $data) {
            foreach (($data['articles'] ?? []) as $article) {
                if (is_array($article) && isset($article['id']) && is_numeric($article['id'])) {
                    $ids[] = (int) $article['id'];
                }
            }
        }

        return $ids === [] ? null : array_values(array_unique($ids));
    }
}
