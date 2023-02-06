<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\ControllerStudent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/salvar', [ControllerStudent::class, 'salvar']);
Route::get('/todos', [ControllerStudent::class, 'getStude']);
Route::get('/find/{id}', [ControllerStudent::class, 'find']);
Route::get('/delete/{id}', [ControllerStudent::class, 'delete']);
Route::post('update', [ControllerStudent::class, 'update']);
