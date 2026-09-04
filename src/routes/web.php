<?php

use Alban\Simplisiti\Http\Middleware\CheckAllowedEmails;
use Illuminate\Support\Facades\Route;

Route::view('/spanel/{any?}', 'simplisiti::index')
    ->where('any', '.*')
    ->middleware(['web' ,'auth', CheckAllowedEmails::class])
    ->name('spanel.dashboard');
