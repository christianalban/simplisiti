<?php

namespace Alban\Simplisiti\Support\Plugin\Managers\Helpers;

use Alban\Simplisiti\Support\Plugin\Managers\StyleManager;
use Illuminate\Support\Collection;

trait StyleHelpers {
    public function setStyles(Collection | array $styles): void
    {
        $this->app->onManager(StyleManager::class)->setStyles($styles);
    }

    public function addLink(string $href, bool $atEnd = false, bool $noClose = false): void
    {
        $this->app->onManager(StyleManager::class)->addLink($href, $atEnd, $noClose);
    }

    public function addStyles(string $styles, bool $atEnd = false, bool $noClose = false): void
    {
        $this->app->onManager(StyleManager::class)->addStyles($styles, $atEnd, $noClose);
    }

    public function addStylesAtEnd(string $styles, bool $noClose = false): void
    {
        $this->app->onManager(StyleManager::class)->addStylesAtEnd($styles, noClose: $noClose);
    }

    public function addLinkAtEnd(string $name, bool $noClose = false): void
    {
        $this->app->onManager(StyleManager::class)->addLinkAtEnd($name, noClose: $noClose);
    }
}
