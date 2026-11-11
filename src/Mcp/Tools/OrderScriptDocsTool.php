<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Mcp\Tools\Concerns\GlobalAssetDocumentation;
use Alban\Simplisiti\Mcp\Tools\Concerns\SearchableDocumentation;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsReadOnly;

#[IsReadOnly]
class OrderScriptDocsTool extends Tool
{
    use SearchableDocumentation;
    use GlobalAssetDocumentation;

    protected string $description = <<<'MARKDOWN'
Provides read-only, searchable documentation for reordering global JavaScript scripts.

Use this before `OrderScriptTool` to understand that `list` must contain the complete set of script IDs with integer orders. Reordering changes the global load sequence of active scripts; it does not change JavaScript code or activation.

Omit `query` for an index or search terms such as `list`, `order`, `complete`, or `transaction` for detailed concepts. Responses contain `mode`, `query`, `total`, `results`, `suggestions`, and `search`.
MARKDOWN;

    public function handle(Request $request): Response
    {
        return $this->handleDocumentation($request, $this->documents());
    }

    public function schema(JsonSchema $schema): array
    {
        return $this->globalAssetDocumentationSchema($schema);
    }

    protected function documents(): array
    {
        return $this->globalAssetOrderDocuments('script', 'scripts', 'JavaScript');
    }

    protected function searchInstructions(): array
    {
        return $this->globalAssetSearchInstructions('script', 'scripts');
    }
}
