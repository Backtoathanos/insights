<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDigestContentItemsTable extends Migration
{
    public function up()
    {
        if (Schema::hasTable('digest_content_items')) {
            return;
        }

        Schema::create('digest_content_items', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->enum('type', ['blog', 'news', 'project_tracker']);
            $table->string('sector')->nullable()->index(); // e.g. Energy, Technology
            $table->string('title');
            $table->string('url')->nullable();
            $table->text('excerpt')->nullable();
            $table->timestamp('published_at')->nullable()->index();
            $table->string('source')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('digest_content_items');
    }
}
