import React from 'react';
import { PencilIcon, MapPinIcon, BriefcaseIcon, GraduationCapIcon } from 'lucide-react';
const Profile = () => {
  return <div className="max-w-4xl mx-auto">
      {/* Profile header */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="h-40 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
        <div className="relative px-4 sm:px-6 pb-4">
          <div className="absolute -mt-16">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Profile" className="h-32 w-32 rounded-full border-4 border-white" />
          </div>
          <div className="mt-16 sm:mt-0 sm:ml-36 flex justify-between">
            <div className="pt-4">
              <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
              <p className="text-gray-600">Software Engineer at Tech Company</p>
              <div className="flex items-center mt-1 text-sm text-gray-500">
                <MapPinIcon className="h-4 w-4 mr-1" />
                <span>San Francisco, CA</span>
              </div>
              <div className="mt-4 flex space-x-3">
                <button className="px-4 py-1 border border-blue-600 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-50">
                  Message
                </button>
                <button className="px-4 py-1 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700">
                  Connect
                </button>
              </div>
            </div>
            <div className="pt-4">
              <button className="p-2 text-gray-500 rounded-full hover:bg-gray-100">
                <PencilIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Profile content */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="space-y-6">
          {/* About section */}
          <div className="bg-white rounded-lg shadow p-4 sm:p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">About</h2>
              <button className="p-1 text-gray-500 rounded-full hover:bg-gray-100">
                <PencilIcon className="h-4 w-4" />
              </button>
            </div>
            <p className="text-sm text-gray-600">
              Software Engineer with 5+ years of experience developing web
              applications. Passionate about user experience and building
              products that make a difference.
            </p>
          </div>
          {/* Education section */}
          <div className="bg-white rounded-lg shadow p-4 sm:p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">Education</h2>
              <button className="p-1 text-gray-500 rounded-full hover:bg-gray-100">
                <PencilIcon className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="h-12 w-12 rounded bg-gray-200 flex items-center justify-center">
                    <GraduationCapIcon className="h-6 w-6 text-gray-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium">
                    University of Technology
                  </h3>
                  <p className="text-sm text-gray-600">
                    Bachelor of Science in Computer Science
                  </p>
                  <p className="text-xs text-gray-500">2014 - 2018</p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="h-12 w-12 rounded bg-gray-200 flex items-center justify-center">
                    <GraduationCapIcon className="h-6 w-6 text-gray-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Tech Institute</h3>
                  <p className="text-sm text-gray-600">
                    Advanced Web Development Certification
                  </p>
                  <p className="text-xs text-gray-500">2019</p>
                </div>
              </div>
            </div>
          </div>
          {/* Skills section */}
          <div className="bg-white rounded-lg shadow p-4 sm:p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">Skills</h2>
              <button className="p-1 text-gray-500 rounded-full hover:bg-gray-100">
                <PencilIcon className="h-4 w-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                JavaScript
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                React
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                Node.js
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                HTML/CSS
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                GraphQL
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                UI/UX Design
              </span>
            </div>
          </div>
        </div>
        {/* Right column */}
        <div className="md:col-span-2 space-y-6">
          {/* Experience section */}
          <div className="bg-white rounded-lg shadow p-4 sm:p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">Experience</h2>
              <button className="p-1 text-gray-500 rounded-full hover:bg-gray-100">
                <PencilIcon className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-6">
              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="h-12 w-12 rounded bg-gray-200 flex items-center justify-center">
                    <BriefcaseIcon className="h-6 w-6 text-gray-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Tech Company</h3>
                  <p className="text-sm font-medium text-gray-600">
                    Software Engineer
                  </p>
                  <p className="text-xs text-gray-500">
                    Jan 2021 - Present · 2 yrs 6 mos
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    Leading front-end development for the company's main
                    product. Implementing new features and improving user
                    experience.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="h-12 w-12 rounded bg-gray-200 flex items-center justify-center">
                    <BriefcaseIcon className="h-6 w-6 text-gray-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium">StartupX</h3>
                  <p className="text-sm font-medium text-gray-600">
                    Junior Developer
                  </p>
                  <p className="text-xs text-gray-500">
                    Jun 2018 - Dec 2020 · 2 yrs 7 mos
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    Worked on various web applications using React and Node.js.
                    Collaborated with design team to implement UI components.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Activity section */}
          <div className="bg-white rounded-lg shadow p-4 sm:p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">Activity</h2>
              <button className="text-sm text-blue-600 hover:text-blue-800">
                See all
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">John Doe</span>{' '}
                  shared a post: "Excited to announce that I'll be speaking at
                  the upcoming Tech Conference in September!"
                </p>
                <p className="text-xs text-gray-500 mt-1">2 days ago</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">John Doe</span>{' '}
                  updated their profile picture
                </p>
                <p className="text-xs text-gray-500 mt-1">1 week ago</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">John Doe</span>{' '}
                  started a new position as Software Engineer at Tech Company
                </p>
                <p className="text-xs text-gray-500 mt-1">Jan 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Profile;