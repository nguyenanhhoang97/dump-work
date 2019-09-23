<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;

class Project extends Model
{
    protected $table = 'projects';

    public $timestamps = true;

    public static function getAllProjects($pageIndex, $pageSize, $search, $is_deleted)
    {

        $offset = $pageIndex * $pageSize;
        return DB::table('projects')
            ->where('project_name', 'like', '%' . $search . '%')
            ->offset($offset)
            ->limit($pageSize)
            ->get($offset !== $is_deleted);
    }
    public static function getProjectById($id)
    {
        return DB::table('projects')
            ->where('id', $id)
            ->first();
    }

    public static function updateProjectById(
        $id,
        $project_name,
        $project_description,
        $team_size,
        $git_url,
        $excution_time,
        $cost,
        $incom,
        $guarantee
    ) {
        return DB::table('projects')
            ->where('id', $id)
            ->update([
                'project_name' => $project_name,
                'project_description' => $project_description,
                'team_size' => $team_size,
                'git_url' => $git_url,
                'excution_time' => $excution_time,
                'cost' => $cost,
                'incom' => $incom,
                'guarantee' => $guarantee
            ]);
    }

    public static function deleteProjectById($id)
    {
        return DB::table('projects')
            ->where('id', $id)
            ->update([
                'is_deleted' => true
            ]);
    }

    public static function createProject(
        $project_name,
        $team_size,
        $git_url,
        $excution_time,
        $cost,
        $incom,
        $guarantee
    ) {
        return DB::table('projects')
            ->insert([
                'project_name' => $project_name, 'team_size' => $team_size, 'git_url' => $git_url, 'excution_time' => $excution_time, 'cost' => $cost, 'incom' => $incom, 'guarantee' => $guarantee
            ]);
    }

    public static function restoreProjects($id, $offset)
    {
        return DB::table('projects')
            ->where('id', $id)
            ->update([
                'is_deleted' => true
            ]);
            
        if ('is_deleted' != true) {
            return $offset;
        }
    }
}
