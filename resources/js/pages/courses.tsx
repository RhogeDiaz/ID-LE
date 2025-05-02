import React from 'react';
import { Link } from '@inertiajs/react';

const Courses = () => {
  const courseList = [
    { name: 'Active Recall', route: 'activeRecall' },
    { name: 'Feynman Technique', route: 'feynman' },
    { name: 'Interleaving', route: 'interleaving' },
    { name: 'Pomodoro Technique', route: 'pomodoro' },
    { name: 'Priming', route: 'priming' },
    { name: 'Spaced Repetition', route: 'spacedRep' },
  ];

  return (
    <div className="p-6 h-screen">
      <h1 className="text-3xl font-bold mb-4">Courses</h1>
      <ul className="space-y-2">
        {courseList.map((course, index) => (
          <li key={index}>
            <Link
              href={route(course.route)}
              className="text-blue-600 hover:underline"
            >
              {course.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;