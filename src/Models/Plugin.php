<?php

namespace Alban\Simplisiti\Models;

use Illuminate\Database\Eloquent\Model;

class Plugin extends Model
{
    protected $fillable = [
        'name',
        'version',
        'description',
        'author',
        'email',
        'website',
    ];
}
