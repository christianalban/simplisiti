<?php
namespace Alban\Simplisiti\Queries\Flow;

use Alban\Simplisiti\Models\Flow;
use Illuminate\Database\Eloquent\Builder;

class IndexQuery {
    public function query(): Builder {
        return Flow::query();
    }
}
