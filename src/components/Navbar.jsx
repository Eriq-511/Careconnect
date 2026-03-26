import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';

export default function Navbar() {
  const user = useAuthStore((s) => s.user);
  const role = user?.role?.toLowerCase();
  // Keyboard navigation: focus ring, tab order, aria-labels
  return (
    <nav
      className="w-full bg-white shadow py-4 px-2 sm:px-6 flex flex-nowrap overflow-x-auto md:flex-wrap justify-start md:justify-center gap-2 sm:gap-4 md:gap-6 text-primary-800 font-semibold text-base sm:text-lg scrollbar-thin scrollbar-thumb-primary-200"
      aria-label="Main Navigation"
      role="navigation"
      tabIndex={0}
    >
      <Link to="/" tabIndex={0} aria-label="Home" className="focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2 sm:px-3 py-1">Home</Link>
      <Link to="/about" tabIndex={0} aria-label="About" className="focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2 sm:px-3 py-1">About</Link>
      <Link to="/contact" tabIndex={0} aria-label="Contact" className="focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2 sm:px-3 py-1">Contact</Link>
      <Link to="/terms" tabIndex={0} aria-label="Terms" className="focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2 sm:px-3 py-1">Terms</Link>
      <Link to="/privacy" tabIndex={0} aria-label="Privacy" className="focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2 sm:px-3 py-1">Privacy</Link>
      {user && role === 'parent' && (
        <Link to="/parent/dashboard" tabIndex={0} aria-label="Parent Dashboard" className="focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2 sm:px-3 py-1">Dashboard</Link>
      )}
      {user && role === 'babysitter' && (
        <Link to="/babysitter/dashboard" tabIndex={0} aria-label="Babysitter Dashboard" className="focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2 sm:px-3 py-1">Dashboard</Link>
      )}
      {user && role === 'admin' && (
        <Link to="/admin/dashboard" tabIndex={0} aria-label="Admin Dashboard" className="focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2 sm:px-3 py-1">Admin</Link>
      )}
      {user && (
        <Link to="/messages" tabIndex={0} aria-label="Messages" className="focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2 sm:px-3 py-1">Messages</Link>
      )}
      {user && (
        <Link to="/upload" tabIndex={0} aria-label="Upload" className="focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2 sm:px-3 py-1">Upload</Link>
      )}
      {!user && (
        <Link to="/login" tabIndex={0} aria-label="Login" className="focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2 sm:px-3 py-1">Login</Link>
      )}
      {!user && (
        <Link to="/signup" tabIndex={0} aria-label="Sign Up" className="focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2 sm:px-3 py-1">Sign Up</Link>
      )}
    </nav>
  );
}
