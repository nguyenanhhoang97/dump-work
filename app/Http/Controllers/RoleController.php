<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Role;

class RoleController extends Controller
{
    public function getRoleList(Request $req)
    {
        $pageIndex = (int) $req->pageIndex;
        $pageSize = (int) $req->pageSize;
        $search = $req->search;
        $roles = Role::getAllRoles($pageIndex, $pageSize, $search);
        $total = Role::countRole($search);
        return response()->json(array('roles' => $roles, 'total' => $total), 200);
    }
}
