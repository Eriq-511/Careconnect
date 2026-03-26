import React from 'react';
import Seo from '../components/Seo';

export default function BabysitterDirectory() {
  // Dummy data for visual polish
  const sitters = [
    { id: 1, name: 'Amara O.', city: 'Kampala', experience: 4, tags: ['First Aid', 'CPR'], avatar: '' },
    { id: 2, name: 'Patrick M.', city: 'Entebbe', experience: 2, tags: ['Early Ed.'], avatar: '' },
    { id: 3, name: 'Sarah K.', city: 'Kampala', experience: 5, tags: ['CPR'], avatar: '' },
  ];
  return (
    <>
      <Seo title="Babysitter Directory" description="Browse and search for babysitters near you." />
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="font-display text-3xl font-bold mb-4 text-warm-900 text-center">Babysitter Directory</h2>
        <p className="text-warm-700 mb-8 text-center">Search and filter babysitters by location, availability, and more.</p>
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-center">
          <input className="border border-warm-200 rounded-xl px-4 py-3 w-full md:w-80 bg-white outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 transition-all" placeholder="Search by name or city..." />
          <select className="border border-warm-200 rounded-xl px-4 py-3 bg-white outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 transition-all">
            <option>All Experience Levels</option>
            <option>1+ years</option>
            <option>3+ years</option>
            <option>5+ years</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {sitters.map(bs => (
            <div key={bs.id} className="bg-white border border-warm-200 rounded-2xl shadow-warm-sm p-6 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-400 flex items-center justify-center font-display font-bold text-white text-2xl mb-3">{bs.name[0]}</div>
              <div className="font-display text-lg font-bold text-warm-900 mb-1">{bs.name}</div>
              <div className="text-warm-400 text-sm mb-1">{bs.city}</div>
              <div className="text-warm-700 text-xs mb-2">{bs.experience} yrs experience</div>
              <div className="flex flex-wrap gap-1 mb-2">
                {bs.tags.map(tag => (
                  <span key={tag} className="bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full text-xs font-medium">{tag}</span>
                ))}
              </div>
              <button className="mt-2 bg-teal-600 text-white rounded-xl px-4 py-2 font-semibold hover:bg-teal-700 transition-all">View Profile</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
