import React, { useState } from 'react';
import { Link } from '@inertiajs/react'; // Import Link from Inertia
import { FaHome, FaBook, FaCog, FaBars, FaUser, FaSignOutAlt } from 'react-icons/fa';

const ActiveRecall = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white">
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
            href={route('dashboard')} // Redirect "Home" button to the dashboard
            className="flex items-center space-x-2 hover:text-gray-200"
          >
            <FaHome />
            <span>Home</span>
          </Link>
          <Link
            href={route('courses')} // Convert "Courses" button to a link
            className="flex items-center space-x-2 hover:text-gray-200"
          >
            <FaBook />
            <span>Courses</span>
          </Link>
          <Link
            href={route('settings')} // Use Inertia's Link for navigation
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
            href={route('dashboard')} // Redirect "Home" button to the dashboard
            className="flex items-center space-x-2 hover:text-gray-300"
          >
            <FaHome />
            <span>Home</span>
          </Link>
          <Link
            href={route('courses')} // Convert "Courses" button to a link
            className="flex items-center space-x-2 hover:text-gray-300"
          >
            <FaBook />
            <span>Courses</span>
          </Link>
          <Link
            href={route('settings')} // Use Inertia's Link for navigation
            className="flex items-center space-x-2 hover:text-gray-300"
          >
            <FaCog />
            <span>Settings</span>
          </Link>
          <button
            onClick={() => window.location.href = route('home')} // Redirect to home
            className="flex items-center space-x-2 hover:text-gray-300 hover:cursor-pointer"
          >
            <FaSignOutAlt />
            <span>Log Out</span>
          </button>
        </div>
        <div className="absolute bottom-4 left-0 w-full text-center">
          <p className="text-lg font-semibold">SuperLearning</p>
          <p className="text-sm">2025</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-16 md:pt-20 p-6 space-y-8">
        <h1 className="text-4xl pt-8 font-bold text-gray-800 text-center">
          Active Recall – The Memory Multiplier
        </h1>

        {/* Table of Contents */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">Table of Contents</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <a href="#what-is-active-recall" className="text-blue-600 hover:underline">
                What is Active Recall
              </a>
            </li>
            <li>
              <a href="#why-is-active-recall-important" className="text-blue-600 hover:underline">
                Why is Active Recall Important
              </a>
            </li>
            <li>
              <a href="#how-active-recall-works" className="text-blue-600 hover:underline">
                How Active Recall Works
              </a>
            </li>
            <li>
              <a href="#how-to-apply-active-recall" className="text-blue-600 hover:underline">
                How to Apply Active Recall
              </a>
            </li>
          </ul>
        </div>

        {/* Topic 1 */}
        <div id="what-is-active-recall" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">What is Active Recall</h2>
          <p className="text-lg text-gray-700 text-justify">
            Active recall is a learning technique that involves actively retrieving information from memory rather than passively reviewing it. 
            This process strengthens memory retention and helps you better understand the material.
          </p>
        </div>
        <div className="video-container flex justify-center items-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/MrMAKPGjXZo?si=ciQM0gf5k2wmGpjV"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Topic 2 */}
        <div id="why-is-active-recall-important" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Why is Active Recall Important</h2>
          <p className="text-lg text-gray-700 text-justify">
            Active recall is important because it enhances long-term memory retention, improves understanding of the material, and helps 
            identify gaps in knowledge. It is a proven method for effective learning and studying.
          </p>
          <div className="flex justify-center items-center">
            <img src="/images/actRec.png" width="500" height="250" alt="Logo" />
          </div>
        </div>

        {/* Topic 3 */}
        <div id="how-active-recall-works" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">How Active Recall Works</h2>
          <p className="text-lg text-gray-700 text-justify">
            Active recall works by challenging your brain to retrieve information, which strengthens neural connections. This process 
            reinforces memory pathways and makes it easier to recall the information in the future.
          </p>
        </div>

        {/* Topic 4 */}
        <div id="how-to-apply-active-recall" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">How to Apply Active Recall</h2>
          <p className="text-lg text-gray-700 text-justify">
            You can apply active recall by using techniques such as:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-justify">
            <li>Using flashcards to test yourself on key concepts.</li>
            <li>Answering practice questions without referring to notes.</li>
            <li>Teaching the material to someone else.</li>
            <li>Writing down everything you remember about a topic, then reviewing your notes to fill in gaps.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ActiveRecall;