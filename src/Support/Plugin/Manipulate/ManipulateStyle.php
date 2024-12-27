<?php

namespace Alban\Simplisiti\Support\Plugin\Manipulate;

use Illuminate\Support\Collection;

abstract class ManipulateStyle extends Manipulate {
    public abstract function withStyles(): void;

    public function setStyles(Collection | array $styles): void
    {
        $this->pluginManager->setStyles($styles);
    }

    public function addLink(string $href, bool $atEnd = false, bool $noClose = false): void
    {
        $this->pluginManager->addLink($href, $atEnd, $noClose);
    }

    public function addStyles(string $styles, bool $atEnd = false, bool $noClose = false): void
    {
        $this->pluginManager->addStyles($styles, $atEnd, $noClose);
    }

    public function addStylesAtEnd(string $styles, bool $noClose = false): void
    {
        $this->pluginManager->addStylesAtEnd($styles, noClose: $noClose);
    }

    public function addLinkAtEnd(string $name, bool $noClose = false): void
    {
        $this->pluginManager->addLinkAtEnd($name, noClose: $noClose);
    }
}
