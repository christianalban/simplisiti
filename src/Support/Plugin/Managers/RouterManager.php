<?php

namespace Alban\Simplisiti\Support\Plugin\Managers;

use Alban\Simplisiti\Models\Page;
use Alban\Simplisiti\Support\Action\RouteData;
use Alban\Simplisiti\Support\Content\ContentRender;
use Alban\Simplisiti\Support\Plugin\Managers\Lifecycle\OnBoot;
use Alban\Simplisiti\Support\Plugin\Managers\Lifecycle\OnInit;
use Closure;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\View;

class RouterManager extends Manager implements OnInit, OnBoot {
    private array $routes = [];

    public function onInit(): void
    {
        $this->registerPages();
    }

    public function onBoot(): void
    {
        $this->registerRoutes();
    }

    protected function registerPages(): void
    {
        if (!Schema::hasTable('pages')) {
            return;
        }

        // if (Cache::has('pages')) {
        //     $pages = Cache::get('pages');
        // } else {
            $pages = Page::withOrderedSectionsAndComponents()->get();
        //     Cache::put('pages', $pages);
        // }

        $pages->each(function (Page $page) {
            Route::get($page->url, function (...$params) use ($page) {
                $this->app->setRequestParameters($page->url, $params);
                return View::make('simplisiti::boot', [
                    'content' => $this->renderContent($page),
                    'title' => $page->title,
                    'app' => $this->app,
                ]);
            })->name($page->name);
        });
    }

    protected function registerRoutes(): void
    {
        foreach ($this->routes as $key => $route) {
            $method = $route->getMethod();
            $path = $route->getPath();
            Route::$method($path, function(Request $request, ...$params) use ($key, $callable) {
                $response = response()->noContent();

                $data = $route->execute($request, $params);
                if ($data) {

                    $response = $data;
                    // TODO: Handle errors response
                    // if ($response->getSession()->has('errors')) {
                    //     return $response;
                    // };
                }

                return $response;
            })->name($key);
        }
    }

    public function addRoute(string $method, string $path, Closure $action): self
    {
        $this->routes[] = new RouteData(
            $method,
            $path,
            $action,
            $this->app->onManager(ActionManager::class)
        );

        return $this;
    }

    protected function renderContent(Page $page): string
    {
        $contentRender = new ContentRender();

        return $contentRender->renderPageContent($page);
    }

    // private function extractParametersFromUrl(string $url): array
    // {
    //     $pattern = '/{[a-z]+}/';
    //
    //     preg_match_all($pattern, $url, $matches);
    //
    //     $parameters = array_map(function ($match) {
    //         return str_replace(['{', '}'], '', $match);
    //     }, $matches[0]);
    //
    //     return $parameters;
    // }
    //
    // public function addParameters(string $url, array $parameters): self
    // {
    //     $parameterNames = $this->extractParametersFromUrl($url);
    //
    //     foreach ($parameterNames as $index => $parameterName) {
    //         $this->addParameter($parameterName, $parameters[$index]);
    //     }
    //
    //     return $this;
    // }
    //
    // public function getParameter(string $key, mixed $default = null): mixed
    // {
    //     return $this->parameters[$key] ?? $default;
    // }
    //
    // public function getParameters(): array
    // {
    //     return $this->parameters;
    // }
}
