<?php

namespace Alban\Simplisiti\Support\Plugin\Managers;

abstract class Manager {
    public function execute(string $method, ...$args)
    {
        return $this->$method(...$args);
    }
}
