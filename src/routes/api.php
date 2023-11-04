<?php

use Alban\Simplisiti\Controllers\ComponentController;
use Illuminate\Support\Facades\Route;

Route::prefix('spanel')->middleware(['api'])->group(function () {
    Route::controller(ComponentController::class)->group(function () {
        Route::post('component', 'store');
    });
});

