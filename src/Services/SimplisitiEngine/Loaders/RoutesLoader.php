<?php

namespace Alban\Simplisiti\Services\SimplisitiEngine\Loaders;

use Alban\Simplisiti\Models\Page;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\View;

class RoutesLoader
{
    public static function loadPagesList(): void
    {
        if (!Schema::hasTable('pages')) {
            return;
        }

        $pages = Page::withOrderedSectionsAndComponents()->get();

        $pages->each(function (Page $page) {
            Route::get($page->url, function () use ($page) {
                $content = $page->sections->reduce(function ($buildedContent, $section) {
                    $section->components->each(function ($component) use (&$buildedContent) {
                        $html = $component->html;
                        $content = $component->content;

                        $container = View::make('simplisiti::container', [
                            'name' => $component->name,
                            'content' => Blade::render($html, $content),
                        ]);

                        $buildedContent .= $container->render() . PHP_EOL;
                    });

                    return $buildedContent;
                }, '');

                return View::make('simplisiti::boot', [
                    'content' => $content,
                    'title' => $page->title,
                ]);
            });
        });
    }
}
