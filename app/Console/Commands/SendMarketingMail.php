<?php

namespace Acelle\Console\Commands;

use Acelle\Http\Controllers\DigestController;
use Acelle\Model\NewsletterPreference;
use Illuminate\Console\Command;

class SendMarketingMail extends Command
{
    protected $signature = 'marketing:send
                            {--frequency=daily : daily or weekly batch}
                            {--date= : Optional DD-MM-YYYY for the articles API (skips automatic daily/weekly date logic)}
                            {--force : Weekly batch only: send even if today is not MARKETING_MAIL_WEEKLY_DAY}';

    protected $description = 'Send marketing emails: daily batch (yesterday API date) or weekly batch (multi-day API lookup; runs only on MARKETING_MAIL_WEEKLY_DAY unless --force)';

    public function handle()
    {
        $freqOpt = strtolower(trim((string) $this->option('frequency')));
        $frequency = $freqOpt === NewsletterPreference::FREQUENCY_WEEKLY
            ? NewsletterPreference::FREQUENCY_WEEKLY
            : NewsletterPreference::FREQUENCY_DAILY;

        $date = $this->option('date');
        $date = $date !== null && $date !== '' ? (string) $date : null;

        $controller = app(DigestController::class);
        $result = $controller->executeMarketingMail($date, $frequency, $this->option('force'));

        if (!empty($result['error'])) {
            $this->error($result['error']);

            return 1;
        }

        if (!empty($result['message']) && empty($result['sent'])) {
            $this->warn($result['message']);

            return 0;
        }

        $this->info(sprintf(
            'Marketing mail [%s]: sent=%d, eligible preferences=%d',
            $result['batch_frequency'] ?? $frequency,
            $result['count'] ?? 0,
            $result['eligible_preferences'] ?? 0
        ));
        if (!empty($result['message'])) {
            $this->line($result['message']);
        }
        if (!empty($result['categories'])) {
            $this->line('Categories: ' . implode(', ', $result['categories']));
        }

        return 0;
    }
}
