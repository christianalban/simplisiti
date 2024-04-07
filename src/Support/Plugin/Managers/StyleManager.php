<?php

namespace Alban\Simplisiti\Support\Plugin\Managers;

use Alban\Simplisiti\Models\Style;
use Alban\Simplisiti\Support\Plugin\Plugin;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class StyleManager {
    private Collection $styles;
    private array $pluginStyles;

    public function __construct(
    ) {
        $this->styles = $this->renderStyle();
        $this->pluginStyles = [];
    }

    protected function renderStyle(): Collection
    {
        return Style::active()->get();
    }

    public function getStyles(): Collection
    {
        return $this->styles;
    }

    public function addPluginStyle(Plugin $plugin, string $name, string $style): void
    {
        $pluginPath = explode('\\', $plugin::class);
        $pluginName = Str::of($pluginPath[1])->kebab()->value();

        $this->pluginStyles[$pluginName][$name] = $style;
    }

    public function getPluginStyles(): Collection
    {
        return collect($this->pluginStyles);
    }
}
