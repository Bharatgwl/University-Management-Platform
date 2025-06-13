import React, { Component } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, BookOpenIcon, CreditCardIcon, CalendarIcon, TrendingUpIcon, UsersIcon, ClipboardListIcon, SettingsIcon } from 'lucide-react';
interface MobileNavProps {
  userRole: string;
}
export const MobileNav = ({
  userRole
}: MobileNavProps) => {
  const location = useLocation();
  const studentLinks = [{
    name: 'Home',
    href: '/student/dashboard',
    icon: HomeIcon
  }, {
    name: 'Courses',
    href: '/student/courses',
    icon: BookOpenIcon
  }, {
    name: 'Fees',
    href: '/student/fees',
    icon: CreditCardIcon
  }, {
    name: 'Calendar',
    href: '/student/calendar',
    icon: CalendarIcon
  }, {
    name: 'Progress',
    href: '/student/progress',
    icon: TrendingUpIcon
  }];
  const facultyLinks = [{
    name: 'Home',
    href: '/faculty/dashboard',
    icon: HomeIcon
  }, {
    name: 'Classes',
    href: '/faculty/classes',
    icon: UsersIcon
  }, {
    name: 'Assignments',
    href: '/faculty/assignments',
    icon: ClipboardListIcon
  }, {
    name: 'Settings',
    href: '/settings',
    icon: SettingsIcon
  }];
  const adminLinks = [{
    name: 'Home',
    href: '/admin/dashboard',
    icon: HomeIcon
  }, {
    name: 'Users',
    href: '/admin/users',
    icon: UsersIcon
  }, {
    name: 'Fees',
    href: '/admin/fees',
    icon: CreditCardIcon
  }, {
    name: 'Courses',
    href: '/admin/courses',
    icon: BookOpenIcon
  }];
  const links = userRole === 'student' ? studentLinks : userRole === 'faculty' ? facultyLinks : adminLinks;
  return <nav className="fixed bottom-0 left-0 right-0 z-20 bg-white border-t border-gray-200 lg:hidden">
      <div className="flex justify-around">
        {links.map(link => {
        const isActive = location.pathname === link.href;
        const IconComponent = link.icon;
        return <Link key={link.name} to={link.href} className="flex flex-col items-center justify-center flex-1 py-2">
              <IconComponent size={20} className={isActive ? 'text-indigo-600' : 'text-gray-500'} />
              <span className={`mt-1 text-xs ${isActive ? 'text-indigo-600 font-medium' : 'text-gray-500'}`}>
                {link.name}
              </span>
            </Link>;
      })}
      </div>
    </nav>;
};