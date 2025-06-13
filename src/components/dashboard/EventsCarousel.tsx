import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { ChevronLeftIcon, ChevronRightIcon, CalendarIcon } from 'lucide-react';
export const EventsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const events = [{
    id: 1,
    title: 'Annual Tech Symposium',
    date: 'Oct 15, 2023',
    time: '9:00 AM - 5:00 PM',
    location: 'University Auditorium',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Join us for a day of technology talks, workshops, and networking with industry professionals.'
  }, {
    id: 2,
    title: 'Fall Music Festival',
    date: 'Oct 22, 2023',
    time: '4:00 PM - 10:00 PM',
    location: 'University Grounds',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Enjoy performances from student bands and professional musicians at our annual fall music event.'
  }, {
    id: 3,
    title: 'Career Fair 2023',
    date: 'Nov 5, 2023',
    time: '10:00 AM - 3:00 PM',
    location: 'Student Center',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQThZbTuF0Jl-9qB7quFzY0-SDvcbrFFJ_p3Em5HQEBiOgUAxoyfFLMJb8l0jQeqWeLVU4&usqp=CAU',
    description: 'Meet with over 50 companies looking to hire students and recent graduates for internships and full-time positions.'
  }];
  const nextSlide = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % events.length);
  };
  const prevSlide = () => {
    setActiveIndex(prevIndex => (prevIndex - 1 + events.length) % events.length);
  };
  const currentEvent = events[activeIndex];
  return <Card className="overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/5 h-48 md:h-auto relative">
          <img src={currentEvent.image} alt={currentEvent.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
            <div className="text-white">
              <h3 className="text-xl font-bold">{currentEvent.title}</h3>
              <div className="flex items-center mt-1">
                <CalendarIcon size={14} className="mr-1" />
                <span className="text-sm">{currentEvent.date}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 w-full md:w-3/5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Upcoming Events
            </h2>
            <div className="flex items-center space-x-2">
              <button className="p-1 rounded-full bg-gray-100 hover:bg-gray-200" onClick={prevSlide}>
                <ChevronLeftIcon size={18} />
              </button>
              <button className="p-1 rounded-full bg-gray-100 hover:bg-gray-200" onClick={nextSlide}>
                <ChevronRightIcon size={18} />
              </button>
            </div>
          </div>
          <div>
            <div className="flex items-center text-gray-600 mb-2">
              <p className="text-sm">
                {currentEvent.time} • {currentEvent.location}
              </p>
            </div>
            <p className="text-gray-700 mb-4">{currentEvent.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-xs bg-indigo-100 text-indigo-800 rounded-full px-2 py-1 mr-2">
                  {activeIndex + 1}/{events.length}
                </span>
                <span className="text-sm text-gray-500">
                  More events coming soon
                </span>
              </div>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-xl">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>;
};