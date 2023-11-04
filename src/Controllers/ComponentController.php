<?php

namespace Alban\Simplisiti\Controllers;

use Alban\Simplisiti\Actions\Component\StoreComponentAction;
use Alban\Simplisiti\Requests\Component\StoreComponentRequest;
use App\Http\Controllers\Controller;

class ComponentController extends Controller {
    public function store(StoreComponentRequest $request, StoreComponentAction $action) {
        $action->execute($request->validated());

        return response()->json([
            'message' => 'Component created successfully',
        ]);
    }
}
