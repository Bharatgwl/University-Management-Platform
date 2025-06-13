import React from 'react';
import { BookmarkIcon, BriefcaseIcon, MapPinIcon, ClockIcon, FilterIcon } from 'lucide-react';
const Jobs = () => {
  const jobs = [{
    id: 1,
    title: 'Senior Software Engineer',
    company: 'Tech Company',
    logo: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
    location: 'San Francisco, CA (Remote)',
    type: 'Full-time',
    posted: '2 days ago',
    description: "We're looking for a senior software engineer to join our team and help build innovative products that millions of people use every day.",
    skills: ['React', 'Node.js', 'AWS', 'TypeScript']
  }, {
    id: 2,
    title: 'Product Manager',
    company: 'StartupX',
    logo: 'https://images.unsplash.com/photo-1568122506084-57d012366aa8?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
    location: 'New York, NY',
    type: 'Full-time',
    posted: '1 week ago',
    description: 'Join our team as a Product Manager and lead the development of our flagship product from concept to launch.',
    skills: ['Product Strategy', 'User Research', 'Agile', 'Data Analysis']
  }, {
    id: 3,
    title: 'UX/UI Designer',
    company: 'Design Studio',
    logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
    location: 'Remote',
    type: 'Contract',
    posted: '3 days ago',
    description: "We're seeking a talented UX/UI designer to create beautiful, intuitive interfaces for our clients' web and mobile applications.",
    skills: ['Figma', 'User Testing', 'Wireframing', 'Design Systems']
  }, {
    id: 4,
    title: 'Data Scientist',
    company: 'Analytics Corp',
    logo: 'https://images.unsplash.com/photo-1489389944381-3471b5b30f04?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
    location: 'Boston, MA',
    type: 'Full-time',
    posted: 'Just now',
    description: 'Looking for a data scientist to help us analyze large datasets and build predictive models to drive business decisions.',
    skills: ['Python', 'Machine Learning', 'SQL', 'Statistics']
  }];
  const savedJobs = [{
    id: 5,
    title: 'Frontend Developer',
    company: 'WebCorp',
    logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
    location: 'Chicago, IL (Hybrid)',
    type: 'Full-time',
    posted: '1 week ago'
  }, {
    id: 6,
    title: 'DevOps Engineer',
    company: 'CloudTech',
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
    location: 'Remote',
    type: 'Full-time',
    posted: '3 days ago'
  }];
  return <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Jobs</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2">
          {/* Search and filters */}
          <div className="bg-white rounded-lg shadow p-4 mb-6">
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <div className="relative flex-grow">
                <input type="text" placeholder="Search jobs by title, skill, or company" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div className="relative">
                <input type="text" placeholder="Location" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Search
              </button>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex space-x-2">
                <button className="flex items-center px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-800 hover:bg-gray-200">
                  <FilterIcon className="h-3 w-3 mr-1" />
                  Filters
                </button>
                <button className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-800 hover:bg-gray-200">
                  Remote
                </button>
                <button className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-800 hover:bg-gray-200">
                  Full-time
                </button>
              </div>
              <button className="text-xs text-blue-600 font-medium hover:text-blue-800">
                Clear all
              </button>
            </div>
          </div>
          {/* Job listings */}
          <div className="space-y-4">
            {jobs.map(job => <div key={job.id} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-4 sm:p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <img src={job.logo} alt={job.company} className="h-12 w-12 rounded" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <h2 className="text-lg font-medium text-gray-900 truncate">
                          {job.title}
                        </h2>
                        <button className="text-gray-400 hover:text-blue-600">
                          <BookmarkIcon className="h-5 w-5" />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-gray-700">
                        {job.company}
                      </p>
                      <div className="mt-2 flex flex-wrap items-center text-sm text-gray-500">
                        <div className="flex items-center mr-4">
                          <MapPinIcon className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center mr-4">
                          <BriefcaseIcon className="h-4 w-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <ClockIcon className="h-4 w-4 mr-1" />
                          {job.posted}
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-gray-600">
                        {job.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {job.skills.map(skill => <span key={skill} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                            {skill}
                          </span>)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Apply Now
                  </button>
                </div>
              </div>)}
          </div>
          <div className="mt-6 flex justify-center">
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              Load more jobs
            </button>
          </div>
        </div>
        {/* Sidebar */}
        <div>
          {/* Saved jobs */}
          <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
            <div className="px-4 py-3 border-b">
              <h2 className="text-lg font-medium text-gray-900">Saved Jobs</h2>
            </div>
            <div>
              {savedJobs.map(job => <div key={job.id} className="p-4 border-b last:border-b-0 hover:bg-gray-50">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <img src={job.logo} alt={job.company} className="h-10 w-10 rounded" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900 truncate">
                        {job.title}
                      </h3>
                      <p className="text-xs text-gray-500">{job.company}</p>
                      <p className="text-xs text-gray-500">{job.location}</p>
                      <p className="text-xs text-gray-400 mt-1">{job.posted}</p>
                    </div>
                  </div>
                </div>)}
            </div>
            <div className="px-4 py-3 bg-gray-50 text-center">
              <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
                View all saved jobs
              </button>
            </div>
          </div>
          {/* Job alerts */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-4 py-3 border-b">
              <h2 className="text-lg font-medium text-gray-900">
                Get Job Alerts
              </h2>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-4">
                Create a job alert and never miss out on new opportunities
                matching your criteria.
              </p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="keywords" className="block text-sm font-medium text-gray-700 mb-1">
                    Job title, skills, or keywords
                  </label>
                  <input type="text" id="keywords" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm" placeholder="e.g., Software Engineer" />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input type="text" id="location" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm" placeholder="e.g., San Francisco, Remote" />
                </div>
                <div className="flex items-center">
                  <input id="daily-alert" name="alert-frequency" type="radio" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" defaultChecked />
                  <label htmlFor="daily-alert" className="ml-2 block text-sm text-gray-700">
                    Daily alert
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="weekly-alert" name="alert-frequency" type="radio" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                  <label htmlFor="weekly-alert" className="ml-2 block text-sm text-gray-700">
                    Weekly alert
                  </label>
                </div>
                <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Create Alert
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Jobs;