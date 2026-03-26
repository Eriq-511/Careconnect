import React, { useEffect, useState } from 'react';
import { api } from '../api/api';
import FilterBar from '../components/FilterBar';
import Pagination from '../components/Pagination';
import LoadingSpinner from '../components/LoadingSpinner';

export default function DirectoryPage() {
  const [filters, setFilters] = useState({ query: '', experience: '', certified: '' });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [babysitters, setBabysitters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get('/babysitters', { params: { ...filters, page } })
      .then(res => {
        setBabysitters(res.data.items);
        setTotalPages(res.data.totalPages);
      })
      .finally(() => setLoading(false));
  }, [filters, page]);

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="font-display text-3xl font-bold mb-4 text-warm-900 text-center">Babysitter Directory</h2>
      <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-center">
        <FilterBar filters={filters} onChange={setFilters} />
      </div>
      {loading ? <LoadingSpinner /> : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {babysitters.map(bs => (
            <div key={bs.id} className="bg-white border border-warm-200 rounded-2xl shadow-warm-sm p-6 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-400 flex items-center justify-center font-display font-bold text-white text-2xl mb-3">{bs.name[0]}</div>
              <div className="font-display text-lg font-bold text-warm-900 mb-1">{bs.name}</div>
              <div className="text-warm-400 text-sm mb-1">{bs.city}</div>
              <div className="text-warm-700 text-xs mb-2">{bs.experience} yrs experience</div>
              <div className="flex flex-wrap gap-1 mb-2">
                {bs.certified && <span className="bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full text-xs font-medium">Certified</span>}
              </div>
              <button className="mt-2 bg-teal-600 text-white rounded-xl px-4 py-2 font-semibold hover:bg-teal-700 transition-all">View Profile</button>
            </div>
          ))}
        </div>
      )}
      <div className="mt-8 flex justify-center">
        <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
      </div>
    </div>
  );
}
