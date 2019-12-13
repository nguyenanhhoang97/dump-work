<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
  public function getUserList(Request $req)
  {
    $pageIndex = (int) $req->pageIndex;
    $pageSize = (int) $req->pageSize;
    $search = $req->search;
    $users = User::getAllUsers($pageIndex, $pageSize, $search);
    $total = User::countUser($search);
    return response()->json(array('users' => $users, 'total' => $total), 200);
  }

  public function create(Request $req)
  {
    $name = $req->name;
    $email = $req->email;
    $password = $req->password;
    return User::create([
      'name' => $name,
      'email' => $email,
      'password' => bcrypt($password),
    ]);
  }

  public function updateUserById(Request $req)
  {
    $id = (int) $req->id;
    $name = $req->name;
    $email = $req->email;
    $result = User::updateUserById(
      $id,
      $name,
      $email
    );
    if ($result == 1) {
      $updatedUser = User::getUserById($id);
      return response()->json(array('message' => 'Updated user successfully', 'user' => $updatedUser), 200);
    } else {
      return response()->json(array('message' => 'Cannot update user'), 200);
    }
  }
}
