<?php

namespace Alban\Simplisiti\Services\SimplisitiEngine\Settings;

class DataTableSettings extends Settings
{
    public function merge(array|string|int|float|null $merge) {
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

        foreach($dataSet as $dataSetRow) {
            $data[] = collect($columns)->reduce(function($carrier, $column) use ($dataSetRow) {
                $values = collect($dataSetRow)->pluck('default', 'name')->toArray();
                if ($column['type'] === 'datatable') {
                    $column['default'] = [
                        'columns' => $values[$column['name']]['default']['columns'],
                        'rows' => $this->mergeRecursive($values[$column['name']]['default']['rows'], $values[$column['name']]['default']['columns']),
                    ];
                } else {
                    $value = $values[$column['name']] ?? $column['default'] ?? null;
                    $column['default'] = Settings::mergeSettings($column, $value);
                }

                $carrier[] = $column;
                return $carrier;
            }, []);
        }

        return $data;
    }
}
