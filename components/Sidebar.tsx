"use client"; // Mark this as a Client Component

import { AiOutlineHome, AiOutlineHistory, AiOutlinePieChart, AiOutlineWallet, AiOutlineUser, AiOutlineSetting, AiOutlineLogout } from 'react-icons/ai';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-green-600 p-7 shadow-md flex flex-col justify-between">
      {/* Sidebar Header */}
      <div className="text-white">
        <div className="text-2xl font-bold mb-10">
          {/* Logo Text */}
          Freed
        </div>
        {/* Menu Items */}
        <div className="flex flex-col gap-5">
          {/* Menu Title */}
          <span className="uppercase text-sm text-gray-300">Menu</span>
          
          {/* Home */}
          <div className="flex items-center text-white text-lg cursor-pointer hover:bg-green-500 p-2 rounded">
            <AiOutlineHome className="mr-3" />
            <span>Home</span>
          </div>

          {/* History */}
          <div className="flex items-center text-white text-lg cursor-pointer hover:bg-green-500 p-2 rounded">
            <AiOutlineHistory className="mr-3" />
            <span>History</span>
          </div>

          {/* Statistics */}
          <div className="flex items-center text-white text-lg cursor-pointer hover:bg-green-500 p-2 rounded">
            <AiOutlinePieChart className="mr-3" />
            <span>Statistics</span>
          </div>

          {/* Wallet */}
          <div className="flex items-center text-white text-lg cursor-pointer hover:bg-green-500 p-2 rounded">
            <AiOutlineWallet className="mr-3" />
            <span>Wallet</span>
          </div>

          {/* Profile (circular icon) */}
          <div className="flex items-center text-white text-lg cursor-pointer hover:bg-green-500 p-2 rounded">
            <AiOutlineUser className="mr-3" />
            <span>Profile</span>
          </div>
        </div>
      </div>

      {/* Sidebar Footer */}
      <div className="flex flex-col gap-4">
        {/* Settings */}
        <div className="flex items-center text-white text-lg cursor-pointer hover:bg-green-500 p-2 rounded">
          <AiOutlineSetting className="mr-3" />
          <span>Settings</span>
        </div>

        {/* Logout */}
        <div className="flex items-center text-white text-lg cursor-pointer hover:bg-red-600 p-2 rounded">
          <AiOutlineLogout className="mr-3" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
