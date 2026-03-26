import React, { useEffect, useState } from 'react';
import Seo from '../components/Seo';
import { getMe } from '../api/api';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

export default function AdminDashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // Dummy stats and data for visual structure
  const stats = [
    { label: 'Total Parents', value: 2400 },
    { label: 'Total Sitters', value: 380 },
    { label: 'Pending Verifications', value: 7 },
    { label: 'Active Convos', value: 19 },
  ];
  const pendingVerifications = [
    { id: 1, name: 'Amara O.', submitted: '2026-03-25', city: 'Kampala' },
    { id: 2, name: 'Patrick M.', submitted: '2026-03-24', city: 'Entebbe' },
  ];
  const analytics = [
    { user: 'Amara O.', messages: 42 },
    { user: 'Sarah K.', messages: 37 },
    { user: 'Patrick M.', messages: 29 },
  ];

  useEffect(() => {
    getMe().then(res => setUser(res.data)).finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Seo title="Admin Dashboard" description="Administer users, verify babysitters, and view platform stats." />
      <div className="min-h-screen flex bg-warm-50">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-60 bg-warm-900 text-white py-8 px-6 min-h-screen justify-between">
          <div>
            <div className="font-display text-xl font-bold mb-8">CareConnect</div>
            <nav className="flex flex-col gap-2">
              <Link to="/admin/dashboard" className="px-4 py-2 rounded-l-xl bg-teal-600 text-white font-semibold">Overview</Link>
              <Link to="/admin/verification" className="px-4 py-2 rounded-l-xl hover:bg-warm-800 transition flex items-center gap-2">Pending Verifications <span className="ml-2 bg-amber text-amber-900 text-xs rounded-full px-2 py-0.5 font-semibold">{stats[2].value}</span></Link>
              <Link to="/admin/users" className="px-4 py-2 rounded-l-xl hover:bg-warm-800 transition">Parents</Link>
              <Link to="/admin/users" className="px-4 py-2 rounded-l-xl hover:bg-warm-800 transition">Babysitters</Link>
              <Link to="/admin/analytics" className="px-4 py-2 rounded-l-xl hover:bg-warm-800 transition">Analytics</Link>
            </nav>
          </div>
          <div className="flex items-center gap-3 mt-8">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-400 flex items-center justify-center font-display font-bold text-white">{user?.email?.[0]?.toUpperCase() || 'A'}</div>
            <div>
              <div className="font-display font-semibold">{user?.email?.split('@')[0]}</div>
              <div className="text-white/60 text-xs">Admin</div>
            </div>
          </div>
        </aside>
        {/* Main content */}
        <main className="flex-1 p-8 md:p-12">
          <div className="mb-8">
            <h1 className="font-display text-2xl md:text-3xl font-bold text-warm-900 mb-2">Welcome, {user?.email?.split('@')[0] || 'Admin'}</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
              {stats.map(stat => (
                <div key={stat.label} className="bg-white border border-warm-200 rounded-2xl p-6 flex flex-col items-center shadow-warm-sm">
                  <div className="font-display text-2xl font-bold text-teal-700 mb-1">{stat.value}</div>
                  <div className="text-warm-400 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Pending Verifications Table */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold text-warm-900 mb-4">Pending Verifications</h2>
            <div className="bg-white border border-warm-200 rounded-2xl overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-warm-100">
                  <tr>
                    <th className="px-6 py-3 text-warm-400 text-xs font-semibold">Name</th>
                    <th className="px-6 py-3 text-warm-400 text-xs font-semibold">Submitted</th>
                    <th className="px-6 py-3 text-warm-400 text-xs font-semibold">City</th>
                    <th className="px-6 py-3 text-warm-400 text-xs font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingVerifications.map(row => (
                    <tr key={row.id} className="hover:bg-warm-50">
                      <td className="px-6 py-3 font-medium text-warm-900">{row.name}</td>
                      <td className="px-6 py-3 text-warm-400">{row.submitted}</td>
                      <td className="px-6 py-3 text-warm-400">{row.city}</td>
                      <td className="px-6 py-3 flex gap-2">
                        <button className="bg-teal-600 text-white px-3 py-1 rounded-xl font-semibold hover:bg-teal-700 transition">Approve ✓</button>
                        <button className="bg-red-600 text-white px-3 py-1 rounded-xl font-semibold hover:bg-red-700 transition">Reject ✗</button>
                        <button className="border border-warm-200 text-warm-700 px-3 py-1 rounded-xl font-semibold hover:border-teal-400 hover:text-teal-700 transition">View →</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Analytics Section */}
          <div>
            <h2 className="font-display text-xl font-bold text-warm-900 mb-4">Top Active Users (by Messages)</h2>
            <div className="bg-white border border-warm-200 rounded-2xl p-6">
              <div className="flex flex-col gap-3">
                {analytics.map((row, i) => (
                  <div key={row.user} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-700 to-teal-400 flex items-center justify-center font-display font-bold text-white">{row.user[0]}</div>
                    <div className="flex-1 font-display font-semibold text-warm-900">{row.user}</div>
                    <div className="h-3 w-32 bg-warm-100 rounded-full overflow-hidden">
                      <div className="bg-teal-500 h-3 rounded-full" style={{width: `${Math.min(row.messages, 50)*2}%`}} />
                    </div>
                    <div className="text-warm-400 text-sm font-medium">{row.messages} msgs</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
