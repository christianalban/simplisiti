<?php

namespace Alban\Simplisiti\Models;

use Alban\Simplisiti\Services\SimplisitiEngine\Values\Value;
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

    protected function variables(): Attribute {
        $variables = collect(json_decode($this->attributes['variables'], true))->map(function ($variable) {
            return Value::parseValue($variable);
        });

        return Attribute::make(
            get: fn () => $variables
        ); 
    }

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
