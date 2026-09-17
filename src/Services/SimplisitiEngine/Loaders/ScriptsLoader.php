<?php

namespace Alban\Simplisiti\Services\SimplisitiEngine\Loaders;

use Alban\Simplisiti\Models\Script;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Schema;

class ScriptsLoader
{
    public static function loadScripts(): void
    {
        (new static)->loadScriptsList();
    }

    protected function loadScriptsList(): void
    {
        if (!Schema::hasTable('scripts')) {
            return;
        }

        if (Cache::has('scripts')) {
            $scripts = Cache::get('scripts');
        } else {
            $scripts = Script::active()->get();
            Cache::put('scripts', $scripts);
        }

        $scripts->each(function (Script $script) {
            $path = config('simplisiti.scripts_path') . '/' . $script->name . '.js';
            Route::get($path, function () use ($script) {
                return response($script->scripts, 200, [
                    'Content-Type' => 'text/javascript',
                ]);
            });
        });
    }
}
