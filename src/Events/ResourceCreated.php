<?php
 
namespace Alban\Simplisiti\Events;

use Alban\Simplisiti\Models\Resource;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
 
class ResourceCreated
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
 
    /**
     * Create a new event instance.
     */
    public function __construct(
        public Resource $order,
    ) {}
}
