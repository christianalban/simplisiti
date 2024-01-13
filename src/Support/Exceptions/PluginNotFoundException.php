<?php
namespace Alban\Simplisiti\Support\Exceptions;

class PluginNotFoundException extends \Exception
{
    public function __construct(string $pluginName)
    {
        parent::__construct("Plugin $pluginName not found.");
    }
}
