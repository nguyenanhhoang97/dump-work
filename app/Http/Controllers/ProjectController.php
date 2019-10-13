<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Project;

class ProjectController extends Controller
{
    public function getProjectList(Request $req)
    {
        $pageIndex = (int)$req->pageIndex;
        $pageSize = (int)$req->pageSize;
        $search = $req->search;
        $projects = Project::getAllProjects($pageIndex, $pageSize, $search);
        $total = Project::countProject();
        return response()->json(array('projects' => $projects, 'total' => $total), 200);
    }
}
