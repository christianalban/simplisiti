<?php

namespace Alban\Simplisiti\Support\Plugin;

use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;

abstract class Plugin {
    public function __construct(
        private SimplisitiApp $app
    ) {}
}
