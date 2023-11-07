<?php

namespace Alban\Simplisiti\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class Component extends Model
{
    protected $fillable = [
        'name',
        'html',
        'variables',
    ];

    protected $casts = [
        'variables' => 'array',
        'content' => 'array',
    ];

    protected function content(): Attribute
    {
        $content = collect(json_decode($this->attributes['variables'], true))
        ->keyBy('name')
        ->map(function ($variable) {
            return $variable['default'];
        })
        ->merge($this->pivot->content);

        return Attribute::make(
            get: fn () => $content
        );
    }
}
