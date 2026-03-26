import React, { useEffect, useState } from 'react';
import Seo from '../components/Seo';
import { getMe } from '../api/api';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

export default function ParentDashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // Dummy stats and data for visual structure
  const stats = [
    { label: 'Conversations', value: 5 },
    { label: 'Sitters Browsed', value: 12 },
    { label: 'Unread Messages', value: 2 },
  ];
  const recentlyViewed = [
    { id: 'amina1', name: 'Amina N.', city: 'Kampala' },
    { id: 'brian2', name: 'Brian K.', city: 'Entebbe' },
    { id: 'sharon3', name: 'Sharon A.', city: 'Kampala' },
  ];
  const activeConvos = [
    { id: 1, name: 'Amina N.', last: 'See you at 6pm!', unread: 1 },
    { id: 2, name: 'Sharon A.', last: 'Thank you!', unread: 0 },
  ];

  useEffect(() => {
    getMe().then(res => setUser(res.data)).finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Seo title="Parent Dashboard" description="Manage your parent profile, search babysitters, and view messages." />
      <div className="min-h-screen flex bg-warm-50">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-60 bg-warm-900 text-white py-8 px-6 min-h-screen justify-between">
          <div>
            <div className="font-display text-xl font-bold mb-8">CareConnect</div>
            <nav className="flex flex-col gap-2">
              <Link to="/parent/dashboard" className="px-4 py-2 rounded-l-xl bg-teal-600 text-white font-semibold">Home</Link>
              <Link to="/directory" className="px-4 py-2 rounded-l-xl hover:bg-warm-800 transition">Browse Sitters</Link>
              <Link to="/messages" className="px-4 py-2 rounded-l-xl hover:bg-warm-800 transition">My Messages</Link>
              <Link to="/parent/profile" className="px-4 py-2 rounded-l-xl hover:bg-warm-800 transition">My Profile</Link>
            </nav>
          </div>
          <div className="flex items-center gap-3 mt-8">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-400 flex items-center justify-center font-display font-bold text-white">{user?.email?.[0]?.toUpperCase() || 'P'}</div>
            <div>
              <div className="font-display font-semibold">{user?.email?.split('@')[0]}</div>
              <div className="text-white/60 text-xs">Parent</div>
            </div>
          </div>
        </aside>
        {/* Main content */}
        <main className="flex-1 p-8 md:p-12">
          <div className="mb-8">
            <h1 className="font-display text-2xl md:text-3xl font-bold text-warm-900 mb-2">Good morning, {user?.email?.split('@')[0] || 'Parent'}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {stats.map(stat => (
                <div key={stat.label} className="bg-white border border-warm-200 rounded-2xl p-6 flex flex-col items-center shadow-warm-sm">
                  <div className="font-display text-2xl font-bold text-teal-700 mb-1">{stat.value}</div>
                  <div className="text-warm-400 text-sm font-medium">{stat.label}</div>
                  {stat.label === 'Unread Messages' && stat.value > 0 && (
                    <span className="ml-2 bg-teal-600 text-white text-xs rounded-full px-2 py-0.5 font-semibold">{stat.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mb-10">
            <h2 className="font-display text-xl font-bold text-warm-900 mb-4">Recently Viewed Sitters</h2>
            <div className="flex gap-6">
              {recentlyViewed.map(s => (
                <div key={s.id} className="bg-white border border-warm-200 rounded-2xl p-4 flex flex-col items-center w-40 shadow-warm-sm">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-400 flex items-center justify-center font-display font-bold text-white mb-2">{s.name[0]}</div>
                  <div className="font-display font-semibold text-warm-900">{s.name}</div>
                  <div className="text-warm-400 text-xs">{s.city}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-warm-900 mb-4">Active Conversations</h2>
            <div className="flex flex-col gap-4">
              {activeConvos.map(c => (
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
