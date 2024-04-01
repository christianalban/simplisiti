<?php

namespace Alban\Simplisiti\Actions\Page;

use Alban\Simplisiti\Models\Script;
use Alban\Simplisiti\Models\Style;
use MatthiasMullie\Minify;

class MinifyAction implements PreviewAction
{
    private string $type;

    public function __construct(string $type)
    {
        $this->type = $type;

        return $this;
    }

    public function execute(): string
    {
        $minifier = match ($this->type) {
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
