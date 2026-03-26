import React, { useEffect, useState } from 'react';
import Seo from '../components/Seo';
import { getMe } from '../api/api';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

export default function AdminDashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMe().then(res => setUser(res.data)).finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Seo title="Admin Dashboard" description="Administer users, verify babysitters, and view platform stats." />
      <div className="max-w-2xl mx-auto py-10 px-2 sm:px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-primary-900" tabIndex={0} aria-label="Admin Dashboard">Admin Dashboard</h2>
        {loading ? <LoadingSpinner /> : user && (
          <>
            <div className="mb-4 text-primary-700 text-base sm:text-lg">Welcome, <span className="font-semibold">{user.email}</span></div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-center justify-center">
              <Link to="/admin/users" className="w-full sm:w-auto px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold shadow hover:bg-primary-700 transition text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-primary-500" aria-label="Manage Users">Manage Users</Link>
              <Link to="/admin/verification" className="w-full sm:w-auto px-4 py-2 bg-secondary-500 text-white rounded-lg font-semibold shadow hover:bg-secondary-600 transition text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-secondary-400" aria-label="Review Verification">Review Verification</Link>
              <Link to="/admin/analytics" className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold shadow hover:bg-blue-600 transition text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-400" aria-label="View Analytics">View Analytics</Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
