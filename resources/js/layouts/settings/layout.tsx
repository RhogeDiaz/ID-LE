import Heading from '@/components/heading';
import { type PropsWithChildren } from 'react';
import { useState } from 'react';
import { FaBars, FaArrowLeft } from 'react-icons/fa';
import { Link } from '@inertiajs/react';

const sidebarNavItems = [
    { title: 'Profile', href: '/settings/profile' },
    { title: 'Password', href: '/settings/password' },
];

export default function SettingsLayout({ children }: PropsWithChildren) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="px-4 py-6">
            <div className="mb-16 flex items-center justify-between">
                {/* Back Button */}
                <button
                    onClick={() => window.location.href = route('dashboard')} // Redirect to dashboard
                    className="text-black flex items-center space-x-2 hover:text-gray-600 hover:cursor-pointer"
                >
                    <FaArrowLeft />
                    <span>Back</span>
                </button>

                {/* Mobile Menu Button */}
                <button
                    className="text-2xl md:hidden text-black"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <FaBars />
                </button>
            </div>
        <div className="flex items-center justify-between text-black">
            <Heading title="Settings" description="Manage your profile and account settings" />
        </div>
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
                {/* Sidebar for Large Screens */}
                <aside className="hidden md:block w-full max-w-xs">
                    <nav className="flex flex-col space-y-2">
                        {sidebarNavItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded"
                            >
                                {item.title}
                            </Link>
                        ))}
                        {/* Log Out Button */}
                        <button
                            onClick={() => window.location.href = route('home')} // Redirect to home
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded text-left"
                        >
                            Log Out
                        </button>
                    </nav>
                </aside>

                {/* Sliding Menu for Mobile */}
                <div
                    className={`fixed top-0 right-0 h-full w-64 bg-[#2563EB] text-white shadow-lg transform md:hidden ${
                        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300 z-20`}
                >
                    <button
                        className="absolute top-4 right-4 text-white text-2xl"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        &times;
                    </button>
                    <nav className="mt-16 space-y-6 p-4">
                        {sidebarNavItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="block px-4 py-2 text-white hover:text-gray-300"
                            >
                                {item.title}
                            </Link>
                        ))}
                        {/* Log Out Button for Mobile */}
                        <button
                            onClick={() => window.location.href = route('home')} // Redirect to home
                            className="block px-4 py-2 text-white hover:text-gray-300 text-left"
                        >
                            Log Out
                        </button>
                    </nav>
                </div>

                <div className="flex-1 md:max-w-2xl">
                    <section className="max-w-xl space-y-12">{children}</section>
                </div>
            </div>
        </div>
    );
}
