<?php

namespace Alban\Simplisiti\Services\SimplisitiEngine\Values;

class DataTableValue extends Value
{
    public function parse() {
        if (!$this->default) {
            return null;
        } 
            
        $rows = $this->default['rows'];

        return $this->parseRecursive($rows);
    }

    private function parseRecursive(array $dataSet) {
        $data = [];

        foreach($dataSet as $rows) {
            $data[] = collect($rows)->map(function($row) {
                if ($row['type'] === 'datatable') {
                    if (isset($row['default'])) {
                        $row['value'] = $this->parseRecursive($row['default']['rows']);
                    }

                } else {
                    $row['value'] =  Value::parseValue($row);
                }

                return $row;

            })->pluck('value', 'name')->toArray();
        }

        return $data;
    }

    public function merge(array|string|int|null $merge) {
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
                    $row['default'] = Value::mergeContent($row, $row['default']);
                }

                return $row;
            })->filter()->toArray();
        }

        return $data;
    }
}
