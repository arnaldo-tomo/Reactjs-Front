<?php

use App\Http\Controllers\ControllerStudent;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;

Route::get('/todos', [ControllerStudent::class, 'getStude']);
Route::post('/salvar', [ControllerStudent::class, 'salvar']);
Route::post('/find/{id}', [ControllerStudent::class, 'find']);
Route::post('/delete/{id}', [ControllerStudent::class, 'delete']);
Route::post('update', [ControllerStudent::class, 'update']);




Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);

Route::group(['middleware' => 'jwt.auth'], function () {
    Route::get('users', [UserController::class, 'index']);
    Route::get('users/{id}', [UserController::class, 'show']);
    Route::post('users', [UserController::class, 'store']);
    Route::put('users/{id}', [UserController::class, 'update']);
    Route::delete('users/{id}', [UserController::class, 'destroy']);
});
