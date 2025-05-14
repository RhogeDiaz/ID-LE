import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { FaHome, FaBook, FaCog, FaBars, FaUser, FaSignOutAlt, FaArrowRight } from 'react-icons/fa';


const Courses = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const courseList = [
    { name: 'Active Recall', route: 'activeRecall', description: 'A study method where you actively retrieve information from memory', image: '/activeRecall.png' },
    { name: 'Feynman Technique', route: 'feynman', description: 'A learning method where you explain a concept in simple terms, as if teaching it to someone else.', image: '/feynman.png' },
    { name: 'Interleaving', route: 'interleaving', description: 'A process where students mix multiple subjects or topics while they study to improve their learning.', image: '/interleaving.png' },
    { name: 'Pomodoro Technique', route: 'pomodoro', description: 'A time management method that involves working in focused 25-minute intervals.', image: '/pomodoro.png' },
    { name: 'Priming', route: 'priming', description: 'A teaching strategy that involves allowing students to preview what is coming up in order to prepare them.', image: '/priming.png' },
    { name: 'Spaced Repetition', route: 'spacedRep', description: 'A learning technique where you review material at increasing intervals to improve long-term retention.', image: '/spacedRep.png' },
    { name: 'Mind Mapping', route: 'mindMap', description: 'A visual method of organizing ideas by branching related concepts from a central topic.', image: '/mindmap.png' },
  ];

  return (
    <div className="p-6 min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-white md:bg-[#2563EB] text-black md:text-white shadow-md z-10">
          <div className="flex items-center space-x-2">
              <img src="/brandLogo.png" alt="Brand Logo" className="h-8 md:h-10" />
              <span className="hidden md:block text-2xl font-semibold">SuperLearning</span>
          </div>
          <button
              className="text-black text-2xl md:text-white md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
              <FaBars />
          </button>
          <div className="hidden md:flex items-center space-x-4">
              <Link
                  href={route('dashboard')} 
                  className="flex items-center space-x-2 hover:text-gray-200"
              >
                  <FaHome />
                  <span>Home</span>
              </Link>
              <Link
                  href={route('courses')}
                  className="flex items-center space-x-2 hover:text-gray-200"
              >
                  <FaBook />
                  <span>Courses</span>
              </Link>
              <Link
                  href={route('settings')}
                  className="flex items-center space-x-2 hover:text-gray-200"
              >
                  <FaCog />
                  <span>Settings</span>
              </Link>
          </div>
      </header>

      {/* Sliding Menu for Mobile */}
      <div
          className={`fixed top-0 right-0 h-full w-64 bg-[#2563EB] text-white shadow-lg transform ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 z-20`}
      >
          <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setIsMenuOpen(false)}
          >
              &times;
          </button>
          <div className="mt-16 space-y-6 p-4">
              <Link
                  href={route('dashboard')} 
                  className="flex items-center space-x-2 hover:text-gray-300"
              >
                  <FaHome />
                  <span>Home</span>
              </Link>
              <Link
                  href={route('courses')} 
                  className="flex items-center space-x-2 hover:text-gray-300"
              >
                  <FaBook />
                  <span>Courses</span>
              </Link>
              <Link
                  href={route('settings')}
                  className="flex items-center space-x-2 hover:text-gray-300"
              >
                  <FaCog />
                  <span>Settings</span>
              </Link>
              <button className="flex items-center space-x-2 hover:text-gray-300">
                  <FaSignOutAlt />
                  <span>Log Out</span>
              </button>
          </div>
          <div className="absolute bottom-4 left-0 w-full text-center">
              <p className="text-lg font-semibold">SuperLearning</p>
              <p className="text-sm">2025</p>
          </div>
      </div>


      <h1 className="pt-16 text-3xl text-center text-black font-bold mb-16">Courses</h1>
      <div className="flex flex-wrap gap-16 justify-center">
        {courseList.map((course, index) => (
          <div
            key={index}
            className="min-w-[150px] md:min-w-[200px] max-w-32 p-3 md:p-4 bg-white border-2 border-black rounded-xl flex flex-col justify-between shadow-[0px_4px_6px_rgba(0,0,0,0.1)]"
          >
            <div>
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-24 md:h-32 object-cover rounded-md mb-2"
              />
              <h3 className="text-md md:text-lg font-semibold">{course.name}</h3>
              <p className="text-xs md:text-sm text-gray-700 text-justify">{course.description}</p>
            </div>
            <Link
              href={route(course.route)}
              className="mt-3 md:mt-4 inline-block px-3 md:px-8 py-1.5 md:py-2 bg-[#2563EB] text-white rounded-4xl text-xs md:text-sm hover:bg-blue-700 self-center"
            >
              Open Course
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;