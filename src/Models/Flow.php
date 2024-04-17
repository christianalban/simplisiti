<?php

namespace Alban\Simplisiti\Models;

use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Flow extends Model
{
    protected $fillable = [
        'name',
    ];

    public function actions()
    {
        return $this->hasMany(Action::class);
    }

    protected function orderedActions(): array
    {
        return [
            'actions' => function($q_sections) {
                $q_sections->orderBy('order', 'asc');
            }
        ];
    }

    public function loadOrderedActions(): self
    {
        return $this->load($this->orderedActions());
    }

    public function scopeWithOrderedActions(): Builder
    {
        return $this->with($this->orderedActions());
    }

    public function scopeIsEnabled(Builder $query): Builder
    {
        return $query->where('is_disabled', false);
    }
}
