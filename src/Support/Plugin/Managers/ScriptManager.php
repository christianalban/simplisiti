<?php

namespace Alban\Simplisiti\Support\Plugin\Managers;

use Alban\Simplisiti\Models\Script;
use Alban\Simplisiti\Support\Plugin\Managers\Lifecycle\OnBeforeInit;
use Alban\Simplisiti\Support\Plugin\Managers\Lifecycle\OnInit;
use Illuminate\Support\Collection;

class ScriptManager extends Manager implements OnInit, OnBeforeInit {
    private Collection $scripts;

    public function onBeforeInit(): void
    {
        $this->setScripts($this->renderScript());
    }

    public function onInit(): void
    {
        $this->scripts->each(function (Script $script) {
            $this->addScriptAtEnd(
                asset(config('simplisiti.scripts_path') . '/' . $script->name . '.js')
            );
        });
    }

    protected function renderScript(): Collection
    {
        return Script::active()->get();
    }

    public function addScript(string $src, bool $atEnd = false, bool $noClose = false): void
    {
        $body = $this->app->onBody();

        $element = match ($atEnd) {
            true => $body->createAtEnd('script'),
            default => $body->createAtStart('script'),
        };

        if ($noClose) {
            $element->noClose();
        }

        $element->addAttribute('type', 'text/javascript')
            ->addAttribute('src', $src);
    }

    public function addScriptAtEnd(string $name, bool $noClose = false): void
    {
        $this->addScript($name, atEnd: true, noClose: $noClose);
    }

    protected function setScripts(Collection | array $scripts): void
    {
        if (is_array($scripts)) {
            $scripts = collect($scripts);
        }

        $this->scripts = $scripts;
    }

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
