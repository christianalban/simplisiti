<?php

namespace Alban\Simplisiti\Actions\Plugin;

use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use Alban\Simplisiti\Support\Plugin\Managers\PluginManager;

class SyncRepositoriesAction
{
    private PluginManager $pluginManager;

    public function __construct(
        protected SimplisitiApp $app,
    ) {
        $this->pluginManager = $app->onManager(PluginManager::class);
    }

    public function execute(): array
    {
        return $this->pluginManager->syncPackagesList();
    }
}
