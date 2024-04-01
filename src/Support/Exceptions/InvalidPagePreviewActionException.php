<?php
namespace Alban\Simplisiti\Support\Exceptions;

use Alban\Simplisiti\Actions\Page\PreviewAction;

class InvalidPagePreviewActionException extends \Exception
{
    public function __construct(string $className)
    {
        $interfaceName = PreviewAction::class;

        parent::__construct("The class $className is not valid, it must implement the '$interfaceName' interface.");
    }
}
