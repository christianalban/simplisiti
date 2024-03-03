<?php

namespace Alban\Simplisiti\Controllers;

use Alban\Simplisiti\Http\Resources\DataSourceResource;
use App\Http\Controllers\Controller;

class DataSourceController extends Controller {
    public function index() {
        $resources = [];

        return DataSourceResource::collection($resources);
    }
}
