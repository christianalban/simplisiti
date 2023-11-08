<?php

use Alban\Simplisiti\Controllers\ComponentController;
use Alban\Simplisiti\Controllers\PageController;
use Alban\Simplisiti\Controllers\StyleController;
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

    Route::controller(StyleController::class)->group(function () {
        Route::post('style', 'store');
        Route::get('style', 'index');
        Route::get('style/{style}', 'show');
        Route::put('style/{style}', 'update');
        Route::delete('style/{style}', 'destroy');
    });
});

