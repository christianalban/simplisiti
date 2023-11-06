<?php

namespace Alban\Simplisiti\Models;

use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    protected $fillable = [
        'order',
    ];

    public function page()
    {
        return $this->belongsTo(Page::class);
    }

    public function components()
    {
        return $this->belongsToMany(Component::class)
            ->using(ComponentSection::class)
            ->withPivot('id', 'order', 'content')
            ->withTimestamps();
    }
}
