<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->id();
            $table->string('email');
            $table->string('name');
            $table->string('address');
            $table->string('postal');
            $table->string('city');
            $table->timestamps();
        });
    }
};
