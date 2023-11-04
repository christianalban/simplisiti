<?php

namespace Alban\Simplisiti\Models;

use Illuminate\Database\Eloquent\Model;

class Component extends Model
{
    protected $fillable = [
        'name',
        'html',
        'variables',
        'content',
    ];

    protected $casts = [
        'variables' => 'array',
        'content' => 'array',
    ];
}
