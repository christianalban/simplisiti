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
class CreateScriptDocsTool extends Tool
{
    use SearchableDocumentation;
    use GlobalAssetDocumentation;

    protected string $description = <<<'MARKDOWN'
Provides read-only, searchable documentation for creating global JavaScript scripts.

Use this before `CreateScriptTool` when an agent needs the complete payload, exact `StoreScriptRequest` validation, automatic order assignment, or the effect of `is_active`. A script's JavaScript is global and is not attached to one page or component.

Omit `query` for an index or search terms such as `payload`, `scripts validation`, `is_active`, or `automatic order` for detailed concepts. Responses contain `mode`, `query`, `total`, `results`, `suggestions`, and `search`.
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
        return $this->globalAssetCreateDocuments('script', 'scripts', 'JavaScript');
    }

    protected function searchInstructions(): array
    {
        return $this->globalAssetSearchInstructions('script', 'scripts');
    }
}
