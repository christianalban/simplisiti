<?php

namespace Alban\Simplisiti\Support\Plugin;

use Alban\Simplisiti\Support\Plugin\Configurable\WithSettings;
use Alban\Simplisiti\Support\Plugin\Configurable\WithStyles;
use Alban\Simplisiti\Support\Plugin\Managers\PluginManager;

abstract class Plugin {
    private $settingsPlugin = null;
    private $stylesPlugin = null;

    public function __construct(
        private PluginManager $pluginManager
    ) {
        $this->loadConfigurablePlugin();
    }

    private function getClassNamespace(): string {
        $namespace = get_class($this);
        $namespace = explode('\\', $namespace);
        array_pop($namespace);
        return implode('\\', $namespace);
    }

    private function loadClassPlugin(string $class): object {
        $namespace = $this->getClassNamespace().$class;

        return new $namespace($this->pluginManager, $this);
    }

    protected function loadSettingsPlugin(): void {
        $this->settingsPlugin = $this->loadClassPlugin('\Setting\SettingsPlugin');
    }

    protected function loadStylesPlugin(): void {
        $this->stylesPlugin = $this->loadClassPlugin('\Style\StylesPlugin');
    }

    public function getSettingValue(string $name): array | string | null
    {
        return $this->pluginManager->getSettingValue($this::class, $name);
    }

    public function setSettingValue(string $name, array $value): void
    {
        $this->pluginManager->setSettingValue($this::class, $name, $value);
    }

    private function loadConfigurablePlugin(): void {
        if ($this instanceof WithSettings) {
            $this->loadSettingsPlugin();
        }

        if ($this instanceof WithStyles) {
            $this->loadStylesPlugin();
        }
    }

    public function boot(): void
    {
        if ($this->settingsPlugin) {
            $this->settingsPlugin->withSettings();
        }
        if ($this->stylesPlugin) {
            $this->stylesPlugin->withStyles();
        }
    }
}
