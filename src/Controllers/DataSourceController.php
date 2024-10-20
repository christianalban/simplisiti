<?php

namespace Alban\Simplisiti\Controllers;

use Alban\Simplisiti\Http\Resources\DataSourceResource;
use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use Alban\Simplisiti\Support\Plugin\Managers\DataSourceManager;
use App\Http\Controllers\Controller;

class DataSourceController extends Controller {
    private DataSourceManager $dataSourceManager;

    public function __construct(
        private SimplisitiApp $app
    ) {
        $this->dataSourceManager = $this->app->onManager(DataSourceManager::class);
    }

    public function index() {
        $resources = $this->dataSourceManager->getDataSourceList();

        return DataSourceResource::collection($resources);
    }
}
