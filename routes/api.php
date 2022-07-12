<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Chat\WorkspaceContoller;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([

    'middleware' => 'api',

], function () {

    Route::group([
        'prefix' => 'auth'
    ], function () {


        Route::post('sign_up', [AuthController::class,'signUp']);
        Route::post('login', [AuthController::class,'login']);
        Route::post('logout', [AuthController::class,'logout']);
        Route::post('refresh', [AuthController::class,'refresh']);
        Route::post('me', [AuthController::class,'me']);

    });

    Route::group([
        'prefix' => 'workspace'
    ], function () {

        Route::get('/', [WorkspaceContoller::class,'index']);

        Route::post('/store', [WorkspaceContoller::class,'store']);

        Route::delete('/destroy/{workspace}', [WorkspaceContoller::class,'destroy']);

    });

});


