<?php

namespace Alban\Simplisiti\Controllers;

use Alban\Simplisiti\Actions\Setting\UpdateSettingAction;
use Alban\Simplisiti\Http\Resources\SettingResource;
use Alban\Simplisiti\Queries\Setting\IndexQuery;
use Alban\Simplisiti\Requests\Setting\UpdateSettingRequest;

class SettingController extends SimplisitiAppController {

    public function index(IndexQuery $query) {
        $settings = $this->app->getSettingManager()->getSettingMenu($query->query()->get());

        return SettingResource::make($settings);
    }

    public function update(UpdateSettingRequest $request, UpdateSettingAction $action) {
        $action->execute($request->validated());

        return response()->json([
            'message' => 'Resource updated successfully',
        ]);
    }
}
