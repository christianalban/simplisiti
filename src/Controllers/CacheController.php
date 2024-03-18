<?php

namespace Alban\Simplisiti\Controllers;

use Alban\Simplisiti\Actions\Cache\ClearAllCacheAction;
use App\Http\Controllers\Controller;

class CacheController extends Controller {
    public function clearAll(ClearAllCacheAction $action) {
        $action->execute();

        return response()->noContent();
    }
}
