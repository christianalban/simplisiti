<?php

namespace Alban\Simplisiti\Models;

use Alban\Simplisiti\Traits\MustActive;
use Alban\Simplisiti\Traits\MustSort;
use Illuminate\Database\Eloquent\Model;

class Script extends Model
{
    use MustSort, MustActive;

    protected $fillable = [
        'name',
        'scripts',
        'is_active',
        'order',
    ];

    protected $casts = [
        'scripts' => 'array',
        'is_active' => 'boolean',
    ];
}
