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
        $project = $req->all();
        $project['id'] = (int) $project['id'];
        $project['execution_time'] = floatval($project['execution_time']);
        $project['cost'] = floatval($project['cost']);
        $project['incom'] = floatval($project['incom']);
        $project['guarantee'] = floatval($project['guarantee']);
        $result = Project::updateProjectById($project['id'], $project['project_name'], $project['project_description'], $project['team_size'], $project['git_url'], $project['execution_time'], $project['cost'], $project['incom'], $project['guarantee']);
        if ($result == 1) {
            $updatedProject = Project::getProjectById($project['id']);
            return response()->json(array('message' => 'Updated project successfully', 'project' => $updatedProject), 200);
        } else {
            return response()->json(array('message' => 'Cannot update project successfully'), 200);
        }
    }

    public function deleteProjectById(Request $req)
    {
        $id = (int) $req->id;
        $project = Project::deleteProjectById($id);
        if ($project == 1) {
            $deletedProject = Project::getProjectById($id);
            return response()->json(array('message' => 'Deleted project successfully', 'project' => $deletedProject), 200);
        } else {
            return response()->json(array('message' => 'Cannot delete project successfully'), 200);
        }
    }

    public function createProject(Request $req)
    {
        $project = $req->all();
        $project['execution_time'] = floatval($project['execution_time']);
        $project['cost'] = floatval($project['cost']);
        $project['incom'] = floatval($project['incom']);
        $project['guarantee'] = floatval($project['guarantee']);
        $result = Project::createProject($project['project_name'], $project['project_description'], $project['team_size'], $project['git_url'], $project['execution_time'], $project['cost'], $project['incom'], $project['guarantee']);
        if ($result == true) {
            return response()->json(array('message' => 'Created project successfully'), 200);
        } else {
            return response()->json(array('message' => 'Cannot create project successfully'), 200);
        }
    }
}
