<?php

namespace Alban\Simplisiti\Controllers;

use Alban\Simplisiti\Http\Resources\DataSourceResource;

class DataSourceController extends SimplisitiAppController {

    public function index() {
        $resources = $this->app->getDataSourceManager()->getDataSourceList();

        return DataSourceResource::collection($resources);
    }
}
