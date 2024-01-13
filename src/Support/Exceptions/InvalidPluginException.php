<?php
namespace Alban\Simplisiti\Support\Exceptions;

class InvalidPluginException extends \Exception
{
    public function __construct(string $pluginName, string $interfaceName)
    {
        parent::__construct("The plugin $pluginName is not valid, it must implement the '$interfaceName' interface.");
    }
}
