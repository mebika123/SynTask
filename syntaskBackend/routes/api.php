<?php

use App\Http\Controllers\auth\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\AdminMiddleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::middleware(['auth:sanctum', AdminMiddleware::class])->group(function () {
    Route::get('/projects', [ProjectController::class, 'index']);
    Route::get('/categories', [CategoryController::class, 'index']);
    Route::get('/tasks', [TaskController::class, 'index']);

    Route::get('/users', [UserController::class, 'allUsers']);
    Route::get('/usersList', [UserController::class, 'index']);
    Route::post('/user/store', [UserController::class, 'store']);
    Route::put('/user/update/{id}', [UserController::class, 'update']);
    Route::delete('/user/delete/{id}', [UserController::class, 'delete']);
    Route::delete('/project/{projectId}/user/{userId}', [ProjectController::class, 'removeUserFromProject']);

    Route::post('/project/store', [ProjectController::class, 'store']);
    Route::put('/project/update/{id}', [ProjectController::class, 'update']);
    Route::delete('/project/delete/{id}', [ProjectController::class, 'delete']);

    Route::post('/category/store', [CategoryController::class, 'store']);
    Route::put('/category/update/{id}', [CategoryController::class, 'update']);
    Route::delete('/category/delete/{id}', [CategoryController::class, 'delete']);

    Route::post('/task/store', [TaskController::class, 'store']);
    Route::put('/task/update/{id}', [TaskController::class, 'update']);
    Route::delete('/task/delete/{id}', [TaskController::class, 'delete']);
});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/project/{id}', [ProjectController::class, 'show']);
    Route::get('/category/{id}', [CategoryController::class, 'show']);
    Route::get('/userDashboard', [DashboardController::class, 'userDashboard']);
    Route::get('/dashboard', [DashboardController::class, 'dashboard']);
    Route::get('/task/{id}', [TaskController::class, 'show']);
    Route::get('/projects', [ProjectController::class, 'index']);
    Route::get('/tasks', [TaskController::class, 'index']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/project_task/{id}', [TaskController::class, 'showUserTasksFromProject']);
    Route::put('/updateStatus', [TaskController::class, 'updateStatus']);
    Route::put('/project/updateStatus', [ProjectController::class, 'updateStatus']);
    Route::put('/userInfo/update', [UserController::class, 'userInfoUpdate']);
    Route::put('/userInfo/password', [UserController::class, 'updatePassword']);
});



Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
