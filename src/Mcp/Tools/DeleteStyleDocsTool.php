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
class DeleteStyleDocsTool extends Tool
{
    use SearchableDocumentation;
    use GlobalAssetDocumentation;

    protected string $description = <<<'MARKDOWN'
Provides read-only, searchable documentation for deleting global CSS styles.

Use this before `DeleteStyleTool` to distinguish permanent deletion from deactivation. Deleting requires only an existing `style_id` and removes the style definition; setting `is_active` to `false` preserves the CSS while preventing it from loading globally.

Omit `query` for an index or search terms such as `destructive`, `style_id`, `preserve`, or `is_active` for detailed concepts. Responses contain `mode`, `query`, `total`, `results`, `suggestions`, and `search`.
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
        return $this->globalAssetDeleteDocuments('style', 'styles', 'CSS');
    }

    protected function searchInstructions(): array
    {
        return $this->globalAssetSearchInstructions('style', 'styles');
    }
}
