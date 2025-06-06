<?php

namespace Alban\Simplisiti\Services\SimplisitiEngine\Loaders;

use Alban\Simplisiti\Models\Page;
use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use Alban\Simplisiti\Support\Content\ContentRender;
use Alban\Simplisiti\Support\Content\TitlePageRender;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\View;

class PagesLoader
{
    public function __construct(
        private SimplisitiApp $app
    ) {
        $this->app->loadStyles();

        $this->app->loadHeaders();

        $this->app->loadBody();

        $this->app->loadScripts(); 

        $this->app->loadSettings(); 

        $this->app->loadDataSources(); 

        $this->app->loadActions(); 

        $this->app->loadPlugins();

        $this->app->loadParameters();
    }
    
    public static function loadPages(): void
    {
        (new static(App::make(SimplisitiApp::class)))->loadPagesList();
    }

    protected function loadPagesList(): void
    {
        if (!Schema::hasTable('pages')) {
            return;
        }

        $this->app->init();

        if (Cache::has('pages')) {
            $pages = Cache::get('pages');
        } else {
            $pages = Page::withOrderedSectionsAndComponents()->get();
            Cache::put('pages', $pages);
        }

        $pages->each(function (Page $page) {
            Route::get($page->url, function (...$params) use ($page) {
                $this->app->setRequestParameters($page->url, $params);
                return View::make('simplisiti::boot', [
                    'content' => $this->renderContent($page),
                    'title' => $this->renderTitlePage($page),
                    'app' => $this->app,
                ]);
            })->middleware(['web'])->name($page->name);
        });

        $this->app->registerActions();
    }

    protected function renderContent(Page $page): string
    {
        $contentRender = new ContentRender();

        return $contentRender->renderPageContent($page);
    }

    protected function renderTitlePage(Page $page): string
    {
        $contentRender = new TitlePageRender();

        return $contentRender->renderPageTitle($page, $this->app->getParameterManager());
    }
}
