<?php

namespace Alban\Simplisiti\Controllers;

use Alban\Simplisiti\Actions\Style\DeleteStyleAction;
use Alban\Simplisiti\Actions\Style\OrderStyleAction;
use Alban\Simplisiti\Actions\Style\StoreStyleAction;
use Alban\Simplisiti\Actions\Style\UpdateStyleAction;
use Alban\Simplisiti\Http\Resources\StyleResource;
use Alban\Simplisiti\Models\Style;
use Alban\Simplisiti\Queries\Style\IndexQuery;
use Alban\Simplisiti\Requests\Style\OrderStyleRequest;
use Alban\Simplisiti\Requests\Style\StoreStyleRequest;
use Alban\Simplisiti\Requests\Style\UpdateStyleRequest;
use App\Http\Controllers\Controller;

class StyleController extends Controller {
    public function index(IndexQuery $query) {
        $styles = $query->query()
        ->get();

        return StyleResource::collection($styles);
    }

    public function show(Style $style) {
        return StyleResource::make($style);
    }

    public function store(StoreStyleRequest $request, StoreStyleAction $action) {
        $action->execute($request->validated());

        return response()->json([
            'message' => 'Style created successfully',
        ]);
    }

    public function update(Style $style, UpdateStyleRequest $request, UpdateStyleAction $action) {
        $action->execute($style, $request->validated());

        return response()->json([
            'message' => 'Style updated successfully',
        ]);
    }

    public function destroy(Style $style, DeleteStyleAction $action) {
        $action->execute($style);

        return response()->json([
            'message' => 'Style deleted successfully',
        ]);
    }

    public function order(OrderStyleRequest $request, OrderStyleAction $action) {
        $action->execute($request->validated());

        return response()->json([
            'message' => 'Styles order updated successfully',
        ]);
    }
}
