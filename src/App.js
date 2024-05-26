import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Reports from './components/Reports';
import Settings from './components/Settings';
import HomePage from './components/Home';
import Tasks from './components/Tasks';
import Header from './components/Header';
import Projects from './components/Projects';
import UsersList from './components/Users';
import SupportPage from './components/Support';
import ContactPage from './components/Contact';
import AboutPage from './components/About';
import ToggleSidebar from './components/Togglebar';
const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      <Header/>
      {windowWidth >  1040 ?
      <Sidebar /> : 
      <ToggleSidebar/>
      }
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reporting" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/services" element={<SupportPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;
