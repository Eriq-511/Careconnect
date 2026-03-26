import FileUploadPage from './pages/FileUploadPage';
import MessagesPage from './pages/MessagesPage';
import DirectoryPage from './pages/DirectoryPage';
import AdminDashboard from './pages/AdminDashboard';
import BabysitterDirectory from './pages/BabysitterDirectory';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ChatWidget from './ChatWidget';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import BabysitterDashboard from './pages/BabysitterDashboard';
import NotFound from './pages/NotFound';
import ParentDashboard from './pages/ParentDashboard';
import ParentProfilePage from './pages/ParentProfilePage';
import BabysitterProfilePage from './pages/BabysitterProfilePage';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/upload" element={<FileUploadPage />} />
        <Route path="/messages" element={<><MessagesPage /><ChatWidget /></>} />
        <Route path="/directory" element={<DirectoryPage />} />
        <Route path="/babysitters" element={<BabysitterDirectory />} />
        <Route path="/admin/dashboard" element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        } />
        <Route path="/parent/profile" element={<ParentProfilePage />} />
        <Route path="/babysitter/profile" element={<BabysitterProfilePage />} />
        <Route path="/babysitter/dashboard" element={
          <ProtectedRoute>
            <BabysitterDashboard />
          </ProtectedRoute>
        } />
        <Route path="/parent/dashboard" element={
          <ProtectedRoute>
            <ParentDashboard />
          </ProtectedRoute>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
