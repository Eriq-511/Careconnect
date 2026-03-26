import React, { useEffect, useState } from 'react';
import Seo from '../components/Seo';
import { getMe } from '../api/api';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

export default function BabysitterDashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // Dummy stats and data for visual structure
  const stats = [
    { label: 'Profile Views', value: 24 },
    { label: 'Total Messages', value: 8 },
    { label: 'Active Conversations', value: 3 },
    { label: 'Profile Completion', value: '92%' },
  ];
  const whoViewed = [
    { id: 1, name: 'Jane P.', time: '2h ago', city: 'Kampala' },
    { id: 2, name: 'Mark L.', time: '1d ago', city: 'Entebbe' },
  ];
  const recentMessages = [
    { id: 1, name: 'Sarah K.', last: 'Thank you!', unread: 0 },
    { id: 2, name: 'Patrick M.', last: 'Can you babysit Friday?', unread: 1 },
  ];
  // Simulate verification status
  const verification = 'approved'; // 'pending' | 'approved' | 'rejected'
  const rejectionReason = 'Missing ID document';

  useEffect(() => {
    getMe().then(res => setUser(res.data)).finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Seo title="Babysitter Dashboard" description="Manage your babysitter profile, availability, and messages." />
      <div className="min-h-screen flex bg-warm-50">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-60 bg-warm-900 text-white py-8 px-6 min-h-screen justify-between">
          <div>
            <div className="font-display text-xl font-bold mb-8">CareConnect</div>
            <nav className="flex flex-col gap-2">
              <Link to="/babysitter/dashboard" className="px-4 py-2 rounded-l-xl bg-teal-600 text-white font-semibold">Home</Link>
              <Link to="/directory" className="px-4 py-2 rounded-l-xl hover:bg-warm-800 transition">Browse Jobs</Link>
              <Link to="/messages" className="px-4 py-2 rounded-l-xl hover:bg-warm-800 transition">My Messages</Link>
              <Link to="/babysitter/profile" className="px-4 py-2 rounded-l-xl hover:bg-warm-800 transition">My Profile</Link>
            </nav>
          </div>
          <div className="flex items-center gap-3 mt-8">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-400 flex items-center justify-center font-display font-bold text-white">{user?.email?.[0]?.toUpperCase() || 'B'}</div>
            <div>
              <div className="font-display font-semibold">{user?.email?.split('@')[0]}</div>
              <div className="text-white/60 text-xs">Babysitter</div>
            </div>
          </div>
        </aside>
        {/* Main content */}
        <main className="flex-1 p-8 md:p-12">
          {/* Verification status banner */}
          {verification === 'pending' && (
            <div className="mb-6 bg-amber-light border-l-4 border-amber-800 text-amber-800 px-6 py-4 rounded-xl flex items-center gap-3">
              <span className="font-bold">⏳</span> Your application is under review. We'll notify you by email.
            </div>
          )}
          {verification === 'approved' && (
            <div className="mb-6 bg-teal-50 border-l-4 border-teal-800 text-teal-800 px-6 py-4 rounded-xl flex items-center gap-3">
              <span className="font-bold">✓</span> Your profile is live! You're appearing in parent searches.
            </div>
          )}
          {verification === 'rejected' && (
            <div className="mb-6 bg-red-50 border-l-4 border-red-800 text-red-800 px-6 py-4 rounded-xl flex items-center gap-3">
              <span className="font-bold">✗</span> Your application was not approved: <span className="font-semibold">{rejectionReason}</span>. You may resubmit.
            </div>
          )}
          <div className="mb-8">
            <h1 className="font-display text-2xl md:text-3xl font-bold text-warm-900 mb-2">Welcome, {user?.email?.split('@')[0] || 'Babysitter'}</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
              {stats.map(stat => (
                <div key={stat.label} className="bg-white border border-warm-200 rounded-2xl p-6 flex flex-col items-center shadow-warm-sm">
                  <div className="font-display text-2xl font-bold text-teal-700 mb-1">{stat.value}</div>
                  <div className="text-warm-400 text-sm font-medium">{stat.label}</div>
                  {stat.label === 'Profile Views' && (
                    <span className="ml-2 text-success text-xs font-semibold">▲</span>
                  )}
                  {stat.label === 'Profile Completion' && (
                    <div className="w-full bg-warm-100 rounded-full h-2 mt-2">
                      <div className="bg-teal-600 h-2 rounded-full" style={{width: stat.value}} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold text-warm-900 mb-4">Who Viewed My Profile</h2>
            <div className="bg-white border border-warm-200 rounded-2xl overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-warm-100">
                  <tr>
                    <th className="px-6 py-3 text-warm-400 text-xs font-semibold">Parent</th>
                    <th className="px-6 py-3 text-warm-400 text-xs font-semibold">Time</th>
                    <th className="px-6 py-3 text-warm-400 text-xs font-semibold">City</th>
                  </tr>
                </thead>
                <tbody>
                  {whoViewed.map(row => (
                    <tr key={row.id} className="hover:bg-warm-50">
                      <td className="px-6 py-3 font-medium text-warm-900">{row.name}</td>
                      <td className="px-6 py-3 text-warm-400">{row.time}</td>
                      <td className="px-6 py-3 text-warm-400">{row.city}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-warm-900 mb-4">Recent Messages</h2>
            <div className="flex flex-col gap-4">
              {recentMessages.map(c => (
                <div key={c.id} className="bg-white border border-warm-200 rounded-2xl p-4 flex items-center gap-4 shadow-warm-sm">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-400 flex items-center justify-center font-display font-bold text-white">{c.name[0]}</div>
                  <div className="flex-1">
                    <div className="font-display font-semibold text-warm-900">{c.name}</div>
                    <div className="text-warm-400 text-xs truncate">{c.last}</div>
                  </div>
                  {c.unread > 0 && <span className="bg-teal-600 text-white text-xs rounded-full px-2 py-0.5 font-semibold">{c.unread}</span>}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
