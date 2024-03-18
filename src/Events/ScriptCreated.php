<?php
 
namespace Alban\Simplisiti\Events;

use Alban\Simplisiti\Models\Script;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
 
class ScriptCreated
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
 
    /**
     * Create a new event instance.
     */
    public function __construct(
        public Script $order,
    ) {}
}
