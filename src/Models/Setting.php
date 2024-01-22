<?php

namespace Alban\Simplisiti\Models;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $fillable = [
        'plugin',
        'name',
        'value',
    ];

    protected $casts = [
        'value' => 'array',
    ];
}
