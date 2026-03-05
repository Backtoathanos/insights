<?php

namespace Acelle\Http\Controllers;

use Acelle\Model\NewsletterPreference;
use Acelle\Model\DigestSubscriber;
use Acelle\Model\Subscriber;
use Acelle\Model\MailList;
use Acelle\Model\DigestContentItem;
use Illuminate\Http\Request;

class DigestController extends Controller
{
    /**
     * Unsubscribe by email (primary flow) - shows confirmation page.
     * URL: /digest/unsubscribe/user@example.com
     */
    public function unsubscribeByEmail(string $email)
    {
        $email = trim($email);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return view('digest.not_found');
        }
        $subscriber = DigestSubscriber::findByEmail($email);
        if (!$subscriber) {
            return view('digest.not_found');
        }
        return view('digest.unsubscribe_email', ['email' => $email, 'subscriber' => $subscriber]);
    }

    /**
     * Process unsubscribe by email - removes from digest_subscribers and brsubscribers.
     */
    public function doUnsubscribeByEmail(Request $request, string $email)
    {
        $email = trim($email);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return redirect()->route('digest.unsubscribed');
        }
        $subscriber = DigestSubscriber::findByEmail($email);
        if ($subscriber) {
            $subscriber->delete();
        }
        // Also remove from brsubscribers when digest mail list is configured
        $digestMailListId = config('newsletter.digest.mail_list_id');
        if ($digestMailListId) {
            Subscriber::where('email', $email)->where('mail_list_id', $digestMailListId)->delete();
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

    public function preferences(string $token)
    {
        $pref = NewsletterPreference::findActiveByToken($token);
        if (!$pref) {
            return view('digest.not_found');
        }
        return view('digest.preferences', [
            'preference' => $pref,
            'sectors' => config('newsletter.sectors', []),
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
