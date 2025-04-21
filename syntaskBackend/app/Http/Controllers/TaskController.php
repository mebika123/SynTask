<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        if ($user->role == 'admin') {
            $projects = Project::with('tasks')->get();
        } else {
            $projects = $user->projects->with('tasks')->get();
        }
        return response()->json($projects);
    }
    public function show($id)
    {
        $task = Task::with('user', 'project', 'category')->find($id);
        return response()->json(['task' => $task]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'due_date' => 'required|date|after:today',
            'user' => 'required|exists:users,id',
            'project' => 'required|exists:projects,id',
            'category' => 'required|exists:categories,id',

        ]);

        $task = new Task();
        $task->title = $request->title;
        $task->description = $request->description;
        $task->due_date = $request->due_date;
        $task->user_id = $request->user;
        $task->category_id = $request->category;
        $task->project_id = $request->project;
        $task->save();

        return response()->json(['status' => true, 'message' => 'Task created successfully!'], 200);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'due_date' => 'required|date|after:today',
            'user' => 'required|exists:users,id',
            'project' => 'required|exists:projects,id',
            'category' => 'required|exists:categories,id',

        ]);

        $task = Task::find($id);
        $task->title = $request->title;
        $task->description = $request->description;
        $task->due_date = $request->due_date;
        $task->user_id = $request->user;
        $task->category_id = $request->category;
        $task->project_id = $request->project;
        $task->save();

        return response()->json(['status' => true, 'message' => "Task updated successfully!"], 200);
    }

    public function delete($id)
    {
        $task = Task::find($id);
        $task->delete();
        return response()->json(['message' => "Task deleted successfully!"], 200);
    }
    public function showUserTasksFromProject($id)
    {
        $user = Auth::user();
        $tasks = Task::with('category')->where('project_id', $id)
            ->where('user_id', $user->id)
            ->get();

        return response()->json([
            'status' => true,
            'tasks' => $tasks
        ]);
    }

    public function updateStatus(Request $request)
    {
        $request->validate([
            'status' => 'required|in:pending,active,completed',
            'task_id' => 'required'
        ]);
    
        $task = Task::where('user_id', $request->user()->id)
                    ->findOrFail($request->task_id);
    
        if ($request->status === 'active' && $task->status !== 'pending') {
            return response()->json([
                'status' => false,
                'message' => 'Only pending tasks can be started.'
            ], 422);
        }
    
        if ($request->status === 'completed' && $task->status !== 'active') {
            return response()->json([
                'status' => false,
                'message' => 'Only active tasks can be completed.'
            ], 422);
        }
    
        $task->status = $request->status;
        $task->save();
    
        return response()->json([
            'status' => true,
            'message' => 'Task status updated successfully!'
        ]);
    }
}
