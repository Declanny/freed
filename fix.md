"use client"; // Mark this as a Client Component

import { useState, useEffect } from 'react';
import { AiOutlineBell, AiOutlineDown, AiOutlineBulb } from 'react-icons/ai';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [notifications, setNotifications] = useState(5); // Example notification count
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Ensure theme is mounted properly
  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Prevents dark mode flicker

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Profile Picture and Username */}
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300 mr-3">
            <Image
              src="/profile-placeholder.jpg" // Placeholder image
              alt="Profile"
              width={40}
              height={40}
            />
          </div>
          {/* Username (static for now; you can replace with dynamic username) */}
          <span className="text-lg font-medium text-gray-900 dark:text-white">John Doe</span>
        </div>

        {/* Light/Dark Mode Toggle and Notification */}
        <div className="flex items-center">
          {/* Light/Dark Mode Dropdown */}
          <div className="relative flex items-center mr-4">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <AiOutlineBulb className="text-2xl text-gray-600 dark:text-white" />
              <AiOutlineDown className="ml-1 text-sm text-gray-600 dark:text-white" />
            </div>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg py-2 z-20">
                <div
                  className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
                  onClick={() => setTheme('light')}
                >
                  Light Mode
                </div>
                <div
                  className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
                  onClick={() => setTheme('dark')}
                >
                  Dark Mode
                </div>
                <div
                  className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
                  onClick={() => setTheme('not-too-dark')}
                >
                  Not-Too-Dark Mode
                </div>
                <div
                  className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
                  onClick={() => setTheme('system')}
                >
                  System Mode
                </div>
              </div>
            )}
          </div>

          {/* Notification Icon */}
          <div className="relative">
            <AiOutlineBell className="text-2xl text-gray-600 dark:text-white cursor-pointer" />
            {notifications > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {notifications}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
