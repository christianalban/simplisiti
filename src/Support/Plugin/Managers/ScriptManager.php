<?php

namespace Alban\Simplisiti\Support\Plugin\Managers;

use Alban\Simplisiti\Models\Script;
use Alban\Simplisiti\Support\Plugin\Plugin;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class ScriptManager {
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
}
