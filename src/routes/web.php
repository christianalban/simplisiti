<?php

use Alban\Simplisiti\Services\SimplisitiEngine\Loaders\PagesLoader;
use Alban\Simplisiti\Services\SimplisitiEngine\Loaders\StylesLoader;
use Illuminate\Support\Facades\Route;

Route::view('/spanel/{path?}', 'simplisiti::index')->middleware(['web' ,'auth'])->name('dashboard');

PagesLoader::loadPages();
StylesLoader::loadStyles();
