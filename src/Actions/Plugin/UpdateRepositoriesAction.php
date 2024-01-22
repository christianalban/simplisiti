<?php

namespace Alban\Simplisiti\Actions\Plugin;

use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;

class UpdateRepositoriesAction
{
    public function execute(array $data): void
    {
        $app = app(SimplisitiApp::class);

        $app->getPluginManager()->updateRepositoryList($data['repositories']);
    }
}
