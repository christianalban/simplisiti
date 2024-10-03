<?php
namespace Alban\Simplisiti\Queries\Page;

use Alban\Simplisiti\Models\Page;
use Illuminate\Database\Eloquent\Builder;

class IndexQuery {
    public function query(): Builder {
        return Page::query()->latest();
    }
}
