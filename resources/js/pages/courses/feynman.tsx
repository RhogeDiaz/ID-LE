import React, { useState } from 'react';
import { Link } from '@inertiajs/react'; // Import Link from Inertia
import { FaHome, FaBook, FaCog, FaBars, FaUser, FaSignOutAlt } from 'react-icons/fa';

const feynman = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-white md:bg-[#2563EB] text-black md:text-white shadow-md z-10">
        <img src="/brandLogo.png" alt="Brand Logo" className="h-8 md:h-10" />
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
            className="flex items-center space-x-2 hover:text-gray-300"
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
          Feynman Technique – Deep Understanding
        </h1>

        {/* Table of Contents */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">Table of Contents</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <a href="#what-is-active-recall" className="text-blue-600 hover:underline">
                What is Feynman Technique
              </a>
            </li>
            <li>
              <a href="#why-is-active-recall-important" className="text-blue-600 hover:underline">
                Why is Feynman Technique Important
              </a>
            </li>
            <li>
              <a href="#how-active-recall-works" className="text-blue-600 hover:underline">
                How Feynman Technique Works
              </a>
            </li>
            <li>
              <a href="#how-to-apply-active-recall" className="text-blue-600 hover:underline">
                How to Apply Feynman Technique
              </a>
            </li>
          </ul>
        </div>

        {/* Topic 1 */}
        <div id="what-is-active-recall" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">What is Feynman Technique</h2>
          <p className="text-lg text-gray-700 text-justify">
            Feynman Technique is a learning method that emphasizes deep understanding over rote memorization.
            It involves simplifying complex concepts, explaining them in your own words, and identifying gaps in your understanding through teaching.
          </p>
        </div>
        <div className="video-container flex justify-center items-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/tkm0TNFzIeg?si=oosuKqQgoYsklQtF"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Topic 2 */}
        <div id="why-is-active-recall-important" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Why Feynman Technique Important</h2>
          <p className="text-lg text-gray-700 text-justify">
            Feynman Technique is important because it promotes deeper understanding and retention of information by actively engaging learners in the learning process.
            By simplifying complex concepts and explaining them in simple terms, individuals can identify knowledge gaps and reinforece their understanding, ultimately fostering more robust and lasting learning.
          </p>
        </div>

        {/* Topic 3 */}
        <div id="how-active-recall-works" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">How Feynman Technique Works</h2>
          <p className="text-lg text-gray-700 text-justify">
            Feynman technique works by understanding and explaining a concept in simple terms, as if teaching it to someone else.
            It involves actively engaging with the material, identifying knowledge gaps, and simplifying explanations until the concept becomes clear and intuitive.
          </p>
        </div>

        {/* Topic 4 */}
        <div id="how-to-apply-active-recall" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">How to Apply Feynman Technique</h2>
          <p className="text-lg text-gray-700 text-justify">
          The Feynman Technique is a powerful learning method that emphasizes deep understanding through simplification and teaching. 
          To apply it effectively, follow these steps:
          </p>
          <h3 className="text-xl font-semibold text-gray-800">1. Choose a Concept</h3>
            <p className="text-lg text-gray-700 text-justify">
            Select a topic you wish to learn or understand better.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">2. Teach It to a Child</h3>
            <p className="text-lg text-gray-700 text-justify">
            Explain the concept in simple terms, as if teaching it to a 12-year-old.
            Use clear language and avoid jargon.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">3. Identify Knowledge Gaps</h3>
            <p className="text-lg text-gray-700 text-justify">
            While explaining, note areas where your understanding is lacking or unclear
            </p>
            <h3 className="text-xl font-semibold text-gray-800">4. Review and Study</h3>
            <p className="text-lg text-gray-700 text-justify">
            Return to your study materials to fill in the identified gaps.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">5. Simplify and Clarify</h3>
            <p className="text-lg text-gray-700 text-justify">
            Rewrite your explanation, incorporating the new information and simplifying further if necessary.
            </p>
            <p className="text-lg text-gray-700 text-justify">
            By iterating through these steps, you reinforce your understanding and identify areas needing further study.
            This technique not only aids in mastering complex subjects but also enhances retention and recall.
            </p>
        </div>
      </div>
    </div>
  );
};

export default feynman;