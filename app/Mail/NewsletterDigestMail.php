<?php

namespace Acelle\Mail;

use Acelle\Model\NewsletterPreference;
use Acelle\Model\DigestContentItem;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Carbon\Carbon;

class NewsletterDigestMail extends Mailable
{
    use Queueable, SerializesModels;

    public NewsletterPreference $preference;
    public $items;
    public $showMoreUrl;
    public $hasMore;
    public $links;

    public function __construct(NewsletterPreference $preference, $date = null)
    {
        $this->preference = $preference;
        $date = $date ? Carbon::parse($date) : now();
        $sectors = $preference->sectors ?: config('newsletter.sectors', []);
        $limit = config('newsletter.digest.items_in_email', 5);

        $allItems = DigestContentItem::getForDigest($sectors, $date, $limit + 1);
        $this->items = $allItems->take($limit);
        $this->hasMore = $allItems->count() > $limit;

        $this->showMoreUrl = url('digest/show-more?' . http_build_query([
            'date' => $date->toDateString(),
            'sectors' => implode(',', $sectors),
            'token' => $preference->token,
        ]));

        $this->links = config('newsletter.links', []);
    }

    public function build()
    {
        return $this->subject('Your ' . ucfirst($this->preference->frequency) . ' Digest - Blackridge Research')
            ->view('emails.newsletter_digest');
    }
}
