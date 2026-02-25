<?php

namespace Acelle\Console\Commands;

use Acelle\Model\NewsletterPreference;
use Acelle\Mail\NewsletterDigestMail;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class SendNewsletterDigest extends Command
{
    protected $signature = 'newsletter:send-digest {--frequency=daily} {--dry-run}';
    protected $description = 'Send daily or weekly newsletter digest to subscribed users';

    public function handle()
    {
        $frequency = $this->option('frequency');
        $dryRun = $this->option('dry-run');

        if (!in_array($frequency, ['daily', 'weekly'])) {
            $this->error('Frequency must be daily or weekly');
            return 1;
        }

        $dayOfWeek = $frequency === 'weekly' ? 2 : null; // 2 = Monday
        $preferences = NewsletterPreference::subscribed()
            ->dueForDigest($frequency, $dayOfWeek)
            ->get();

        $this->info("Found {$preferences->count()} subscribers for {$frequency} digest.");

        foreach ($preferences as $pref) {
            if ($dryRun) {
                $this->line("  [DRY-RUN] Would send to: {$pref->email}");
                continue;
            }
            try {
                Mail::to($pref->email)->send(new NewsletterDigestMail($pref));
                $this->line("  Sent to: {$pref->email}");
            } catch (\Throwable $e) {
                $this->error("  Failed {$pref->email}: " . $e->getMessage());
            }
        }

        return 0;
    }
}
