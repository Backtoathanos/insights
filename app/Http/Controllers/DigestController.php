<?php

namespace Acelle\Http\Controllers;

use Acelle\Model\NewsletterPreference;
use Acelle\Model\DigestContentItem;
use Illuminate\Http\Request;

class DigestController extends Controller
{
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
