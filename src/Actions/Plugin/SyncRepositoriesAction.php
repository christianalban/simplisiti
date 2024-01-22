<?php

namespace Alban\Simplisiti\Actions\Plugin;

use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;

class SyncRepositoriesAction
{
    public function execute(): array
    {
        $app = app(SimplisitiApp::class);

        return $app->getPluginManager()->syncPackagesList();
    }
}
