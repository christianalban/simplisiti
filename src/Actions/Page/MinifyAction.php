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

        $minifier->add($this->getCkEditorCss());

        return $minifier;
    }

    private function getCkEditorCss(): string
    {
        $resetStyles = '
            .ck-content * {
                all: revert;
            }
            .ck-content .table table,
            .ck-content .table table td,
            .ck-content .table table th {
                border: none;
            }

            .ck-content .page-break {
                visibility: hidden;
            }
        ';

        $content = file_get_contents(public_path('vendor/simplisiti-css/ckeditor.css'));

        return $content . $resetStyles;
    }
}
