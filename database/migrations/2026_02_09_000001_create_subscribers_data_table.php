<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubscribersDataTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('subscribers_data')) {
            return;
        }

        Schema::create('subscribers_data', function (Blueprint $table) {
            $table->bigIncrements('id');

            // Metadata
            $table->string('source')->nullable()->index();
            $table->string('event')->nullable()->index();
            $table->timestamp('verified_at')->nullable()->index();

            // Enquiry payload
            $table->unsignedBigInteger('enquiry_id')->nullable()->index();
            $table->string('name')->nullable();
            $table->string('email')->nullable()->index();
            $table->string('phone')->nullable();
            $table->string('company')->nullable();
            $table->string('country', 10)->nullable();
            $table->string('interest')->nullable();
            $table->text('message')->nullable();
            $table->string('page')->nullable();
            $table->string('type')->nullable();
            $table->timestamp('created_date')->nullable();
            $table->string('state')->nullable();

            // Marketing params
            $table->string('gclid')->nullable();
            $table->string('utm_source')->nullable();
            $table->string('utm_medium')->nullable();
            $table->string('utm_campaign')->nullable();
            $table->string('utm_term')->nullable();
            $table->string('utm_content')->nullable();

            // Transport/debug info
            $table->string('ip_address', 64)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload')->nullable();

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
        Schema::dropIfExists('subscribers_data');
    }
}

