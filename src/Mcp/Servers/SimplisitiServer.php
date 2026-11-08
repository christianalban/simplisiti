<?php

namespace Alban\Simplisiti\Mcp\Servers;

use Alban\Simplisiti\Mcp\Tools;
use Laravel\Mcp\Server;

class SimplisitiServer extends Server
{
    /**
     * The tools registered with this MCP server.
     *
     * @var array<int, class-string<\Laravel\Mcp\Server\Tool>>
     */
    protected array $tools = [
        Tools\CreateComponentTool::class,
        Tools\UpdateComponentTool::class,
        Tools\DeleteComponentTool::class,
        Tools\ComponentDocsTool::class,
        Tools\CreateComponenteDocsTool::class,
        Tools\UpdateComponentDocsTool::class,
        Tools\DeleteComponentDocsTool::class,
        Tools\AvailableComponentsTool::class,
        Tools\AvailablePagesTool::class,
        Tools\CreatePageTool::class,
        Tools\UpdatePageTool::class,
        Tools\DeletePageTool::class,
        Tools\PageDocsTool::class,
        Tools\CreatePageDocsTool::class,
        Tools\UpdatePageDocsTool::class,
        Tools\DeletePageDocsTool::class,
    ];

    /**
     * The resources registered with this MCP server.
     *
     * @var array<int, class-string<\Laravel\Mcp\Server\Resource>>
     */
    protected array $resources = [
        // ExampleResource::class,
    ];

    /**
     * The prompts registered with this MCP server.
     *
     * @var array<int, class-string<\Laravel\Mcp\Server\Prompt>>
     */
    protected array $prompts = [
        // ExamplePrompt::class,
    ];
}
