<?php
namespace Alban\Simplisiti;

use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use Illuminate\Support;
use Illuminate\Support\Facades\Blade;

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
    }
}
