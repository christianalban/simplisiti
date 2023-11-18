<?php

namespace Alban\Simplisiti\Services\SimplisitiEngine\Values;

class DataTableValue extends Value
{
    public function parse() {
        if (!$this->default) {
            return null;
        } 
            
        $rows = $this->default['rows'];

        return [
            'type' => $this->type,
            'name' => $this->name,
            'default' => $this->default,
            'value' => $this->parseRecursive($rows),
        ];
    }

    public function parseRecursive(array $dataSet) {
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
        $rows = $this->default['rows'];

        if (isset($merge)) {
            $rows = $this->mergeRecursive($rows, $merge['rows']);
        }

        return [
            'columns' => $this->default['columns'],
            'rows' => $rows,
        ];
    }

    public function mergeRecursive(array $dataSet, array $merge) {
        $data = [];

        foreach($dataSet as $rowkey => $dataSetRows) {
            $data[] = collect($dataSetRows)->map(function($row, $key) use ($rowkey, $merge) {
                if ($row['type'] === 'datatable') {
                    if (array_key_exists($key, $merge) && $merge[$rowkey][$key]['default']) {
                        $row['default'] = [
                            ...$row,
                            'columns' => $row['default']['columns'],
                            'rows' => $this->mergeRecursive($row['default']['rows'], $merge[$rowkey][$key]['default']['rows']),
                        ];
                    }
                } else {
                    if (array_key_exists($rowkey, $merge) && array_key_exists($key, $merge[$rowkey])) {
                        $row['default'] = Value::mergeContent($row, $merge[$rowkey][$key]);
                    }
                }

                return $row;
            })->toArray();
        }

        return $data;
    }
}
