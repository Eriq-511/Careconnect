import React from 'react';
import Seo from '../components/Seo';

export default function BabysitterDirectory() {
  return (
    <>
      <Seo title="Babysitter Directory" description="Browse and search for babysitters near you." />
      <div className="max-w-3xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-primary-900">Babysitter Directory</h2>
        <p className="text-primary-700 mb-4">Search and filter babysitters by location, availability, and more.</p>
        {/* TODO: Add search, filters, and pagination UI */}
      </div>
    </>
  );
}
