import React, { Component } from 'react';
import { Card } from '../ui/Card';
import { BookOpenIcon, CreditCardIcon, CalendarIcon, FileTextIcon, MessageSquareIcon, ClockIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export const QuickLinks = () => {
  const links = [{
    name: 'My Courses',
    href: '/student/courses',
    icon: BookOpenIcon,
    color: 'bg-blue-100 text-blue-700'
  }, {
    name: 'Fees & Fines',
    href: '/student/fees',
    icon: CreditCardIcon,
    color: 'bg-green-100 text-green-700'
  }, {
    name: 'Event Calendar',
    href: '/student/calendar',
    icon: CalendarIcon,
    color: 'bg-purple-100 text-purple-700'
  }, {
    name: 'My Documents',
    href: '/student/documents',
    icon: FileTextIcon,
    color: 'bg-amber-100 text-amber-700'
  }, {
    name: 'Student Forum',
    href: '/student/forum',
    icon: MessageSquareIcon,
    color: 'bg-pink-100 text-pink-700'
  }, {
    name: 'Timetable',
    href: '/student/timetable',
    icon: ClockIcon,
    color: 'bg-indigo-100 text-indigo-700'
  }];
  return <Card className="p-5">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Access</h2>
      <div className="grid grid-cols-3 gap-3">
        {links.map(link => {
        const IconComponent = link.icon;
        return <Link key={link.name} to={link.href} className="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-gray-50 transition-colors">
              <div className={`p-2 rounded-lg ${link.color} mb-2`}>
                <IconComponent size={18} />
              </div>
              <span className="text-xs text-center text-gray-700">
                {link.name}
              </span>
            </Link>;
      })}
      </div>
    </Card>;
};