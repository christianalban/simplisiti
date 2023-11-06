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

    public function loadOrderedSectionsAndComponents(): self
    {
        return $this->load([
            'sections' => function($q_sections) {
                $q_sections->orderBy('order', 'asc');
            },
            'sections.components' => function($q_components) {
                $q_components->orderBy('component_section.order', 'asc');
            },
        ]);
    }
}
