<?php

namespace Alban\Simplisiti\Support\Plugin\Manipulate;

use Alban\Simplisiti\Support\Plugin\Managers\PluginManager;
use Alban\Simplisiti\Support\Plugin\Plugin;

abstract class Manipulate {
    public function __construct(
        protected PluginManager $pluginManager,
        protected Plugin $plugin
    ) {}
}
