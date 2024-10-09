"use client"; // Mark this as a Client Component

import { useState } from 'react';
import { AiOutlineBell } from 'react-icons/ai';
import Image from 'next/image';

const Navbar = () => {
  const [notifications] = useState(5); // Example notification count

  // Function to get the appropriate greeting based on the current time
  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return "Good Morning";
    if (hours < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <nav className=" p-5 shadow-none"> {/* Changed shadow to none */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Profile Picture and Greeting */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-1">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300 mr-3">
              <Image
                src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1668212929/samples/people/kitchen-bar.jpg" // Placeholder image
                alt="Profile"
                width={40}
                height={40}
              />
            </div>
            {/* Parent div for Greeting and Username */}
            <div className="flex flex-col">
              {/* Greeting Message on top of Username */}
              <span className="text-sm text-black">{getGreeting()}</span>
              {/* Username */}
              <span className="text-lg font-500 text-gray-800 ">{/* Darker color */}Adekunle</span>
            </div>
          </div>
        </div>

        {/* Notification Icon */}
        <div className="relative flex items-center">
          <AiOutlineBell className="text-2xl black cursor-pointer" />
          {notifications > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {notifications}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
