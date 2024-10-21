<?php

namespace Alban\Simplisiti\Support\Plugin;

use Alban\Simplisiti\Support\Plugin\Managers\PluginManager;

abstract class Plugin {
    private $settingsPlugin = null;

    public function __construct(
        private PluginManager $pluginManager
    ) {
        $this->loadSettingsPlugin();
    }

    private function getClassNamespace(): string {
        $namespace = get_class($this);
        $namespace = explode('\\', $namespace);
        array_pop($namespace);
        return implode('\\', $namespace);
    }

    protected function loadSettingsPlugin(): void {
        $namespace = $this->getClassNamespace().'\Setting\SettingsPlugin';

        $this->settingsPlugin = new $namespace($this->pluginManager, $this);
    }

    public function getSettingValue(string $name): array | string | null
    {
        return $this->pluginManager->getSettingValue($this::class, $name);
    }

    public function setSettingValue(string $name, array $value): void
    {
        $this->pluginManager->setSettingValue($this::class, $name, $value);
    }

    public function boot(): void
    {
        $this->settingsPlugin->withSettings();
    }
}
