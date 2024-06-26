<?php

namespace Alban\Simplisiti\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FlowResource extends JsonResource
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
            'is_disabled' => $this->is_disabled,
            'actions' => FlowActionResource::collection($this->whenLoaded('actions')),
        ];
    }
}
