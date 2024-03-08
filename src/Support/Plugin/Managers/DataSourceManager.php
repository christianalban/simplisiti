<?php

namespace Alban\Simplisiti\Support\Plugin\Managers;

use Alban\Simplisiti\Support\Plugin\Manipulate\ManipulateDataSource;
use Illuminate\Support\Str;

class DataSourceManager {
    private array $datasources = [];

    public function getDataSourceList(): array
    {
        return array_keys($this->datasources);
    }

    public function addDataSource(ManipulateDataSource $manipulateDataSource, string $key, callable $source): void
    {
        $namespaces = explode('\\', get_class($manipulateDataSource));
        $first = Str::of($namespaces[0])->kebab()->lower();
        $package = Str::of($namespaces[1])->kebab()->lower();

        $this->datasources["$first.$package:$key"] = $source;
    }

    public function execute(string $key): mixed
    {
        if (array_key_exists($key, $this->datasources)) {
            return $this->fetchDataSource($key);
        }

        return null;
    }

    private function fetchDataSource(string $key): mixed
    {
        return $this->datasources[$key]();
    }
}
