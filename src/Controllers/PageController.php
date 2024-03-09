<?php

namespace Alban\Simplisiti\Controllers;

use Alban\Simplisiti\Actions\Page\DeletePageAction;
use Alban\Simplisiti\Actions\Page\MinifyAction;
use Alban\Simplisiti\Actions\Page\StorePageAction;
use Alban\Simplisiti\Actions\Page\UpdatePageAction;
use Alban\Simplisiti\Http\Resources\PageResource;
use Alban\Simplisiti\Models\Page;
use Alban\Simplisiti\Queries\Page\IndexQuery;
use Alban\Simplisiti\Requests\Page\StorePageRequest;
use Alban\Simplisiti\Requests\Page\UpdatePageRequest;
use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use App\Http\Controllers\Controller;

class PageController extends Controller {

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
        $pages = $query->query()
        ->withCount('sections')
        ->get();

        return PageResource::collection($pages);
    }

    public function show(Page $page) {
        $page->loadOrderedSectionsAndComponents();

        return PageResource::make($page);
    }

    public function store(StorePageRequest $request, StorePageAction $action) {
        $action->execute($request->validated());

        return response()->json([
            'message' => 'Page created successfully',
        ]);
    }

    public function update(Page $page, UpdatePageRequest $request, UpdatePageAction $action) {
        $action->execute($page, $request->validated());

        return response()->json([
            'message' => 'Page updated successfully',
        ]);
    }

    public function destroy(Page $page, DeletePageAction $action) {
        $action->execute($page);

        return response()->json([
            'message' => 'Page deleted successfully',
        ]);
    }

    public function preview(string $type, MinifyAction $action) {
        return response($action->forType($type)->execute(), 200, [
            'Content-Type' => $type === 'style'
                ? 'text/css'
                : 'text/javascript'
        ]);
    }
}
