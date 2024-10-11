<?php

namespace Alban\Simplisiti\Support\Plugin\Managers;

use Alban\Simplisiti\Models\Script;
use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use Alban\Simplisiti\Support\Asset\AssetManager;
use Alban\Simplisiti\Support\Plugin\Managers\Lifecycle\OnBeforeInit;
use Alban\Simplisiti\Support\Plugin\Managers\Lifecycle\OnInit;
use Alban\Simplisiti\Support\Plugin\Plugin;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;

class ScriptManager extends Manager implements /* AssetManager, */ OnInit, OnBeforeInit {
    private Collection $scripts;
    // private array $pluginScripts;
    //
    // public function __construct(
    // ) {
    //     $this->scripts = $this->renderScript();
    //     $this->pluginScripts = [];
    // }

    public function onBeforeInit(): void
    {
        $this->setScripts($this->renderScript());
    }

    public function onInit(): void
    {
        $this->scripts->each(function (Script $script) {
            $this->app
                ->onBody()
                ->createAtEnd('script')
                ->addAttribute('type', 'text/javascript')
                ->addAttribute('src', asset(config('simplisiti.scripts_path') . '/' . $script->name . '.js'));
        });
    }

    protected function renderScript(): Collection
    {
        return Script::active()->get();
    }

    public function setScripts(Collection | array $scripts): void
    {
        if (is_array($scripts)) {
            $scripts = collect($scripts);
        }

        $this->scripts = $scripts;
    }

    // public function getScripts(): Collection
    // {
    //     return $this->scripts;
    // }
    //
    // public function addPluginScript(Plugin $plugin, string $name, string $script): void
    // {
    //     $pluginPath = explode('\\', $plugin::class);
    //     $pluginName = Str::of($pluginPath[1])->kebab()->value();
    //
    //     $this->pluginScripts[$pluginName][$name] = $script;
    // }
    //
    // public function getPluginScripts(): Collection
    // {
    //     return collect($this->pluginScripts);
    // }
    //
    // public function toString(): string
    // {
    //     $app = app(SimplisitiApp::class);
    //
    //     if (Cache::has('pluginScripts')) {
    //         $pluginScripts = Cache::get('pluginScripts');
    //     } else {
    //         $pluginScripts = $app->getScriptManager()->getPluginScripts();
    //         Cache::put('pluginScripts', $pluginScripts);
    //     }
    //
    //     return $pluginScripts->reduce(function ($carrier, $scripts) {
    //         foreach($scripts as $style) {
    //             $carrier .= $style;
    //         }
    //
    //         return $carrier;
    //     }, '');
    // }
}
