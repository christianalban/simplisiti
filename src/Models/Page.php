<?php

namespace Alban\Simplisiti\Models;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    protected $fillable = [
        'name',
        'url',
    ];

    public function sections()
    {
        return $this->hasMany(Section::class);
    }
}
