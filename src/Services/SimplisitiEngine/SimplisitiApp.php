<?php
namespace Alban\Simplisiti\Services\SimplisitiEngine;

use Alban\Simplisiti\Models\Plugin;
use Alban\Simplisiti\Services\SimplisitiEngine\Managers\ManagerContainer;
use Alban\Simplisiti\Services\SimplisitiEngine\Renderer\ElementContainer;
use Alban\Simplisiti\Support\Plugin\Managers\ActionManager;
use Alban\Simplisiti\Support\Plugin\Managers\CacheManager;
use Alban\Simplisiti\Support\Plugin\Managers\DataSourceManager;
use Alban\Simplisiti\Support\Plugin\Managers\Manager;
use Alban\Simplisiti\Support\Plugin\Managers\ParameterManager;
use Alban\Simplisiti\Support\Plugin\Managers\PluginManager;
use Alban\Simplisiti\Support\Plugin\Managers\SettingManager;
use Alban\Simplisiti\Support\Plugin\Plugin as BasePlugin;
use Illuminate\Support\Facades\Schema;
use Alban\Simplisiti\Services\SimplisitiEngine\Loaders\PagesLoader;
use Alban\Simplisiti\Services\SimplisitiEngine\Loaders\ScriptsLoader;
use Alban\Simplisiti\Services\SimplisitiEngine\Loaders\StylesLoader;

class SimplisitiApp // extends BasePlugin
{
    private ManagerContainer $managerContainer;
    private ElementContainer $headContainer;
    private ElementContainer $bodyContainer;

    public function __construct()
    {
        $this->headContainer = new ElementContainer();
        $this->bodyContainer = new ElementContainer();
        $this->managerContainer = new ManagerContainer($this);
    }

    public function getManagerContainer(): ManagerContainer
    {
        return $this->managerContainer;
    }

    public function onManager(string $key): Manager
    {
        return $this->getManagerContainer()->onManager($key);
    }

    public function onHead(): ElementContainer
    {
        return $this->headContainer;
    }

    public function onBody(): ElementContainer
    {
        return $this->bodyContainer;
    }

    public function init(): void {
        // $this->initPlugins();
    }

    /*
     * @deprecated
     * */
    public function getPluginManager(): PluginManager
    {
        return $this->getManagerContainer()->onManager(PluginManager::class);
    }

    public function getSettingManager(): SettingManager
    {
        return $this->getManagerContainer()->onManager(SettingManager::class);
    }

    public function getCacheManager(): CacheManager
    {
        return $this->getManagerContainer()->onManager(CacheManager::class);
    }

    public function getDataSourceManager(): DataSourceManager
    {
        return $this->getManagerContainer()->onManager(DataSourceManager::class);
    }

    public function getActionManager(): ActionManager
    {
        return $this->getManagerContainer()->onManager(ActionManager::class);
    }

    public function getParameterManager(): ParameterManager
    {
        return $this->getManagerContainer()->onManager(ParameterManager::class);
    }

    public function loadParameters(): void {
        // $this->parameterManager = new ParameterManager;
    }

    public function loadSettings(): void {
        // $this->settingManager = new SettingManager;
    }

    public function loadCache(): void {
        // $this->cacheManager = new CacheManager;
    }

    public function loadDataSources(): void {
        // $this->dataSourceManager = new DataSourceManager;
    }

    public function loadActions(): void {
        // $this->actionManager = new ActionManager;
    }

    public function loadPlugins(): void {
        if (!Schema::hasTable('plugins')) {
            return;
        }

        // try {
        //     $this->pluginManager = new PluginManager($this);
        //     foreach (Plugin::enabled()->get() as $plugin) {
        //         $this->pluginManager->add($plugin);
        //     }
        // } catch (\Exception $e) {
        //     return;
        // }
    }

    protected function initPlugins(): void {
        if (!Schema::hasTable('plugins')) {
            return;
        }

        // try {
        //     $this->pluginManager->execute();
        // } catch (\Exception $e) {
        //     return;
        // }
    }

    public function registerActions(): void {
        // $this->actionManager->registerActions();
    }

    public function setRequestParameters(string $url, array $parameters): void {
        // $this->parameterManager->addParameters($url, $parameters);
    }


    public static function boot(): void {
        PagesLoader::loadPages();
        StylesLoader::loadStyles();
        ScriptsLoader::loadScripts();
    }
}
