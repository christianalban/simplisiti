<?php

namespace Alban\Simplisiti\Support\Plugin\Managers;

use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;

abstract class Manager {
    public function __construct(
        protected SimplisitiApp $app,
    ) {}
}
