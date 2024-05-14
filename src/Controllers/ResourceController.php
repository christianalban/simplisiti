<?php

namespace Alban\Simplisiti\Controllers;

use Alban\Simplisiti\Actions\Resource\DeleteBatchResourceAction;
use Alban\Simplisiti\Actions\Resource\DeleteResourceAction;
use Alban\Simplisiti\Actions\Resource\StoreBatchResourceAction;
use Alban\Simplisiti\Actions\Resource\StoreResourceAction;
use Alban\Simplisiti\Actions\Resource\UpdateResourceAction;
use Alban\Simplisiti\Http\Resources\ResourceResource;
use Alban\Simplisiti\Models\Resource;
use Alban\Simplisiti\Queries\Resource\IndexQuery;
use Alban\Simplisiti\Requests\Resource\StoreBatchResourceRequest;
use Alban\Simplisiti\Requests\Resource\StoreResourceRequest;
use Alban\Simplisiti\Requests\Resource\UpdateResourceRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ResourceController extends Controller {
    public function index(IndexQuery $query) {
        $resources = $query->query()
        ->get();

        return ResourceResource::collection($resources);
    }

    public function show(Resource $resource) {
        return ResourceResource::make($resource);
    }

    public function store(StoreResourceRequest $request, StoreResourceAction $action) {
        $action->execute($request->validated());

        return response()->json([
            'message' => 'Resource created successfully',
        ]);
    }

    public function update(Resource $resource, UpdateResourceRequest $request, UpdateResourceAction $action) {
        $action->execute($resource, $request->validated());

        return response()->json([
            'message' => 'Resource updated successfully',
        ]);
    }

    public function destroy(Resource $resource, DeleteResourceAction $action) {
        $action->execute($resource);

        return response()->json([
            'message' => 'Resource deleted successfully',
        ]);
    }

    public function storeBatch(StoreBatchResourceRequest $request, StoreBatchResourceAction $action) {

        $action->execute($request->validated());

        return response()->json([
            'message' => 'Resource batch created successfully',
        ]);
    }

    public function destroyBatch(Request $request, DeleteBatchResourceAction $action) {
        $action->execute(explode(',', $request->ids));

        return response()->json([
            'message' => 'Resource deleted successfully',
        ]);
    }
}
