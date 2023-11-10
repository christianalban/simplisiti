<?php
namespace Alban\Simplisiti\Queries\Script;

use Alban\Simplisiti\Models\Script;
use Illuminate\Database\Eloquent\Builder;

class IndexQuery {
    public function query(): Builder {
        return Script::query();
    }
}
