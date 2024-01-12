<?php

namespace Alban\Simplisiti\Models\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;
use Illuminate\Support\Facades\Schema;

class OrderListScope implements Scope
{
    /**
     * Apply the scope to a given Eloquent query builder.
     */
    public function apply(Builder $builder, Model $model): void
    {
        if (Schema::hasColumn($model->getTable(), 'order')) {
            $builder->orderBy('order', 'asc');
        }
    }
}
