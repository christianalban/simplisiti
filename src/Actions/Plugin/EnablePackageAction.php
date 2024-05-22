<?php

namespace Alban\Simplisiti\Actions\Plugin;

use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use Illuminate\Support\Facades\DB;

class EnablePackageAction
{
    public function execute(array $data): void
    {
        DB::transaction(function () use ($data) {
            $app = app(SimplisitiApp::class);

            $pluginManager = $app->getPluginManager();

            $pluginManager->changeStatusPackage($data['name'], 'enabled');

        });
    }
}
