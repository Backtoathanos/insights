<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class NormalizeAndUniqueNewsletterPreferencesEmail extends Migration
{
    /**
     * Dedupe newsletter_preferences by normalized email, then enforce unique email at DB level.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('newsletter_preferences')) {
            return;
        }

        DB::table('newsletter_preferences')
            ->orderBy('id')
            ->chunkById(250, function ($rows) {
                foreach ($rows as $row) {
                    $normalized = strtolower(trim((string) $row->email));
                    if ($normalized === '' || $normalized === $row->email) {
                        continue;
                    }
                    DB::table('newsletter_preferences')
                        ->where('id', $row->id)
                        ->update([
                            'email' => $normalized,
                            'updated_at' => now(),
                        ]);
                }
            });

        $dupGroups = DB::table('newsletter_preferences')
            ->select('email', DB::raw('MIN(id) as keep_id'))
            ->groupBy('email')
            ->havingRaw('COUNT(*) > 1')
            ->get();

        foreach ($dupGroups as $g) {
            DB::table('newsletter_preferences')
                ->where('email', $g->email)
                ->where('id', '!=', $g->keep_id)
                ->delete();
        }

        try {
            Schema::table('newsletter_preferences', function (Blueprint $table) {
                $table->dropIndex(['email']);
            });
        } catch (\Throwable $e) {
            // Index name may differ across DBs / already removed.
        }

        Schema::table('newsletter_preferences', function (Blueprint $table) {
            $table->unique('email');
        });
    }

    /**
     * @return void
     */
    public function down()
    {
        if (!Schema::hasTable('newsletter_preferences')) {
            return;
        }

        Schema::table('newsletter_preferences', function (Blueprint $table) {
            $table->dropUnique(['email']);
        });

        Schema::table('newsletter_preferences', function (Blueprint $table) {
            $table->index('email');
        });
    }
}
