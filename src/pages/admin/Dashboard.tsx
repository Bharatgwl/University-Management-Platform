import React from 'react';
import { Card } from '../../components/ui/Card';
import { UsersIcon, CreditCardIcon, BookOpenIcon, BellIcon, PlusIcon, BarChart3Icon, TrendingUpIcon, PieChartIcon, UserPlusIcon, FileTextIcon, CalendarIcon, SettingsIcon, ChevronRightIcon } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
export const AdminDashboard = () => {
  const attendanceData = [{
    department: 'CS',
    attendance: 92
  }, {
    department: 'ENG',
    attendance: 85
  }, {
    department: 'MATH',
    attendance: 88
  }, {
    department: 'PHY',
    attendance: 78
  }, {
    department: 'BIO',
    attendance: 82
  }];
  const feeData = [{
    name: 'Paid',
    value: 75
  }, {
    name: 'Pending',
    value: 20
  }, {
    name: 'Overdue',
    value: 5
  }];
  const COLORS = ['#4F46E5', '#F59E0B', '#EF4444'];
  return <div className="space-y-6 pb-16">
      <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg mr-3">
              <UsersIcon size={20} className="text-blue-700" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Students</p>
              <p className="text-2xl font-bold text-gray-800">1,245</p>
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs text-green-600">
            <TrendingUpIcon size={14} className="mr-1" />
            <span>5% increase from last semester</span>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg mr-3">
              <UsersIcon size={20} className="text-purple-700" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Faculty</p>
              <p className="text-2xl font-bold text-gray-800">87</p>
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs text-green-600">
            <TrendingUpIcon size={14} className="mr-1" />
            <span>2 new hires this month</span>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg mr-3">
              <CreditCardIcon size={20} className="text-green-700" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Fee Collection</p>
              <p className="text-2xl font-bold text-gray-800">75%</p>
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs text-amber-600">
            <span>$245,000 collected of $325,000</span>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <div className="p-2 bg-amber-100 rounded-lg mr-3">
              <BookOpenIcon size={20} className="text-amber-700" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Active Courses</p>
              <p className="text-2xl font-bold text-gray-800">42</p>
            </div>
          </div>
          <div className="mt-2 flex items-center text-xs text-gray-600">
            <span>Across 5 departments</span>
          </div>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-5">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-800">
                Department Attendance Overview
              </h2>
              <select className="text-xs border border-gray-300 rounded-lg px-2 py-1">
                <option>This Month</option>
                <option>Last Month</option>
                <option>This Semester</option>
              </select>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={attendanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="department" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip formatter={value => [`${value}%`, 'Attendance']} />
                  <Legend />
                  <Bar dataKey="attendance" fill="#4F46E5" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-sm text-gray-600 text-center">
              <p>
                Computer Science department has the highest attendance rate this
                month
              </p>
            </div>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  Fee Status
                </h2>
                <div className="p-1 bg-gray-100 rounded-full">
                  <PieChartIcon size={18} className="text-gray-700" />
                </div>
              </div>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={feeData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value" label={({
                    name,
                    percent
                  }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine={false}>
                      {feeData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                    </Pie>
                    <Tooltip formatter={value => [`${value}%`, 'Students']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 flex items-center justify-center space-x-4">
                {feeData.map((entry, index) => <div key={index} className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-1" style={{
                  backgroundColor: COLORS[index % COLORS.length]
                }}></div>
                    <span className="text-xs text-gray-600">{entry.name}</span>
                  </div>)}
              </div>
            </Card>
            <Card className="p-5">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Quick Actions
              </h2>
              <div className="space-y-3">
                <button className="w-full py-2 flex items-center justify-between px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl">
                  <div className="flex items-center">
                    <UserPlusIcon size={16} className="mr-2" />
                    <span>Add New Student</span>
                  </div>
                  <ChevronRightIcon size={16} />
                </button>
                <button className="w-full py-2 flex items-center justify-between px-4 bg-green-600 hover:bg-green-700 text-white rounded-xl">
                  <div className="flex items-center">
                    <FileTextIcon size={16} className="mr-2" />
                    <span>Publish Notice</span>
                  </div>
                  <ChevronRightIcon size={16} />
                </button>
                <button className="w-full py-2 flex items-center justify-between px-4 bg-amber-600 hover:bg-amber-700 text-white rounded-xl">
                  <div className="flex items-center">
                    <CalendarIcon size={16} className="mr-2" />
                    <span>Create Event</span>
                  </div>
                  <ChevronRightIcon size={16} />
                </button>
                <button className="w-full py-2 flex items-center justify-between px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl">
                  <div className="flex items-center">
                    <SettingsIcon size={16} className="mr-2" />
                    <span>System Settings</span>
                  </div>
                  <ChevronRightIcon size={16} />
                </button>
              </div>
            </Card>
          </div>
          <Card className="p-5">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-800">
                Recent Activities
              </h2>
              <button className="text-sm text-indigo-600 hover:text-indigo-800">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {[{
              id: 1,
              action: 'New student registration',
              user: 'Admin User',
              details: 'Added 5 new students to Computer Science department',
              time: '10 minutes ago'
            }, {
              id: 2,
              action: 'Fee structure updated',
              user: 'Finance Admin',
              details: 'Updated tuition fees for Fall 2023 semester',
              time: '2 hours ago'
            }, {
              id: 3,
              action: 'Course schedule modified',
              user: 'Department Head',
              details: 'Changed timing for CS305 Database Systems',
              time: 'Yesterday'
            }, {
              id: 4,
              action: 'System maintenance',
              user: 'System Admin',
              details: 'Scheduled maintenance completed successfully',
              time: '2 days ago'
            }].map(activity => <div key={activity.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="p-2 bg-indigo-100 rounded-lg mr-3">
                      <BarChart3Icon size={16} className="text-indigo-700" />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h3 className="text-sm font-medium text-gray-800">
                          {activity.action}
                        </h3>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-xs text-gray-500">
                          {activity.time}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">
                        By {activity.user}
                      </p>
                      <p className="text-sm text-gray-700 mt-1">
                        {activity.details}
                      </p>
                    </div>
                  </div>
                </div>)}
            </div>
          </Card>
        </div>
        {/* Right Column */}
        <div className="space-y-6">
          <Card className="p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Notifications
              </h2>
              <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">
                12 New
              </span>
            </div>
            <div className="space-y-3">
              {[{
              id: 1,
              type: 'alert',
              message: 'Server maintenance scheduled for tonight',
              time: '10 minutes ago'
            }, {
              id: 2,
              type: 'warning',
              message: 'Low attendance in PHY201 class',
              time: '2 hours ago'
            }, {
              id: 3,
              type: 'info',
              message: 'New faculty onboarding next week',
              time: 'Yesterday'
            }].map(notification => <div key={notification.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                  <div className="flex items-start">
                    <div className={`
                      p-2 rounded-lg mr-3
                      ${notification.type === 'alert' ? 'bg-red-100 text-red-700' : notification.type === 'warning' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'}
                    `}>
                      <BellIcon size={16} />
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
                </div>)}
            </div>
            <button className="mt-4 w-full py-2 text-sm text-indigo-600 hover:text-indigo-800 flex items-center justify-center">
              View All Notifications
            </button>
          </Card>
          <Card className="p-5">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Department Overview
            </h2>
            <div className="space-y-3">
              {[{
              name: 'Computer Science',
              students: 450,
              faculty: 32,
              courses: 15
            }, {
              name: 'Engineering',
              students: 380,
              faculty: 28,
              courses: 12
            }, {
              name: 'Mathematics',
              students: 210,
              faculty: 15,
              courses: 8
            }, {
              name: 'Physics',
              students: 120,
              faculty: 9,
              courses: 5
            }, {
              name: 'Biology',
              students: 85,
              faculty: 7,
              courses: 4
            }].map((dept, index) => <div key={index} className="border border-gray-100 rounded-lg p-3 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-800">
                      {dept.name}
                    </h3>
                    <button className="text-xs text-indigo-600 hover:text-indigo-800">
                      Details
                    </button>
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Students</p>
                      <p className="text-sm font-semibold text-gray-800">
                        {dept.students}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Faculty</p>
                      <p className="text-sm font-semibold text-gray-800">
                        {dept.faculty}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Courses</p>
                      <p className="text-sm font-semibold text-gray-800">
                        {dept.courses}
                      </p>
                    </div>
                  </div>
                </div>)}
            </div>
          </Card>
          <Card className="p-5">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Upcoming Events
            </h2>
            <div className="space-y-3">
              {[{
              id: 1,
              title: 'Board Meeting',
              date: 'Oct 15, 2023',
              time: '2:00 PM'
            }, {
              id: 2,
              title: 'Faculty Orientation',
              date: 'Oct 20, 2023',
              time: '9:00 AM'
            }, {
              id: 3,
              title: 'Mid-Semester Exams',
              date: 'Oct 25, 2023',
              time: 'All Day'
            }].map(event => <div key={event.id} className="border border-gray-100 rounded-lg p-3 hover:bg-gray-50">
                  <p className="text-sm font-medium text-gray-800">
                    {event.title}
                  </p>
                  <div className="mt-1 flex items-center text-xs text-gray-500">
                    <CalendarIcon size={12} className="mr-1" />
                    <span>
                      {event.date} • {event.time}
                    </span>
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