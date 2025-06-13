import React, { useState } from 'react';
import { MenuIcon, BellIcon, MoonIcon, SunIcon, ChevronDownIcon, UserIcon, LogOutIcon, SettingsIcon } from 'lucide-react';
interface HeaderProps {
  setSidebarOpen: (isOpen: boolean) => void;
  userRole: string;
  setUserRole: (role: string) => void;
}
export const Header = ({
  setSidebarOpen,
  userRole,
  setUserRole
}: HeaderProps) => {
  const [darkMode, setDarkMode] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // In a real app, we would apply dark mode classes to the html/body
  };
  const roleNames = {
    student: 'Student',
    faculty: 'Faculty',
    admin: 'Administrator'
  };
  const notifications = [{
    id: 1,
    message: 'Your assignment for CS101 is due tomorrow',
    time: '10 minutes ago'
  }, {
    id: 2,
    message: 'Fee payment deadline extended to next week',
    time: '2 hours ago'
  }, {
    id: 3,
    message: 'New course materials uploaded for MATH202',
    time: 'Yesterday'
  }];
  return <header className="sticky top-0 z-10 flex items-center h-16 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between w-full px-4 md:px-6">
        <div className="flex items-center">
          <button className="p-1 mr-3 text-gray-500 rounded-md lg:hidden hover:text-gray-700 focus:outline-none" onClick={() => setSidebarOpen(true)}>
            <MenuIcon size={24} />
          </button>
          <h1 className="text-lg font-semibold text-gray-800 md:text-xl">
            {roleNames[userRole as keyof typeof roleNames]} Portal
          </h1>
        </div>
        <div className="flex items-center space-x-3">
          {/* Role Switcher (for demo purposes) */}
          <div className="hidden md:flex">
            <select value={userRole} onChange={e => setUserRole(e.target.value)} className="px-2 py-1 text-sm bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="student">Student View</option>
              <option value="faculty">Faculty View</option>
              <option value="admin">Admin View</option>
            </select>
          </div>
          {/* Dark Mode Toggle */}
          <button className="p-1 text-gray-500 rounded-full hover:text-gray-700 focus:outline-none" onClick={toggleDarkMode}>
            {darkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
          </button>
          {/* Notifications */}
          <div className="relative">
            <button className="p-1 text-gray-500 rounded-full hover:text-gray-700 focus:outline-none" onClick={() => setNotificationsOpen(!notificationsOpen)}>
              <div className="relative">
                <BellIcon size={20} />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </div>
            </button>
            {notificationsOpen && <div className="absolute right-0 w-80 mt-2 bg-white rounded-xl shadow-lg border border-gray-200 z-20">
                <div className="p-3 border-b border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-800">
                    Notifications
                  </h3>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {notifications.map(notification => <div key={notification.id} className="p-3 border-b border-gray-100 hover:bg-gray-50">
                      <p className="text-sm text-gray-800">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {notification.time}
                      </p>
                    </div>)}
                </div>
                <div className="p-2 text-center">
                  <button className="text-sm text-indigo-600 hover:text-indigo-800">
                    View all notifications
                  </button>
                </div>
              </div>}
          </div>
          {/* User Menu */}
          <div className="relative">
            <button className="flex items-center text-gray-700 focus:outline-none" onClick={() => setUserMenuOpen(!userMenuOpen)}>
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700">
                {userRole === 'student' ? 'S' : userRole === 'faculty' ? 'F' : 'A'}
              </div>
              <span className="hidden ml-2 text-sm font-medium md:block">
                {userRole === 'student' ? 'Alex Johnson' : userRole === 'faculty' ? 'Dr. Sarah Miller' : 'Admin User'}
              </span>
              <ChevronDownIcon size={16} className="hidden ml-1 md:block" />
            </button>
            {userMenuOpen && <div className="absolute right-0 w-48 mt-2 bg-white rounded-xl shadow-lg border border-gray-200 z-20">
                <div className="py-1">
                  <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <UserIcon size={16} className="mr-2" />
                    Profile
                  </button>
                  <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <SettingsIcon size={16} className="mr-2" />
                    Settings
                  </button>
                  <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <LogOutIcon size={16} className="mr-2" />
                    Log out
                  </button>
                </div>
              </div>}
          </div>
        </div>
      </div>
    </header>;
};