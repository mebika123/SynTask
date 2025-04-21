<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\ProjectUser;
use App\Models\Task;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function userDashboard()
    {
        $user = Auth::user();

        $activeProjects = Project::whereHas('users', function ($query) use ($user) {
            $query->where('user_id', $user->id);
        })->where('status', 'active')->get();

        $dashboardData = [
            // 'totalProjectAssigned'    => $user->projectUsers()->count(), 
            'totalTasks'     => $user->tasks->count(),
            'pendingTasks'   => $user->tasks->where('status', 'pending')->count(),
            'activeTasks'    => $user->tasks->where('status', 'active')->count(),
            'completedTasks' => $user->tasks->where('status', 'completed')->count(),
        ];

        return response()->json([
            'data'    => $dashboardData,
            'projects' => $activeProjects
        ]);
    }
    public function dashboard()
    {
        $user = Auth::user();

        $activeProjects = Project::where('status', 'active')->get();

        return response()->json([
            'projects' => $activeProjects
        ]);
    }
}
