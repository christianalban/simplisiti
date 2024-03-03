<?php

namespace Alban\Simplisiti\Support\Plugin\Managers;

class DataSourceManager {
    private array $datasources;

    public function __construct(
    ) {
        $this->datasources = [];
    }

    public function addDataSource(string $key, callable $source): void
    {
        return $this->datasources[$key] = $source();
    }
}
