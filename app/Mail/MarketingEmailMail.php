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

    public function __construct(array $categories)
    {
        $this->categories = $categories;
        $this->blogUrl = config('newsletter.marketing.blog_url', 'https://www.blackridgeresearch.com/');
    }

    public function build()
    {
        return $this->subject('Top stories for latest blogs - Blackridge Research')
            ->view('emails.marketing_email');
    }
}
