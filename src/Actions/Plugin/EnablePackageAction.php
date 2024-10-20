<?php

namespace Alban\Simplisiti\Actions\Plugin;

use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use Alban\Simplisiti\Support\Plugin\Managers\PluginManager;
use Illuminate\Support\Facades\DB;

class EnablePackageAction
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
            $this->pluginManager->changeStatusPackage($data['name'], 'enabled');
        });
    }
}
