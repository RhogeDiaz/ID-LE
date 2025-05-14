import React, { useState } from 'react';
import { Link } from '@inertiajs/react'; // Import Link from Inertia
import { FaHome, FaBook, FaCog, FaBars, FaUser, FaSignOutAlt } from 'react-icons/fa';

const priming = () => {
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
          Priming - Pre-activation
        </h1>

        {/* Table of Contents */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">Table of Contents</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <a href="#what-is-active-recall" className="text-blue-600 hover:underline">
                What is Priming
              </a>
            </li>
            <li>
              <a href="#why-is-active-recall-important" className="text-blue-600 hover:underline">
                Why is Priming Important
              </a>
            </li>
            <li>
              <a href="#how-active-recall-works" className="text-blue-600 hover:underline">
                How Priming Works
              </a>
            </li>
            <li>
              <a href="#how-to-apply-active-recall" className="text-blue-600 hover:underline">
                How to Apply Priming
              </a>
            </li>
          </ul>
        </div>

        {/* Topic 1 */}
        <div id="what-is-active-recall" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">What is Priming</h2>
          <p className="text-lg text-gray-700 text-justify">
          Priming is a cognitive strategy that involves exposing oneself to related information or cues before engaging in learning, thereby enhancing comprehension, retention, and recall.
          This preparatory exposure activates relevant neural pathways, making the brain more receptive to new information.
          </p>
        </div>
        <div className="video-container flex justify-center items-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/eZWP-eA-lCg?si=UOCSe7fqJRA8vFS_"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Topic 2 */}
        <div id="why-is-active-recall-important" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Why is Priming Important</h2>
          <p className="text-lg text-gray-700 text-justify">
          Priming is a valuable study technique that enhances learning by preparing the brain to absorb new information more effectively.
          By exposing learners to relevant concepts or stimuli before engaging in a learning task, priming activates associated cognitive networks, making it easier to encode and retrieve related information later.
          This preparatory step can lead to improved information retention and increased cognitive fluency, facilitating a smoother learning process.
          Incorporating priming activities into study routines can also reduce anxiety, as familiarity with the material beforehand can boost confidence and focus.
          Overall, priming serves as a mental warm-up, setting the stage for more efficient and effective learning experiences.
          </p>
        </div>

        {/* Topic 3 */}
        <div id="how-active-recall-works" className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">How Priming Works</h2>
          <p className="text-lg text-gray-700 text-justify">Priming enhances learning by activating related concepts in the brain prior to engaging with new material.
          Priming is a psychological phenomenon where exposure to a stimulus influences an individual's response to a subsequent, related stimulus, often without conscious awareness.
          This process activates specific mental representations or associations in the brain, affecting perception, behavior, and decision-making.
          For instance, encountering the word "yellow" may lead to a quicker recognition of the word "banana" due to their close association in memory.
          Priming operates through various forms, including semantic, associative, and conceptual priming, and plays a significant role in how we interpret information and interact with our environment.
            </p>
        </div>

        {/* Topic 4 */}
        <div id="how-to-apply-active-recall" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">How to Apply Priming</h2>
          <p className="text-lg text-gray-700 text-justify">
            Applying priming in your study routine involves engaging in activities that activate prior knowledge and create mental frameworks for new information.
            Here's how you can implement priming effectively:
          </p>
            <h3 className="text-xl font-semibold text-gray-800">1. Pre-Exposure to Related Material</h3>
            <p className="text-lg text-gray-700 text-justify">
            Before studying a new topic, exposing yourself to related information—such as reading an overview or watching an introductory video—can activate relevant neural pathways.
            This prepares your brain to assimilate new information more effectively
            </p>
            <h3 className="text-xl font-semibold text-gray-800">2. Activating Prior Knowledge</h3>
            <p className="text-lg text-gray-700 text-justify">
            Reflecting on what you already know about a subject before learning new content helps create connections between existing knowledge and new information, facilitating deeper understanding.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">3. Use Advance Organizers</h3>
            <p className="text-lg text-gray-700 text-justify">
            Employ tools like concept maps or outlines to structure upcoming content, facilitating better understanding.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">4. Set Learning Objectives</h3>
            <p className="text-lg text-gray-700 text-justify">
            Clearly define what you aim to learn in a session to focus your attention and prime your mind for relevant information.
            </p>
        </div>
      </div>
    </div>
  );
};

export default priming;