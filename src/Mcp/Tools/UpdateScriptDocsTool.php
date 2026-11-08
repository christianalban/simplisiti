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
class UpdateScriptDocsTool extends Tool
{
    use SearchableDocumentation;
    use GlobalAssetDocumentation;

    protected string $description = <<<'MARKDOWN'
Provides read-only, searchable documentation for updating global JavaScript scripts.

Use this before `UpdateScriptTool` to understand why the request requires `script_id`, `name`, `scripts`, and `is_active` together. The operation replaces the mutable fields of an existing script, preserves its order, and is not a partial PATCH.

Omit `query` for an index or search terms such as `script_id`, `complete payload`, `unique current`, or `is_active` for detailed concepts. Responses contain `mode`, `query`, `total`, `results`, `suggestions`, and `search`.
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
        return $this->globalAssetUpdateDocuments('script', 'scripts', 'JavaScript');
    }

    protected function searchInstructions(): array
    {
        return $this->globalAssetSearchInstructions('script', 'scripts');
    }
}
