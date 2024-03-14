<?php
namespace Alban\Simplisiti\Queries\Setting;

use Alban\Simplisiti\Models\Setting;
use Illuminate\Database\Eloquent\Builder;

class IndexQuery {
    public function query(): Builder {
        return Setting::query();
    }
}
