<?php

namespace Alban\Simplisiti\Support\Plugin\Managers;

use Alban\Simplisiti\Support\Plugin\Plugin;
use Closure;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;

class RouteManager {
    private array $pluginRoutes;

    public function __construct(
    ) {
        $this->pluginRoutes = [];
    }

    protected function renderRoutes(): void
    {
        foreach($this->pluginRoutes as $plugin => $routes) {
            foreach($routes as $route) {
                Route::{$route['method']}('/api/spanel/'.$plugin.$this->sanitizePath($route['path']), $route['callback'])->name($route['name']);
            }
        }
    }

    private function sanitizePath(string $path): string
    {
        return '/' . ltrim($path, '/');
    }

    public function addRoute(Plugin $plugin, string $method, string $path, string $name, Closure $callback): void
    {
        $pluginPath = explode('\\', $plugin::class);
        $pluginName = Str::of($pluginPath[1])->kebab()->value();

        $this->pluginRoutes[$pluginName][$name] = [
            'method' => $method,
            'path' => $path,
            'name' => $name,
            'callback' => $callback,
        ];
    }

    public function getPluginRoutes(): Collection
    {
        return collect($this->pluginRoutes);
    }

    public function registerPluginRoutes(): void
    {
        $this->renderRoutes();
    }
}
