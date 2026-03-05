<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDigestSubscribersTable extends Migration
{
    /**
     * Run the migrations.
     * Standalone digest subscribers - synced from webhook, used for unsubscribe.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('digest_subscribers')) {
            return;
        }

        Schema::create('digest_subscribers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('email')->unique();
            $table->string('name')->nullable();
            $table->string('ip', 64)->nullable();
            $table->string('subscription_type', 50)->nullable()->default('webhook');
            $table->string('verification_status', 50)->nullable();
            $table->timestamp('verified_at')->nullable();
            $table->timestamps();

            $table->index('email');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('digest_subscribers');
    }
}
