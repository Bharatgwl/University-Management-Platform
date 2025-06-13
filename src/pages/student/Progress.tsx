import React from 'react';
import { Card } from '../../components/ui/Card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { DownloadIcon, ArrowUpIcon, ArrowDownIcon, AwardIcon, TrendingUpIcon } from 'lucide-react';
export const Progress = () => {
  const gpaData = [{
    semester: 'Sem 1',
    gpa: 3.5,
    cgpa: 3.5
  }, {
    semester: 'Sem 2',
    gpa: 3.7,
    cgpa: 3.6
  }, {
    semester: 'Sem 3',
    gpa: 3.3,
    cgpa: 3.5
  }, {
    semester: 'Sem 4',
    gpa: 3.8,
    cgpa: 3.6
  }, {
    semester: 'Sem 5',
    gpa: 3.9,
    cgpa: 3.7
  }];
  const attendanceData = [{
    subject: 'CS101',
    attendance: 92,
    performance: 88
  }, {
    subject: 'MATH202',
    attendance: 85,
    performance: 78
  }, {
    subject: 'ENG105',
    attendance: 75,
    performance: 72
  }, {
    subject: 'PHY201',
    attendance: 95,
    performance: 90
  }, {
    subject: 'CHEM101',
    attendance: 88,
    performance: 85
  }];
  const certificates = [{
    id: 1,
    name: 'Python Programming Certification',
    date: 'May 15, 2023',
    issuer: 'University CS Department'
  }, {
    id: 2,
    name: 'Web Development Workshop',
    date: 'July 22, 2023',
    issuer: 'Tech Club'
  }, {
    id: 3,
    name: 'Leadership Training Program',
    date: 'August 10, 2023',
    issuer: 'Student Development Center'
  }];
  const markSheets = [{
    id: 1,
    semester: 'Semester 1',
    year: '2022',
    gpa: '3.5'
  }, {
    id: 2,
    semester: 'Semester 2',
    year: '2022',
    gpa: '3.7'
  }, {
    id: 3,
    semester: 'Semester 3',
    year: '2023',
    gpa: '3.3'
  }, {
    id: 4,
    semester: 'Semester 4',
    year: '2023',
    gpa: '3.8'
  }, {
    id: 5,
    semester: 'Semester 5',
    year: '2023',
    gpa: '3.9'
  }];
  return <div className="space-y-6 pb-16">
      <h1 className="text-2xl font-bold text-gray-900">Academic Progress</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <p className="text-sm text-gray-600">Current GPA</p>
          <div className="flex items-center">
            <p className="text-2xl font-bold text-gray-800">3.9</p>
            <span className="ml-2 flex items-center text-xs text-green-600">
              <ArrowUpIcon size={14} />
              0.1
            </span>
          </div>
          <div className="mt-1 flex items-center text-xs text-gray-500">
            <span>Fall Semester 2023</span>
          </div>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-600">Cumulative GPA</p>
          <div className="flex items-center">
            <p className="text-2xl font-bold text-gray-800">3.7</p>
            <span className="ml-2 flex items-center text-xs text-green-600">
              <ArrowUpIcon size={14} />
              0.1
            </span>
          </div>
          <div className="mt-1 flex items-center text-xs text-gray-500">
            <span>Overall Academic Record</span>
          </div>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-600">Attendance Rate</p>
          <div className="flex items-center">
            <p className="text-2xl font-bold text-gray-800">87%</p>
            <span className="ml-2 flex items-center text-xs text-red-600">
              <ArrowDownIcon size={14} />
              2%
            </span>
          </div>
          <div className="mt-1 flex items-center text-xs text-gray-500">
            <span>Current Semester</span>
          </div>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-600">Class Rank</p>
          <div className="flex items-center">
            <p className="text-2xl font-bold text-gray-800">12</p>
            <span className="ml-2 flex items-center text-xs text-green-600">
              <ArrowUpIcon size={14} />3
            </span>
          </div>
          <div className="mt-1 flex items-center text-xs text-gray-500">
            <span>Out of 120 Students</span>
          </div>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-5">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-800">GPA Trend</h2>
              <select className="text-xs border border-gray-300 rounded-lg px-2 py-1">
                <option>All Semesters</option>
                <option>Last 3 Semesters</option>
                <option>This Year</option>
              </select>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={gpaData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="semester" />
                  <YAxis domain={[0, 4]} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="gpa" stroke="#4F46E5" strokeWidth={2} name="Semester GPA" />
                  <Line type="monotone" dataKey="cgpa" stroke="#10B981" strokeWidth={2} name="Cumulative GPA" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 flex items-center justify-center space-x-6">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-indigo-600 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Semester GPA</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Cumulative GPA</span>
              </div>
            </div>
          </Card>
          <Card className="p-5">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-800">
                Attendance vs. Performance
              </h2>
              <select className="text-xs border border-gray-300 rounded-lg px-2 py-1">
                <option>Current Semester</option>
                <option>Previous Semester</option>
                <option>All Courses</option>
              </select>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={attendanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="subject" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="attendance" fill="#4F46E5" name="Attendance %" />
                  <Bar dataKey="performance" fill="#F59E0B" name="Performance %" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-sm text-gray-600 text-center">
              <p>
                Strong correlation between attendance and academic performance
                in most subjects
              </p>
            </div>
          </Card>
        </div>
        {/* Right Column */}
        <div className="space-y-6">
          <Card className="p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Academic Achievements
              </h2>
              <div className="p-1 bg-indigo-100 rounded-full">
                <AwardIcon size={18} className="text-indigo-600" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4 rounded-xl">
                <div className="flex items-center">
                  <div className="p-2 bg-white bg-opacity-20 rounded-lg mr-3">
                    <TrendingUpIcon size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Dean's List</p>
                    <p className="text-xs opacity-80">Spring 2023</p>
                  </div>
                </div>
              </div>
              <div className="border border-gray-200 p-4 rounded-xl">
                <p className="font-medium text-gray-800">
                  Excellent Attendance Award
                </p>
                <p className="text-xs text-gray-500 mt-1">Fall 2022</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-xl">
                <p className="font-medium text-gray-800">
                  Best Project in CS101
                </p>
                <p className="text-xs text-gray-500 mt-1">Spring 2022</p>
              </div>
            </div>
          </Card>
          <Card className="p-5">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Certificates & Awards
            </h2>
            <div className="space-y-3">
              {certificates.map(certificate => <div key={certificate.id} className="border border-gray-100 rounded-lg p-3 hover:bg-gray-50">
                  <p className="text-sm font-medium text-gray-800">
                    {certificate.name}
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-xs text-gray-500">
                      {certificate.date} • {certificate.issuer}
                    </p>
                    <button className="text-xs text-indigo-600 hover:text-indigo-800 flex items-center">
                      <DownloadIcon size={14} className="mr-1" />
                      Download
                    </button>
                  </div>
                </div>)}
            </div>
          </Card>
          <Card className="p-5">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Mark Sheets
            </h2>
            <div className="space-y-3">
              {markSheets.map(markSheet => <div key={markSheet.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {markSheet.semester}
                    </p>
                    <p className="text-xs text-gray-500">
                      {markSheet.year} • GPA: {markSheet.gpa}
                    </p>
                  </div>
                  <button className="text-xs text-indigo-600 hover:text-indigo-800 flex items-center">
                    <DownloadIcon size={14} className="mr-1" />
                    PDF
                  </button>
                </div>)}
            </div>
          </Card>
          <Card className="p-5">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Academic Advisor
            </h2>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 mr-3 flex items-center justify-center text-gray-700 font-bold">
                DR
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">
                  Dr. Robert Chen
                </p>
                <p className="text-xs text-gray-500">
                  Computer Science Department
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <button className="w-full py-2 text-sm bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">
                Schedule Meeting
              </button>
              <button className="w-full py-2 text-sm bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg">
                Send Message
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>;
};