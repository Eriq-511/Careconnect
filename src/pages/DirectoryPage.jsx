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
    <div className="max-w-4xl mx-auto py-12">
      <h2 className="text-2xl font-bold mb-4">Babysitter Directory</h2>
      <FilterBar filters={filters} onChange={setFilters} />
      {loading ? <LoadingSpinner /> : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {babysitters.map(bs => (
            <div key={bs.id} className="bg-white rounded shadow p-4">
              <div className="font-bold text-lg">{bs.name}</div>
              <div className="text-primary-600 text-sm">{bs.experience} yrs exp</div>
              <div className="text-primary-700 text-sm">{bs.certified ? 'Certified' : 'Not certified'}</div>
            </div>
          ))}
        </div>
      )}
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}
