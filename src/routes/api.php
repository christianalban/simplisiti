<?php

use Alban\Simplisiti\Controllers;
use Illuminate\Support\Facades\Route;

// For Develop remove the `auth:sanctum` middleware
Route::prefix('api/spanel')->middleware(['auth:sanctum', 'api'])->group(function () {
    Route::controller(Controllers\ComponentController::class)->group(function () {
        Route::get('component', 'index');
        Route::get('component/{component}', 'show');
        Route::post('component', 'store');
        Route::put('component/{component}', 'update');
        Route::delete('component/{component}', 'destroy');
        Route::get('component/{component}/variable/{name}/{type}/settings', 'variableSettings');
    });

    Route::controller(Controllers\PageController::class)->group(function () {
        Route::get('page', 'index');
        Route::get('page/{page}', 'show');
        Route::post('page', 'store');
        Route::put('page/{page}', 'update');
        Route::delete('page/{page}', 'destroy');
        Route::group(['excluded_middleware' => 'throttle:api'], function () {
            Route::get('page/{type}/preview', 'preview')->where('type', 'style|script');
        });
    });

    Route::controller(Controllers\StyleController::class)->group(function () {
        Route::post('style', 'store');
        Route::get('style', 'index');
        Route::put('style/order', 'order');
        Route::get('style/{style}', 'show');
        Route::put('style/{style}', 'update');
        Route::delete('style/{style}', 'destroy');
    });

    Route::controller(Controllers\ScriptController::class)->group(function () {
        Route::post('script', 'store');
        Route::get('script', 'index');
        Route::put('script/order', 'order');
        Route::get('script/{script}', 'show');
        Route::put('script/{script}', 'update');
        Route::delete('script/{script}', 'destroy');
    });

    Route::controller(Controllers\ResourceController::class)->group(function () {
        Route::post('resource', 'store');
        Route::get('resource', 'index');
        Route::get('resource/{resource}', 'show');
        Route::put('resource/{resource}', 'update');
        Route::delete('resource/{resource}', 'destroy');
    });

    Route::controller(Controllers\DataSourceController::class)->group(function () {
        Route::get('source', 'index');
    });

    Route::controller(Controllers\ActionController::class)->group(function () {
        Route::get('action', 'index');
    });

    Route::controller(Controllers\SettingController::class)->group(function () {
        Route::get('setting', 'index');
        Route::put('setting', 'update');
    });

    Route::controller(Controllers\PluginController::class)->group(function () {
        Route::get('plugin/repositories', 'repositoriesList');
        Route::put('plugin/repositories', 'repositoriesUpdate');
        Route::post('plugin/repositories/sync', 'repositoriesSync');
        Route::get('plugin/packages', 'packagesList');
        Route::post('plugin/packages/install', 'packagesInstall');
        Route::post('plugin/packages/uninstall', 'packagesUninstall');
    });

    Route::controller(Controllers\CacheController::class)->group(function () {
        Route::delete('cache/clear-all', 'clearAll');
    });
});

