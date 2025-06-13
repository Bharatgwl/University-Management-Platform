import React from 'react';
import { Card } from '../../components/ui/Card';
import { UsersIcon, CheckCircleIcon, ClipboardListIcon, BellIcon, CalendarIcon, BookOpenIcon, ChevronRightIcon } from 'lucide-react';
export const FacultyDashboard = () => {
  return <div className="space-y-6 pb-16">
      <h1 className="text-2xl font-bold text-gray-900">Faculty Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg mr-3">
              <UsersIcon size={20} className="text-blue-700" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Students</p>
              <p className="text-2xl font-bold text-gray-800">156</p>
            </div>
          </div>
          <p className="mt-2 text-xs text-gray-500">Across 5 courses</p>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg mr-3">
              <CheckCircleIcon size={20} className="text-green-700" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Today's Attendance</p>
              <p className="text-2xl font-bold text-gray-800">92%</p>
            </div>
          </div>
          <p className="mt-2 text-xs text-gray-500">12 students absent</p>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <div className="p-2 bg-amber-100 rounded-lg mr-3">
              <ClipboardListIcon size={20} className="text-amber-700" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Pending Reviews</p>
              <p className="text-2xl font-bold text-gray-800">28</p>
            </div>
          </div>
          <p className="mt-2 text-xs text-gray-500">5 due today</p>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg mr-3">
              <BellIcon size={20} className="text-purple-700" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Notifications</p>
              <p className="text-2xl font-bold text-gray-800">14</p>
            </div>
          </div>
          <p className="mt-2 text-xs text-gray-500">3 new since yesterday</p>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-5">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-800">
                Today's Class Schedule
              </h2>
              <button className="text-sm text-indigo-600 hover:text-indigo-800">
                View Full Schedule
              </button>
            </div>
            <div className="space-y-4">
              {[{
              id: 1,
              course: 'CS101: Intro to Programming',
              time: '10:00 AM - 11:30 AM',
              location: 'Room 203',
              students: 35,
              status: 'upcoming'
            }, {
              id: 2,
              course: 'CS305: Database Systems',
              time: '1:00 PM - 2:30 PM',
              location: 'Room 105',
              students: 28,
              status: 'active'
            }, {
              id: 3,
              course: 'CS401: Advanced Algorithms',
              time: '3:00 PM - 4:30 PM',
              location: 'Room 302',
              students: 22,
              status: 'upcoming'
            }].map(schedule => <div key={schedule.id} className={`
                    border rounded-xl p-4 flex items-center justify-between
                    ${schedule.status === 'active' ? 'bg-blue-50 border-blue-200' : 'border-gray-200'}
                  `}>
                  <div className="flex items-center">
                    <div className="mr-4 text-center">
                      <div className={`
                        w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold
                        ${schedule.status === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}
                      `}>
                        {schedule.time.split(':')[0]}
                      </div>
                      <p className="text-xs mt-1 text-gray-500">
                        {schedule.time.includes('AM') ? 'AM' : 'PM'}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-800">
                        {schedule.course}
                      </h3>
                      <div className="mt-1 space-y-1">
                        <div className="flex items-center text-xs text-gray-500">
                          <CalendarIcon size={12} className="mr-1" />
                          <span>{schedule.time}</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <UsersIcon size={12} className="mr-1" />
                          <span>
                            {schedule.students} Students • {schedule.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {schedule.status === 'active' ? <button className="px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                        Start Class
                      </button> : <div className="flex space-x-2">
                        <button className="px-3 py-1 text-xs bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg">
                          Materials
                        </button>
                        <button className="px-3 py-1 text-xs bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
                          View
                        </button>
                      </div>}
                  </div>
                </div>)}
            </div>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-5">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Pending Assignment Reviews
              </h2>
              <div className="space-y-3">
                {[{
                id: 1,
                course: 'CS101',
                title: 'Programming Assignment 3',
                submissions: 32,
                dueDate: 'Oct 15'
              }, {
                id: 2,
                course: 'CS305',
                title: 'Database Design Project',
                submissions: 26,
                dueDate: 'Oct 12'
              }, {
                id: 3,
                course: 'CS401',
                title: 'Algorithm Analysis',
                submissions: 20,
                dueDate: 'Oct 18'
              }].map(assignment => <div key={assignment.id} className="border border-gray-100 rounded-lg p-3 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-blue-100 text-blue-800 rounded-full px-2 py-0.5">
                        {assignment.course}
                      </span>
                      <span className="text-xs text-gray-500">
                        Due {assignment.dueDate}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-800 mt-1">
                      {assignment.title}
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xs text-gray-600">
                        {assignment.submissions} submissions
                      </span>
                      <button className="text-xs bg-indigo-600 hover:bg-indigo-700 text-white px-2 py-1 rounded">
                        Review
                      </button>
                    </div>
                  </div>)}
              </div>
              <button className="mt-4 w-full py-2 text-sm text-indigo-600 hover:text-indigo-800 flex items-center justify-center">
                View All Assignments
              </button>
            </Card>
            <Card className="p-5">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Attendance Marking Tool
              </h2>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-medium text-gray-800">
                      CS305: Database Systems
                    </h3>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                      Active
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">
                    Today, 1:00 PM - 2:30 PM • Room 105
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 mr-2">
                        <CheckCircleIcon size={16} />
                      </div>
                      <span className="text-sm text-gray-600">
                        24/28 Present
                      </span>
                    </div>
                    <button className="px-3 py-1 text-xs bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
                      Mark Attendance
                    </button>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-medium text-gray-800">
                      CS401: Advanced Algorithms
                    </h3>
                    <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                      Upcoming
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">
                    Today, 3:00 PM - 4:30 PM • Room 302
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 mr-2">
                        <UsersIcon size={16} />
                      </div>
                      <span className="text-sm text-gray-600">
                        0/22 Present
                      </span>
                    </div>
                    <button className="px-3 py-1 text-xs bg-gray-200 text-gray-500 rounded-lg cursor-not-allowed">
                      Not Started
                    </button>
                  </div>
                </div>
              </div>
              <button className="mt-4 w-full py-2 text-sm text-indigo-600 hover:text-indigo-800 flex items-center justify-center">
                View All Classes
              </button>
            </Card>
          </div>
        </div>
        {/* Right Column */}
        <div className="space-y-6">
          <Card className="p-5">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Notifications
            </h2>
            <div className="space-y-3">
              {[{
              id: 1,
              type: 'leave',
              message: 'Leave request from Student: Alex Johnson',
              time: '10 minutes ago'
            }, {
              id: 2,
              type: 'message',
              message: 'New message from Department Head',
              time: '2 hours ago'
            }, {
              id: 3,
              type: 'system',
              message: 'Reminder: Faculty meeting tomorrow',
              time: 'Yesterday'
            }].map(notification => <div key={notification.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                  <div className="flex items-start">
                    <div className={`
                      p-2 rounded-lg mr-3
                      ${notification.type === 'leave' ? 'bg-amber-100 text-amber-700' : notification.type === 'message' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}
                    `}>
                      {notification.type === 'leave' ? <UsersIcon size={16} /> : notification.type === 'message' ? <BellIcon size={16} /> : <CalendarIcon size={16} />}
                    </div>
                    <div>
                      <p className="text-sm text-gray-800">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                  {notification.type === 'leave' && <div className="mt-2 ml-9 flex space-x-2">
                      <button className="px-2 py-1 text-xs bg-green-600 hover:bg-green-700 text-white rounded">
                        Approve
                      </button>
                      <button className="px-2 py-1 text-xs bg-red-600 hover:bg-red-700 text-white rounded">
                        Deny
                      </button>
                    </div>}
                </div>)}
            </div>
            <button className="mt-4 w-full py-2 text-sm text-indigo-600 hover:text-indigo-800 flex items-center justify-center">
              View All Notifications
            </button>
          </Card>
          <Card className="p-5">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Links
            </h2>
            <div className="space-y-2">
              <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl flex items-center justify-between px-4">
                <div className="flex items-center">
                  <BookOpenIcon size={18} className="mr-2" />
                  <span>Upload Course Materials</span>
                </div>
                <ChevronRightIcon size={18} />
              </button>
              <button className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl flex items-center justify-between px-4">
                <div className="flex items-center">
                  <ClipboardListIcon size={18} className="mr-2" />
                  <span>Create Assignment</span>
                </div>
                <ChevronRightIcon size={18} />
              </button>
              <button className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl flex items-center justify-between px-4">
                <div className="flex items-center">
                  <UsersIcon size={18} className="mr-2" />
                  <span>View Student Performance</span>
                </div>
                <ChevronRightIcon size={18} />
              </button>
            </div>
          </Card>
          <Card className="p-5">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Upcoming Events
            </h2>
            <div className="space-y-3">
              {[{
              id: 1,
              title: 'Faculty Meeting',
              date: 'Oct 15, 2023',
              time: '2:00 PM',
              location: 'Conference Room'
            }, {
              id: 2,
              title: 'Department Review',
              date: 'Oct 22, 2023',
              time: '10:00 AM',
              location: "Dean's Office"
            }, {
              id: 3,
              title: 'Mid-Semester Evaluation',
              date: 'Oct 25, 2023',
              time: 'All Day',
              location: 'Various'
            }].map(event => <div key={event.id} className="border border-gray-100 rounded-lg p-3 hover:bg-gray-50">
                  <p className="text-sm font-medium text-gray-800">
                    {event.title}
                  </p>
                  <div className="mt-1 space-y-1">
                    <div className="flex items-center text-xs text-gray-500">
                      <CalendarIcon size={12} className="mr-1" />
                      <span>
                        {event.date} • {event.time}
                      </span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <MapPinIcon size={12} className="mr-1" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>)}
            </div>
            <button className="mt-4 w-full py-2 text-sm text-indigo-600 hover:text-indigo-800 flex items-center justify-center">
              View Calendar
            </button>
          </Card>
        </div>
      </div>
    </div>;
};