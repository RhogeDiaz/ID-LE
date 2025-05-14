import React, { useState } from 'react';
import { Link } from '@inertiajs/react'; // Import Link from Inertia
import { FaHome, FaBook, FaCog, FaBars, FaUser, FaSignOutAlt } from 'react-icons/fa';

const MindMap = () => {
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
          Mind Mapping - Branching Structure
        </h1>

        {/* Table of Contents */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">Table of Contents</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <a href="#what-is-active-recall" className="text-blue-600 hover:underline">
                What is Mind Mapping
              </a>
            </li>
            <li>
              <a href="#why-is-active-recall-important" className="text-blue-600 hover:underline">
                Why is Mind Mapping Important
              </a>
            </li>
            <li>
              <a href="#how-active-recall-works" className="text-blue-600 hover:underline">
                How Mind Mapping Works
              </a>
            </li>
            <li>
              <a href="#how-to-apply-active-recall" className="text-blue-600 hover:underline">
                How to Apply Mind Mapping
              </a>
            </li>
          </ul>
        </div>

        {/* Topic 1 */}
        <div id="what-is-active-recall" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">What is Mind Mapping</h2>
          <p className="text-lg text-gray-700 text-justify">
          Mind mapping is a visual technique for organizing information, ideas, or concepts around a central theme.
          It involves placing the main idea at the center of a diagram and branching out into related subtopics, creating a non-linear, tree-like structure.
          This method mirrors the brain's natural way of processing information, making it an effective tool for enhancing creativity, memory, and understanding.
          </p>
        </div>
        <div className="video-container flex justify-center items-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/P0augH78USE?si=05giwTYXlVU7L018"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Topic 2 */}
        <div id="why-is-active-recall-important" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Why is Mind Mapping Important</h2>
          <p className="text-lg text-gray-700 text-justify">
          Mind mapping is a powerful cognitive tool that enhances learning, creativity, and productivity by visually organizing information around a central concept.
          This technique enables individuals to break down complex topics into manageable subtopics, facilitating a clearer understanding of relationships and hierarchies within the subject matter. By engaging both the analytical and creative aspects of the brain, mind mapping stimulates idea generation and fosters innovative thinking.
          Additionally, the visual nature of mind maps aids in memory retention and recall, making it easier to absorb and retrieve information. Whether used for academic purposes, project planning, or personal development, mind mapping serves as an effective method for structuring thoughts and enhancing overall cognitive performance.
          </p>
        </div>

        {/* Topic 3 */}
        <div id="how-active-recall-works" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">How Mind Mapping Works</h2>
          <p className="text-lg text-gray-700 text-justify">
          Mind mapping operates by visually structuring information around a central concept, enabling the brain to process and recall data more effectively.
          The process begins with identifying a main idea, which is placed at the center of a blank page or digital canvas.
          From this central point, branches extend outward to represent related subtopics or categories.
          Each branch can further divide into smaller branches, illustrating more detailed aspects of the topic.
          This hierarchical structure mirrors the brain's natural way of organizing information, facilitating better understanding and memory retention.
          Incorporating colors, images, and keywords enhances the visual appeal and aids in distinguishing between different ideas, making the information more engaging and easier to remember.
          By allowing for a non-linear exploration of concepts, mind mapping encourages creativity and the discovery of connections between ideas that might not be immediately apparent in traditional note-taking methods.
          Whether created by hand or using software tools, mind maps serve as effective instruments for brainstorming, planning, studying, and problem-solving.
          </p>
        </div>

        {/* Topic 4 */}
        <div id="how-to-apply-active-recall" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">How to Apply Mind Mapping</h2>
          <p className="text-lg text-gray-700 text-justify">
            Applying mind mapping as a study technique involves creating a visual representation of information to enhance understanding and memory retention.
            Here's how you can effectively implement mind mapping:
          </p>
          <h3 className="text-xl font-semibold text-gray-800">1. Start with a Central Idea</h3>
            <p className="text-lg text-gray-700 text-justify">
              Place the main topic or concept at the center of your page.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">2. Branch Out with Major Themes</h3>
            <p className="text-lg text-gray-700 text-justify">
              Draw lines radiating from the center to represent key themes or categories related to the central idea.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">3. Add Subtopics and Details</h3>
            <p className="text-lg text-gray-700 text-justify">
              Further branch out from each major theme with subtopics and relevant details, creating a hierarchical structure.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">4. Use Keywords and Short Phrases</h3>
            <p className="text-lg text-gray-700 text-justify">
              Employ concise keywords or short phrases to capture essential information, avoiding lengthy sentences.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">5. Incorporate Colors and Images</h3>
            <p className="text-lg text-gray-700 text-justify">
            Utilize colors, images, and symbols to differentiate between ideas and enhance memory associations.
            </p>
            <h3 className="text-xl font-semibold text-gray-800">6. Review and Revise</h3>
            <p className="text-lg text-gray-700 text-justify">
            Regularly review and update your mind map as you acquire more information, ensuring it remains a dynamic study tool.
            </p>
        </div>
      </div>
    </div>
  );
};

export default MindMap;