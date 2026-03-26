import React from 'react';

export default function Pagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;
  return (
    <div className="flex justify-center gap-2 my-4">
      <button
        className="px-3 py-1 rounded border bg-white disabled:opacity-50"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
      >
        Prev
      </button>
      <span className="px-2 py-1">Page {page} of {totalPages}</span>
      <button
        className="px-3 py-1 rounded border bg-white disabled:opacity-50"
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
}
