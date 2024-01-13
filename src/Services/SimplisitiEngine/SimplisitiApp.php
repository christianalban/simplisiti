<?php
namespace Alban\Simplisiti\Services\SimplisitiEngine;

use Alban\Simplisiti\Models\Plugin;
use Alban\Simplisiti\Models\Script;
use Alban\Simplisiti\Models\Style;
use Alban\Simplisiti\Support\Plugin\PluginManager;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Schema;

class SimplisitiApp
{
    private Collection $styles;

    private Collection $scripts;

    private Collection $heads;

    public function __construct(
    )
    {
        $this->styles = new Collection;
        $this->scripts = new Collection;
        $this->heads = new Collection;
    }

    protected function setStyles(Collection $styles): void
    {
        $this->styles = $styles;
    }

    protected function setScripts(Collection $scripts): void
    {
        $this->scripts = $scripts;
    }

    public function getStyles(): Collection
    {
        return $this->styles;
    }

    public function getScripts(): Collection
    {
        return $this->scripts;
    }

    public function addHead(string $head): void
    {
        $this->heads->add($head);
    }

    public function getHeads(): Collection
    {
        return $this->heads;
    }

    public function init(): void {
        $this->setStyles($this->renderStyle());

        $this->setScripts($this->renderScript());
    }

    protected function loadPlugins(): void {
        if (!Schema::hasTable('plugins')) {
            return;
        }

        $pluginManager = new PluginManager($this);
        foreach (Plugin::all() as $plugin) {
            $pluginManager->add($plugin);
        }

        $pluginManager->execute();
    }

    protected function renderStyle(): Collection
    {
        return Style::active()->get();
    }

    protected function renderScript(): Collection
    {
        return Script::active()->get();
    }
}
