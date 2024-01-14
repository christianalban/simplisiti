<?php

namespace Alban\Simplisiti\Controllers;

use Alban\Simplisiti\Actions\Setting\UpdateSettingAction;
use Alban\Simplisiti\Http\Resources\SettingResource;
use Alban\Simplisiti\Requests\Setting\UpdateSettingRequest;
use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use App\Http\Controllers\Controller;

class SettingController extends Controller {
    public function __construct(
        private SimplisitiApp $app
    ) {
        $this->app->loadSettings();

        $this->app->loadHeaders();

        $this->app->loadPlugins();

        $this->app->init();
    }

    public function index() {
        $settings = $this->app->getSettingManager()->getSettingMenu();

        return SettingResource::make($settings);
    }

    public function update(UpdateSettingRequest $request, UpdateSettingAction $action) {
        $action->execute($request->validated());

        return response()->json([
            'message' => 'Resource updated successfully',
        ]);
    }
}
