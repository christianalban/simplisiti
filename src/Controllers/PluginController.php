<?php

namespace Alban\Simplisiti\Controllers;

use Alban\Simplisiti\Actions\Plugin\InstallPackageAction;
use Alban\Simplisiti\Actions\Plugin\SyncRepositoriesAction;
use Alban\Simplisiti\Actions\Plugin\UninstallPackageAction;
use Alban\Simplisiti\Actions\Plugin\UpdateRepositoriesAction;
use Alban\Simplisiti\Http\Resources\PackageResource;
use Alban\Simplisiti\Http\Resources\RepositoryResource;
use Alban\Simplisiti\Requests\Plugin\InstallPackageRequest;
use Alban\Simplisiti\Requests\Plugin\UpdateRepositoriesRequest;
use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use App\Http\Controllers\Controller;

class PluginController extends Controller {
    public function __construct(
        private SimplisitiApp $app
    ) {
        $this->app->loadSettings();

        $this->app->loadCache();

        $this->app->loadPlugins();
    }

    public function packagesList() {
        $packages = $this->app->getPluginManager()->getPackageList();

        return PackageResource::collection($packages);
    }

    public function packagesInstall(InstallPackageRequest $request, InstallPackageAction $action) {
        return response()->json([
            'data' => $action->execute($request->validated()),
            'message' => 'Packages installed successfully',
        ]);
    }

    public function packagesUninstall(InstallPackageRequest $request, UninstallPackageAction $action) {
        return response()->json([
            'data' => $action->execute($request->validated()),
            'message' => 'Packages uninstalled successfully',
        ]);
    }

    public function repositoriesList() {
        $repositories = $this->app->getPluginManager()->getRepositoryList();

        return RepositoryResource::collection($repositories);
    }

    public function repositoriesUpdate(UpdateRepositoriesRequest $request, UpdateRepositoriesAction $action) {
        $action->execute($request->validated());

        return response()->json([
            'message' => 'Repositories updated successfully',
        ]);
    }

    public function repositoriesSync(SyncRepositoriesAction $action) {        
        return response()->json([
            'data' => $action->execute(),
            'message' => 'Repositories synced successfully',
        ]);
    }
}
