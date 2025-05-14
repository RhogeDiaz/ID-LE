import React, { useState } from 'react';
import { Link } from '@inertiajs/react'; // Import Link from Inertia
import { FaHome, FaBook, FaCog, FaBars, FaUser, FaSignOutAlt } from 'react-icons/fa';

const Interleaving = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-white md:bg-[#2563EB] text-black md:text-white shadow-md z-10">
        <div className="text-xl font-bold">Logo</div>
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

      {/* Main Content */}
      <div className="pt-16 md:pt-20 p-6 space-y-8">
        <h1 className="text-4xl pt-8 font-bold text-gray-800 text-center">
          Interleaving - Long-Term Retention
        </h1>

        {/* Table of Contents */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">Table of Contents</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <a href="#what-is-active-recall" className="text-blue-600 hover:underline">
                What is Interleaving
              </a>
            </li>
            <li>
              <a href="#why-is-active-recall-important" className="text-blue-600 hover:underline">
                Why is Interleaving Important
              </a>
            </li>
            <li>
              <a href="#how-active-recall-works" className="text-blue-600 hover:underline">
                How Interleaving Works
              </a>
            </li>
            <li>
              <a href="#how-to-apply-active-recall" className="text-blue-600 hover:underline">
                How to Apply Interleaving
              </a>
            </li>
          </ul>
        </div>

        {/* Topic 1 */}
        <div id="what-is-active-recall" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">What is Interleaving</h2>
          <p className="text-lg text-gray-700 text-justify">
            Interleaving refers to mixing up different topics or problem types while studying, instead of focusing on one topic at a time.
            This approach is designed to enhace learning and memory retention by encouraging students to actively discriminate between different concepts and strategies.
          </p>
        </div>
        <div className="video-container flex justify-center items-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/WbDpYMp8F6o?si=TtbTltkk51MqfZd8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Topic 2 */}
        <div id="why-is-active-recall-important" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Why Interleaving Important</h2>
            <h3 className="text-xl font-semibold text-gray-800">1. Enhances Long-Term Retention</h3>
            <p className="text-lg text-gray-700 text-justify">
              Through, switching between topics, interleaving challenges the brain to retrieve and apply information repeatedly, strengthening memory associations and leading to better long-term retention.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">2. Improves problem solving skills</h3>
            <p className="text-lg text-gray-700 text-justify">
              Interleaving heldps learners to distinguish between different types of problems and select appropriate strategies for solving them, thereby enhancing problem-solving abilities.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">3. Promotes Deeper Learning</h3>
            <p className="text-lg text-gray-700 text-justify">
              This techniue encourages learners to make connections between topics, facilitating a deeper understanding of the material.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">4. Combines with Spaced Repetition</h3>
            <p className="text-lg text-gray-700 text-justify">
              Interleaving naturally incorporates spacing, as topics are revisited over time, which is another effective learning strategy that enhances memory retention.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">5. Prepares for Real-World Application</h3>
            <p className="text-lg text-gray-700 text-justify">
              By practicing varied problems, learners are better equipped to apply knowledge flexibly in different contexts, simiar to real-world situations.
            </p>
        </div>

        {/* Topic 3 */}
        <div id="how-active-recall-works" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">How Interleaving Works</h2>
          <p className="text-lg text-gray-700 text-justify">
          Interleaving is a study technique that involves alternating between different topics or problem types within a single study session, rather than focusing on one subject extensively before moving on to the next.
          This approach contrasts with blocked practice, where a learner studies one concept thoroughly before transitioning to another.
          By switching between topics, interleaving challenges the brain to continually retrieve and apply information, enhancing memory associations and promoting better long-term retention.
          Additionally, this method helps learners develop the ability to distinguish between different types of problems and select appropriate strategies for solving them, thereby improving problem-solving skills.
          While interleaving may initially feel more challenging than traditional study methods, its benefits for long-term learning and adaptability make it a valuable technique to incorporate into your study routine. 
          </p>
          <div className="flex justify-center items-center">
            <img src="/images/interleaving.jpg" width="500" height="250" alt="Logo" />
          </div>
        </div>

        {/* Topic 4 */}
        <div id="how-to-apply-active-recall" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">How to Apply Interleaving</h2>
          <p className="text-lg text-gray-700 text-justify">
          Applying the interleaving study method involves strategically mixing different topics or problem types within a single study session.
          Here's how you can implement it:
          </p>
          <h3 className="text-xl font-semibold text-gray-800">1. Select Related Topics</h3>
            <p className="text-lg text-gray-700 text-justify">
              Choose subjects or concepts that are connected or share underlying principles.
              For example, in mathematics, you might interleave algebra, geometry, and statistics problems.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">2. Create a Study Schedule</h3>
            <p className="text-lg text-gray-700 text-justify">
              Plan your study sessions to alternate between these topics.
              This could mean spending 20 minutes on algebra, then 20 minutes on geometry, and so on, within the same session.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">3. Retrieval Practice</h3>
            <p className="text-lg text-gray-700 text-justify">
              Attempting to recall information from memory before re-studying it can strengthen memory retention. This process, known as retrieval practice, primes the brain to better encode and retrieve information in the future.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">4. Review and Reflect</h3>
            <p className="text-lg text-gray-700 text-justify">
              After completing a session, go over the material to identify areas of difficulty and reinforce learning.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Interleaving;