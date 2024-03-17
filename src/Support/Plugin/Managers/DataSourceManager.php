<?php

namespace Alban\Simplisiti\Support\Plugin\Managers;

use Alban\Simplisiti\Support\Plugin\Containers\DataContainer;
use Alban\Simplisiti\Support\Plugin\Manipulate\ManipulateDataSource;
use Illuminate\Support\Str;

class DataSourceManager {
    private array $datasources = [];
    private string $selectedKey;

    public function getDataSourceList(): array
    {
        return array_keys($this->datasources);
    }

    public function addDataSource(ManipulateDataSource $manipulateDataSource, string $key, Callable $source): self
    {
        $namespaces = explode('\\', get_class($manipulateDataSource));
        $first = Str::of($namespaces[0])->kebab()->lower();
        $package = Str::of($namespaces[1])->kebab()->lower();
        $compoundKey = "$first.$package:$key";
        $this->selectedKey = $compoundKey;

        $this->datasources[$compoundKey] = new DataContainer($source);

        return $this;
    }

    public function setEntry(string $label, string $description): self
    {
        $this->datasources[$this->selectedKey]->getSettingManager()->settingEntry($this->selectedKey, $label, $description);

        return $this;
    }

    public function withSettings(array $settings = []): self
    {
        foreach ($settings as $setting) {
            $data = array_key_exists('data', $setting) ? $setting['data'] : null;
            $this->datasources[$this->selectedKey]->getSettingManager()->addSetting($this->selectedKey, $setting['name'], $setting['type'], $setting['label'], $setting['description'], $setting['required'], $data);
        }

        return $this;
    }

    public function getDataContainer(string $key): DataContainer | null
    {
        if (array_key_exists($key, $this->datasources)) {
            return $this->fetchDataSource($key);
        }

        return null;
    }

    private function fetchDataSource(string $key): DataContainer
    {
        return $this->datasources[$key];
    }
}
