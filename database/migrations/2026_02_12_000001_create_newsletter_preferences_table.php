<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNewsletterPreferencesTable extends Migration
{
    public function up()
    {
        if (Schema::hasTable('newsletter_preferences')) {
            return;
        }

        Schema::create('newsletter_preferences', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('email')->index();
            $table->string('name')->nullable();
            $table->enum('frequency', ['daily', 'weekly'])->default('weekly');
            $table->json('sectors')->nullable(); // e.g. ["Energy", "Technology", "Healthcare"]
            $table->timestamp('unsubscribed_at')->nullable();
            $table->string('token', 64)->unique()->index();
            $table->string('subscriber_data_id')->nullable()->index(); // link to brsubscribers_data.id
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('newsletter_preferences');
    }
}
