<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Project;

class DashboardController extends Controller
{
    public function getDashboardData(Request $req)
    {
        $totalProject = Project::countProject();
        $totalUser = User::countUserWithoutConditon();
        return response()->json(array('totalProject' => $totalProject, 'totalUser' => $totalUser), 200);
    }
}
