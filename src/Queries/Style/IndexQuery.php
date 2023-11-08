<?php
namespace Alban\Simplisiti\Queries\Style;

use Alban\Simplisiti\Models\Style;
use Illuminate\Database\Eloquent\Builder;

class IndexQuery {
    public function query(): Builder {
        return Style::query();
    }
}
