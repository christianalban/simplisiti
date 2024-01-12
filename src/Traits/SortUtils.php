<?php

namespace Alban\Simplisiti\Traits;

trait SortUtils {
    protected $model;

    public function forModel($model)
    {
        $this->model = $model;

        return $this;
    }

    public function saveOrder(array $order): void
    {
        foreach ($order as $item) {
            $this->model::where('id', $item['id'])->update(['order' => $item['order']]);
        }
    }
}
