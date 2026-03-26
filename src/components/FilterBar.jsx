import React from 'react';

export default function FilterBar({ filters, onChange }) {
  return (
    <div className="flex flex-wrap gap-4 mb-4 items-center justify-center">
      <input
        type="text"
        placeholder="Search by name/location"
        className="border rounded px-3 py-2"
        value={filters.query || ''}
        onChange={e => onChange({ ...filters, query: e.target.value })}
      />
      <select
        className="border rounded px-3 py-2"
        value={filters.experience || ''}
        onChange={e => onChange({ ...filters, experience: e.target.value })}
      >
        <option value="">All Experience</option>
        <option value="1">1+ years</option>
        <option value="3">3+ years</option>
        <option value="5">5+ years</option>
      </select>
      <select
        className="border rounded px-3 py-2"
        value={filters.certified || ''}
        onChange={e => onChange({ ...filters, certified: e.target.value })}
      >
        <option value="">All Certifications</option>
        <option value="cpr">CPR Certified</option>
        <option value="early-ed">Early Ed.</option>
      </select>
    </div>
  );
}
