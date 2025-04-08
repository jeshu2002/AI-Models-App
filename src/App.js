// src/App.js
import React from 'react';
import Navbar from './components/navbar';
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/home';
import About from './pages/about';
import Models from './pages/models';
import AddModel from './pages/AddModel';
import LoginPage from './pages/Login';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton';
import LoginButton1 from './components/login';

function App() {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <div className="text-center p-10 text-lg">Loading...</div>;
  }

  return (
    <div className="bg-gray-200 min-h-screen">
     <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/models" element={isAuthenticated ? <Models /> : <LoginButton1 />} />
        <Route path="/AddModels" element={isAuthenticated ? <AddModel /> : <LoginButton1 />} />
      </Routes>
    </div>
  );
}

export default App;
