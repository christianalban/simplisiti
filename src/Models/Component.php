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
        return Attribute::make(
            get: fn (mixed $variables) => collect(json_decode($variables, true))->map(function ($variable) {
                if ($variable['type'] === 'datasource') {
                    return Value::parseValue($variable);
                }
                
                return [
                    ...$variable,
                    'value' => Value::parseValue($variable),
                ];
            })
        ); 
    }

    protected function content(): Attribute
    {
        $content = collect(json_decode($this->attributes['variables'], true))
        ->map(function ($variable) {
            $override = $this->pivot->content[$variable['name']] ?? null;

            if ($variable['type'] === 'datasource') {
                return Value::parseValue([
                    ...$variable,
                    'value' => Value::mergeContent($variable, $override),
                ], [
                    'withData' => true,
                ]);
            }

            return [
                ...$variable,
                'value' => Value::parseValue([
                    ...$variable,
                    'default' => Value::mergeContent($variable, $override),
                ], [
                    'withData' => true,
                ]),
            ];
            
        })
        ->pluck('value', 'name')->toArray();

        return Attribute::make(
            get: fn () => $content
        );
    }
}
