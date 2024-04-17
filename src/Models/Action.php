<?php

namespace Alban\Simplisiti\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Action extends Model
{
    protected $fillable = [
        'order',
        'prev',
        'action',
        'is_disabled',
    ];

    protected $casts = [
        'is_disabled' => 'boolean',
    ];

    public function flow()
    {
        return $this->belongsTo(Flow::class);
    }

    public function scopeOrdered(Builder $query)
    {
        return $query->orderBy('actions.order', 'asc');
    }
}
