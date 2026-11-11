<?php

namespace Alban\Simplisiti\Mcp\Tools\Concerns;

use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Mcp\Request;
use Laravel\Mcp\Response;

trait SearchableDocumentation
{
    /**
     * Handle a documentation request using the catalog supplied by the tool.
     *
     * @param  array<int, array<string, mixed>>  $documents
     */
    protected function handleDocumentation(Request $request, array $documents): Response
    {
        $validated = $request->validate([
            'query' => 'nullable|string',
        ]);

        $query = $this->normalize(trim($validated['query'] ?? ''));

        if ($query === '') {
            return Response::json([
                'mode' => 'index',
                'query' => null,
                'total' => count($documents),
                'results' => array_map(
                    fn (array $document): array => $this->indexEntry($document),
                    $documents,
                ),
                'suggestions' => [],
                'search' => $this->searchInstructions(),
            ]);
        }

        $matches = $this->searchDocuments($query, $documents);
        $results = [];

        foreach ($matches as $match) {
            $document = $match['document'];
            $document['relevance'] = $match['score'];
            $document['matched_terms'] = $match['matched_terms'];
            $results[] = $document;
        }

        return Response::json([
            'mode' => 'search',
            'query' => $query,
            'total' => count($results),
            'results' => $results,
            'suggestions' => count($results) === 0
                ? $this->documentationSuggestions($query, $documents)
                : [],
            'search' => $this->searchInstructions(),
        ]);
    }

    /**
     * @return array<string, \Illuminate\Contracts\JsonSchema\JsonSchema>
     */
    protected function documentationSchema(JsonSchema $schema): array
    {
        return [
            'query' => $schema->string()
                ->description('Optional case-insensitive concept search. Omit it for the compact documentation index.')
                ->nullable(),
        ];
    }

    /**
     * @param  array<string, mixed>  $document
     * @return array<string, mixed>
     */
    protected function indexEntry(array $document): array
    {
        return [
            'id' => $document['id'],
            'title' => $document['title'],
            'category' => $document['category'],
            'type' => $document['type'],
            'summary' => $document['summary'],
            'keywords' => $document['keywords'],
        ];
    }

    /**
     * @return array<string, mixed>
     */
    protected function searchInstructions(): array
    {
        return [
            'query_examples' => [
                'variable options',
                'datatable structure',
                'datasource settings',
                'resource default',
                'allowed variable types',
            ],
            'matching_fields' => ['id', 'title', 'category', 'type', 'keywords', 'documentation content'],
            'tip' => 'Use a specific type or structure name when you need a small, focused response.',
        ];
    }

    /**
     * @param  array<int, array<string, mixed>>  $documents
     * @return array<int, array{document: array<string, mixed>, score: int, matched_terms: array<int, string>, index: int}>
     */
    protected function searchDocuments(string $query, array $documents): array
    {
        $normalizedQuery = $this->normalize($query);
        $terms = array_values(array_filter(
            preg_split('/[\s,.;:\/]+/', $normalizedQuery) ?: [],
            fn (string $term): bool => $term !== '',
        ));
        $matches = [];

        foreach ($documents as $index => $document) {
            $encodedDocument = json_encode($document, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) ?: '';
            $haystack = $this->normalize($encodedDocument);
            $id = $this->normalize((string) $document['id']);
            $title = $this->normalize((string) $document['title']);
            $keywords = array_map(fn (string $keyword): string => $this->normalize($keyword), $document['keywords']);
            $score = 0;
            $matchedTerms = [];

            foreach ($terms as $term) {
                if (str_contains($haystack, $term)) {
                    $score++;
                    $matchedTerms[] = $term;
                }

                if (str_contains($id, $term)) {
                    $score += 5;
                }

                if (str_contains($title, $term)) {
                    $score += 4;
                }

                if (in_array($term, $keywords, true)) {
                    $score += 3;
                }

                if (($document['type'] ?? null) === $term) {
                    $score += 3;
                }
            }

            if ($normalizedQuery !== '' && str_contains($title, $normalizedQuery)) {
                $score += 4;
            }

            if ($score > 0) {
                $matches[] = [
                    'document' => $document,
                    'score' => $score,
                    'matched_terms' => array_values(array_unique($matchedTerms)),
                    'index' => $index,
                ];
            }
        }

        usort(
            $matches,
            fn (array $left, array $right): int => $right['score'] <=> $left['score']
                ?: $left['index'] <=> $right['index'],
        );

        return $matches;
    }

    /**
     * @param  array<int, array<string, mixed>>  $documents
     * @return array<int, array{id: string, title: string, category: string, summary: string}>
     */
    protected function documentationSuggestions(string $query, array $documents): array
    {
        $terms = array_values(array_filter(
            preg_split('/[\s,.;:\/]+/', $this->normalize($query)) ?: [],
            fn (string $term): bool => $term !== '',
        ));
        $suggestions = [];

        foreach ($documents as $document) {
            $haystack = $this->normalize(implode(' ', [
                $document['id'],
                $document['title'],
                $document['category'],
                ...$document['keywords'],
            ]));
            $score = 0;

            foreach ($terms as $term) {
                if (str_contains($haystack, $term)) {
                    $score++;
                }
            }

            if ($score > 0) {
                $suggestions[] = [
                    'score' => $score,
                    'id' => $document['id'],
                    'title' => $document['title'],
                    'category' => $document['category'],
                    'summary' => $document['summary'],
                ];
            }
        }

        usort(
            $suggestions,
            fn (array $left, array $right): int => $right['score'] <=> $left['score']
                ?: strcmp($left['id'], $right['id']),
        );

        return array_map(
            fn (array $suggestion): array => [
                'id' => $suggestion['id'],
                'title' => $suggestion['title'],
                'category' => $suggestion['category'],
                'summary' => $suggestion['summary'],
            ],
            array_slice($suggestions, 0, 5),
        );
    }

    protected function normalize(string $value): string
    {
        $value = function_exists('mb_strtolower')
            ? mb_strtolower($value, 'UTF-8')
            : strtolower($value);

        return preg_replace('/\s+/', ' ', trim($value)) ?: '';
    }
}
