import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { StudentDashboard } from './pages/student/Dashboard';
import { Courses } from './pages/student/Courses';
import { Fees } from './pages/student/Fees';
import { Calendar } from './pages/student/Calendar';
import { Progress } from './pages/student/Progress';
import { FacultyDashboard } from './pages/faculty/Dashboard';
import { AdminDashboard } from './pages/admin/Dashboard';
import { Login } from './pages/Login';
export function App() {
  const [userRole, setUserRole] = useState('student'); // Default role for demonstration
  return <Router>
      <Layout userRole={userRole} setUserRole={setUserRole}>
        <Routes>
          {/* Student Routes */}
          <Route path="/student/dashboard" element={userRole === 'student' ? <StudentDashboard /> : <Navigate to={`/${userRole}/dashboard`} />} />
          <Route path="/student/courses" element={userRole === 'student' ? <Courses /> : <Navigate to={`/${userRole}/dashboard`} />} />
          <Route path="/student/fees" element={userRole === 'student' ? <Fees /> : <Navigate to={`/${userRole}/dashboard`} />} />
          <Route path="/student/calendar" element={userRole === 'student' ? <Calendar /> : <Navigate to={`/${userRole}/dashboard`} />} />
          <Route path="/student/progress" element={userRole === 'student' ? <Progress /> : <Navigate to={`/${userRole}/dashboard`} />} />
          <Route path="
          " element={userRole === 'student' ? <Login /> : <Navigate to={`/${userRole}/dashboard`} />} />

          {/* Faculty Routes */}
          <Route path="/faculty/dashboard" element={userRole === 'faculty' ? <FacultyDashboard /> : <Navigate to={`/${userRole}/dashboard`} />} />
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={userRole === 'admin' ? <AdminDashboard /> : <Navigate to={`/${userRole}/dashboard`} />} />
          {/* Default redirect based on role */}
          <Route path="*" element={<Navigate to={`/${userRole}/dashboard`} />} />
        </Routes>
      </Layout>
    </Router>;
}