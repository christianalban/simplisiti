<?php

use Alban\Simplisiti\Services\SimplisitiEngine\SimplisitiApp;
use Illuminate\Support\Facades\Route;

Route::view('/spanel/{any?}', 'simplisiti::index')
    ->where('any', '.*')
    ->middleware(['web' ,'auth'])
    ->name('spanel.dashboard');

SimplisitiApp::create();
