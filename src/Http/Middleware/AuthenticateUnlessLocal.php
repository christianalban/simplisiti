<?php

namespace Alban\Simplisiti\Http\Middleware;

use Closure;
use Illuminate\Auth\Middleware\Authenticate;

class AuthenticateUnlessLocal extends Authenticate
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): mixed  $next
     */
    public function handle($request, Closure $next, ...$guards)
    {
        if (app()->environment('local')) {
            return $next($request);
        }

        return parent::handle($request, $next, 'sanctum');
    }
}
