<?php

namespace Alban\Simplisiti\Controllers;

use Alban\Simplisiti\Http\Resources\DataSourceResource;
use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use App\Http\Controllers\Controller;

class DataSourceController extends Controller {
    public function __construct(
        private SimplisitiApp $app
    )
    {
        $this->app->loadSettings();

        $this->app->loadHeaders();

        $this->app->loadDataSources();

        $this->app->loadPlugins();

        $this->app->init();
    }
    public function index() {
        $resources = $this->app->getDataSourceManager()->getDataSourceList();

        return DataSourceResource::collection($resources);
    }
}
