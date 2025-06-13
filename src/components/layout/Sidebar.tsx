import React, { Component } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, BookOpenIcon, CreditCardIcon, CalendarIcon, TrendingUpIcon, UsersIcon, ClipboardListIcon, SettingsIcon, BellIcon, HelpCircleIcon, XIcon } from 'lucide-react';
interface SidebarProps {
  userRole: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
export const Sidebar = ({
  userRole,
  isOpen,
  setIsOpen
}: SidebarProps) => {
  const location = useLocation();
  const studentLinks = [{
    name: 'Dashboard',
    href: '/student/dashboard',
    icon: HomeIcon
  }, {
    name: 'My Courses',
    href: '/student/courses',
    icon: BookOpenIcon
  }, {
    name: 'Fees & Fines',
    href: '/student/fees',
    icon: CreditCardIcon
  }, {
    name: 'Event Calendar',
    href: '/student/calendar',
    icon: CalendarIcon
  }, {
    name: 'Academic Progress',
    href: '/student/progress',
    icon: TrendingUpIcon
  }];
  const facultyLinks = [{
    name: 'Dashboard',
    href: '/faculty/dashboard',
    icon: HomeIcon
  }, {
    name: 'My Classes',
    href: '/faculty/classes',
    icon: UsersIcon
  }, {
    name: 'Assignments',
    href: '/faculty/assignments',
    icon: ClipboardListIcon
  }];
  const adminLinks = [{
    name: 'Dashboard',
    href: '/admin/dashboard',
    icon: HomeIcon
  }, {
    name: 'User Management',
    href: '/admin/users',
    icon: UsersIcon
  }, {
    name: 'Fee Management',
    href: '/admin/fees',
    icon: CreditCardIcon
  }, {
    name: 'Course Management',
    href: '/admin/courses',
    icon: BookOpenIcon
  }, {
    name: 'Events & Notices',
    href: '/admin/events',
    icon: BellIcon
  }];
  const links = userRole === 'student' ? studentLinks : userRole === 'faculty' ? facultyLinks : adminLinks;
  const commonLinks = [{
    name: 'Settings',
    href: '/settings',
    icon: SettingsIcon
  }, {
    name: 'Help Center',
    href: '/help',
    icon: HelpCircleIcon
  }];
  return <>
      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden" onClick={() => setIsOpen(false)} />}
      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:z-auto
      `}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <Link to={`/${userRole}/dashboard`} className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white font-bold">
              U
            </div>
            <span className="ml-2 text-xl font-semibold text-gray-900">
              UniVerse
            </span>
          </Link>
          <button className="lg:hidden text-gray-500 hover:text-gray-700" onClick={() => setIsOpen(false)}>
            <XIcon size={20} />
          </button>
        </div>
        <div className="px-4 py-6">
          <div className="mb-8">
            <p className="px-2 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Main Menu
            </p>
            <nav className="space-y-1">
              {links.map(link => {
              const isActive = location.pathname === link.href;
              const IconComponent = link.icon;
              return <Link key={link.name} to={link.href} className={`
                      flex items-center px-2 py-2 text-sm font-medium rounded-xl transition-colors
                      ${isActive ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-700'}
                    `}>
                    <IconComponent size={18} className={isActive ? 'text-indigo-700' : 'text-gray-500'} />
                    <span className="ml-3">{link.name}</span>
                  </Link>;
            })}
            </nav>
          </div>
          <div>
            <p className="px-2 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Support
            </p>
            <nav className="space-y-1">
              {commonLinks.map(link => {
              const isActive = location.pathname === link.href;
              const IconComponent = link.icon;
              return <Link key={link.name} to={link.href} className={`
                      flex items-center px-2 py-2 text-sm font-medium rounded-xl transition-colors
                      ${isActive ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-700'}
                    `}>
                    <IconComponent size={18} className={isActive ? 'text-indigo-700' : 'text-gray-500'} />
                    <span className="ml-3">{link.name}</span>
                  </Link>;
            })}
            </nav>
          </div>
        </div>
      </div>
    </>;
};