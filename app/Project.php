<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;

class Project extends Model
{
    protected $table = 'projects';

    public $timestamps = true;

    public static function getAllProjects($pageIndex, $pageSize, $search)
    {
        $offset = $pageIndex * $pageSize;
        return DB::table('projects')
            ->where('project_name', 'like', '%' . $search . '%')
            ->offset($offset)
            ->limit($pageSize)
            ->get();
    }
}
