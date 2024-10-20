<?php

namespace Alban\Simplisiti\Services\SimplisitiEngine\Loaders;

use Alban\Simplisiti\Models\Style;
use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Schema;

class StylesLoader
{
    public static function loadStyles(): void
    {
        (new static)->loadStylesList();
    }

    protected function loadStylesList(): void
    {
        if (!Schema::hasTable('styles')) {
            return;
        }

        if (Cache::has('styles')) {
            $styles = Cache::get('styles');
        } else {
            $styles = Style::active()->get();
            Cache::put('styles', $styles);
        }

        $styles->each(function (Style $style) {
            $path = config('simplisiti.styles_path') . '/' . $style->name . '.css';
            Route::get($path, function () use ($style) {
                return response($style->styles, 200, [
                    'Content-Type' => 'text/css',
                ]);
            });
        });

        $app = app(SimplisitiApp::class);

        if (Cache::has('pluginStyles')) {
            $pluginStyles = Cache::get('pluginStyles');
        } else {
            // $pluginStyles = $app->getStyleManager()->getPluginStyles();
            // Cache::put('pluginStyles', $pluginStyles);
        }

        // $pluginStyles->each(function ($styles, $plugin) {
        //     collect($styles)->each(function ($style, $name) use ($plugin) {
        //         $path = config('simplisiti.styles_path') . '/' . $plugin . '/' . $name . '.css';
        //         Route::get($path, function () use ($style) {
        //             return response($style, 200, [
        //                 'Content-Type' => 'text/css',
        //             ]);
        //         });
        //     });
        // });
    }
}
