"use client"; // Mark this as a Client Component

import { 
  AiOutlineHome, 
  AiOutlineHistory, 
  AiOutlinePieChart, 
  AiOutlineWallet, 
  AiOutlineUser, 
  AiOutlineSetting, 
  AiOutlineLogout 
} from 'react-icons/ai';

const Sidebar = () => {
  return (
    <div className="sticky top-0 h-screen w-64 bg-green-600 p-7 shadow-md flex flex-col justify-between hidden xl:flex"> {/* Change to xl:flex */}
      {/* Sidebar Header */}
      <div className="text-white">
        <div className="text-2xl font-bold mb-10">
          {/* Logo Text */}
          Freed
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-5">
          {/* Menu Title */}
          <span className="uppercase text-sm text-gray-300 border-b border-gray-400 pb-2">
            Menu
          </span>

          {/* Home */}
          <div className="flex items-center text-white text-lg cursor-pointer hover:bg-green-500 p-2 rounded">
            <AiOutlineHome className="mr-4" />
            <span className="align-middle">Home</span>
          </div>

          {/* History */}
          <div className="flex items-center text-white text-lg cursor-pointer hover:bg-green-500 p-2 rounded">
            <AiOutlineHistory className="mr-4" />
            <span className="align-middle">History</span>
          </div>

          {/* Statistics */}
          <div className="flex items-center text-white text-lg cursor-pointer hover:bg-green-500 p-2 rounded">
            <AiOutlinePieChart className="mr-4" />
            <span className="align-middle">Statistics</span>
          </div>

          {/* Wallet */}
          <div className="flex items-center text-white text-lg cursor-pointer hover:bg-green-500 p-2 rounded">
            <AiOutlineWallet className="mr-4" />
            <span className="align-middle">Wallet</span>
          </div>

          {/* Profile */}
          <div className="flex items-center text-white text-lg cursor-pointer hover:bg-green-500 p-2 rounded">
            <AiOutlineUser className="mr-4" />
            <span className="align-middle">Profile</span>
          </div>
        </div>
      </div>

      {/* Sidebar Footer */}
      <div className="flex flex-col gap-4 border-t border-gray-400 pt-4">
        {/* Settings */}
        <div className="flex items-center text-white text-lg cursor-pointer hover:bg-green-500 p-2 rounded">
          <AiOutlineSetting className="mr-4" />
          <span className="align-middle">Settings</span>
        </div>

        {/* Logout */}
        <div className="flex items-center text-white text-lg cursor-pointer hover:bg-red-600 p-2 rounded">
          <AiOutlineLogout className="mr-4" />
          <span className="align-middle">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
