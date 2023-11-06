<?php

namespace Alban\Simplisiti\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ComponentResource extends JsonResource
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
            'name' => $this->name,
            'html' => $this->html,
            'variables' => $this->variables,
            'content' => $this->when($this->pivot?->content, $this->pivot?->content),
            'content_id' => $this->when($this->pivot?->id, $this->pivot?->id),
            'order' => $this->when($this->pivot, $this->pivot?->order),
        ];
    }
}
