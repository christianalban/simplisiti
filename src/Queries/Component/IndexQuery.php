<?php
namespace Alban\Simplisiti\Queries\Component;

use Alban\Simplisiti\Models\Component;
use Illuminate\Database\Eloquent\Builder;

class IndexQuery {
    public function query(): Builder {
        return Component::query()->latest();
    }
}
