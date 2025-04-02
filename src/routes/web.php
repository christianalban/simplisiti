<?php

use Alban\Simplisiti\Http\Middleware\CheckAllowedEmails;
use Alban\Simplisiti\Services\SimplisitiEngine\Loaders\PagesLoader;
use Alban\Simplisiti\Services\SimplisitiEngine\Loaders\ScriptsLoader;
use Alban\Simplisiti\Services\SimplisitiEngine\Loaders\StylesLoader;
use Illuminate\Support\Facades\Route;

Route::view('/spanel/{any?}', 'simplisiti::index')
    ->where('any', '.*')
    ->middleware(['web' ,'auth', new CheckAllowedEmails])
    ->name('spanel.dashboard');

PagesLoader::loadPages();
StylesLoader::loadStyles();
ScriptsLoader::loadScripts();
