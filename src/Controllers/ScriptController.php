<?php

namespace Alban\Simplisiti\Controllers;

use Alban\Simplisiti\Actions\Script\DeleteScriptAction;
use Alban\Simplisiti\Actions\Script\OrderScriptAction;
use Alban\Simplisiti\Actions\Script\StoreScriptAction;
use Alban\Simplisiti\Actions\Script\UpdateScriptAction;
use Alban\Simplisiti\Http\Resources\ScriptResource;
use Alban\Simplisiti\Models\Script;
use Alban\Simplisiti\Queries\Script\IndexQuery;
use Alban\Simplisiti\Requests\Script\OrderScriptRequest;
use Alban\Simplisiti\Requests\Script\StoreScriptRequest;
use Alban\Simplisiti\Requests\Script\UpdateScriptRequest;
use App\Http\Controllers\Controller;

class ScriptController extends Controller {
    public function index(IndexQuery $query) {
        $scripts = $query->query()
        ->paginate();

        return ScriptResource::collection($scripts);
    }

    public function show(Script $script) {
        return ScriptResource::make($script);
    }

    public function store(StoreScriptRequest $request, StoreScriptAction $action) {
        $action->execute($request->validated());

        return response()->json([
            'message' => 'Script created successfully',
        ]);
    }

    public function update(Script $script, UpdateScriptRequest $request, UpdateScriptAction $action) {
        $action->execute($script, $request->validated());

        return response()->json([
            'message' => 'Script updated successfully',
        ]);
    }

    public function destroy(Script $script, DeleteScriptAction $action) {
        $action->execute($script);

        return response()->json([
            'message' => 'Script deleted successfully',
        ]);
    }

    public function order(OrderScriptRequest $request, OrderScriptAction $action) {
        $action->execute($request->validated());

        return response()->json([
            'message' => 'Scripts order updated successfully',
        ]);
    }
}
