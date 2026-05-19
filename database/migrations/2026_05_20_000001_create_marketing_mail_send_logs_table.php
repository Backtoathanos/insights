<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMarketingMailSendLogsTable extends Migration
{
    /**
     * Log each marketing email attempt (batch cron or test form).
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('marketing_mail_send_logs')) {
            return;
        }

        Schema::create('marketing_mail_send_logs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('email', 255)->index();
            /** JSON array of numeric article IDs included in the mail */
            $table->longText('content_ids')->nullable();
            /** When the send was attempted (server time) */
            $table->timestamp('sent_at')->nullable()->index();
            /** Marketing API / link filter date (DD-MM-YYYY) */
            $table->string('content_date', 32)->nullable()->index();
            $table->string('batch_frequency', 16)->nullable()->index();
            /** cron | test */
            $table->string('batch_source', 16)->default('cron')->index();
            /** 1 = sent, 0 = not sent */
            $table->unsignedTinyInteger('status')->default(0)->index();
            $table->text('error_message')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('marketing_mail_send_logs');
    }
}
