import React from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon, BellIcon, MessageSquareIcon, UserIcon, MenuIcon } from 'lucide-react';
const Navbar = () => {
  return <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">
                AlumniConnect
              </h1>
            </Link>
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input type="text" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Search" />
              </div>
            </div>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <Link to="/" className="px-3 py-2 text-gray-500 hover:text-blue-600">
              Home
            </Link>
            <Link to="/network" className="px-3 py-2 text-gray-500 hover:text-blue-600">
              My Network
            </Link>
            <Link to="/jobs" className="px-3 py-2 text-gray-500 hover:text-blue-600">
              Jobs
            </Link>
            <Link to="/chat" className="px-3 py-2 text-gray-500 hover:text-blue-600">
              Messaging
            </Link>
            <Link to="/profile" className="px-3 py-2 text-gray-500 hover:text-blue-600">
              Profile
            </Link>
          </div>
          <div className="flex items-center">
            <button className="p-2 rounded-full text-gray-500 hover:text-blue-600 focus:outline-none">
              <BellIcon className="h-6 w-6" />
            </button>
            <button className="p-2 rounded-full text-gray-500 hover:text-blue-600 focus:outline-none">
              <MessageSquareIcon className="h-6 w-6" />
            </button>
            <button className="p-2 rounded-full text-gray-500 hover:text-blue-600 focus:outline-none">
              <UserIcon className="h-6 w-6" />
            </button>
            <div className="md:hidden flex items-center">
              <button className="p-2 rounded-md text-gray-500 hover:text-blue-600 focus:outline-none">
                <MenuIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navbar;