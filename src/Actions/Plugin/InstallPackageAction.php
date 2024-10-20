<?php

namespace Alban\Simplisiti\Actions\Plugin;

use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use Alban\Simplisiti\Support\Plugin\Managers\PluginManager;
use Illuminate\Support\Facades\DB;

class InstallPackageAction
{
    private PluginManager $pluginManager;

    public function __construct(
        private SimplisitiApp $app
    ) {
        $this->pluginManager = $this->app->onManager(PluginManager::class);
    }

    public function execute(array $data): void
    {
        DB::transaction(function () use ($data) {
            $installedPlugin = $this->pluginManager->installPackage($data['name']);

            $this->pluginManager->postInstall($installedPlugin);
        });
    }
}
