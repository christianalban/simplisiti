<?php

namespace Alban\Simplisiti\Models;

use Illuminate\Database\Eloquent\Model;

class Plugin extends Model
{
    protected $fillable = [
        'name',
        'version',
        'description',
        'status',
        'author',
        'email',
        'website',
        'md5',
        'namespace',
    ];

    public function scopeEnabled($query)
    {
        return $query->where('status', 'enabled');
    }
}
