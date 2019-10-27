<?php

use App\Http\Controllers\ProjectController;
use Illuminate\Http\Request;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::prefix('auth')->group(function () {
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');
    Route::get('refresh', 'AuthController@refresh');
    Route::group(['middleware' => 'auth:api'], function(){
        Route::get('/user', function (Request $request) {
            return $request->user();
        });
    });
});

Route::get('/project/list', 'ProjectController@getProjectList');
Route::get('/project/detail', 'ProjectController@getProjectById');
Route::post('/project/update', 'ProjectController@updateProjectById');
Route::get('/project/delete', 'ProjectController@deleteProjectById');
Route::post('/project/create', 'ProjectController@createProject');

