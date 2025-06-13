// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Home from './pages/Home';
// import Profile from './pages/Profile';
// import Chat from './pages/Chat';
// import Network from './pages/Network';
// import Jobs from './pages/Jobs';
// import Layout from './components/layout/Layout';
// export function App() {
//   // For demo purposes, let's assume user is not logged in initially
//   const isAuthenticated = true;
//   return <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         {/* Protected routes */}
//         <Route path="/" element={isAuthenticated ? <Layout>
//                 <Home />
//               </Layout> : <Navigate to="/login" />} />
//         <Route path="/profile" element={isAuthenticated ? <Layout>
//                 <Profile />
//               </Layout> : <Navigate to="/login" />} />
//         <Route path="/chat" element={isAuthenticated ? <Layout>
//                 <Chat />
//               </Layout> : <Navigate to="/login" />} />
//         <Route path="/network" element={isAuthenticated ? <Layout>
//                 <Network />
//               </Layout> : <Navigate to="/login" />} />
//         <Route path="/jobs" element={isAuthenticated ? <Layout>
//                 <Jobs />
//               </Layout> : <Navigate to="/login" />} />
//       </Routes>
//     </Router>;
// }

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
import Network from "./pages/Network";
import Jobs from "./pages/Jobs";
import Layout from "./components/layout/Layout";
import { isAuth } from "./utils/auth"; // If in another file

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected routes */}
        <Route
          path="/"
          element={
            isAuth() ? (
              <Layout>
                <Home />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/profile"
          element={
            isAuth() ? (
              <Layout>
                <Profile />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/chat"
          element={
            isAuth() ? (
              <Layout>
                <Chat />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/network"
          element={
            isAuth() ? (
              <Layout>
                <Network />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/jobs"
          element={
            isAuth() ? (
              <Layout>
                <Jobs />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}
export default App;
