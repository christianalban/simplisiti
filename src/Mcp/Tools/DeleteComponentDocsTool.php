<?php

namespace Alban\Simplisiti\Mcp\Tools;

use Alban\Simplisiti\Mcp\Tools\Concerns\SearchableDocumentation;
use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;
use Laravel\Mcp\Server\Tool;
use Laravel\Mcp\Server\Tools\Annotations\IsReadOnly;

#[IsReadOnly]
class DeleteComponentDocsTool extends Tool
{
    use SearchableDocumentation;

    /**
     * The tool's description.
     */
    protected string $description = <<<'MARKDOWN'
Provides read-only documentation for permanently deleting Simplisiti components.

Use this tool before `DeleteComponentTool` when an agent needs to understand the deletion contract, validation, side effects, response, or when deletion is appropriate. A component is a reusable content block placed inside page sections; deleting it removes the component definition, its component-scoped styles/scripts, and its section relationships. Use `ComponentDocsTool` for the shared component model instead of this tool for general variable documentation.

### Searching

- Omit `query` to receive a compact index of deletion concepts.
- Provide one or more case-insensitive partial terms to receive detailed matching concepts.
- Useful queries include `component_id`, `validation`, `cascade`, `irreversible`, `response`, and `delete versus update`.

### Response structure

The tool returns JSON with `mode`, `query`, `total`, `results`, `suggestions`, and `search`. Index results are compact; search results include stable IDs, structured deletion details, examples, notes, and related IDs. This tool is deterministic and does not read or modify database records.
MARKDOWN;

    public function handle(Request $request): Response
    {
        return $this->handleDocumentation($request, $this->documents());
    }

    /**
     * @return array<string, \Illuminate\Contracts\JsonSchema\JsonSchema>
     */
    public function schema(JsonSchema $schema): array
    {
        return $this->documentationSchema($schema);
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    protected function documents(): array
    {
        return [
            [
                'id' => 'delete-component-overview',
                'title' => 'Delete component overview',
                'category' => 'delete',
                'type' => 'workflow',
                'summary' => 'Permanently removes an existing component definition, its assets, and its component-section relationships.',
                'keywords' => ['delete', 'component', 'styles', 'scripts', 'assets', 'destroy', 'remove', 'permanent', 'irreversible'],
                'workflow' => [
                    'identify' => 'Use AvailableComponentsTool or another read-only source to obtain the component_id.',
                    'submit' => 'Send only the component_id to DeleteComponentTool.',
                    'execute' => 'The tool resolves the component and executes DeleteComponentAction, matching ComponentController::destroy.',
                    'result' => 'A successful operation returns Component deleted successfully.',
                ],
                'use_when' => [
                    'The component should no longer be available anywhere.',
                    'All placements of the component should be removed with its definition.',
                ],
                'do_not_use_when' => [
                    'Only one section placement should be changed or removed.',
                    'The component should be renamed or have its HTML or variables replaced.',
                    'A new component should be created or an existing component cloned.',
                ],
                'related' => ['component-overview', 'delete-payload', 'delete-side-effects'],
            ],
            [
                'id' => 'delete-payload',
                'title' => 'Delete component payload',
                'category' => 'delete',
                'type' => 'schema',
                'summary' => 'The deletion tool accepts one required identifier and no confirmation flag.',
                'keywords' => ['payload', 'component_id', 'identifier', 'confirm', 'confirmation', 'minimal'],
                'fields' => [
                    [
                        'name' => 'component_id',
                        'type' => 'integer',
                        'required' => true,
                        'description' => 'Existing component identifier to delete permanently.',
                    ],
                ],
                'example' => [
                    'component_id' => 12,
                ],
                'notes' => [
                    'There is no separate confirm or dry_run field. Supplying component_id is the explicit destructive request.',
                    'Obtain the identifier from a trusted read-only result before calling the tool.',
                ],
                'related' => ['delete-component-overview', 'delete-validation'],
            ],
            [
                'id' => 'delete-validation',
                'title' => 'Delete component validation',
                'category' => 'validation',
                'type' => 'rules',
                'summary' => 'Validation applied before the component is resolved and deleted.',
                'keywords' => ['validation', 'required', 'integer', 'exists', 'components', 'error', 'component_id'],
                'rules' => [
                    'component_id' => ['required', 'integer', 'exists:components,id'],
                ],
                'behavior' => [
                    'missing' => 'A missing component_id is rejected as a validation error.',
                    'invalid_type' => 'A non-integer component_id is rejected as a validation error.',
                    'unknown' => 'An identifier that does not exist in components is rejected as a validation error associated with component_id.',
                    'race' => 'If the component disappears after validation but before resolution, the tool returns a component_id validation error instead of executing a delete on an unknown model.',
                ],
                'related' => ['delete-payload', 'delete-component-overview'],
            ],
            [
                'id' => 'delete-side-effects',
                'title' => 'Delete component side effects',
                'category' => 'delete',
                'type' => 'behavior',
                'summary' => 'Deleting a component also removes its component-section pivot records through a database cascade.',
                'keywords' => ['side effects', 'cascade', 'component_section', 'section', 'pivot', 'relationships', 'foreign key'],
                'action' => 'DeleteComponentAction calls Component::delete(), matching the controller action.',
                'database' => [
                    'component' => 'The component row is deleted.',
                    'component_section' => 'Rows referencing the component are removed by cascadeOnDelete on component_section.component_id.',
                    'component_assets' => 'The component styles and scripts columns are deleted with the component definition.',
                    'page' => 'Pages and sections are not deleted by this component operation.',
                ],
                'notes' => [
                    'The operation is irreversible unless the application has an independent backup or restoration process.',
                    'Use a section-specific operation instead when only one placement should change.',
                ],
                'related' => ['component-overview', 'delete-component-overview'],
            ],
            [
                'id' => 'delete-response',
                'title' => 'Delete component response',
                'category' => 'delete',
                'type' => 'response',
                'summary' => 'The successful response matches ComponentController::destroy.',
                'keywords' => ['response', 'message', 'success', 'deleted successfully', 'controller'],
                'success' => [
                    'message' => 'Component deleted successfully',
                ],
                'errors' => 'Validation failures identify component_id so the caller can correct the identifier before retrying.',
                'related' => ['delete-validation', 'delete-component-overview'],
            ],
            [
                'id' => 'delete-versus-other-actions',
                'title' => 'Delete versus other component actions',
                'category' => 'workflow',
                'type' => 'comparison',
                'summary' => 'Deletion is different from changing, creating, listing, cloning, or documenting a component.',
                'keywords' => ['delete', 'update', 'create', 'clone', 'list', 'documentation', 'comparison'],
                'differences' => [
                    'create' => 'Use CreateComponentTool when the component does not exist yet.',
                    'update' => 'Use UpdateComponentTool when the definition should remain but its name, HTML, styles, scripts, variables, or settings should change.',
                    'list' => 'Use AvailableComponentsTool to inspect existing identifiers without modifying data.',
                    'clone' => 'Use the component clone operation when a new copy should be created from an existing definition.',
                    'documentation' => 'Use ComponentDocsTool or the specialized creation/update documentation tools for guidance only.',
                ],
                'related' => ['delete-component-overview', 'component-overview'],
            ],
        ];
    }

    protected function searchInstructions(): array
    {
        return [
            'query_examples' => [
                'component_id',
                'validation',
                'cascade',
                'irreversible',
                'response',
                'delete versus update',
            ],
            'matching_fields' => ['id', 'title', 'category', 'type', 'keywords', 'documentation content'],
            'tip' => 'Search for side effects or a specific validation field before invoking the destructive tool.',
        ];
    }
}
