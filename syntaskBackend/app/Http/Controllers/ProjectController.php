<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::all();
        return response()->json($projects);
    }

    public function store(Request $request)
    {
       $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'users.*.id' => 'required|exists:users,id',
        ]);

        $project = new Project();
        $project->title = $request->title;
        $project->description = $request->description;
        $project->users()->attach($request->users);
        $project->save();

        return response()->json(['message'=>'Project created successfully!'], 200);
    }
    public function update(Request $request, $id)
    {
       $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'users.*.id' => 'required|exists:users,id',

        ]);

        $project = Project::find($id);
        $project->title = $request->title;
        $project->description = $request->description;
        $project->users()->attach($request->users);
        $project->save();

        return response()->json(['message' => "Project updated successfully!"], 200);
    }
    public function delete($id)
    {
        $project = Project::find($id);
        $project->delete();

        return response()->json(['message' => "Project deleted successfully!"], 200);
    }
}
