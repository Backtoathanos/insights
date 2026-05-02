<?php

namespace Acelle\Console\Commands;

use Acelle\Http\Controllers\DigestController;
use Illuminate\Console\Command;

class SendMarketingMail extends Command
{
    protected $signature = 'marketing:send {--date= : Optional DD-MM-YYYY for the articles API}';

    protected $description = 'Send marketing emails per newsletter_preferences.frequency (daily or weekly on MARKETING_MAIL_WEEKLY_DAY)';

    public function handle()
    {
        $date = $this->option('date');
        $date = $date !== null && $date !== '' ? (string) $date : null;

        $controller = app(DigestController::class);
        $result = $controller->executeMarketingMail($date);

        if (!empty($result['error'])) {
            $this->error($result['error']);

            return 1;
        }

        if (!empty($result['message']) && empty($result['sent'])) {
            $this->warn($result['message']);

            return 0;
        }

        $this->info(sprintf(
            'Marketing mail: sent=%d, eligible preferences=%d, skipped (frequency/day)=%d',
            $result['count'] ?? 0,
            $result['eligible_preferences'] ?? 0,
            $result['skipped_frequency'] ?? 0
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
