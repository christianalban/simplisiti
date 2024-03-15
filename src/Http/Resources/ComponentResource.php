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
        $withData = $request->withData === 'true';

        return [
            'id' => $this->id,
            'name' => $this->name,
            'html' => $this->html,
            'variables' => $this->variables,
            'content' => $this->when($withData && $this->pivot?->content, fn () => $this->pivot?->content),
            'content_id' => $this->when($withData && $this->pivot?->id, fn () => $this->pivot?->id),
            'order' => $this->when($withData && $this->pivot, fn () => $this->pivot?->order),
        ];
    }
}
