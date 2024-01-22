<?php
namespace Alban\Simplisiti\Support\Exceptions;

class PluginMd5Exception extends \Exception
{
    public function __construct(string $pluginName)
    {
        parent::__construct("Plugin $pluginName has an invalid md5 hash.");
    }
}
