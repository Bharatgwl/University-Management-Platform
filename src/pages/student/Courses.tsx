import React from 'react';
import { Card } from '../../components/ui/Card';
import { BookOpenIcon, FileTextIcon, ClipboardIcon, ClockIcon } from 'lucide-react';
export const Courses = () => {
  const courses = [{
    id: 1,
    code: 'CS101',
    name: 'Introduction to Programming',
    faculty: 'Dr. Sarah Miller',
    schedule: 'Mon, Wed, Fri • 10:00 AM - 11:30 AM',
    progress: 65,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }, {
    id: 2,
    code: 'MATH202',
    name: 'Calculus II',
    faculty: 'Dr. Robert Chen',
    schedule: 'Tue, Thu • 1:00 PM - 2:30 PM',
    progress: 80,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }, {
    id: 3,
    code: 'ENG105',
    name: 'Technical Writing',
    faculty: 'Prof. Emily Johnson',
    schedule: 'Wed • 3:00 PM - 5:30 PM',
    progress: 45,
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }, {
    id: 4,
    code: 'PHY201',
    name: 'Physics for Engineers',
    faculty: 'Dr. Michael Thompson',
    schedule: 'Mon, Fri • 9:00 AM - 10:30 AM',
    progress: 72,
    image: 'https://images.unsplash.com/photo-1636466497217-06a7561cd80a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }];
  const assignments = [{
    id: 1,
    course: 'CS101',
    title: 'Programming Assignment 3',
    deadline: 'Oct 15, 2023',
    status: 'pending'
  }, {
    id: 2,
    course: 'MATH202',
    title: 'Problem Set 5',
    deadline: 'Oct 12, 2023',
    status: 'pending'
  }, {
    id: 3,
    course: 'ENG105',
    title: 'Research Paper Draft',
    deadline: 'Oct 20, 2023',
    status: 'pending'
  }, {
    id: 4,
    course: 'PHY201',
    title: 'Lab Report 2',
    deadline: 'Oct 8, 2023',
    status: 'submitted'
  }, {
    id: 5,
    course: 'CS101',
    title: 'Programming Assignment 2',
    deadline: 'Sep 30, 2023',
    status: 'graded',
    grade: 'A-'
  }];
  return <div className="space-y-6 pb-16">
      <h1 className="text-2xl font-bold text-gray-900">My Courses</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Course List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">
              Enrolled Courses
            </h2>
            <div className="flex items-center">
              <span className="mr-2 text-sm text-gray-500">Sort by:</span>
              <select className="text-sm border border-gray-300 rounded-lg px-2 py-1">
                <option>Course Code</option>
                <option>Course Name</option>
                <option>Progress</option>
              </select>
            </div>
          </div>
          <div className="space-y-4">
            {courses.map(course => <Card key={course.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/4 h-32 md:h-auto">
                    <img src={course.image} alt={course.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5 w-full md:w-3/4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center">
                          <span className="text-xs bg-blue-100 text-blue-800 rounded-full px-2 py-1 mr-2">
                            {course.code}
                          </span>
                          <h3 className="text-lg font-semibold text-gray-800">
                            {course.name}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          Instructor: {course.faculty}
                        </p>
                        <div className="flex items-center mt-2 text-sm text-gray-600">
                          <ClockIcon size={14} className="mr-1" />
                          <span>{course.schedule}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="inline-flex items-center bg-indigo-50 text-indigo-700 rounded-full px-2 py-1">
                          <span className="text-xs font-medium">
                            {course.progress}% Complete
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-4">
                      <div className="bg-indigo-600 h-1.5 rounded-full" style={{
                    width: `${course.progress}%`
                  }}></div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <button className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 text-xs rounded-lg flex items-center hover:bg-gray-50">
                        <BookOpenIcon size={14} className="mr-1" />
                        View Syllabus
                      </button>
                      <button className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 text-xs rounded-lg flex items-center hover:bg-gray-50">
                        <FileTextIcon size={14} className="mr-1" />
                        Course Notes
                      </button>
                      <button className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 text-xs rounded-lg flex items-center hover:bg-gray-50">
                        <ClipboardIcon size={14} className="mr-1" />
                        Assignments
                      </button>
                    </div>
                  </div>
                </div>
              </Card>)}
          </div>
        </div>
        {/* Right Column - Assignments */}
        <div className="space-y-6">
          <Card className="p-5">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Upcoming Assignments
            </h2>
            <div className="space-y-4">
              {assignments.filter(a => a.status === 'pending').map(assignment => <div key={assignment.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-blue-100 text-blue-800 rounded-full px-2 py-0.5">
                        {assignment.course}
                      </span>
                      <span className="text-xs text-gray-500">
                        Due {assignment.deadline}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-800 mt-1">
                      {assignment.title}
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center">
                        <ClockIcon size={14} className="text-amber-500 mr-1" />
                        <span className="text-xs text-amber-600">
                          {new Date(assignment.deadline) < new Date() ? 'Overdue' : 'Due soon'}
                        </span>
                      </div>
                      <button className="text-xs bg-indigo-600 hover:bg-indigo-700 text-white px-2 py-1 rounded">
                        Upload
                      </button>
                    </div>
                  </div>)}
            </div>
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">
                Recent Submissions
              </h3>
              <div className="space-y-3">
                {assignments.filter(a => a.status !== 'pending').map(assignment => <div key={assignment.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                      <div>
                        <div className="flex items-center">
                          <span className="text-xs bg-gray-100 text-gray-800 rounded-full px-2 py-0.5 mr-2">
                            {assignment.course}
                          </span>
                          <p className="text-sm text-gray-800">
                            {assignment.title}
                          </p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          Submitted on {assignment.deadline}
                        </p>
                      </div>
                      <div>
                        {assignment.status === 'graded' ? <span className="text-xs bg-green-100 text-green-800 rounded-full px-2 py-1">
                            {assignment.grade}
                          </span> : <span className="text-xs bg-gray-100 text-gray-800 rounded-full px-2 py-1">
                            Submitted
                          </span>}
                      </div>
                    </div>)}
              </div>
            </div>
            <button className="mt-4 w-full py-2 text-sm text-indigo-600 hover:text-indigo-800 flex items-center justify-center">
              View All Assignments
            </button>
          </Card>
          <Card className="p-5">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Course Materials
            </h2>
            <div className="space-y-3">
              {[{
              name: 'CS101 - Lecture Notes Week 5',
              type: 'PDF',
              size: '2.3 MB'
            }, {
              name: 'MATH202 - Problem Set Solutions',
              type: 'PDF',
              size: '1.1 MB'
            }, {
              name: 'PHY201 - Lab Instructions',
              type: 'DOCX',
              size: '3.5 MB'
            }].map((file, index) => <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="p-2 bg-gray-100 rounded-lg mr-3">
                      <FileTextIcon size={16} className="text-gray-700" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {file.type} • {file.size}
                      </p>
                    </div>
                  </div>
                  <button className="text-xs text-indigo-600 hover:text-indigo-800">
                    Download
                  </button>
                </div>)}
            </div>
          </Card>
        </div>
      </div>
    </div>;
};