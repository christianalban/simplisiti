<?php

namespace Alban\Simplisiti\Services\SimplisitiEngine\Loaders;

use Alban\Simplisiti\Models\Page;
use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\View;

class PagesLoader
{
    private SimplisitiApp $app;

    public function __construct() {
        $this->app = new SimplisitiApp;

        $this->app->init();
    }
    
    public static function loadPages(): void
    {
        (new static)->loadPagesList();
    }

    protected function loadPagesList(): void
    {
        if (!Schema::hasTable('pages')) {
            return;
        }

        $pages = Page::withOrderedSectionsAndComponents()->get();

        $pages->each(function (Page $page) {
            Route::get($page->url, function () use ($page) {
                return View::make('simplisiti::boot', [
                    'content' => $this->renderContent($page),
                    'title' => $page->title,
                    'app' => $this->app,
                ]);
            });
        });
    }

    protected function renderContent(Page $page): string
    {
        return $page->sections->reduce(function ($buildedContent, $section) {
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
    }
}
