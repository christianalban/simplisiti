<?php

namespace Alban\Simplisiti\Models;

use Alban\Simplisiti\Traits\MustActive;
use Alban\Simplisiti\Traits\MustSort;
use Illuminate\Database\Eloquent\Model;

class Style extends Model
{
    use MustSort, MustActive;

    protected $fillable = [
        'name',
        'styles',
        'is_active',
        'order',
    ];

    protected $casts = [
        'styles' => 'array',
        'is_active' => 'boolean',
    ];
}
