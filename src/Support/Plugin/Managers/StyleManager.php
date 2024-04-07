<?php

namespace Alban\Simplisiti\Support\Plugin\Managers;

use Alban\Simplisiti\Models\Style;
use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use Alban\Simplisiti\Support\Asset\AssetManager;
use Alban\Simplisiti\Support\Plugin\Plugin;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;

class StyleManager implements AssetManager {
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

    public function toString(): string
    {
        $app = app(SimplisitiApp::class);

        if (Cache::has('pluginStyles')) {
            $pluginStyles = Cache::get('pluginStyles');
        } else {
            $pluginStyles = $app->getStyleManager()->getPluginStyles();
            Cache::put('pluginStyles', $pluginStyles);
        }

        return $pluginStyles->reduce(function ($carrier, $scripts) {
            foreach($scripts as $style) {
                $carrier .= $style;
            }

            return $carrier;
        }, '');
    }
}
