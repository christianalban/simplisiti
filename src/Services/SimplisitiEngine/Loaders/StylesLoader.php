<?php

namespace Alban\Simplisiti\Services\SimplisitiEngine\Loaders;

use Alban\Simplisiti\Models\Style;
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

        $styles = Style::active()->get();

        $styles->each(function (Style $style) {
            $path = config('simplisiti.styles_path') . '/' . $style->name . '.css';
            Route::get($path, function () use ($style) {
                return response($style->styles, 200, [
                    'Content-Type' => 'text/css',
                ]);
            });
        });
    }
}
