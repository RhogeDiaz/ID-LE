import React, { useState } from 'react';
import { Link } from '@inertiajs/react'; // Import Link from Inertia
import { FaHome, FaBook, FaCog, FaBars, FaUser, FaSignOutAlt } from 'react-icons/fa';

const pomodoro = () => {
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
          Pomodoro Technique - Productivity Booster
        </h1>

        {/* Table of Contents */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">Table of Contents</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <a href="#what-is-active-recall" className="text-blue-600 hover:underline">
                What is Pomodoro Technique
              </a>
            </li>
            <li>
              <a href="#why-is-active-recall-important" className="text-blue-600 hover:underline">
                Why is Pomodoro Technique Important
              </a>
            </li>
            <li>
              <a href="#how-active-recall-works" className="text-blue-600 hover:underline">
                How Pomodoro Technique Works
              </a>
            </li>
            <li>
              <a href="#how-to-apply-active-recall" className="text-blue-600 hover:underline">
                How to Apply Pomodoro Technique
              </a>
            </li>
          </ul>
        </div>

        {/* Topic 1 */}
        <div id="what-is-active-recall" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">What is Pomodoro Technique</h2>
          <p className="text-lg text-gray-700 text-justify">
          The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.
          It involves breaking work into intervals, traditionally 25 minutes in length, known as "pomodoros," separated by short breaks of 5 minutes.
          After completing four pomodoros, a longer break of 15–30 minutes is taken.
          This technique aims to enhance focus and productivity by encouraging sustained concentration and preventing burnout.
          The method is named after the tomato-shaped kitchen timer ("pomodoro" in Italian) that Cirillo used during his university studies.
          </p>
        </div>
        <div className="video-container flex justify-center items-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/rhGeKLJr57o?si=HtyuMi2Xo_3bSYDQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Topic 2 */}
        <div id="why-is-active-recall-important" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Why is Pomodoro Technique Important</h2>
          <p className="text-lg text-gray-700 text-justify">
          The Pomodoro Technique is a time management method that enhances productivity by breaking work into focused intervals, typically 25 minutes long, followed by short breaks.
          This approach helps reduce procrastination by making tasks feel more manageable and less overwhelming.
          By concentrating on a single task during each interval, it minimizes distractions and improves focus.
          Regular breaks prevent mental fatigue, maintaining high levels of concentration throughout the day. 
          Additionally, this technique encourages better planning and estimation of how long tasks take, leading to more realistic goal setting and reduced stress.
          Overall, the Pomodoro Technique promotes a balanced work-rest rhythm, enhancing both efficiency and well-being.
          </p>
        </div>

        {/* Topic 3 */}
        <div id="how-active-recall-works" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">How Pomodoro Technique Works</h2>
          <p className="text-lg text-gray-700 text-justify">
          To apply the Pomodoro Technique, start by selecting a specific task to work on.
          Set a timer for 25 minutes and focus solely on that task until the timer rings.
          Afterward, take a 5-minute break to rest and recharge.
          Repeat this cycle, and after completing four pomodoros, take a longer break of 15–30 minutes.
          This structured approach helps manage time effectively, improves concentration, and reduces mental fatigue.
          By working in short, focused intervals, it becomes easier to maintain motivation and track progress throughout the day.
          </p>
          <div className="flex justify-center items-center">
            <img src="/images/pomo.jpg" width="500" height="250" alt="Logo" />
          </div>
        </div>

        {/* Topic 4 */}
        <div id="how-to-apply-active-recall" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">How to Apply Pomodoro Technique</h2>
          <p className="text-lg text-gray-700 text-justify">
            The Pomodoro Technique is a time management method that enhances focus and productivity by breaking work into intervals.
            Here's how to apply it:
          </p>
          <h3 className="text-xl font-semibold text-gray-800">1. Choose a Task</h3>
            <p className="text-lg text-gray-700 text-justify">
            Select a specific task or project you want to work on. It can be anything from studying for an exam to completing a work assignment.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">2. Set a timer</h3>
            <p className="text-lg text-gray-700 text-justify">
            Set a timer for 25 minutes. This is known as one "Pomodoro." You can use a kitchen timer, a smartphone app, or any timer you prefer.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">3. Work on the task</h3>
            <p className="text-lg text-gray-700 text-justify">
            Focus solely on the task until the timer rings. Avoid distractions and interruptions during this time.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">4. Take a short break</h3>
            <p className="text-lg text-gray-700 text-justify">
            When the timer goes off, take a 5-minute break. Use this time to relax, stretch, or do something enjoyable.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">5.  Repeat</h3>
            <p className="text-lg text-gray-700 text-justify">
            After the break, set the timer for another 25 minutes and repeat the process. After completing four Pomodoros, take a longer break of 15–30 minutes.
            </p>
        </div>
      </div>
    </div>
  );
};

export default pomodoro;