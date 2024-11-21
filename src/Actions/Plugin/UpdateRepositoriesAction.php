<?php

namespace Alban\Simplisiti\Actions\Plugin;

use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use Alban\Simplisiti\Support\Plugin\Managers\PluginManager;

class UpdateRepositoriesAction
{
    private PluginManager $pluginManager;

    public function __construct(
        private SimplisitiApp $app
    ) {
        $this->pluginManager = $app->onManager(PluginManager::class);
    }

    public function execute(array $data): void
    {
        $this->pluginManager->updateRepositoryList($data['repositories']);
    }
}
