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
        // if($user->role == 'admin'){
        $projects = Project::all();
        // }
        // else {
        //     $projects = $user->projects()->get();
        // }
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
        $project = Project::with('users')->find($id);
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
}
