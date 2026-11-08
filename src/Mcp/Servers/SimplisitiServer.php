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
        Tools\AvailableStylesTool::class,
        Tools\CreateStyleTool::class,
        Tools\UpdateStyleTool::class,
        Tools\DeleteStyleTool::class,
        Tools\OrderStyleTool::class,
        Tools\StyleDocsTool::class,
        Tools\CreateStyleDocsTool::class,
        Tools\UpdateStyleDocsTool::class,
        Tools\DeleteStyleDocsTool::class,
        Tools\OrderStyleDocsTool::class,
        Tools\AvailableScriptsTool::class,
        Tools\CreateScriptTool::class,
        Tools\UpdateScriptTool::class,
        Tools\DeleteScriptTool::class,
        Tools\OrderScriptTool::class,
        Tools\ScriptDocsTool::class,
        Tools\CreateScriptDocsTool::class,
        Tools\UpdateScriptDocsTool::class,
        Tools\DeleteScriptDocsTool::class,
        Tools\OrderScriptDocsTool::class,
        Tools\AvailableResourcesTool::class,
        Tools\CreateResourceTool::class,
        Tools\UpdateResourceTool::class,
        Tools\DeleteResourceTool::class,
        Tools\ResourceDocsTool::class,
        Tools\CreateResourceDocsTool::class,
        Tools\UpdateResourceDocsTool::class,
        Tools\DeleteResourceDocsTool::class,
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
