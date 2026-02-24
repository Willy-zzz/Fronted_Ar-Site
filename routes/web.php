<?php

use Illuminate\Support\Facades\Route;

// Ruta para Vue SPA - DEBE SER LA ÚLTIMA RUTA
Route::get('/{any}', function () {
    return view('app'); // Tu vista principal de Vue
})->where('any', '.*');