<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;

class Role extends Model
{
    protected $table = 'roles';
    
    public $timestamps = true;

    public static function getAllRoles($pageIndex, $pageSize, $search)
    {
        $offset = $pageIndex * $pageSize;
        return DB::table('roles')
            ->where('role_name', 'like', '%' . $search . '%')
            ->offset($offset)
            ->limit($pageSize)
            ->orderBy('id', 'desc')
            ->get();
    }

    public static function countRole($search)
    {
        return DB::table('roles')
            ->where('role_name', 'like', '%' . $search . '%')
            ->count();
    }
}
