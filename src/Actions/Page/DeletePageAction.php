<?php

namespace Alban\Simplisiti\Actions\Page;

use Alban\Simplisiti\Models\ComponentSection;
use Alban\Simplisiti\Models\Page;
use Illuminate\Support\Facades\DB;

class DeletePageAction
{
    public function execute(Page $page): bool
    {
        return DB::transaction(function() use ($page) {
            $page->sections()->each(function($section) {
                ComponentSection::where('section_id', $section->id)->delete();

                $section->delete();
            });
            return $page->delete();
        });
    }
}
