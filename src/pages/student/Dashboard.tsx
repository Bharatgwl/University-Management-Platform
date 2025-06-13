import React from 'react';
import { Card } from '../../components/ui/Card';
import { WelcomeWidget } from '../../components/dashboard/WelcomeWidget';
import { AttendanceChart } from '../../components/dashboard/AttendanceChart';
import { FeesSummary } from '../../components/dashboard/FeesSummary';
import { EventsCarousel } from '../../components/dashboard/EventsCarousel';
import { QuickLinks } from '../../components/dashboard/QuickLinks';
export const StudentDashboard = () => {
  return <div className="space-y-6 pb-16">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <WelcomeWidget />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AttendanceChart />
            <FeesSummary />
          </div>
          <EventsCarousel />
        </div>
        {/* Right Column */}
        <div className="space-y-6">
          <QuickLinks />
          <Card className="p-5">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Recent Notifications
            </h2>
            <div className="space-y-3">
              {[{
              message: 'Your CS101 assignment is due tomorrow',
              time: '10 minutes ago'
            }, {
              message: 'Dr. Miller posted new course materials',
              time: '2 hours ago'
            }, {
              message: 'Reminder: Fee payment deadline is next week',
              time: 'Yesterday'
            }].map((notification, index) => <div key={index} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                  <p className="text-sm text-gray-800">
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {notification.time}
                  </p>
                </div>)}
            </div>
            <button className="w-full mt-4 text-sm text-indigo-600 hover:text-indigo-800">
              View all notifications
            </button>
          </Card>
          <Card className="p-5">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Today's Schedule
            </h2>
            <div className="space-y-3">
              {[{
              course: 'CS101: Intro to Programming',
              time: '10:00 AM - 11:30 AM',
              room: 'Room 203'
            }, {
              course: 'MATH202: Calculus II',
              time: '1:00 PM - 2:30 PM',
              room: 'Room 105'
            }, {
              course: 'Study Group: Project Planning',
              time: '3:00 PM - 4:30 PM',
              room: 'Library'
            }].map((schedule, index) => <div key={index} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                  <p className="text-sm font-medium text-gray-800">
                    {schedule.course}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {schedule.time} • {schedule.room}
                  </p>
                </div>)}
            </div>
          </Card>
        </div>
      </div>
    </div>;
};