<?php

namespace Alban\Simplisiti\Support\Plugin\Managers;

use Alban\Simplisiti\Models\Style;
use Alban\Simplisiti\Support\Plugin\Managers\Cast\AssetCast;
use Alban\Simplisiti\Support\Plugin\Managers\Lifecycle\OnBeforeInit;
use Alban\Simplisiti\Support\Plugin\Managers\Lifecycle\OnInit;
use Illuminate\Support\Collection;

class StyleManager extends Manager implements OnInit, OnBeforeInit, AssetCast {
    private Collection $styles;

    public function asString(): string
    {
        return $this->styles->reduce(function ($carrier, Style $style) {
            return $carrier . $style->content;
        }, '');
    }

    public function onBeforeInit(): void
    {
        $this->setStyles($this->renderStyle());
    }

    public function onInit(): void
    {
        $this->styles->each(function (Style $style) {
            $this->addLinkAtEnd(
                asset(config('simplisiti.styles_path') . '/' . $style->name . '.css'),
                noClose: true
            );
        });
    }

    public function addLink(string $href, bool $atEnd = false, bool $noClose = false): void
    {
        $head = $this->app->onHead();

        $element = match ($atEnd) {
            true => $head->createAtEnd('link'),
            default => $head->createAtStart('link'),
        };

        if ($noClose) {
            $element->noClose();
        }

        $element->addAttribute('type', 'text/css')
            ->addAttribute('rel', 'stylesheet')
            ->addAttribute('href', $href);
    }

    public function addStyles(string $styles, bool $atEnd = false, bool $noClose = false): void
    {
        $head = $this->app->onHead();

        $element = match ($atEnd) {
            true => $head->createAtEnd('style'),
            default => $head->createAtStart('style'),
        };

        if ($noClose) {
            $element->noClose();
        }

        $element->setContent($styles);
    }

    public function addStylesAtEnd(string $styles, bool $noClose = false): void
    {
        $this->addStyles($styles, atEnd: true, noClose: $noClose);
    }

    public function addLinkAtEnd(string $name, bool $noClose = false): void
    {
        $this->addLink($name, atEnd: true, noClose: $noClose);
    }

    protected function renderStyle(): Collection
    {
        return Style::active()->get();
    }

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
