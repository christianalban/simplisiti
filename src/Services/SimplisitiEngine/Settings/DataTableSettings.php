<?php

namespace Alban\Simplisiti\Services\SimplisitiEngine\Settings;

class DataTableSettings extends Settings
{
    public function merge(array|string|int|null $merge) {
        if (($this->options['columns'] ?? null) ==! null) {
            $this->default['columns'] = $this->options['columns'] ?: [];
        }

        if (($this->options['rows'] ?? null) ==! null) {
            $this->default['rows'] = $this->options['rows'] ?: [];
        }

        $rows = $this->mergeRecursive($merge ? $merge['rows'] : $this->default['rows'], $this->default['columns']);

        return [
            'columns' => $this->default['columns'],
            'rows' => $rows,
        ];
    }

    private function mergeRecursive(array $dataSet, array $columns) {
        $data = [];

        foreach($dataSet as $dataSetRows) {
            $data[] = collect($dataSetRows)->map(function($row) use ($columns) {
                // if (!collect($columns)->contains('name', $row['name'])) {
                //     return null;
                // }
                if ($row['type'] === 'datatable') {
                    $row['default'] = [
                        'columns' => $row['default']['columns'],
                        'rows' => $this->mergeRecursive($row['default']['rows'], $row['default']['columns']),
                    ];
                } else {
                    $row['default'] = $row['default'];
                }

                return $row;
            })->filter()->toArray();
        }

        return $data;
    }
}
