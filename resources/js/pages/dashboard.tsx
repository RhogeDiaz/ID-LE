import { type BreadcrumbItem } from '@/types';
import React, { useState } from 'react';
import { Link } from '@inertiajs/react'; // Import Link from Inertia
import { FaHome, FaBook, FaCog, FaBars, FaUser, FaSignOutAlt } from 'react-icons/fa';

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
        { title: 'Course 1', image: 'https://via.placeholder.com/150', description: 'Description for Course 1' },
        { title: 'Course 2', image: 'https://via.placeholder.com/150', description: 'Description for Course 2' },
        { title: 'Course 3', image: 'https://via.placeholder.com/150', description: 'Description for Course 3' },
        { title: 'Course 3', image: 'https://via.placeholder.com/150', description: 'Description for Course 3' },
        { title: 'Course 3', image: 'https://via.placeholder.com/150', description: 'Description for Course 3' },
        { title: 'Course 3', image: 'https://via.placeholder.com/150', description: 'Description for Course 3' },
        { title: 'Course 3', image: 'https://via.placeholder.com/150', description: 'Description for Course 3' },
        { title: 'Course 3', image: 'https://via.placeholder.com/150', description: 'Description for Course 3' },
        { title: 'Course 3', image: 'https://via.placeholder.com/150', description: 'Description for Course 3' },
        { title: 'Course 3', image: 'https://via.placeholder.com/150', description: 'Description for Course 3' },
        { title: 'Course 3', image: 'https://via.placeholder.com/150', description: 'Description for Course 3' }
    ];
    const exploreCourses = [
        { title: 'Course A', image: 'https://via.placeholder.com/150', description: 'Description for Course A' },
        { title: 'Course B', image: 'https://via.placeholder.com/150', description: 'Description for Course B' },
        { title: 'Course C', image: 'https://via.placeholder.com/150', description: 'Description for Course C' },
    ];

    return (
        <div className="bg-white h-screen">
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
            <div className="pt-20 p-6 space-y-8 h-full overflow-y-auto">
                {/* Top Div: User Info */}
                <div className="flex p-8 md:p-16 md:gap-8 flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                    <img
                        src = {userImage}
                        alt="User"
                        className=" w-20 h-20 md:w-32 md:h-32 rounded-full"
                    />
                    <div className="text-center md:text-left">
                        <h2 className="text-xl text-black font-semibold">{userName}</h2>
                        <p className="text-sm text-gray-600">Rank: {userRank}</p>
                    </div>
                </div>

                {/* Middle Div: Courses Attending */}
                <div className='px-32'>
                    <h2 className="text-2xl font-semibold mb-4">Courses Attending</h2>
                    <div className="flex space-x-4 overflow-x-auto">
                        {coursesAttending.map((course, index) => (
                            <Link
                                key={index}
                                href={route('courses')} // Replace with the appropriate route for each course
                                className="min-w-[200px] p-4 bg-blue-100 rounded-lg shadow-md"
                            >
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-32 object-cover rounded-md mb-2"
                                />
                                <h3 className="text-lg font-semibold">{course.title}</h3>
                                <p className="text-sm text-gray-700">{course.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Bottom Div: Explore Courses */}
                <div className='px-32'>
                    <h2 className="text-2xl font-semibold mb-4">Explore Courses</h2>
                    <div className="flex space-x-4 overflow-x-auto">
                        {exploreCourses.map((course, index) => (
                            <Link
                                key={index}
                                href={route('courses')} // Replace with the appropriate route for each course
                                className="min-w-[200px] p-4 bg-green-100 rounded-lg shadow-md"
                            >
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-32 object-cover rounded-md mb-2"
                                />
                                <h3 className="text-lg font-semibold">{course.title}</h3>
                                <p className="text-sm text-gray-700">{course.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
