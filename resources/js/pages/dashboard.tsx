import { type BreadcrumbItem } from '@/types';
import React, { useState, useRef, useEffect } from 'react';
import { Link } from '@inertiajs/react'; 
import { FaHome, FaBook, FaCog, FaBars, FaUser, FaSignOutAlt, FaArrowRight } from 'react-icons/fa';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {

    var userName = 'Rhoge Vhir A. Diaz'; 
    var userRank = 'Novice';
    var userImage = '/userImage.svg';
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const coursesAttending = [
        { title: 'Active Recall', image: '/activeRecall.png', description: 'A study method where you actively retrieve information from memory', route: 'activeRecall' },
        
    ];
    const exploreCourses = [
        { title: 'Pomodoro Technique', image: '/pomodoro.png', description: 'A time management method that involves working in focused 25-minute intervals', route: 'pomodoro' },
        { title: 'Mind Mapping', image: '/mindmap.png', description: ' A visual method of organizing ideas by branching related concepts from a central topic.', route: 'mindMap' },
        { title: 'Feynman Technique', image: '/feynman.png', description: 'A learning method where you explain a concept in simple terms, as if teaching it to someone else.', route: 'feynman' },
        { title: 'Interleaving', image: '/interleaving.png', description: 'A process where students mix multiple subjects or topics while they study to improve their learning.', route: 'interleaving' },
        { title: 'Priming', image: '/priming.png', description: 'A teaching strategy that involves allowing students to preview what is coming up in order to prepare them.', route: 'priming' },
        { title: 'Spaced Repetition', image: '/spacedRep.png', description: 'A learning technique where you review material at increasing intervals to improve long-term retention', route: 'spacedRep' },
    ];

    const coursesAttendingRef = useRef<HTMLDivElement | null>(null);
    const exploreCoursesRef = useRef<HTMLDivElement | null>(null);
    const [showArrowAttending, setShowArrowAttending] = useState(false);
    const [showArrowExplore, setShowArrowExplore] = useState(false);

    useEffect(() => {
        const checkScroll = (ref: React.RefObject<HTMLDivElement | null>, setShowArrow: React.Dispatch<React.SetStateAction<boolean>>) => {
            if (ref.current) {
                const { scrollWidth, clientWidth, scrollLeft } = ref.current;
                // Adjust for potential fractional differences in scroll positions
                setShowArrow(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
            }
        };

        const handleScroll = (ref: React.RefObject<HTMLDivElement | null>, setShowArrow: React.Dispatch<React.SetStateAction<boolean>>) => {
            return () => checkScroll(ref, setShowArrow);
        };

        checkScroll(coursesAttendingRef, setShowArrowAttending);
        checkScroll(exploreCoursesRef, setShowArrowExplore);

        const handleResize = () => {
            checkScroll(coursesAttendingRef, setShowArrowAttending);
            checkScroll(exploreCoursesRef, setShowArrowExplore);
        };

        const attendingScrollListener = handleScroll(coursesAttendingRef, setShowArrowAttending);
        const exploreScrollListener = handleScroll(exploreCoursesRef, setShowArrowExplore);

        coursesAttendingRef.current?.addEventListener('scroll', attendingScrollListener);
        exploreCoursesRef.current?.addEventListener('scroll', exploreScrollListener);
        window.addEventListener('resize', handleResize);

        return () => {
            coursesAttendingRef.current?.removeEventListener('scroll', attendingScrollListener);
            exploreCoursesRef.current?.removeEventListener('scroll', exploreScrollListener);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="bg-white min-h-screen">
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
            <div className="pt-20 p-6 space-y-8 min-h-screen">
                {/* Top Div: User Info */}
                <div className="flex p-8 md:p-16 md:gap-8 flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                    <img
                        src={userImage}
                        alt="User"
                        className="w-20 h-20 md:w-32 md:h-32 rounded-full"
                    />
                    <div className="text-center md:text-left">
                        <h2 className="text-xl text-black font-semibold">{userName}</h2>
                        <p className="text-sm text-gray-600">Rank: {userRank}</p>
                    </div>
                </div>

                {/* Decorative Line */}
                <hr className="border-t-2 border-gray-300 mx-18" />

                {/* Middle Div: Courses Attending */}
                <div className="relative px-4 md:px-32">
                    <h2 className="text-xl md:text-2xl font-semibold mb-4 text-black">Courses Attending</h2>
                    <div className="flex gap-4 md:gap-8 overflow-x-auto pr-8" ref={coursesAttendingRef}>
                        {coursesAttending.map((course, index) => (
                            <div
                                key={index}
                                className="min-w-[150px] md:min-w-[200px] max-w-32 p-3 md:p-4 bg-white border-black border-2 rounded-xl flex flex-col justify-between shadow-[0px_4px_6px_rgba(0,0,0,0.1)]"
                            >
                                <div>
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full h-24 md:h-32 object-cover rounded-md mb-2"
                                    />
                                    <h3 className="text-md md:text-lg font-semibold">{course.title}</h3>
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
                    {showArrowAttending && (
                        <div className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 text-gray-500">
                            <FaArrowRight />
                        </div>
                    )}
                </div>

                {/* Bottom Div: Explore Courses */}
                <div className="relative px-4 md:px-32">
                    <h2 className="text-xl md:text-2xl font-semibold mb-4 text-black">Explore Courses</h2>
                    <div className="flex gap-4 md:gap-8 overflow-x-auto pr-8" ref={exploreCoursesRef}>
                        {exploreCourses.map((course, index) => (
                            <div
                                key={index}
                                className="min-w-[150px] md:min-w-[200px] max-w-32 p-3 md:p-4 bg-white border-2 border-black rounded-xl flex flex-col justify-between shadow-[0px_4px_6px_rgba(0,0,0,0.1)]"
                            >
                                <div>
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full h-24 md:h-32 object-cover rounded-md mb-2"
                                    />
                                    <h3 className="text-md md:text-lg font-semibold">{course.title}</h3>
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
                    {showArrowExplore && (
                        <div className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 text-gray-500">
                            <FaArrowRight />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
