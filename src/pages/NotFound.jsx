import React from 'react';
import Seo from '../components/Seo';

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="Sorry, the page you are looking for does not exist." />
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold text-primary-900 mb-4">404</h1>
        <p className="text-lg text-primary-700 mb-8">Sorry, the page you are looking for does not exist.</p>
        <a href="/" className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold shadow hover:bg-primary-700 transition">Go Home</a>
      </div>
    </>
  );
}
