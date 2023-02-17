<?php

use App\Http\Controllers\ControllerStudent;
use Illuminate\Support\Facades\Route;

Route::get('/todos', [ControllerStudent::class, 'getStude']);
Route::post('/salvar', [ControllerStudent::class, 'salvar']);
Route::post('/find/{id}', [ControllerStudent::class, 'find']);
Route::post('/delete/{id}', [ControllerStudent::class, 'delete']);
Route::post('update', [ControllerStudent::class, 'update']);
