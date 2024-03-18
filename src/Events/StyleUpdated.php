<?php
 
namespace Alban\Simplisiti\Events;

use Alban\Simplisiti\Models\Style;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
 
class StyleUpdated
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
 
    /**
     * Create a new event instance.
     */
    public function __construct(
        public Style $order,
    ) {}
}
