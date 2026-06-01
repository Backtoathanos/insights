<?php

namespace Acelle\Http\Controllers;

use Acelle\Library\NewsletterSectorNormalizer;
use Acelle\Model\NewsletterPreference;
use Acelle\Model\DigestSubscriber;
use Acelle\Model\Subscriber;
use Acelle\Model\MailList;
use Acelle\Model\DigestContentItem;
use Acelle\Model\MarketingMailSendLog;
use Acelle\Mail\MarketingEmailMail;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;

class DigestController extends Controller
{
    /**
     * Unsubscribe by email (primary flow) - shows confirmation page with Yes/No.
     * URL: /digest/unsubscribe/user@example.com
     * Shows page if email exists in brsubscribers OR digest_subscribers.
     */
    public function unsubscribeByEmail(string $email)
    {
        $email = trim($email);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return view('digest.not_found');
        }
        // Allow page if in brsubscribers (primary) or digest_subscribers
        $inBrsubscribers = DB::table('subscribers')->where('email', $email)->exists();
        $subscriber = DigestSubscriber::findByEmail($email);
        if (!$inBrsubscribers && !$subscriber) {
            return view('digest.not_found');
        }
        return view('digest.unsubscribe_email', ['email' => $email, 'subscriber' => $subscriber]);
    }

    /**
     * Process unsubscribe by email - removes from brsubscribers and digest_subscribers.
     */
    public function doUnsubscribeByEmail(Request $request, string $email)
    {
        $email = trim($email);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return redirect()->route('digest.unsubscribed');
        }
        // Remove from digest_subscribers
        $subscriber = DigestSubscriber::findByEmail($email);
        if ($subscriber) {
            $subscriber->delete();
        }
        // Remove from brsubscribers (primary) - use configured list or first list
        $digestMailListId = config('newsletter.digest.mail_list_id') ?: env('NEWSLETTER_DIGEST_MAIL_LIST_ID');
        $list = ($digestMailListId ? MailList::find($digestMailListId) : null) ?: MailList::first();
        if ($list) {
            DB::table('subscribers')->where('mail_list_id', $list->id)->where('email', $email)->delete();
        } else {
            // Fallback: remove by email from any list
            DB::table('subscribers')->where('email', $email)->delete();
        }
        // Mark NewsletterPreference as unsubscribed
        NewsletterPreference::forEmail($email)->get()->each(fn ($p) => $p->unsubscribe());
        return redirect()->route('digest.unsubscribed');
    }

    public function unsubscribe(string $token)
    {
        $pref = NewsletterPreference::findActiveByToken($token);
        if (!$pref) {
            return view('digest.not_found');
        }
        return view('digest.unsubscribe', ['preference' => $pref]);
    }

    public function doUnsubscribe(Request $request, string $token)
    {
        $pref = NewsletterPreference::findActiveByToken($token);
        if (!$pref) {
            return redirect()->route('digest.not_found');
        }
        $pref->unsubscribe();
        return redirect()->route('digest.unsubscribed');
    }

    public function unsubscribed()
    {
        return view('digest.unsubscribed');
    }

    /**
     * Shown when user chooses "No, keep me subscribed".
     */
    public function stayedSubscribed()
    {
        return view('digest.stayed_subscribed');
    }

    /**
     * Preferences by email - URL: /digest/preferences/email/user@example.com
     * Shows page if email exists in newsletter_preferences OR brsubscribers (creates preference if needed).
     */
    public function preferencesByEmail(string $email)
    {
        $email = trim($email);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return view('digest.not_found');
        }
        $pref = NewsletterPreference::forEmail($email)->first();
        if (!$pref) {
            // Not in newsletter_preferences - check brsubscribers and create preference if found
            $inBrsubscribers = DB::table('subscribers')->where('email', $email)->exists();
            if (!$inBrsubscribers) {
                return view('digest.not_found');
            }
            $pref = NewsletterPreference::findOrCreateForEmail($email, [
                'frequency' => NewsletterPreference::FREQUENCY_DAILY,
                'sectors' => config('newsletter.sectors', []),
                'token' => NewsletterPreference::generateToken(),
            ]);
        }
        return view('digest.preferences', [
            'preference' => $pref,
            'sectors' => config('newsletter.sectors', []),
            'selectedSectors' => NewsletterSectorNormalizer::normalizeStoredSectors($pref->sectors),
            'useEmailUrl' => true,
        ]);
    }

    public function savePreferencesByEmail(Request $request, string $email)
    {
        $email = trim($email);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return redirect()->route('digest.not_found');
        }
        $pref = NewsletterPreference::forEmail($email)->first();
        if (!$pref) {
            $inBrsubscribers = DB::table('subscribers')->where('email', $email)->exists();
            if (!$inBrsubscribers) {
                return redirect()->route('digest.not_found');
            }
            $pref = NewsletterPreference::findOrCreateForEmail($email, [
                'frequency' => $request->input('frequency', NewsletterPreference::FREQUENCY_DAILY),
                'sectors' => NewsletterSectorNormalizer::filterToAllowedSectors($request->input('sectors', [])),
                'token' => NewsletterPreference::generateToken(),
            ]);
        } else {
            $pref->frequency = $request->input('frequency', NewsletterPreference::FREQUENCY_DAILY);
            $pref->sectors = NewsletterSectorNormalizer::filterToAllowedSectors($request->input('sectors', []));
            $pref->save();
        }
        return redirect()->route('digest.preferences.email', ['email' => $email])
            ->with('success', 'Preferences updated.');
    }

    public function preferences(string $token)
    {
        $pref = NewsletterPreference::findActiveByToken($token);
        if (!$pref) {
            return view('digest.not_found');
        }
        return view('digest.preferences', [
            'preference' => $pref,
            'sectors' => config('newsletter.sectors', []),
            'selectedSectors' => NewsletterSectorNormalizer::normalizeStoredSectors($pref->sectors),
            'useEmailUrl' => false,
        ]);
    }

    public function savePreferences(Request $request, string $token)
    {
        $pref = NewsletterPreference::findActiveByToken($token);
        if (!$pref) {
            return redirect()->route('digest.not_found');
        }
        $pref->frequency = $request->input('frequency', NewsletterPreference::FREQUENCY_DAILY);
        $pref->sectors = NewsletterSectorNormalizer::filterToAllowedSectors($request->input('sectors', []));
        $pref->save();
        return redirect()->route('digest.preferences', [
            'token' => $token,
        ])->with('success', 'Preferences updated.');
    }

    public function showMore(Request $request)
    {
        $date = $request->input('date', now()->toDateString());
        $sectors = array_filter(explode(',', $request->input('sectors', '')));
        $token = $request->input('token');

        $items = DigestContentItem::getForShowMore($sectors, $date);

        return view('digest.show_more', [
            'items' => $items,
            'date' => $date,
            'sectors' => $sectors,
        ]);
    }

    /**
     * Raw GET to articles/sections for one DD-MM-YYYY date.
     */
    protected function fetchMarketingArticlesRawFromApi(string $dateDmY): array
    {
        $apiUrl = rtrim((string) config('newsletter.marketing.api_url'), '/');
        $token = (string) config('newsletter.marketing.api_token');
        $url = $apiUrl . '?token=' . urlencode($token) . '&date=' . urlencode($dateDmY);

        $response = Http::timeout(45)->acceptJson()->get($url);
        if (!$response->successful()) {
            return [];
        }

        $data = $response->json();

        return is_array($data) ? $data : [];
    }

    /**
     * True when each configured category key has at least one article.
     */
    protected function marketingApiHasAllSectionsNonEmpty(array $data, array $categoryKeys): bool
    {
        foreach ($categoryKeys as $key) {
            $items = $data[$key] ?? [];
            if (!is_array($items) || count($items) === 0) {
                return false;
            }
        }

        return true;
    }

    /**
     * Merge multiple API payloads (newer attempts first), dedupe per category by article id/slug.
     */
    protected function mergeWeeklyApiPayloads(array $payloads): array
    {
        $keys = array_keys(config('newsletter.marketing.categories', []));
        $out = [];
        foreach ($keys as $k) {
            $out[$k] = [];
        }
        foreach ($payloads as $data) {
            foreach ($keys as $k) {
                foreach (($data[$k] ?? []) as $article) {
                    if (!is_array($article)) {
                        continue;
                    }
                    $out[$k][] = $article;
                }
            }
        }
        foreach ($keys as $k) {
            $out[$k] = $this->dedupeArticlesByIdentity($out[$k]);
        }

        return $out;
    }

    /**
     * @param  array<int, array<string, mixed>>  $articles
     * @return array<int, array<string, mixed>>
     */
    protected function dedupeArticlesByIdentity(array $articles): array
    {
        $seen = [];
        $result = [];
        foreach ($articles as $article) {
            $id = $article['id'] ?? null;
            $slug = isset($article['slug']) ? (string) $article['slug'] : '';
            $key = $id !== null ? 'id:' . $id : ('slug:' . $slug);
            if ($slug === '' && $id === null) {
                $result[] = $article;

                continue;
            }
            if (isset($seen[$key])) {
                continue;
            }
            $seen[$key] = true;
            $result[] = $article;
        }

        return $result;
    }

    /**
     * Flatten API payload into grouped categories with max $maxTotal articles total (default 10).
     */
    protected function buildGroupedMarketingCategoriesFromApiPayload(array $data, int $maxTotal = 10): array
    {
        $categories = config('newsletter.marketing.categories', []);
        $all = [];
        foreach ($categories as $key => $label) {
            $items = $data[$key] ?? [];
            if (is_array($items) && !empty($items)) {
                foreach ($items as $item) {
                    if (!is_array($item)) {
                        continue;
                    }
                    $item['_category_key'] = $key;
                    $item['_category_label'] = $label;
                    $all[] = $item;
                }
            }
        }
        $all = array_slice($all, 0, $maxTotal);
        if ($all === []) {
            return [];
        }
        $result = [];
        foreach ($all as $item) {
            $key = $item['_category_key'];
            $label = $item['_category_label'];
            unset($item['_category_key'], $item['_category_label']);
            if (!isset($result[$key])) {
                $result[$key] = ['label' => $label, 'articles' => []];
            }
            $result[$key]['articles'][] = $item;
        }

        return $result;
    }

    /**
     * Daily send: articles API prefers **yesterday** (cron e.g. 9am → previous calendar day).
     * After a closed Sunday there is typically no payload: when yesterday falls on Sunday, try Sunday first;
     * if still no usable sections, scans backwards (skipping Sunday) up to 5 weekdays.
     * Example: Monday → tries Sunday first; empty → tries Saturday; empty → tries Friday; etc.
     *
     * @param  \Carbon\Carbon|null  $scheduledOn  Send calendar day (app TZ); defaults to today for cron.
     * @return array{categories: array<string, mixed>, api_date_dmY: string}
     */
    protected function resolveDailyMarketingFetch(?string $dateOverride = null, ?Carbon $scheduledOn = null): array
    {
        $tz = config('app.timezone');

        if ($dateOverride !== null && trim((string) $dateOverride) !== '') {
            $dm = trim((string) $dateOverride);
            $raw = $this->fetchMarketingArticlesRawFromApi($dm);
            $categories = $this->buildGroupedMarketingCategoriesFromApiPayload($raw);

            return ['categories' => $categories, 'api_date_dmY' => $dm];
        }

        // Scan back up to 5 days from yesterday relative to the scheduled send day.
        $anchor = ($scheduledOn ?? Carbon::now($tz))->copy()->timezone($tz)->subDay()->startOfDay();

        for ($i = 0; $i < 5; $i++) {
            $scan = $anchor->copy()->subDays($i);

            // Skip Sunday on retry passes (i > 0): API publishes nothing on Sunday.
            if ($i > 0 && $scan->isSunday()) {
                continue;
            }

            $dmY = $scan->format('d-m-Y');
            $raw = $this->fetchMarketingArticlesRawFromApi($dmY);
            $categories = $this->buildGroupedMarketingCategoriesFromApiPayload($raw);

            if ($categories !== []) {
                return ['categories' => $categories, 'api_date_dmY' => $dmY];
            }
        }

        return ['categories' => [], 'api_date_dmY' => $anchor->format('d-m-Y')];
    }

    /**
     * Daily send: delegates to {@see resolveDailyMarketingFetch} — tries yesterday, then scans back up to 5 days skipping Sundays.
     */
    protected function fetchMarketingArticlesDaily(?string $dateOverride = null): array
    {
        return $this->resolveDailyMarketingFetch($dateOverride)['categories'];
    }

    /**
     * Weekly send (e.g. Sunday 9am): try API for previous day, then up to 5 days back.
     * Stop when latest_blogs, project_profiles, project_news, industry_news all have data.
     * Otherwise merge up to 5 responses and dedupe.
     */
    protected function fetchMarketingArticlesWeekly(?string $dateOverride = null): array
    {
        if ($dateOverride !== null && $dateOverride !== '') {
            $raw = $this->fetchMarketingArticlesRawFromApi(trim($dateOverride));

            return $this->buildGroupedMarketingCategoriesFromApiPayload($raw);
        }

        $anchor = Carbon::now();
        $categoryKeys = array_keys(config('newsletter.marketing.categories', []));
        $attemptPayloads = [];

        for ($i = 1; $i <= 5; $i++) {
            $dateStr = $anchor->copy()->subDays($i)->format('d-m-Y');
            $data = $this->fetchMarketingArticlesRawFromApi($dateStr);
            if ($data === []) {
                continue;
            }
            $attemptPayloads[] = $data;
            if ($this->marketingApiHasAllSectionsNonEmpty($data, $categoryKeys)) {
                return $this->buildGroupedMarketingCategoriesFromApiPayload($data);
            }
        }

        if ($attemptPayloads === []) {
            return [];
        }

        $merged = $this->mergeWeeklyApiPayloads($attemptPayloads);

        return $this->buildGroupedMarketingCategoriesFromApiPayload($merged);
    }

    /**
     * Fetch marketing articles from external API (single date). Manual/test: defaults to yesterday.
     */
    protected function fetchMarketingArticles(?string $date = null): array
    {
        return $this->fetchMarketingArticlesDaily($date);
    }

    /**
     * Filter categories by subscriber sectors.
     *
     * The articles API tags each item with an "industry" field (e.g. Industrial). When present,
     * we match that to the user's digest sectors (including blogs under latest_blogs). When
     * "industry" is missing or not a known label, we fall back to the sector_to_category bucket map.
     */
    protected function filterCategoriesBySectors(array $categories, array $sectors): array
    {
        if (empty($sectors) || in_array('All', $sectors, true)) {
            return $categories;
        }

        $mapping = config('newsletter.marketing.sector_to_category', []);
        $userCanonicals = [];
        foreach ($sectors as $sector) {
            $c = NewsletterSectorNormalizer::canonicalSector(trim((string) $sector));
            if ($c !== null) {
                $userCanonicals[$c] = true;
            }
        }
        $userSectorList = array_keys($userCanonicals);

        $filtered = [];
        foreach ($categories as $catKey => $data) {
            $articles = $data['articles'] ?? [];
            $filteredArticles = [];
            foreach ($articles as $article) {
                if (isset($article['industry']) && is_string($article['industry']) && trim($article['industry']) !== '') {
                    $articleIndustry = NewsletterSectorNormalizer::canonicalSector(trim($article['industry']));
                    if ($articleIndustry !== null) {
                        if (in_array($articleIndustry, $userSectorList, true)) {
                            $filteredArticles[] = $article;
                        }
                        continue;
                    }
                }
                $allowedCategories = [];
                foreach ($sectors as $sector) {
                    $allowedCategories = array_merge($allowedCategories, $mapping[$sector] ?? []);
                }
                $allowedCategories = array_unique($allowedCategories);
                if (empty($allowedCategories) || in_array($catKey, $allowedCategories, true)) {
                    $filteredArticles[] = $article;
                }
            }
            if (!empty($filteredArticles)) {
                $filtered[$catKey] = [
                    'label' => $data['label'] ?? $catKey,
                    'articles' => $filteredArticles,
                ];
            }
        }

        return $filtered;
    }

    /**
     * Get sectors for an email from newsletter_preferences.
     */
    protected function getSectorsForEmail(string $email): array
    {
        $pref = NewsletterPreference::forEmail($email)->first();
        $sectors = $pref && is_array($pref->sectors) ? $pref->sectors : [];
        return !empty($sectors) ? $sectors : ['All'];
    }

    /**
     * Sectors for outbound ?sector= URLs (exclude "All", trimmed, stable unique order).
     *
     * @param  array<int|string, mixed>  $sectors
     * @return array<int, string>
     */
    protected function sectorsForOutboundLinks(array $sectors): array
    {
        $out = [];
        foreach ($sectors as $s) {
            $s = trim((string) $s);
            if ($s === '' || strcasecmp($s, 'All') === 0) {
                continue;
            }
            $out[$s] = true;
        }

        return array_keys($out);
    }

    /**
     * Collect numeric article IDs from grouped marketing categories.
     *
     * @param  array<string, array{label?: string, articles?: array<int, array<string, mixed>>}>  $categories
     * @return array<int>
     */
    protected function extractMarketingContentIds(array $categories): array
    {
        $ids = [];
        foreach ($categories as $data) {
            foreach (($data['articles'] ?? []) as $article) {
                if (!is_array($article)) {
                    continue;
                }
                if (array_key_exists('id', $article) && is_numeric($article['id'])) {
                    $ids[] = (int) $article['id'];
                }
            }
        }

        return array_values(array_unique($ids));
    }

    /**
     * Persist marketing send outcome (never throws).
     */
    protected function logMarketingMailSend(
        string $email,
        array $categoriesForIds,
        ?string $contentDateDmY,
        string $batchFrequency,
        int $status,
        string $source = MarketingMailSendLog::SOURCE_CRON,
        ?string $errorMessage = null
    ): void {
        try {
            MarketingMailSendLog::create([
                'email' => strtolower(trim($email)),
                'content_ids' => $this->extractMarketingContentIds($categoriesForIds) ?: null,
                'sent_at' => Carbon::now(),
                'content_date' => $contentDateDmY,
                'batch_frequency' => $batchFrequency,
                'batch_source' => $source,
                'status' => $status,
                'error_message' => $errorMessage,
            ]);
        } catch (\Throwable $e) {
            // Logging must never break mailing
        }
    }

    /**
     * Normalize email consistently with {@see logMarketingMailSend} storage.
     */
    protected function normalizedMarketingMailEmail(?string $email): string
    {
        return strtolower(trim((string) $email));
    }

    /**
     * Map normalized email => true when that address already received a successful
     * marketing send today (app timezone) for this batch frequency.
     *
     * @return array<string, true>
     */
    protected function marketingSuccessfulTodayLookup(string $batchFrequency): array
    {
        $tz = config('app.timezone');
        $start = Carbon::now($tz)->copy()->startOfDay();
        $end = Carbon::now($tz)->copy()->endOfDay();

        $emails = MarketingMailSendLog::query()
            ->where('batch_frequency', $batchFrequency)
            ->where('status', MarketingMailSendLog::STATUS_SENT)
            ->whereBetween('sent_at', [$start, $end])
            ->pluck('email');

        $lookup = [];
        foreach ($emails as $addr) {
            $lookup[$this->normalizedMarketingMailEmail($addr)] = true;
        }

        return $lookup;
    }

    /**
     * @return array<string, true> normalized email => cancelled by admin today
     */
    protected function marketingAdminCancelledTodayLookup(string $batchFrequency): array
    {
        $tz = config('app.timezone');
        $start = Carbon::now($tz)->copy()->startOfDay();
        $end = Carbon::now($tz)->copy()->endOfDay();

        $emails = MarketingMailSendLog::query()
            ->where('batch_frequency', $batchFrequency)
            ->where('batch_source', MarketingMailSendLog::SOURCE_ADMIN_CANCEL)
            ->where('status', MarketingMailSendLog::STATUS_NOT_SENT)
            ->whereBetween('sent_at', [$start, $end])
            ->pluck('email');

        $lookup = [];
        foreach ($emails as $addr) {
            $lookup[$this->normalizedMarketingMailEmail($addr)] = true;
        }

        return $lookup;
    }

    /**
     * @return array<string, true> normalized email => cancelled by admin on calendar day
     */
    protected function marketingAdminCancelledOnCalendarDayLookup(string $batchFrequency, Carbon $calendarDayInTz): array
    {
        $tz = config('app.timezone');
        $start = $calendarDayInTz->copy()->timezone($tz)->startOfDay();
        $end = $start->copy()->endOfDay();

        $emails = MarketingMailSendLog::query()
            ->where('batch_frequency', $batchFrequency)
            ->where('batch_source', MarketingMailSendLog::SOURCE_ADMIN_CANCEL)
            ->where('status', MarketingMailSendLog::STATUS_NOT_SENT)
            ->whereBetween('sent_at', [$start, $end])
            ->pluck('email');

        $lookup = [];
        foreach ($emails as $addr) {
            $lookup[$this->normalizedMarketingMailEmail($addr)] = true;
        }

        return $lookup;
    }

    /**
     * True if at least one successful marketing send exists for this batch type on the given calendar day (app timezone).
     */
    protected function marketingBatchHadSuccessfulSendOnCalendarDay(string $batchFrequency, Carbon $calendarDayInTz): bool
    {
        $tz = config('app.timezone');
        $start = $calendarDayInTz->copy()->timezone($tz)->startOfDay();
        $end = $start->copy()->endOfDay();

        return MarketingMailSendLog::query()
            ->where('batch_frequency', $batchFrequency)
            ->where('status', MarketingMailSendLog::STATUS_SENT)
            ->whereBetween('sent_at', [$start, $end])
            ->exists();
    }

    /**
     * Weekly batch runs only on MARKETING_MAIL_WEEKLY_DAY (app timezone), unless force is set.
     */
    protected function weeklyMarketingAllowedBySchedule(bool $forceWeeklyDay): bool
    {
        if ($forceWeeklyDay) {
            return true;
        }

        $tz = config('app.timezone');
        $configuredDow = NewsletterPreference::resolveMarketingWeeklySendDay();

        return (int) Carbon::now($tz)->format('w') === $configuredDow;
    }

    /**
     * Any marketing_mail_send_logs row today (sent, cancelled, failed, etc.) for this batch type.
     *
     * @return array<string, true>
     */
    protected function marketingLoggedTodayLookup(string $batchFrequency): array
    {
        $tz = config('app.timezone');
        $start = Carbon::now($tz)->copy()->startOfDay();
        $end = Carbon::now($tz)->copy()->endOfDay();

        $emails = MarketingMailSendLog::query()
            ->where('batch_frequency', $batchFrequency)
            ->whereBetween('sent_at', [$start, $end])
            ->pluck('email');

        $lookup = [];
        foreach ($emails as $addr) {
            $lookup[$this->normalizedMarketingMailEmail($addr)] = true;
        }

        return $lookup;
    }

    /**
     * Marketing mail batch: subscribed newsletter_preferences on the digest list.
     * At most one successful send per recipient per calendar day (app timezone)
     * for the same batch_frequency (daily or weekly): repeats are skipped using marketing_mail_send_logs.
     * Daily batch: API date is yesterday unless empty after a closed Sunday — then attempts Saturday while links use that API date; optional date override.
     * Weekly batch: up to 5 API calls backward until all sections populated (or merged); recipients frequency=weekly only;
     * runs on MARKETING_MAIL_WEEKLY_DAY only (unless forceWeeklyDay). Skips recipients who already have any log row today.
     *
     * @return array<string, mixed>
     */
    public function executeMarketingMail(?string $dateOverride = null, string $batchFrequency = 'daily', bool $forceWeeklyDay = false): array
    {
        $batchFrequency = $batchFrequency === NewsletterPreference::FREQUENCY_WEEKLY
            ? NewsletterPreference::FREQUENCY_WEEKLY
            : NewsletterPreference::FREQUENCY_DAILY;

        if ($batchFrequency === NewsletterPreference::FREQUENCY_WEEKLY && !$this->weeklyMarketingAllowedBySchedule($forceWeeklyDay)) {
            return [
                'sent' => false,
                'message' => 'Weekly marketing mail runs only on MARKETING_MAIL_WEEKLY_DAY (not today). Use ?force=1 or --force to override.',
                'count' => 0,
                'skipped_already_sent_today' => 0,
                'batch_frequency' => $batchFrequency,
            ];
        }

        $tz = config('app.timezone');
        $dailyFetchMeta = null;
        if ($batchFrequency === NewsletterPreference::FREQUENCY_WEEKLY) {
            $categories = $this->fetchMarketingArticlesWeekly($dateOverride);
        } else {
            $dailyFetchMeta = $this->resolveDailyMarketingFetch($dateOverride);
            $categories = $dailyFetchMeta['categories'];
        }

        if ($categories === []) {
            return [
                'sent' => false,
                'message' => 'No article data available for any category. Email not sent.',
                'count' => 0,
                'skipped_already_sent_today' => 0,
                'batch_frequency' => $batchFrequency,
            ];
        }

        $digestMailListId = config('newsletter.digest.mail_list_id') ?: env('NEWSLETTER_DIGEST_MAIL_LIST_ID');
        $list = ($digestMailListId ? MailList::find($digestMailListId) : null) ?: MailList::first();
        if (!$list) {
            return [
                'sent' => false,
                'error' => 'No mail list configured. Set NEWSLETTER_DIGEST_MAIL_LIST_ID.',
                'count' => 0,
                'skipped_already_sent_today' => 0,
                'batch_frequency' => $batchFrequency,
            ];
        }

        $subscriberEmails = DB::table('subscribers')
            ->where('mail_list_id', $list->id)
            ->where('status', Subscriber::STATUS_SUBSCRIBED)
            ->pluck('email')
            ->all();

        if ($subscriberEmails === []) {
            return [
                'sent' => true,
                'count' => 0,
                'message' => 'No subscribers on the digest mail list.',
                'categories' => array_keys($categories),
                'eligible_preferences' => 0,
                'skipped_frequency' => 0,
                'skipped_already_sent_today' => 0,
                'batch_frequency' => $batchFrequency,
            ];
        }

        $preferences = NewsletterPreference::subscribed()
            ->whereIn('email', $subscriberEmails)
            ->where('frequency', $batchFrequency)
            ->get();

        $linkFilterDateDmY = $dateOverride !== null && trim((string) $dateOverride) !== ''
            ? trim((string) $dateOverride)
            : ($batchFrequency === NewsletterPreference::FREQUENCY_WEEKLY
                ? Carbon::now($tz)->subDay()->format('d-m-Y')
                : $dailyFetchMeta['api_date_dmY']);

        $loggedTodayLookup = $this->marketingLoggedTodayLookup($batchFrequency);
        $sent = 0;
        $skippedAlreadySentToday = 0;
        foreach ($preferences as $pref) {
            $emailKey = $this->normalizedMarketingMailEmail($pref->email);

            if (isset($loggedTodayLookup[$emailKey])) {
                $skippedAlreadySentToday++;

                continue;
            }

            $filtered = [];
            try {
                $sectors = $this->getSectorsForEmail($pref->email);
                $filtered = $this->filterCategoriesBySectors($categories, $sectors);
                if ($filtered === []) {
                    $this->logMarketingMailSend(
                        $pref->email,
                        [],
                        $linkFilterDateDmY,
                        $batchFrequency,
                        MarketingMailSendLog::STATUS_NOT_SENT,
                        MarketingMailSendLog::SOURCE_CRON,
                        'No articles after sector filter'
                    );

                    continue;
                }
                Mail::to($pref->email)->send(new MarketingEmailMail(
                    $filtered,
                    $pref->email,
                    $linkFilterDateDmY,
                    $this->sectorsForOutboundLinks($sectors),
                ));
                $this->logMarketingMailSend(
                    $pref->email,
                    $filtered,
                    $linkFilterDateDmY,
                    $batchFrequency,
                    MarketingMailSendLog::STATUS_SENT,
                    MarketingMailSendLog::SOURCE_CRON
                );
                $loggedTodayLookup[$emailKey] = true;
                $sent++;
            } catch (\Throwable $e) {
                $this->logMarketingMailSend(
                    $pref->email,
                    $filtered,
                    $linkFilterDateDmY,
                    $batchFrequency,
                    MarketingMailSendLog::STATUS_NOT_SENT,
                    MarketingMailSendLog::SOURCE_CRON,
                    substr($e->getMessage(), 0, 2000)
                );
            }
        }

        return [
            'sent' => true,
            'count' => $sent,
            'categories' => array_keys($categories),
            'eligible_preferences' => $preferences->count(),
            'skipped_frequency' => 0,
            'skipped_already_sent_today' => $skippedAlreadySentToday,
            'batch_frequency' => $batchFrequency,
        ];
    }

    /**
     * Normalize executeMarketingMail() outcome for cron JSON (single batch or nested keys in both mode).
     *
     * @return array<string, mixed>
     */
    protected function marketingMailCronBatchPayload(array $result, string $batchFrequency): array
    {
        if (!empty($result['error'])) {
            return [
                'sent' => false,
                'error' => $result['error'],
                'batch_frequency' => $result['batch_frequency'] ?? $batchFrequency,
            ];
        }

        if (!empty($result['message']) && empty($result['sent'])) {
            return [
                'sent' => false,
                'message' => $result['message'],
                'skipped_already_sent_today' => $result['skipped_already_sent_today'] ?? 0,
                'batch_frequency' => $result['batch_frequency'] ?? $batchFrequency,
            ];
        }

        $payload = [
            'sent' => true,
            'count' => $result['count'],
            'categories' => $result['categories'] ?? [],
            'eligible_preferences' => $result['eligible_preferences'] ?? 0,
            'skipped_frequency' => $result['skipped_frequency'] ?? 0,
            'skipped_already_sent_today' => $result['skipped_already_sent_today'] ?? 0,
            'batch_frequency' => $result['batch_frequency'] ?? $batchFrequency,
        ];
        if (!empty($result['message'])) {
            $payload['message'] = $result['message'];
        }

        return $payload;
    }

    /**
     * Cronjob endpoint: /digest/marketingmail
     * Query: frequency=both (default: daily batch + weekly). Weekly runs only when today is MARKETING_MAIL_WEEKLY_DAY (unless force=1).
     *        frequency=daily | weekly | both, optional date=DD-MM-YYYY, force=1 to bypass weekly log/schedule checks.
     */
    public function marketingMail(Request $request)
    {
        $expectedKey = config('newsletter.marketing.http_cron_key');
        if ($expectedKey !== null && $expectedKey !== '') {
            if (!hash_equals((string) $expectedKey, (string) $request->query('key', ''))) {
                return response()->json([
                    'sent' => false,
                    'error' => 'Invalid or missing key. Set MARKETING_MAIL_HTTP_CRON_KEY and pass ?key=...',
                ], 403);
            }
        }

        if (function_exists('set_time_limit')) {
            set_time_limit(0);
        }
        ignore_user_abort(true);

        $rawFrequency = strtolower(trim((string) $request->query('frequency', 'both')));
        $date = $request->query('date');
        $date = $date !== null ? (string) $date : null;
        $force = $request->boolean('force');

        if ($rawFrequency === 'both') {
            $dailyResult = $this->executeMarketingMail($date, NewsletterPreference::FREQUENCY_DAILY, false);
            $weeklyResult = $this->executeMarketingMail($date, NewsletterPreference::FREQUENCY_WEEKLY, $force);

            $hasError = !empty($dailyResult['error']) || !empty($weeklyResult['error']);
            $status = $hasError ? 500 : 200;

            return response()->json([
                'mode' => 'both',
                'daily' => $this->marketingMailCronBatchPayload($dailyResult, NewsletterPreference::FREQUENCY_DAILY),
                'weekly' => $this->marketingMailCronBatchPayload($weeklyResult, NewsletterPreference::FREQUENCY_WEEKLY),
            ], $status);
        }

        $frequency = $rawFrequency === NewsletterPreference::FREQUENCY_WEEKLY
            ? NewsletterPreference::FREQUENCY_WEEKLY
            : NewsletterPreference::FREQUENCY_DAILY;

        $result = $this->executeMarketingMail($date, $frequency, $force);

        if (!empty($result['error'])) {
            return response()->json([
                'sent' => false,
                'error' => $result['error'],
            ], 500);
        }

        return response()->json(
            $this->marketingMailCronBatchPayload($result, $frequency),
            200
        );
    }

    /**
     * Test form: /digest/marketingmailcheck
     */
    public function marketingMailCheckForm()
    {
        return view('digest.marketing_mail_check');
    }

    /**
     * Process test form - send marketing email to single address.
     */
    public function marketingMailCheckSubmit(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'frequency' => 'nullable|in:daily,weekly',
        ]);

        $frequency = $request->input('frequency', NewsletterPreference::FREQUENCY_DAILY);
        $frequency = $frequency === NewsletterPreference::FREQUENCY_WEEKLY
            ? NewsletterPreference::FREQUENCY_WEEKLY
            : NewsletterPreference::FREQUENCY_DAILY;

        $date = $request->input('date');
        $date = $date !== null && trim((string) $date) !== '' ? trim((string) $date) : null;

        $tz = config('app.timezone');

        if ($frequency === NewsletterPreference::FREQUENCY_WEEKLY) {
            $categories = $this->fetchMarketingArticlesWeekly($date);
            $linkFilterDateDmY = $date ?? Carbon::now($tz)->subDay()->format('d-m-Y');
        } else {
            $dailyFetched = $this->resolveDailyMarketingFetch($date);
            $categories = $dailyFetched['categories'];
            $linkFilterDateDmY = $date ?? $dailyFetched['api_date_dmY'];
        }

        if (empty($categories)) {
            return redirect()->route('digest.marketing_mail_check')
                ->with('error', 'No article data available for any category. Email not sent.');
        }

        $filtered = [];
        try {
            $sectors = $this->getSectorsForEmail($request->email);
            $filtered = $this->filterCategoriesBySectors($categories, $sectors);
            if (empty($filtered)) {
                $this->logMarketingMailSend(
                    $request->email,
                    [],
                    $linkFilterDateDmY,
                    $frequency,
                    MarketingMailSendLog::STATUS_NOT_SENT,
                    MarketingMailSendLog::SOURCE_TEST,
                    'No articles after sector filter'
                );

                return redirect()->route('digest.marketing_mail_check')
                    ->with('error', 'No articles match your sector preferences. Save preferences at Change preference first.');
            }
            Mail::to($request->email)->send(new MarketingEmailMail(
                $filtered,
                $request->email,
                $linkFilterDateDmY,
                $this->sectorsForOutboundLinks($sectors),
            ));
            $this->logMarketingMailSend(
                $request->email,
                $filtered,
                $linkFilterDateDmY,
                $frequency,
                MarketingMailSendLog::STATUS_SENT,
                MarketingMailSendLog::SOURCE_TEST
            );
            return redirect()->route('digest.marketing_mail_check')
                ->with('success', 'Test marketing email sent to ' . $request->email);
        } catch (\Throwable $e) {
            $this->logMarketingMailSend(
                $request->email,
                $filtered,
                $linkFilterDateDmY,
                $frequency,
                MarketingMailSendLog::STATUS_NOT_SENT,
                MarketingMailSendLog::SOURCE_TEST,
                substr($e->getMessage(), 0, 2000)
            );
            return redirect()->route('digest.marketing_mail_check')
                ->with('error', 'Failed to send: ' . $e->getMessage());
        }
    }

    /**
     * Preview grouped marketing categories for a scheduled send day (admin pipeline).
     *
     * @return array<string, array{label: string, articles: array}>
     */
    public function previewMarketingCategoriesForDate(string $batchFrequency, Carbon $scheduleDate): array
    {
        $tz = config('app.timezone');
        $scheduleDate = $scheduleDate->copy()->timezone($tz)->startOfDay();
        $batchFrequency = $batchFrequency === NewsletterPreference::FREQUENCY_WEEKLY
            ? NewsletterPreference::FREQUENCY_WEEKLY
            : NewsletterPreference::FREQUENCY_DAILY;

        if ($batchFrequency === NewsletterPreference::FREQUENCY_WEEKLY) {
            return $this->fetchMarketingArticlesWeekly($scheduleDate->format('d-m-Y'));
        }

        return $this->resolveDailyMarketingFetch(null, $scheduleDate)['categories'];
    }

    /**
     * @return array{categories: array, api_date_dmY: string}
     */
    public function resolveDailyMarketingMetaForSchedule(Carbon $scheduleDate): array
    {
        return $this->resolveDailyMarketingFetch(null, $scheduleDate);
    }

    /**
     * @param  array<string, array{label?: string, articles?: array}>  $categories
     * @return array<string, array{label: string, articles: array}>
     */
    public function filterMarketingCategoriesForEmail(string $email, array $categories): array
    {
        $sectors = $this->getSectorsForEmail($email);

        return $this->filterCategoriesBySectors($categories, $sectors);
    }
}
