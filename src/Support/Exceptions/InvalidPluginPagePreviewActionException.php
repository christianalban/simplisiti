<?php
namespace Alban\Simplisiti\Support\Exceptions;

use Alban\Simplisiti\Support\Asset\AssetManager;

class InvalidPluginPagePreviewActionException extends \Exception
{
    public function __construct(string $className)
    {
        $interfaceName = AssetManager::class;

        parent::__construct("The class $className is not valid, it must implement the '$interfaceName' interface.");
    }
}
