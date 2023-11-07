<?php

namespace Alban\Simplisiti\Models;

use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    protected $fillable = [
        'name',
        'url',
        'title',
    ];

    public function sections()
    {
        return $this->hasMany(Section::class);
    }

    protected function orderedSectionsAndComponents(): array
    {
        return [
            'sections' => function($q_sections) {
                $q_sections->orderBy('order', 'asc');
            },
            'sections.components' => function($q_components) {
                $q_components->orderBy('component_section.order', 'asc');
            },
        ];
    }

    public function loadOrderedSectionsAndComponents(): self
    {
        return $this->load($this->orderedSectionsAndComponents());
    }

    public function scopeWithOrderedSectionsAndComponents(): Builder
    {
        return $this->with($this->orderedSectionsAndComponents());
    }
}
