<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        return response()->json($categories);
    }

    public function store(Request $request)
    {
         $request->validate([
            'title' => 'required',
        ]);

        $category = new Category();
        $category->title = $request->title;
        $category->save();

        return response()->json(['status' => true,'message'=>'Category created successfully!'], 200);
    }
    public function update(Request $request, $id)
    {
         $request->validate([
            'title' => 'required',
        ]);

        $category = Category::find($id);
        $category->title = $request->title;
        $category->save();

        return response()->json(['status'=>true,'message' => "Category updated successfully!"], 200);
    }
    public function delete($id)
    {
        $category = Category::find($id);
        $category->delete();

        return response()->json(['status' => true,'message' => "Category deleted successfully!"], 200);
    }
    public function show($id)
    {
        $category = Category::find($id);

        return response()->json(['category'=>$category], 200);
    }
}
