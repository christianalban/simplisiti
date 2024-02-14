<?php

namespace Alban\Simplisiti\Actions\Page;

use Alban\Simplisiti\Models\Script;
use Alban\Simplisiti\Models\Style;
use MatthiasMullie\Minify;

class MinifyAction
{
    private string $type;

    public function forType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function execute(string $type = null): string
    {
        $minifier = match ($type ?? $this->type) {
            'style' => $this->minifyCss(),
            'script' => $this->minifyJs(),
        };

        return $minifier->minify();
    }

    private function minifyJs(): Minify\JS
    {
        $minifier = new Minify\JS();

        Script::all()->each(function ($style) use ($minifier) {
            $minifier->add($style->scripts);
        });

        return $minifier;
    }

    private function minifyCss(): Minify\CSS
    {
        $minifier = new Minify\CSS();

        Style::all()->each(function ($style) use ($minifier) {
            $minifier->add($style->styles);
        });

        return $minifier;
    }
}
