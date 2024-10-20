<?php

namespace Alban\Simplisiti\Controllers;

use Alban\Simplisiti\Actions\Setting\UpdateSettingAction;
use Alban\Simplisiti\Http\Resources\SettingResource;
use Alban\Simplisiti\Queries\Setting\IndexQuery;
use Alban\Simplisiti\Requests\Setting\UpdateSettingRequest;
use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use Alban\Simplisiti\Support\Plugin\Managers\SettingManager;
use App\Http\Controllers\Controller;

class SettingController extends Controller {
    public function __construct(
        private SimplisitiApp $app
    ) {}

    public function index(IndexQuery $query) {
        $settings = $this->app->onManager(SettingManager::class)->getSettingMenu($query->query()->get());

        return SettingResource::make($settings);
    }

    public function update(UpdateSettingRequest $request, UpdateSettingAction $action) {
        $action->execute($request->validated());

        return response()->json([
            'message' => 'Resource updated successfully',
        ]);
    }
}
