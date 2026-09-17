<?php

namespace Alban\Simplisiti\Support\Plugin\Managers;

use Alban\Simplisiti\Models\Script;
use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use Alban\Simplisiti\Support\Asset\AssetManager;
use Alban\Simplisiti\Support\Plugin\Plugin;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;

class ScriptManager implements AssetManager {
    private Collection $scripts;
    private array $pluginScripts;

    public function __construct(
    ) {
        $this->scripts = $this->renderScript();
        $this->pluginScripts = [];
    }

    protected function renderScript(): Collection
    {
        return Script::active()->get();
    }

    public function getScripts(): Collection
    {
        return $this->scripts;
    }

    public function addPluginScript(Plugin $plugin, string $name, string $script): void
    {
        $pluginPath = explode('\\', $plugin::class);
        $pluginName = Str::of($pluginPath[1])->kebab()->value();

        $this->pluginScripts[$pluginName][$name] = $script;
    }

    public function getPluginScripts(): Collection
    {
        return collect($this->pluginScripts);
    }

    public function toString(): string
    {
        $app = app(SimplisitiApp::class);

        if (Cache::has('pluginScripts')) {
            $pluginScripts = Cache::get('pluginScripts');
        } else {
            $pluginScripts = $app->getScriptManager()->getPluginScripts();
            Cache::put('pluginScripts', $pluginScripts);
        }

        return $pluginScripts->reduce(function ($carrier, $scripts) {
            foreach($scripts as $style) {
                $carrier .= $style;
            }

            return $carrier;
        }, '');
    }

    public function registerPluginScripts(): void
    {
        $app = app(SimplisitiApp::class);

        if (Cache::has('pluginScripts')) {
            $pluginScripts = Cache::get('pluginScripts');
        } else {
            $pluginScripts = $app->getScriptManager()->getPluginScripts();
            Cache::put('pluginScripts', $pluginScripts);
        }

        $pluginScripts->each(function ($scripts, $plugin) {
            collect($scripts)->each(function ($script, $name) use ($plugin) {
                $path = config('simplisiti.scripts_path') . '/' . $plugin . '/' . $name . '.js';
                Route::get($path, function () use ($script) {
                    return response($script, 200, [
                        'Content-Type' => 'text/javascript',
                    ]);
                });
            });
        });
    }
}
