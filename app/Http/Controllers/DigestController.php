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
        NewsletterPreference::where('email', $email)->get()->each(fn ($p) => $p->unsubscribe());
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
        $pref = NewsletterPreference::where('email', $email)->first();
        if (!$pref) {
            // Not in newsletter_preferences - check brsubscribers and create preference if found
            $inBrsubscribers = DB::table('subscribers')->where('email', $email)->exists();
            if (!$inBrsubscribers) {
                return view('digest.not_found');
            }
            $pref = NewsletterPreference::create([
                'email' => $email,
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
        $pref = NewsletterPreference::where('email', $email)->first();
        if (!$pref) {
            $inBrsubscribers = DB::table('subscribers')->where('email', $email)->exists();
            if (!$inBrsubscribers) {
                return redirect()->route('digest.not_found');
            }
            $pref = NewsletterPreference::create([
                'email' => $email,
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
     * Daily send: articles API uses **yesterday** relative to now (cron at 9am e.g. 20 May → date 19-05-YYYY).
     */
    protected function fetchMarketingArticlesDaily(?string $dateOverride = null): array
    {
        $dateStr = $dateOverride !== null && $dateOverride !== ''
            ? trim($dateOverride)
            : Carbon::now()->subDay()->format('d-m-Y');
        $raw = $this->fetchMarketingArticlesRawFromApi($dateStr);

        return $this->buildGroupedMarketingCategoriesFromApiPayload($raw);
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
        $pref = NewsletterPreference::where('email', $email)->first();
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
                'email' => $email,
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
     * Marketing mail batch: subscribed newsletter_preferences on the digest list.
     * Daily batch: API date = yesterday (unless date override); recipients with frequency=daily only.
     * Weekly batch: up to 5 API calls backward until all sections populated (or merged); recipients frequency=weekly only;
     * runs only on configured weekday unless forceWeeklyDay is true.
     *
     * @return array<string, mixed>
     */
    public function executeMarketingMail(?string $dateOverride = null, string $batchFrequency = 'daily', bool $forceWeeklyDay = false): array
    {
        $batchFrequency = $batchFrequency === NewsletterPreference::FREQUENCY_WEEKLY
            ? NewsletterPreference::FREQUENCY_WEEKLY
            : NewsletterPreference::FREQUENCY_DAILY;

        if ($batchFrequency === NewsletterPreference::FREQUENCY_WEEKLY && !$forceWeeklyDay) {
            $today = (int) Carbon::now()->format('w');
            if ($today !== NewsletterPreference::resolveMarketingWeeklySendDay()) {
                return [
                    'sent' => false,
                    'message' => 'Weekly marketing mail runs only on configured weekday (MARKETING_MAIL_WEEKLY_DAY). Use ?force=1 or --force to override.',
                    'count' => 0,
                    'batch_frequency' => $batchFrequency,
                ];
            }
        }

        $categories = $batchFrequency === NewsletterPreference::FREQUENCY_WEEKLY
            ? $this->fetchMarketingArticlesWeekly($dateOverride)
            : $this->fetchMarketingArticlesDaily($dateOverride);

        if ($categories === []) {
            return [
                'sent' => false,
                'message' => 'No article data available for any category. Email not sent.',
                'count' => 0,
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
                'batch_frequency' => $batchFrequency,
            ];
        }

        $preferences = NewsletterPreference::subscribed()
            ->whereIn('email', $subscriberEmails)
            ->where('frequency', $batchFrequency)
            ->get();

        $linkFilterDateDmY = $dateOverride !== null && trim((string) $dateOverride) !== ''
            ? trim((string) $dateOverride)
            : Carbon::now()->subDay()->format('d-m-Y');

        $sent = 0;
        foreach ($preferences as $pref) {
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
            'batch_frequency' => $batchFrequency,
        ];
    }

    /**
     * Cronjob endpoint: /digest/marketingmail
     * Query: frequency=daily (default) | weekly, optional date=DD-MM-YYYY, force=1 to bypass weekday check for weekly.
     */
    public function marketingMail(Request $request)
    {
        $frequency = $request->query('frequency', NewsletterPreference::FREQUENCY_DAILY);
        $frequency = $frequency === NewsletterPreference::FREQUENCY_WEEKLY
            ? NewsletterPreference::FREQUENCY_WEEKLY
            : NewsletterPreference::FREQUENCY_DAILY;
        $date = $request->query('date');
        $date = $date !== null ? (string) $date : null;
        $force = $request->boolean('force');

        $result = $this->executeMarketingMail($date, $frequency, $force);

        if (!empty($result['error'])) {
            return response()->json([
                'sent' => false,
                'error' => $result['error'],
            ], 500);
        }

        if (!empty($result['message']) && empty($result['sent'])) {
            return response()->json([
                'sent' => false,
                'message' => $result['message'],
                'batch_frequency' => $result['batch_frequency'] ?? $frequency,
            ], 200);
        }

        $payload = [
            'sent' => true,
            'count' => $result['count'],
            'categories' => $result['categories'] ?? [],
            'eligible_preferences' => $result['eligible_preferences'] ?? 0,
            'skipped_frequency' => $result['skipped_frequency'] ?? 0,
            'batch_frequency' => $result['batch_frequency'] ?? $frequency,
        ];
        if (!empty($result['message'])) {
            $payload['message'] = $result['message'];
        }

        return response()->json($payload, 200);
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

        $categories = $frequency === NewsletterPreference::FREQUENCY_WEEKLY
            ? $this->fetchMarketingArticlesWeekly($date)
            : $this->fetchMarketingArticlesDaily($date);

        if (empty($categories)) {
            return redirect()->route('digest.marketing_mail_check')
                ->with('error', 'No article data available for any category. Email not sent.');
        }

        $linkFilterDateDmY = $date ?? Carbon::now()->subDay()->format('d-m-Y');
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
}
