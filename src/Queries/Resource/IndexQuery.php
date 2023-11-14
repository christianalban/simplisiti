<?php
namespace Alban\Simplisiti\Queries\Resource;

use Alban\Simplisiti\Models\Resource;
use Illuminate\Database\Eloquent\Builder;

class IndexQuery {
    public function query(): Builder {
        return Resource::query();
    }
}
