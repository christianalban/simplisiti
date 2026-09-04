<?php

namespace Alban\Simplisiti\Controllers;

use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use App\Http\Controllers\Controller;

abstract class SimplisitiAppController extends Controller {

    public function __construct(protected SimplisitiApp $app) {}
}
