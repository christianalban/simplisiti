<?php

namespace Alban\Simplisiti\Controllers;

use Alban\Simplisiti\Actions\Component\CloneComponentAction;
use Alban\Simplisiti\Actions\Component\DeleteComponentAction;
use Alban\Simplisiti\Actions\Component\LoadVariableSettingsAction;
use Alban\Simplisiti\Actions\Component\StoreComponentAction;
use Alban\Simplisiti\Actions\Component\UpdateComponentAction;
use Alban\Simplisiti\Http\Resources\ComponentResource;
use Alban\Simplisiti\Http\Resources\VariableSettingsResource;
use Alban\Simplisiti\Models\Component;
use Alban\Simplisiti\Queries\Component\IndexQuery;
use Alban\Simplisiti\Requests\Component\StoreComponentRequest;
use Alban\Simplisiti\Requests\Component\UpdateComponentRequest;
use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ComponentController extends Controller {
    
    public function __construct(SimplisitiApp $app)
    {
        $app->loadSettings();

        $app->loadHeaders();

        $app->loadDataSources();

        $app->loadActions();

        $app->loadPlugins();

        $app->init();
    }

    public function index(IndexQuery $query) {
        $components = $query->query()->get();

        return ComponentResource::collection($components);
    }

    public function show(Component $component) {
        return ComponentResource::make($component);
    }

    public function store(StoreComponentRequest $request, StoreComponentAction $action) {
        $action->execute($request->validated());

        return response()->json([
            'message' => 'Component created successfully',
        ]);
    }

    public function update(Component $component, UpdateComponentRequest $request, UpdateComponentAction $action) {
        $action->execute($component, $request->validated());

        return response()->json([
            'message' => 'Component updated successfully',
        ]);
    }

    public function destroy(Component $component, DeleteComponentAction $action) {
        $action->execute($component);

        return response()->json([
            'message' => 'Component deleted successfully',
        ]);
    }

    public function variableSettings(Component $component, string $name, string $type, Request $request, LoadVariableSettingsAction $action) {
        $settings = $action->execute($component, $name, $type, $request->default);

        return VariableSettingsResource::collection($settings);
    }

    public function clone(Component $component, CloneComponentAction $action) {
        $action->execute($component);

        return response()->json([
            'message' => 'Component cloned successfully',
        ]);
    }
}
