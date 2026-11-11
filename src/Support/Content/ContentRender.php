<?php

namespace Alban\Simplisiti\Support\Content;

use Alban\Simplisiti\Models\Component;
use Alban\Simplisiti\Models\Page;
use Alban\Simplisiti\Models\Section;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\View;

class ContentRender
{
    public function renderPageContent(Page $page): string
    {
        return $page->sections->reduce(function ($buildedContent, $section) {
            return $buildedContent . $this->renderSectionContent($section);
        }, '');
    }

    public function renderSectionContent(Section $section): string
    {
        $content = $section->components->reduce(function ($buildedContent, $component) {
            return $buildedContent . $this->renderComponentContent($component);
        }, '');

        return View::make('simplisiti::section', [
            'classList' => implode(' ', $section->sp_class_list ?? []),
            'styleList' => collect($section->sp_style_list ?? [])
                ->map(fn ($value, $property) => "{$property}: {$value}")
                ->implode('; '),
            'content' => $content,
        ])->render() . PHP_EOL;
    }

    public function renderComponentContent(Component $component, ?array $override = null): string
    {
        $html = $component->html;
        $content = $override ?? $component->content;

        $container = View::make('simplisiti::container', [
            'className' => ComponentClassName::forName($component->name),
            'content' => Blade::render($html, $content),
        ]);

        return $container->render() . PHP_EOL;
    }
}
