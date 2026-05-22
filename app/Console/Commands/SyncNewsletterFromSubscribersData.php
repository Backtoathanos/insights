<?php

namespace Acelle\Console\Commands;

use Acelle\Library\NewsletterSectorNormalizer;
use Acelle\Model\SubscriberData;
use Acelle\Model\NewsletterPreference;
use Illuminate\Console\Command;

class SyncNewsletterFromSubscribersData extends Command
{
    protected $signature = 'newsletter:sync-from-subscribers-data';
    protected $description = 'Create newsletter preferences for verified subscribers_data that do not have one';

    public function handle()
    {
        $emails = SubscriberData::whereNotNull('email')
            ->where('event', 'email_verified')
            ->pluck('email')
            ->unique()
            ->filter();

        $created = 0;
        foreach ($emails as $email) {
            if (NewsletterPreference::forEmail($email)->exists()) {
                continue;
            }
            $row = SubscriberData::where('email', $email)->where('event', 'email_verified')->first();
            $sectors = NewsletterSectorNormalizer::normalizeFromCommaSeparated(
                $row->interest ? (string) $row->interest : null
            );
            if ($sectors === []) {
                $sectors = config('newsletter.sectors');
            }
            $pref = NewsletterPreference::findOrCreateForEmail($email, [
                'name' => $row->name ?? null,
                'frequency' => NewsletterPreference::FREQUENCY_WEEKLY,
                'sectors' => $sectors,
                'token' => NewsletterPreference::generateToken(),
                'subscriber_data_id' => (string) $row->id,
            ]);
            if ($pref->wasRecentlyCreated) {
                $created++;
            }
        }

        $this->info("Created {$created} new newsletter preferences.");
        return 0;
    }
}
