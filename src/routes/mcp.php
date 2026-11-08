<?php

use Alban\Simplisiti\Http\Middleware\AuthenticateUnlessLocal;
use Alban\Simplisiti\Mcp\Servers\SimplisitiServer;
use Laravel\Mcp\Facades\Mcp;

Mcp::web('/mcp/simplisiti', SimplisitiServer::class)
    ->middleware(AuthenticateUnlessLocal::class);
