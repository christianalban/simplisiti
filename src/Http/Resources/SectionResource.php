<?php

namespace Alban\Simplisiti\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SectionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'order' => $this->order,
            'sp_class_list' => $this->sp_class_list ?? [],
            'sp_style_list' => $this->sp_style_list ?? [],
            'components' => ComponentResource::collection($this->whenLoaded('components')),
        ];
    }
}
