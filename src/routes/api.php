<?php

use Alban\Simplisiti\Controllers\ComponentController;
use Alban\Simplisiti\Controllers\PageController;
use Alban\Simplisiti\Controllers\ResourceController;
use Alban\Simplisiti\Controllers\ScriptController;
use Alban\Simplisiti\Controllers\StyleController;
use Illuminate\Support\Facades\Route;

// For Develop remove the `auth:sanctum` middleware
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

    Route::controller(ScriptController::class)->group(function () {
        Route::post('script', 'store');
        Route::get('script', 'index');
        Route::put('script/order', 'order');
        Route::get('script/{script}', 'show');
        Route::put('script/{script}', 'update');
        Route::delete('script/{script}', 'destroy');
    });

    Route::controller(ResourceController::class)->group(function () {
        Route::post('resource', 'store');
        Route::get('resource', 'index');
        Route::get('resource/{resource}', 'show');
        Route::put('resource/{resource}', 'update');
        Route::delete('resource/{resource}', 'destroy');
    });
});

