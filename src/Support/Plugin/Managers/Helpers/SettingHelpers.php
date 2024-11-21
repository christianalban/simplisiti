<?php

namespace Alban\Simplisiti\Support\Plugin\Managers\Helpers;

use Alban\Simplisiti\Support\Plugin\Managers\SettingManager;
use Alban\Simplisiti\Support\Plugin\Plugin;

trait SettingHelpers {
    public function settingEntry(string|Plugin $plugin, string $label, string $description = null): void
    {
        $this->app->onManager(SettingManager::class)->settingEntry($plugin, $label, $description);
    }

    public function addSetting(string|Plugin $plugin, string $name, string $type, string $label, string $description = null, bool $required = false, mixed $data = null): void
    {
        $this->app->onManager(SettingManager::class)->addSetting($plugin, $name, $type, $label, $description, $required, $data);
    }

    public function getSettingValue(string $plugin, string $settingName): string | array | null
    {
        return $this->app->onManager(SettingManager::class)->getSettingValue($plugin, $settingName);
    }

    public function setSettingValue(string $plugin, string $name, array $value): void
    {
        $this->app->onManager(SettingManager::class)->setSettingValue($plugin, $name, $value);
    }
}
