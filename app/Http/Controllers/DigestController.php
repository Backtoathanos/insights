<?php

namespace Acelle\Http\Controllers;

use Acelle\Model\NewsletterPreference;
use Acelle\Model\DigestSubscriber;
use Acelle\Model\Subscriber;
use Acelle\Model\MailList;
use Acelle\Model\DigestContentItem;
use Acelle\Mail\MarketingEmailMail;
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
                'frequency' => NewsletterPreference::FREQUENCY_WEEKLY,
                'sectors' => config('newsletter.sectors', []),
                'token' => NewsletterPreference::generateToken(),
            ]);
        }
        return view('digest.preferences', [
            'preference' => $pref,
            'sectors' => config('newsletter.sectors', []),
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
                'frequency' => $request->input('frequency', 'weekly'),
                'sectors' => $request->input('sectors', []),
                'token' => NewsletterPreference::generateToken(),
            ]);
        } else {
            $pref->frequency = $request->input('frequency', 'weekly');
            $pref->sectors = $request->input('sectors', []);
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
            'useEmailUrl' => false,
        ]);
    }

    public function savePreferences(Request $request, string $token)
    {
        $pref = NewsletterPreference::findActiveByToken($token);
        if (!$pref) {
            return redirect()->route('digest.not_found');
        }
        $pref->frequency = $request->input('frequency', 'weekly');
        $pref->sectors = $request->input('sectors', []);
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
     * Fetch marketing articles from external API.
     * Returns array of [categoryKey => [articles...]] - only categories with data.
     */
    protected function fetchMarketingArticles(?string $date = null): array
    {
        $date = $date ?: now()->format('d-m-Y');
        $apiUrl = config('newsletter.marketing.api_url');
        $token = config('newsletter.marketing.api_token');
        $url = $apiUrl . '?token=' . urlencode($token) . '&date=' . urlencode($date);

        $response = Http::timeout(30)->get($url);
        if (!$response->successful()) {
            return [];
        }

        $data = $response->json();
        if (!is_array($data)) {
            return [];
        }

        $categories = config('newsletter.marketing.categories', []);
        $all = [];
        foreach ($categories as $key => $label) {
            $items = $data[$key] ?? [];
            if (is_array($items) && !empty($items)) {
                foreach ($items as $item) {
                    $item['_category_key'] = $key;
                    $item['_category_label'] = $label;
                    $all[] = $item;
                }
            }
        }
        $all = array_slice($all, 0, 10);
        if (empty($all)) {
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
     * Cronjob endpoint: /digest/marketingmail
     * Fetches articles from API, sends marketing email to all brsubscribers.
     * If no categories have data, no email is sent.
     */
    public function marketingMail(Request $request)
    {
        $date = $request->query('date'); // optional: DD-MM-YYYY
        $categories = $this->fetchMarketingArticles($date);

        if (empty($categories)) {
            return response()->json([
                'sent' => false,
                'message' => 'No article data available for any category. Email not sent.',
            ], 200);
        }

        $digestMailListId = config('newsletter.digest.mail_list_id') ?: env('NEWSLETTER_DIGEST_MAIL_LIST_ID');
        $list = ($digestMailListId ? MailList::find($digestMailListId) : null) ?: MailList::first();
        if (!$list) {
            return response()->json([
                'sent' => false,
                'error' => 'No mail list configured. Set NEWSLETTER_DIGEST_MAIL_LIST_ID.',
            ], 500);
        }

        $subscribers = DB::table('subscribers')
            ->where('mail_list_id', $list->id)
            ->where('status', Subscriber::STATUS_SUBSCRIBED)
            ->pluck('email');

        $sent = 0;
        foreach ($subscribers as $email) {
            try {
                Mail::to($email)->send(new MarketingEmailMail($categories, $email));
                $sent++;
            } catch (\Throwable $e) {
                // Log but continue
            }
        }

        return response()->json([
            'sent' => true,
            'count' => $sent,
            'categories' => array_keys($categories),
        ], 200);
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
        $request->validate(['email' => 'required|email']);

        $date = $request->input('date'); // optional
        $categories = $this->fetchMarketingArticles($date);

        if (empty($categories)) {
            return redirect()->route('digest.marketing_mail_check')
                ->with('error', 'No article data available for any category. Email not sent.');
        }

        try {
            Mail::to($request->email)->send(new MarketingEmailMail($categories, $request->email));
            return redirect()->route('digest.marketing_mail_check')
                ->with('success', 'Test marketing email sent to ' . $request->email);
        } catch (\Throwable $e) {
            return redirect()->route('digest.marketing_mail_check')
                ->with('error', 'Failed to send: ' . $e->getMessage());
        }
    }
}
