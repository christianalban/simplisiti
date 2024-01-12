<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('scripts', function (Blueprint $table) {
            $table->unsignedTinyInteger('order')->after('id')->nullable();
        });

        Schema::table('styles', function (Blueprint $table) {
            $table->unsignedTinyInteger('order')->after('id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('scripts', function (Blueprint $table) {
            $table->dropColumn('order');
        });

        Schema::table('styles', function (Blueprint $table) {
            $table->dropColumn('order');
        });
    }
};
