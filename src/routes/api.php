<?php

use Alban\Simplisiti\Controllers\ComponentController;
use Illuminate\Support\Facades\Route;

Route::prefix('api/spanel')->middleware(['api'])->group(function () {
    Route::controller(ComponentController::class)->group(function () {
        Route::get('component', 'index');
        Route::get('component/{component}', 'show');
        Route::post('component', 'store');
        Route::put('component/{component}', 'update');
    });
});

