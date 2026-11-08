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
class ScriptDocsTool extends Tool
{
    use SearchableDocumentation;
    use GlobalAssetDocumentation;

    protected string $description = <<<'MARKDOWN'
Provides read-only, searchable documentation for global Simplisiti scripts.

A script is a named JavaScript resource loaded on every page when `is_active` is `true`. It is independent from pages and components. The catalog explains the script fields, global activation, ordering, compact/expanded listing behavior, and when to use the create, update, delete, and order tools.

### Searching

Omit `query` for a compact concept index. Provide one or more case-insensitive partial terms such as `JavaScript global`, `is_active`, `order`, or `available search` to receive matching structured concepts.

### Response structure

The response contains `mode`, `query`, `total`, `results`, `suggestions`, and `search`. Search results include stable IDs, summaries, keywords, structured fields or behavior, related concepts, relevance, and matched terms.
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
        return $this->globalAssetDocuments('script', 'scripts', 'JavaScript');
    }

    protected function searchInstructions(): array
    {
        return $this->globalAssetSearchInstructions('script', 'scripts');
    }
}
