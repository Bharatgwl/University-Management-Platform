import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { ChevronLeftIcon, ChevronRightIcon, CalendarIcon, ClockIcon, MapPinIcon, UserIcon, FilterIcon, SearchIcon } from 'lucide-react';
export const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const events = [{
    id: 1,
    title: 'Annual Tech Symposium',
    date: '2023-10-15',
    time: '9:00 AM - 5:00 PM',
    location: 'University Auditorium',
    type: 'academic',
    organizer: 'Computer Science Department',
    description: 'Join us for a day of technology talks, workshops, and networking with industry professionals.'
  }, {
    id: 2,
    title: 'Fall Music Festival',
    date: '2023-10-22',
    time: '4:00 PM - 10:00 PM',
    location: 'University Grounds',
    type: 'cultural',
    organizer: 'Student Cultural Committee',
    description: 'Enjoy performances from student bands and professional musicians at our annual fall music event.'
  }, {
    id: 3,
    title: 'Career Fair 2023',
    date: '2023-11-05',
    time: '10:00 AM - 3:00 PM',
    location: 'Student Center',
    type: 'career',
    organizer: 'Career Development Center',
    description: 'Meet with over 50 companies looking to hire students and recent graduates for internships and full-time positions.'
  }, {
    id: 4,
    title: 'Mid-Semester Exams',
    date: '2023-10-25',
    time: 'All Day',
    location: 'Various Locations',
    type: 'exam',
    organizer: 'Examination Department',
    description: 'Mid-semester examinations for all courses.'
  }];
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    // First day of the month
    const firstDay = new Date(year, month, 1);
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0);
    // Days from previous month to fill the first week
    const daysFromPrevMonth = firstDay.getDay();
    // Total days in the current month
    const daysInMonth = lastDay.getDate();
    const calendarDays = [];
    // Add days from previous month
    const prevMonth = new Date(year, month - 1, 0);
    const prevMonthDays = prevMonth.getDate();
    for (let i = daysFromPrevMonth - 1; i >= 0; i--) {
      calendarDays.push({
        date: new Date(year, month - 1, prevMonthDays - i),
        isCurrentMonth: false
      });
    }
    // Add days from current month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      const hasEvent = events.some(event => {
        const eventDate = new Date(event.date);
        return eventDate.getDate() === i && eventDate.getMonth() === month && eventDate.getFullYear() === year;
      });
      calendarDays.push({
        date,
        isCurrentMonth: true,
        hasEvent
      });
    }
    // Add days from next month to complete the last week
    const daysToAdd = 42 - calendarDays.length; // 6 rows * 7 days = 42
    for (let i = 1; i <= daysToAdd; i++) {
      calendarDays.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false
      });
    }
    return calendarDays;
  };
  const calendarDays = generateCalendarDays();
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };
  const formatDate = date => {
    return date.toISOString().split('T')[0];
  };
  const selectedDateEvents = events.filter(event => event.date === formatDate(selectedDate));
  const upcomingEvents = events.filter(event => new Date(event.date) >= new Date()).sort((a, b) => new Date(a.date) - new Date(b.date)).slice(0, 3);
  return <div className="space-y-6 pb-16">
      <h1 className="text-2xl font-bold text-gray-900">Event Calendar</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Calendar */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-5">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <h2 className="text-lg font-semibold text-gray-800">
                  {monthNames[currentMonth.getMonth()]}{' '}
                  {currentMonth.getFullYear()}
                </h2>
                <div className="ml-4 flex items-center">
                  <button className="p-1 rounded-full hover:bg-gray-100" onClick={prevMonth}>
                    <ChevronLeftIcon size={20} />
                  </button>
                  <button className="p-1 rounded-full hover:bg-gray-100" onClick={nextMonth}>
                    <ChevronRightIcon size={20} />
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="flex items-center text-sm text-gray-600 hover:text-gray-800">
                  <FilterIcon size={16} className="mr-1" />
                  Filter
                </button>
                <button className="px-3 py-1 text-sm bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
                  Today
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1">
              {/* Day headers */}
              {daysOfWeek.map(day => <div key={day} className="text-center py-2 text-sm font-medium text-gray-500">
                  {day}
                </div>)}
              {/* Calendar days */}
              {calendarDays.map((day, index) => {
              const isSelected = day.date.toDateString() === selectedDate.toDateString();
              const isToday = day.date.toDateString() === new Date().toDateString();
              return <div key={index} className={`
                      relative h-24 p-1 border border-gray-100 hover:bg-gray-50 cursor-pointer
                      ${!day.isCurrentMonth ? 'opacity-50' : ''}
                      ${isSelected ? 'bg-indigo-50 border-indigo-200' : ''}
                    `} onClick={() => setSelectedDate(day.date)}>
                    <div className={`
                      flex items-center justify-center w-6 h-6 rounded-full mb-1
                      ${isToday ? 'bg-indigo-600 text-white' : ''}
                    `}>
                      <span className="text-xs">{day.date.getDate()}</span>
                    </div>
                    {day.hasEvent && <div className="px-1">
                        {events.filter(event => event.date === formatDate(day.date)).slice(0, 2).map((event, i) => <div key={i} className={`
                                text-xs truncate rounded py-0.5 px-1 mb-0.5
                                ${event.type === 'academic' ? 'bg-blue-100 text-blue-800' : event.type === 'cultural' ? 'bg-purple-100 text-purple-800' : event.type === 'career' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}
                              `}>
                              {event.title}
                            </div>)}
                        {events.filter(event => event.date === formatDate(day.date)).length > 2 && <div className="text-xs text-gray-500">
                            +
                            {events.filter(event => event.date === formatDate(day.date)).length - 2}{' '}
                            more
                          </div>}
                      </div>}
                  </div>;
            })}
            </div>
          </Card>
          <Card className="p-5">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Events on{' '}
              {selectedDate.toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
            </h2>
            {selectedDateEvents.length > 0 ? <div className="space-y-4">
                {selectedDateEvents.map(event => <div key={event.id} className="border border-gray-100 rounded-xl p-4 hover:bg-gray-50">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center">
                          <span className={`
                            w-3 h-3 rounded-full mr-2
                            ${event.type === 'academic' ? 'bg-blue-500' : event.type === 'cultural' ? 'bg-purple-500' : event.type === 'career' ? 'bg-green-500' : 'bg-amber-500'}
                          `}></span>
                          <h3 className="text-lg font-medium text-gray-800">
                            {event.title}
                          </h3>
                        </div>
                        <div className="mt-2 space-y-1">
                          <div className="flex items-center text-sm text-gray-600">
                            <ClockIcon size={14} className="mr-2" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPinIcon size={14} className="mr-2" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <UserIcon size={14} className="mr-2" />
                            <span>{event.organizer}</span>
                          </div>
                        </div>
                        <p className="mt-3 text-sm text-gray-700">
                          {event.description}
                        </p>
                      </div>
                      <span className={`
                        text-xs px-2 py-1 rounded-full
                        ${event.type === 'academic' ? 'bg-blue-100 text-blue-800' : event.type === 'cultural' ? 'bg-purple-100 text-purple-800' : event.type === 'career' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}
                      `}>
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-end space-x-2">
                      <button className="px-3 py-1 text-xs bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                        Add to Calendar
                      </button>
                      <button className="px-3 py-1 text-xs bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
                        Register
                      </button>
                    </div>
                  </div>)}
              </div> : <div className="text-center py-10">
                <CalendarIcon size={48} className="mx-auto text-gray-300" />
                <p className="mt-2 text-gray-500">
                  No events scheduled for this day
                </p>
                <button className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-lg">
                  Create Event
                </button>
              </div>}
          </Card>
        </div>
        {/* Right Column */}
        <div className="space-y-6">
          <div className="relative">
            <input type="text" placeholder="Search events..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
            <SearchIcon size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <Card className="p-5">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Upcoming Events
            </h2>
            <div className="space-y-4">
              {upcomingEvents.map(event => <div key={event.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                  <div className="flex items-start">
                    <div className="mr-3 text-center">
                      <div className="bg-gray-100 rounded-t-lg px-2 py-0.5">
                        <span className="text-xs font-medium text-gray-700">
                          {new Date(event.date).toLocaleString('en-US', {
                        month: 'short'
                      })}
                        </span>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-b-lg px-2 py-1">
                        <span className="text-lg font-bold text-gray-800">
                          {new Date(event.date).getDate()}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-800">
                        {event.title}
                      </h3>
                      <div className="mt-1 space-y-1">
                        <div className="flex items-center text-xs text-gray-500">
                          <ClockIcon size={12} className="mr-1" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <MapPinIcon size={12} className="mr-1" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 ml-11">
                    <button className="text-xs text-indigo-600 hover:text-indigo-800">
                      View details
                    </button>
                  </div>
                </div>)}
            </div>
            <button className="mt-4 w-full py-2 text-sm text-indigo-600 hover:text-indigo-800 flex items-center justify-center">
              View All Events
            </button>
          </Card>
          <Card className="p-5">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Event Categories
            </h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-blue-500 mr-3"></span>
                  <span className="text-sm text-gray-700">Academic</span>
                </div>
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                  5
                </span>
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-purple-500 mr-3"></span>
                  <span className="text-sm text-gray-700">Cultural</span>
                </div>
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                  3
                </span>
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-green-500 mr-3"></span>
                  <span className="text-sm text-gray-700">Career</span>
                </div>
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                  2
                </span>
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-amber-500 mr-3"></span>
                  <span className="text-sm text-gray-700">Exams</span>
                </div>
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                  1
                </span>
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-red-500 mr-3"></span>
                  <span className="text-sm text-gray-700">Sports</span>
                </div>
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                  4
                </span>
              </div>
            </div>
          </Card>
          <Card className="p-5">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Create Event
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Want to organize an event? Submit your event proposal for
              approval.
            </p>
            <button className="w-full py-2 text-sm bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl">
              Submit Event Proposal
            </button>
          </Card>
        </div>
      </div>
    </div>;
};