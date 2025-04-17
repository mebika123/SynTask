<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index()
    {
        $projects = Project::with('tasks')->get();
        return response()->json($projects);
    }

    public function store(Request $request)
    {
         $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'due_date' => 'required|date|gt:today',
            'user_id' => 'required|exists:users,id',
            'project_id' => 'required|exists:projects,id',
            'category_id' => 'required|exists:categories,id',
            
        ]);

        $task = new Task();
        $task->title = $request->title;
        $task->description = $request->description;
        $task->due_date = $request->due_date;
        $task->user_id = $request->user_id;
        $task->category_id = $request->category_id;
        $task->project_id = $request->project_id;
        $task->save();

        return response()->json(['message'=>'Task created successfully!'], 200);
    }
    public function update(Request $request,$id)
    {
         $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'due_date' => 'required|date|gt:today',
            'user_id' => 'required|exists:users,id',
            'project_id' => 'required|exists:projects,id',
            'category_id' => 'required|exists:categories,id',
            
        ]);

        $task = Task::find($id);
        $task->title = $request->title;
        $task->description = $request->description;
        $task->due_date = $request->due_date;
        $task->user_id = $request->user_id;
        $task->category_id = $request->category_id;
        $task->project_id = $request->project_id;
        $task->save();

        return response()->json(['message' => "Task updated successfully!"], 200);
    }

    public function delete($id)
    {
        $task = Task::find($id);
        $task->delete();
        return response()->json(['message' => "Task deleted successfully!"], 200);

    }
}
