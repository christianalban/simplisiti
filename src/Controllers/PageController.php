<?php

namespace Alban\Simplisiti\Controllers;

use Alban\Simplisiti\Actions\Page\ComponentPreviewAction;
use Alban\Simplisiti\Actions\Page\DeletePageAction;
use Alban\Simplisiti\Actions\Page\MinifyAction;
use Alban\Simplisiti\Actions\Page\PreviewAction;
use Alban\Simplisiti\Actions\Page\StorePageAction;
use Alban\Simplisiti\Actions\Page\UpdatePageAction;
use Alban\Simplisiti\Http\Resources\PageResource;
use Alban\Simplisiti\Models\Page;
use Alban\Simplisiti\Queries\Page\IndexQuery;
use Alban\Simplisiti\Requests\Page\StorePageRequest;
use Alban\Simplisiti\Requests\Page\UpdatePageRequest;
use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use Alban\Simplisiti\Support\Asset\AssetManager;
use Alban\Simplisiti\Support\Exceptions\InvalidPagePreviewActionException;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

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
            ->with('sections.components')
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

    public function preview(Request $request, string $type) {
        $action = match ($type) {
            'style' => new MinifyAction($type),
            'script' => new MinifyAction($type),
            'component' => new ComponentPreviewAction($request),
        };

        if (!$action instanceof PreviewAction) {
            throw new InvalidPagePreviewActionException($action::class);
        }

        $contentType = match ($type) {
            'style' => 'text/css',
            'script' => 'text/javascript',
            'component' => 'text/html',
        };

        return response($action->execute(), 200, [
            'Content-Type' => $contentType
        ]);
    }

    public function pluginPreview(string $type) {
        $app = app(SimplisitiApp::class);

        $action = match ($type) {
            'script' => $app->getScriptManager(),
            'style' => $app->getStyleManager(),
        };

        if (!$action instanceof AssetManager) {
            throw new InvalidPagePreviewActionException($action::class);
        }

        $contentType = match ($type) {
            'style' => 'text/css',
            'script' => 'text/javascript',
        };

        return response($action->toString(), 200, [
            'Content-Type' => $contentType
        ]);
    }

    public function editorEngine(string $type) {
        $path = match ($type) {
            'script' => 'vendor/alban/simplisiti/src/resources/js/simplisiti-component-editor/dist/simplisiti-component-editor.umd.cjs',
            'style' => 'vendor/alban/simplisiti/src/resources/js/simplisiti-component-editor/dist/style.css',
            'layout' => 'vendor/alban/simplisiti/src/resources/css/simplisiti-component-editor/style.css',
        };

        $engineResource = base_path($path);

        $content = file_get_contents($engineResource);

        $contentType = match ($type) {
            'style' => 'text/css',
            'layout' => 'text/css',
            'script' => 'text/javascript',
        };

        return response($content, 200, [
            'Content-Type' => $contentType
        ]);
    }

    public function fontEngine(string $font) {
        $path = 'vendor/alban/simplisiti/src/resources/font/' . $font;

        $engineResource = base_path($path);

        $content = file_get_contents($engineResource);

        $extension = pathinfo($engineResource, PATHINFO_EXTENSION);

        $contentType = match ($extension) {
            'woff' => 'font/woff',
            'woff2' => 'font/woff2',
            'ttf' => 'font/ttf',
            'otf' => 'font/otf',
        };

        return response($content, 200, [
            'Content-Type' => $contentType
        ]);
    }
}
