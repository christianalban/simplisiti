<?php
namespace Alban\Simplisiti\Services\SimplisitiEngine;

use Alban\Simplisiti\Models\Plugin;
use Alban\Simplisiti\Support\Plugin\Managers\BodyManager;
use Alban\Simplisiti\Support\Plugin\Managers\HeadManager;
use Alban\Simplisiti\Support\Plugin\Managers\PluginManager;
use Alban\Simplisiti\Support\Plugin\Managers\ScriptManager;
use Alban\Simplisiti\Support\Plugin\Managers\SettingManager;
use Alban\Simplisiti\Support\Plugin\Managers\StyleManager;
use Illuminate\Support\Facades\Schema;

class SimplisitiApp
{
    private StyleManager $styleManager;

    private HeadManager $headManager;

    private ScriptManager $scriptManager;

    private PluginManager $pluginManager;

    private SettingManager $settingManager;

    private BodyManager $bodyManager;

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

    public function init(): void {
        $this->initPlugins();
    }

    public function loadStyles(): void {
        $this->styleManager = new StyleManager;
    }

    public function loadHeaders(): void {
        $this->headManager = new HeadManager;
    }

    public function loadScripts(): void {
        $this->scriptManager = new ScriptManager;
    }

    public function loadSettings(): void {
        $this->settingManager = new SettingManager;
    }

    public function loadBody(): void {
        $this->bodyManager = new BodyManager;
    }

    public function loadPlugins(): void {
        if (!Schema::hasTable('plugins')) {
            return;
        }

        $this->pluginManager = new PluginManager($this);
        foreach (Plugin::all() as $plugin) {
            $this->pluginManager->add($plugin);
        }
    }

    protected function initPlugins(): void {
        if (!Schema::hasTable('plugins')) {
            return;
        }
        $this->pluginManager->execute();
    }
}
