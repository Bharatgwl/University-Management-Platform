import React from 'react';
import { Link } from 'react-router-dom';
import { BriefcaseIcon, UsersIcon, BookmarkIcon, CalendarIcon } from 'lucide-react';
const Sidebar = () => {
  return <aside className="hidden md:block w-64 bg-white shadow-sm h-screen sticky top-16">
      <div className="p-4 border-b">
        <div className="flex flex-col items-center">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Profile" className="w-20 h-20 rounded-full mb-2" />
          <h2 className="text-lg font-semibold">John Doe</h2>
          <p className="text-sm text-gray-500">Software Engineer</p>
          <p className="text-xs text-gray-400">
            University of Technology, 2018
          </p>
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Profile views</span>
            <span className="font-medium text-blue-600">243</span>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span className="text-gray-500">Post impressions</span>
            <span className="font-medium text-blue-600">1,243</span>
          </div>
        </div>
      </div>
      <nav className="p-4">
        <p className="text-xs font-medium text-gray-500 mb-2">SHORTCUTS</p>
        <ul>
          <li>
            <Link to="/jobs" className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-100">
              <BriefcaseIcon className="w-5 h-5 mr-3 text-gray-500" />
              <span>Jobs</span>
            </Link>
          </li>
          <li>
            <Link to="/network" className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-100">
              <UsersIcon className="w-5 h-5 mr-3 text-gray-500" />
              <span>Connections</span>
            </Link>
          </li>
          <li>
            <Link to="/saved" className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-100">
              <BookmarkIcon className="w-5 h-5 mr-3 text-gray-500" />
              <span>Saved Items</span>
            </Link>
          </li>
          <li>
            <Link to="/events" className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-100">
              <CalendarIcon className="w-5 h-5 mr-3 text-gray-500" />
              <span>Events</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>;
};
export default Sidebar;