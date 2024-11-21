<?php

namespace App\Http\Controllers;
use App\Models\Student;

use Illuminate\Http\Request;

class StudentController extends Controller
{
     // Show the form for registering a student
    public function create()
    {
        return inertia('RegisterStudent');
    }

    // Store the student data
    public function store(Request $request)
    {
        $request->validate([
            'reg_no' => 'required|unique:students,reg_no',
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'course' => 'required|string|max:255',
            'date_of_birth' => 'required|date',
            'sex' => 'required|in:Male,Female',
        ]);

        Student::create($request->all());

        return redirect()->route('students.create')->with('success', 'Student registered successfully!');
    }

    // Show the dashboard with the list of students
    public function index()
    {
        $students = Student::all(); // Fetch all registered students
        return inertia('Dashboard', ['students' => $students]);
    }
}
