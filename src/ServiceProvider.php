<?php
namespace Alban\Simplisiti;

use Alban\Simplisiti\Events;
use Alban\Simplisiti\Listeners;
use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use Illuminate\Support;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Event;

class ServiceProvider extends Support\ServiceProvider
{
    public function boot()
    {
        $this->app->singleton(SimplisitiApp::class, function () {
            return new SimplisitiApp;
        });

        $this->loadRoutesFrom(__DIR__.'/routes/web.php');

        $this->loadRoutesFrom(__DIR__.'/routes/api.php');

        $this->loadViewsFrom(__DIR__.'/resources/views', 'simplisiti');

        $this->loadMigrationsFrom(__DIR__.'/database/migrations');

        $this->publishes([
            __DIR__.'/resources/js/dist' => public_path('vendor/simplisiti'),
        ], 'public');

        $this->publishes([
            __DIR__.'/config/simplisiti.php' => config_path('simplisiti.php'),
        ]);

        Blade::componentNamespace('Alban\\Simplisiti\\Components', 'simplisiti');

        $this->registerEvents();
    }

    private function registerEvents()
    {
        Event::listen(
            Events\PageCreated::class,
            Listeners\ClearCache::class,
        );

        Event::listen(
            Events\PageUpdated::class,
            Listeners\ClearCache::class,
        );
    }
}
