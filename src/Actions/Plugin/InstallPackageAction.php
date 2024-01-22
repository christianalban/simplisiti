<?php

namespace Alban\Simplisiti\Actions\Plugin;

use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;

class InstallPackageAction
{
    public function execute(array $data): void
    {
        $app = app(SimplisitiApp::class);

        $app->getPluginManager()->installPackage($data['name']);
    }
}
