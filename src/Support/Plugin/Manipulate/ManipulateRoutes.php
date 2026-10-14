<?php

namespace Alban\Simplisiti\Support\Plugin\Manipulate;

use Alban\Simplisiti\Support\Plugin\Managers\RouteManager;

interface ManipulateRoutes {
    public function withRoutes(RouteManager $routeManager): void;
}
