<?php

namespace Alban\Simplisiti\Support\Plugin\Manipulate;

use Alban\Simplisiti\Support\Plugin\Managers\PluginManager;
use Alban\Simplisiti\Support\Plugin\Plugin;

abstract class ManipulateSetting {
    public function __construct(
        private PluginManager $pluginManager,
        private Plugin $plugin
    ) {}

    public abstract function withSettings(): void;

    protected function settingEntry(string $label, string $description = null): void
    {
        $this->pluginManager->settingEntry($this->plugin, $label, $description);
    }

    public function addSetting(string $name, string $type, string $label, string $description = null, bool $required = false, mixed $data = null): void
    {
        $this->pluginManager->addSetting($this->plugin, $name, $type, $label, $description, $required, $data);
    }

    public function getSettingValue(string $settingName): string | array | null
    {
        return $this->plugin->getSettingValue($settingName);
    }

    public function setSettingValue(string $name, array $value): void
    {
        $this->plugin->setSettingValue($name, $value);
    }
}
