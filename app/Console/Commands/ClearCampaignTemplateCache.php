<?php

namespace Acelle\Console\Commands;

use Acelle\Model\Campaign;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;

class ClearCampaignTemplateCache extends Command
{
    protected $signature = 'campaign:clear-template-cache {--uid= : Campaign UID to clear (optional, clears all if omitted)}';
    protected $description = 'Clear campaign template cache so digest footer buttons appear';

    public function handle()
    {
        $uid = $this->option('uid');
        if ($uid) {
            $campaign = Campaign::where('uid', $uid)->first();
            if (!$campaign) {
                $this->error("Campaign {$uid} not found.");
                return 1;
            }
            $campaign->clearTemplateCache();
            $this->info("Cleared cache for campaign: {$campaign->name}");
        } else {
            $campaigns = Campaign::all();
            foreach ($campaigns as $c) {
                $c->clearTemplateCache();
            }
            $this->info("Cleared template cache for {$campaigns->count()} campaigns.");
        }
        return 0;
    }
}
