import React, { useState } from 'react';
import { Link } from '@inertiajs/react'; // Import Link from Inertia
import { FaHome, FaBook, FaCog, FaBars, FaUser, FaSignOutAlt } from 'react-icons/fa';

const SpacedRep = () => {
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
          Spaced Repetition - Interval Learning
        </h1>

        {/* Table of Contents */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">Table of Contents</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <a href="#what-is-active-recall" className="text-blue-600 hover:underline">
                What is Spaced Repetition
              </a>
            </li>
            <li>
              <a href="#why-is-active-recall-important" className="text-blue-600 hover:underline">
                Why is Spaced Repetition Important
              </a>
            </li>
            <li>
              <a href="#how-active-recall-works" className="text-blue-600 hover:underline">
                How Spaced Repetition Works
              </a>
            </li>
            <li>
              <a href="#how-to-apply-active-recall" className="text-blue-600 hover:underline">
                How to Apply Spaced Repetition
              </a>
            </li>
          </ul>
        </div>

        {/* Topic 1 */}
        <div id="what-is-active-recall" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">What is Spaced Repetition</h2>
          <p className="text-lg text-gray-700 text-justify">
          Spaced repetition is a scientifically backed learning technique that enhances long-term memory retention by reviewing information at strategically increasing intervals. Rather than cramming all at once, this method spaces out study sessions, allowing the brain to consolidate knowledge more effectively.
          </p>
          <p className="text-lg text-gray-700 text-justify">
          The concept is rooted in the spacing effect, first identified by psychologist Hermann Ebbinghaus, which demonstrates that information is more easily recalled when study sessions are spaced over time . By revisiting material just as you're about to forget it, spaced repetition strengthens neural connections, making future recall more efficient.
          </p>
          <p className="text-lg text-gray-700 text-justify">
          This technique is particularly effective for subjects requiring memorization, such as language vocabulary, medical terms, or historical dates. Tools like flashcards, especially when used with apps like Anki or SuperMemo, can automate the scheduling of reviews based on your performance, optimizing the learning process.
          </p>
          <p className="text-lg text-gray-700 text-justify">
          Incorporating spaced repetition into your study routine can lead to more efficient learning and better long-term retention of information.
          </p>

        </div>
        <div className="video-container flex justify-center items-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/cVf38y07cfk?si=P3hG8RmjejBEt5Nt"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Topic 2 */}
        <div id="why-is-active-recall-important" className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Why is Spaced Repetition important</h2>
          <p className="text-lg text-gray-700 text-justify">
          Spaced repetition is a powerful learning technique that enhances long-term memory retention by strategically scheduling review sessions at increasing intervals. Its importance in effective studying stems from several key benefits:
          </p>
            <h3 className="text-xl font-semibold text-gray-800">1. Enhanced Long-Term Retention</h3>
            <p className="text-lg text-gray-700 text-justify">
            By revisiting information just as it's about to be forgotten, spaced repetition reinforces memory, making it easier to recall information over extended periods.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">2. Efficient Use of Study Time</h3>
            <p className="text-lg text-gray-700 text-justify">
            This method reduces the total time spent studying by focusing on material that is on the verge of being forgotten, thereby minimizing redundant reviews.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">3. Combats the Forgetting Curve</h3>
            <p className="text-lg text-gray-700 text-justify">
            Spaced repetition directly addresses the natural decline in memory retention over time, known as the forgetting curve, by refreshing knowledge before it fades.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">4. Improved Transfer of Knowledge</h3>
            <p className="text-lg text-gray-700 text-justify">
            Regularly reviewing material at spaced intervals not only aids in memorization but also enhances the ability to apply knowledge in different contexts.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">5. Supports Active Recall</h3>
            <p className="text-lg text-gray-700 text-justify">
            This technique encourages the active retrieval of information, which strengthens neural connections and reinforces learning.
            </p>
        </div>

        {/* Topic 3 */}
        <div id="how-active-recall-works" className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">How Spaced Repetition Works</h2>
          <p className="text-lg text-gray-700 text-justify">
          Spaced repetition is a learning technique that enhances long-term memory retention by reviewing information at strategically increasing intervals.
          Instead of cramming, this method spaces out study sessions, allowing the brain to consolidate knowledge more effectively.
          The approach is grounded in the psychological "spacing effect," which suggests that information is more easily recalled when study sessions are spaced over time rather than massed together.
          By revisiting material just before it's likely to be forgotten, spaced repetition strengthens neural connections, making future recall more efficient.
          This technique is particularly effective for subjects requiring memorization, such as language vocabulary, medical terms, or historical dates.
          Tools like flashcards, especially when used with apps like Anki or SuperMemo, can automate the scheduling of reviews based on your performance, optimizing the learning process.
          Incorporating spaced repetition into your study routine can lead to more efficient learning and better long-term retention of information.
          </p>
          <div className="flex justify-center items-center">
            <img src="/images/spacedRep.png" width="500" height="250" alt="Logo" />
          </div>
        </div>

        {/* Topic 4 */}
        <div id="how-to-apply-active-recall" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">How to Apply Spaced Repetition</h2>
          <p className="text-lg text-gray-700 text-justify">
            Applying spaced repetition involves reviewing information at strategically increasing intervals to enhance long-term memory retention.
            Here's how you can implement this technique:
          </p>
          <h3 className="text-xl font-semibold text-gray-800">1. Break Down the Material</h3>
            <p className="text-lg text-gray-700 text-justify">
            Divide the content into manageable chunks, such as flashcards or key concepts. This makes it easier to review and retain information.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">2. Initial Review</h3>
            <p className="text-lg text-gray-700 text-justify">
              Study the material thoroughly for the first time to establish a foundational understanding. This initial exposure is crucial for later recall.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">3. Schedule Reviews</h3>
            <p className="text-lg text-gray-700 text-justify">
            Plan subsequent review sessions at increasing intervals—e.g., after 1 day, 3 days, 7 days, and so on.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">4.  Active Recall</h3>
            <p className="text-lg text-gray-700 text-justify">
            During each review, test yourself by recalling the information without looking at the material.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">5.  Adjust Based on Performance</h3>
            <p className="text-lg text-gray-700 text-justify">
            If you recall the information easily, extend the interval before the next review. If not, shorten the interval.
            </p>
        </div>
      </div>
    </div>
  );
};

export default SpacedRep;