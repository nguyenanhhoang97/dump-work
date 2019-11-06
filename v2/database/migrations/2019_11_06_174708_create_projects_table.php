<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('project_name');
            $table->text('project_description')->nullable();
            $table->string('team_size')->default(1);
            $table->string('git_url')->nullable();
            $table->double('execution_time', 8, 2);
            $table->double('cost', 8, 2)->default(0);
            $table->double('incom', 8, 2)->default(0);
            $table->double('guarantee', 8, 2)->default(0);
            $table->timestamps();
            $table->boolean('is_deleted')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects');
    }
}
