<?php
namespace Alban\Simplisiti\Services\SimplisitiEngine;

use Alban\Simplisiti\Models\Plugin;
use Alban\Simplisiti\Support\Plugin\Managers\ActionManager;
use Alban\Simplisiti\Support\Plugin\Managers\BodyManager;
use Alban\Simplisiti\Support\Plugin\Managers\CacheManager;
use Alban\Simplisiti\Support\Plugin\Managers\DataSourceManager;
use Alban\Simplisiti\Support\Plugin\Managers\HeadManager;
use Alban\Simplisiti\Support\Plugin\Managers\ParameterManager;
use Alban\Simplisiti\Support\Plugin\Managers\PluginManager;
use Alban\Simplisiti\Support\Plugin\Managers\ScriptManager;
use Alban\Simplisiti\Support\Plugin\Managers\SettingManager;
use Alban\Simplisiti\Support\Plugin\Managers\StyleManager;
use Alban\Simplisiti\Support\Plugin\Plugin as BasePlugin;
use Illuminate\Support\Facades\Schema;

class SimplisitiApp extends BasePlugin
{
    private ?StyleManager $styleManager = null;

    private ?HeadManager $headManager = null;

    private ?ScriptManager $scriptManager = null;

    private ?PluginManager $pluginManager = null;

    private ?SettingManager $settingManager = null;

    private ?BodyManager $bodyManager = null;

    private ?CacheManager $cacheManager = null;

    private ?DataSourceManager $dataSourceManager = null;

    private ?ActionManager $actionManager = null;

    private ?ParameterManager $parameterManager = null;

    public function getStyleManager(): StyleManager
    {
        return $this->styleManager;
    }

    public function getHeadManager(): HeadManager
    {
        return $this->headManager;
    }

    public function getScriptManager(): ScriptManager
    {
        return $this->scriptManager;
    }

    public function getSettingManager(): SettingManager
    {
        return $this->settingManager;
    }

    public function getBodyManager(): BodyManager
    {
        return $this->bodyManager;
    }

    public function getPluginManager(): PluginManager
    {
        return $this->pluginManager;
    }

    public function getCacheManager(): CacheManager
    {
        return $this->cacheManager;
    }

    public function getDataSourceManager(): DataSourceManager
    {
        return $this->dataSourceManager;
    }

    public function getActionManager(): ActionManager
    {
        return $this->actionManager;
    }

    public function getParameterManager(): ParameterManager
    {
        return $this->parameterManager;
    }

    public function init(): void {
        $this->initPlugins();
    }

    public function loadStyles(): void {
        if (!Schema::hasTable('styles')) {
            return;
        }

        if ($this->styleManager) {
            return;
        }

        $this->styleManager = new StyleManager;
    }

    public function loadParameters(): void {
        if ($this->parameterManager) {
            return;
        }

        $this->parameterManager = new ParameterManager;
    }

    public function loadHeaders(): void {
        if ($this->headManager) {
            return;
        }

        $this->headManager = new HeadManager;
    }

    public function loadScripts(): void {
        if (!Schema::hasTable('scripts')) {
            return;
        }

        if ($this->scriptManager) {
            return;
        }

        $this->scriptManager = new ScriptManager;
    }

    public function loadSettings(): void {
        if ($this->settingManager) {
            return;
        }

        $this->settingManager = new SettingManager;
    }

    public function loadCache(): void {
        if ($this->cacheManager) {
            return;
        }

        $this->cacheManager = new CacheManager;
    }

    public function loadBody(): void {
        if ($this->bodyManager) {
            return;
        }

        $this->bodyManager = new BodyManager;
    }

    public function loadDataSources(): void {
        if ($this->dataSourceManager) {
            return;
        }

        $this->dataSourceManager = new DataSourceManager;
    }

    public function loadActions(): void {
        if ($this->actionManager) {
            return;
        }

        $this->actionManager = new ActionManager;
    }

    public function loadPlugins(): void {
        if (!Schema::hasTable('plugins')) {
            return;
        }

        if ($this->pluginManager) {
            return;
        }

        try {
            $this->pluginManager = new PluginManager($this);
            foreach (Plugin::enabled()->get() as $plugin) {
                $this->pluginManager->add($plugin);
            }
        } catch (\Exception $e) {
            return;
        }
    }

    protected function initPlugins(): void {
        if (!Schema::hasTable('plugins')) {
            return;
        }

        try {
            $this->pluginManager->execute();
        } catch (\Exception $e) {
            return;
        }
    }

    public function registerActions(): void {
        $this->actionManager->registerActions();
    }

    public function setRequestParameters(string $url, array $parameters): void {
        $this->parameterManager->addParameters($url, $parameters);
    }
}
