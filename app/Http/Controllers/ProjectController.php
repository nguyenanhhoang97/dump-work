<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Project;

class ProjectController extends Controller
{
    public function getProjectList(Request $req)
    {
        $pageIndex = (int) $req->pageIndex;
        $pageSize = (int) $req->pageSize;
        $search = $req->search;
        $projects = Project::getAllProjects($pageIndex, $pageSize, $search);
        $total = Project::countProject();
        return response()->json(array('projects' => $projects, 'total' => $total), 200);
    }

    public function getProjectById(Request $req)
    {
        $id = (int) $req->id;
        $project = Project::getProjectById($id);
        return response()->json(array('project' => $project), 200);
    }

    public function updateProjectById(Request $req)
    {
        // dd($req->all());
        $id = (int) $req->id;
        $project_name = $req->project_name;
        $project_description = $req->project_description;
        $team_size = (float) $req->team_size;
        $execution_time = (float) $req->execution_time;
        $git_url = $req->git_url;
        $cost = (float) $req->cost;
        $incom = (float) $req->incom;
        $guarantee = (float) $req->guarantee;
        $project = Project::updateProjectById($id, $project_name, $project_description, $team_size, $git_url, $execution_time, $cost, $incom, $guarantee);
        return response()->json(array('project' => $project), 200);
    }

    public function deleteProjectById(Request $req)
    { 
        $id = (int)$req->id;
        $project = Project::deleteProjectById($id);
        return response()->json(array('project' => $project), 200);
    }

    public function createProject(Request $req)
    {
        $project = $req->all();
        $project['execution_time'] = floatval($project['execution_time']);
        $project['cost'] = floatval($project['cost']);
        $project['incom'] = floatval($project['incom']);
        $project['guarantee'] = floatval($project['guarantee']);
        $result = Project::createProject($project['project_name'], $project['project_description'], $project['team_size'], $project['git_url'], $project['execution_time'], $project['cost'], $project['incom'], $project['guarantee']);
        return response()->json(array('project' => $result), 200);
    }
}
