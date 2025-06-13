import React from 'react';
import { Card } from '../ui/Card';
import { BookOpenIcon, ClockIcon, CalendarIcon } from 'lucide-react';
export const WelcomeWidget = () => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  let greeting = 'Good morning';
  if (hours >= 12 && hours < 17) {
    greeting = 'Good afternoon';
  } else if (hours >= 17) {
    greeting = 'Good evening';
  }
  return <Card className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      <div className="p-6 relative z-10">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-1">{greeting}, Alex!</h2>
            <p className="text-blue-100">Welcome back to your student portal</p>
          </div>
          <div className="bg-blue-400 bg-opacity-30 rounded-xl p-3 text-center min-w-[80px]">
            <p className="text-xs font-medium text-blue-100">Semester</p>
            <p className="text-lg font-bold">Fall '23</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white bg-opacity-20 rounded-xl p-3 flex items-center">
            <div className="bg-white bg-opacity-30 rounded-lg p-2 mr-3">
              <BookOpenIcon size={20} />
            </div>
            <div>
              <p className="text-sm font-medium">Enrolled Courses</p>
              <p className="text-lg font-bold">5 Courses</p>
            </div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-xl p-3 flex items-center">
            <div className="bg-white bg-opacity-30 rounded-lg p-2 mr-3">
              <ClockIcon size={20} />
            </div>
            <div>
              <p className="text-sm font-medium">Class Hours</p>
              <p className="text-lg font-bold">16 hrs/week</p>
            </div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-xl p-3 flex items-center">
            <div className="bg-white bg-opacity-30 rounded-lg p-2 mr-3">
              <CalendarIcon size={20} />
            </div>
            <div>
              <p className="text-sm font-medium">Academic Year</p>
              <p className="text-lg font-bold">2023-2024</p>
            </div>
          </div>
        </div>
      </div>
    </Card>;
};