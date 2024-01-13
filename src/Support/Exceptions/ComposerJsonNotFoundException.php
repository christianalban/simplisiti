<?php
namespace Alban\Simplisiti\Support\Exceptions;

class ComposerJsonNotFoundException extends \Exception
{
    public function __construct(string $pluginName)
    {
        parent::__construct("file composer.json not found for plugin $pluginName.");
    }
}
