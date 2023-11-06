<?php

use Alban\Simplisiti\Controllers\ComponentController;
use Alban\Simplisiti\Controllers\PageController;
use Illuminate\Support\Facades\Route;

Route::prefix('api/spanel')->middleware(['api'])->group(function () {
    Route::controller(ComponentController::class)->group(function () {
        Route::get('component', 'index');
        Route::get('component/{component}', 'show');
        Route::post('component', 'store');
        Route::put('component/{component}', 'update');
        Route::delete('component/{component}', 'destroy');
    });

    Route::controller(PageController::class)->group(function () {
        Route::get('page', 'index');
        Route::get('page/{page}', 'show');
        Route::post('page', 'store');
        Route::put('page/{page}', 'update');
        Route::delete('page/{page}', 'destroy');
    });
});

