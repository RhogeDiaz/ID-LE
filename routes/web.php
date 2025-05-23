<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('auth/login');
})->name('home');

Route::get('/courses', function () {
    return Inertia::render('courses'); // Ensure this route exists
})->name('courses');

Route::prefix('courses')->group(function () {
    Route::get('/activeRecall', function () {
        return Inertia::render('courses/activeRecall');
    })->name('activeRecall');

    Route::get('/feynman', function () {
        return Inertia::render('courses/feynman');
    })->name('feynman');

    Route::get('/interleaving', function () {
        return Inertia::render('courses/interleaving');
    })->name('interleaving');

    Route::get('/pomodoro', function () {
        return Inertia::render('courses/pomodoro');
    })->name('pomodoro');

    Route::get('/mindMap', function () {
        return Inertia::render('courses/mindMap');
    })->name('mindMap');

    Route::get('/priming', function () {
        return Inertia::render('courses/priming');
    })->name('priming');

    Route::get('/spacedRep', function () {
        return Inertia::render('courses/spacedRep');
    })->name('spacedRep');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('settings', function () {
        return Inertia::render('settings'); // Add route for settings page
    })->name('settings');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
