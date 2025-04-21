<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProjectController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        // Base query for projects, with two counts:
        //  - tasks_count: total tasks
        //  - completed_tasks_count: tasks where status = 'completed'
        $projectQuery = Project::withCount([
            'tasks as tasks_count',
            'tasks as completed_tasks_count' => function ($q) {
                $q->where('status', 'completed');
            }
        ]);

        // If not admin, scope down to only the user’s projects:
        if ($user->role !== 'admin') {
            // Assumes User model has projects() relationship defined as belongsToMany
            $projectQuery = $user->projects()
                ->withCount([
                    'tasks as tasks_count',
                    'tasks as completed_tasks_count' => function ($q) {
                        $q->where('status', 'completed');
                    }
                ]);
        }

        $projects = $projectQuery->get();

        return response()->json($projects);
    }


    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'users' => 'required|array|min:1',
            'users.*' => 'required|exists:users,id',
        ]);

        $project = new Project();
        $project->title = $request->title;
        $project->description = $request->description;
        $project->save(); // Save first to generate ID

        $project->users()->attach($request->users); // Then attach users

        return response()->json([
            'message' => 'Project created successfully!',
            'status' => true
        ], 200);
    }

    public function show($id)
    {
        $project = Project::with('users')
            ->withCount([
                // total tasks
                'tasks as tasks_count',
                // only completed tasks
                'tasks as completed_tasks_count' => function ($q) {
                    $q->where('status', 'completed');
                },
            ])
            ->findOrFail($id);
    
        return response()->json(['project' => $project], 200);
    }
    

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'users' => 'required|array|min:1',
            'users.*' => 'required|exists:users,id',
        ]);

        $project = Project::findOrFail($id);

        $project->title = $request->title;
        $project->description = $request->description;
        $project->save();

        // Sync users (remove old ones, add new ones)
        $project->users()->sync($request->users);

        return response()->json([
            'message' => "Project updated successfully!",
            'status' => true
        ], 200);
    }

    public function delete($id)
    {
        $project = Project::find($id);
        $project->users()->detach();
        $project->delete();

        return response()->json(['message' => "Project deleted successfully!"], 200);
    }

    public function removeUserFromProject($projectId, $userId)
    {
        $project = Project::findOrFail($projectId);

        $project->users()->detach($userId);

        return response()->json(['message' => 'User removed from project successfully.'], 200);
    }
    public function updateStatus(Request $request)
    {
        $request->validate([
            'status' => 'required|in:pending,active,completed',
            'project_id' => 'required'
        ]);
    
        $project = Project::findOrFail($request->project_id);
    
        if ($request->status === 'active' && $project->status !== 'pending') {
            return response()->json([
                'status' => false,
                'message' => 'Only pending projects can be started.'
            ], 422);
        }
    
        if ($request->status === 'completed' && $project->status !== 'active') {
            return response()->json([
                'status' => false,
                'message' => 'Only active projects can be completed.'
            ], 422);
        }
    
        $project->status = $request->status;
        $project->save();
    
        return response()->json([
            'status' => true,
            'message' => 'project status updated successfully!'
        ]);
    }
}
