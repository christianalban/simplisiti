<?php

use Alban\Simplisiti\Services\SimplisitiEngine\Loaders\RoutesLoader;
use Illuminate\Support\Facades\Route;

Route::view('/spanel/{path?}', 'simplisiti::index')->middleware(['web' ,'auth'])->name('dashboard');

RoutesLoader::loadPagesList();
