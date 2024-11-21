<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StudentController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('RegisterStudent');
});

// Admin Dashboard (Requires Auth)
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [StudentController::class, 'index'])->name('dashboard');
});

// Student Registration
Route::get('/register-student', [StudentController::class, 'create'])->name('students.create');
Route::post('/register-student', [StudentController::class, 'store'])->name('students.store');
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
