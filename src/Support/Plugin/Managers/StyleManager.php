<?php

namespace Alban\Simplisiti\Support\Plugin\Managers;

use Alban\Simplisiti\Models\Style;
use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use Alban\Simplisiti\Support\Asset\AssetManager;
use Alban\Simplisiti\Support\Plugin\Managers\Lifecycle\OnBeforeInit;
use Alban\Simplisiti\Support\Plugin\Managers\Lifecycle\OnInit;
use Alban\Simplisiti\Support\Plugin\Plugin;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;

class StyleManager extends Manager implements /* AssetManager, */ OnInit, OnBeforeInit {
    private Collection $styles;
    // private array $pluginStyles;
    //
    // public function __construct(
    // ) {
    //     $this->pluginStyles = [];
    // }

    public function onBeforeInit(): void
    {
        $this->setStyles($this->renderStyle());
    }

    public function onInit(): void
    {
        $this->styles->each(function ($style) {
            $this->app
                ->onHead()
                ->createAtEnd('style')
                ->setContent($style->styles);
        });
    }

    protected function renderStyle(): Collection
    {
        return Style::active()->get();
    }

    // public function getStyles(): Collection
    // {
    //     return $this->styles;
    // }

    public function setStyles(Collection | array $styles): void
    {
        if (is_array($styles)) {
            $styles = collect($styles);
        }

        $this->styles = $styles;
    }

    // public function addPluginStyle(Plugin $plugin, string $name, string $style): void
    // {
    //     $pluginPath = explode('\\', $plugin::class);
    //     $pluginName = Str::of($pluginPath[1])->kebab()->value();
    //
    //     $this->pluginStyles[$pluginName][$name] = $style;
    // }
    //
    // public function getPluginStyles(): Collection
    // {
    //     return collect($this->pluginStyles);
    // }
    //
    // public function toString(): string
    // {
    //     $app = app(SimplisitiApp::class);
    //
    //     if (Cache::has('pluginStyles')) {
    //         $pluginStyles = Cache::get('pluginStyles');
    //     } else {
    //         $pluginStyles = $app->getStyleManager()->getPluginStyles();
    //         Cache::put('pluginStyles', $pluginStyles);
    //     }
    //
    //     return $pluginStyles->reduce(function ($carrier, $scripts) {
    //         foreach($scripts as $style) {
    //             $carrier .= $style;
    //         }
    //
    //         return $carrier;
    //     }, '');
    // }
}
