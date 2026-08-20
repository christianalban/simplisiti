<?php

namespace Alban\Simplisiti\Controllers;

use Alban\Simplisiti\Actions\Plugin\DisablePackageAction;
use Alban\Simplisiti\Actions\Plugin\EnablePackageAction;
use Alban\Simplisiti\Actions\Plugin\InstallPackageAction;
use Alban\Simplisiti\Actions\Plugin\SyncRepositoriesAction;
use Alban\Simplisiti\Actions\Plugin\UninstallPackageAction;
use Alban\Simplisiti\Actions\Plugin\UpdateRepositoriesAction;
use Alban\Simplisiti\Http\Resources\PackageResource;
use Alban\Simplisiti\Http\Resources\RepositoryResource;
use Alban\Simplisiti\Requests\Plugin\InstallPackageRequest;
use Alban\Simplisiti\Requests\Plugin\UpdateRepositoriesRequest;

class PluginController extends SimplisitiAppController {

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

    public function packagesDisable(InstallPackageRequest $request, DisablePackageAction $action) {
        $action->execute($request->validated());

        return response()->json([
            'message' => 'Packages disabled successfully',
        ]);
    }

    public function packagesEnable(InstallPackageRequest $request, EnablePackageAction $action) {
        $action->execute($request->validated());

        return response()->json([
            'message' => 'Packages enabled successfully',
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
