<?php

namespace Alban\Simplisiti\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class ComponentSection extends Pivot
{
    protected $fillable = [
        'order',
        'content',
    ];

    protected $casts = [
        'content' => 'array',
    ];
}
