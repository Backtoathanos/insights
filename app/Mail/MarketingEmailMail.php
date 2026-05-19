<?php

namespace Acelle\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class MarketingEmailMail extends Mailable
{
    use Queueable, SerializesModels;

    /** @var array [categoryKey => ['label' => string, 'articles' => array]] */
    public array $categories;

    public string $blogUrl;

    public string $recipientEmail;

    /**
     * Subscribed sectors used when an article has no API `industry` (excluding "All").
     *
     * @var array<int, string>
     */
    public array $linkSubscriberSectors;

    /** Fallback DD-MM-YYYY when an article has no publish date (cron / API anchor day). */
    public ?string $linkFilterDateDmY;

    public string $linkQuerySector;

    public string $linkQueryDate;

    /**
     * @param  array<int, string>  $linkSubscriberSectors
     */
    public function __construct(
        array $categories,
        string $recipientEmail = '',
        ?string $linkFilterDateDmY = null,
        array $linkSubscriberSectors = []
    ) {
        $this->categories = $categories;
        $this->blogUrl = rtrim(config('newsletter.marketing.blog_url', 'https://www.blackridgeresearch.com/'), '/');
        $this->recipientEmail = $recipientEmail;
        $this->linkFilterDateDmY = $linkFilterDateDmY;
        $this->linkSubscriberSectors = $linkSubscriberSectors;
        $this->linkQuerySector = (string) config('newsletter.marketing.link_query_sector', 'sector');
        $this->linkQueryDate = (string) config('newsletter.marketing.link_query_date', 'date');
    }

    public function build()
    {
        return $this->subject('Top stories for latest blogs - Blackridge Research')
            ->view('emails.marketing_email');
    }
}
