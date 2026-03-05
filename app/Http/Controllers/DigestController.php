<?php

namespace Acelle\Http\Controllers;

use Acelle\Model\NewsletterPreference;
use Acelle\Model\DigestSubscriber;
use Acelle\Model\Subscriber;
use Acelle\Model\MailList;
use Acelle\Model\DigestContentItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
     */
    public function preferencesByEmail(string $email)
    {
        $email = trim($email);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return view('digest.not_found');
        }
        $pref = NewsletterPreference::findActiveByEmail($email);
        if (!$pref) {
            return view('digest.not_found');
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
        $pref = NewsletterPreference::findActiveByEmail($email);
        if (!$pref) {
            return redirect()->route('digest.not_found');
        }
        $pref->frequency = $request->input('frequency', 'weekly');
        $pref->sectors = $request->input('sectors', []);
        $pref->save();
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
}
