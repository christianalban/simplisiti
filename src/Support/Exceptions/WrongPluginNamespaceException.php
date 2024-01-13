<?php
namespace Alban\Simplisiti\Support\Exceptions;

class WrongPluginNamespaceException extends \Exception
{
    public function __construct(string $pluginName)
    {
        parent::__construct("Wrong namespace for plugin $pluginName.");
    }
}
