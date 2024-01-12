<?php

namespace Alban\Simplisiti\Models;

use Alban\Simplisiti\Models\Scopes\OrderListScope;
use Illuminate\Database\Eloquent\Model;

class Script extends Model
{
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

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    protected static function booted(): void
    {
        static::addGlobalScope(new OrderListScope);
    }
}
