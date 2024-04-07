<?php

namespace Alban\Simplisiti\Support\Plugin\LifeCycle;

interface AfterInstall {
    public function runAfterInstall(): void;
}
