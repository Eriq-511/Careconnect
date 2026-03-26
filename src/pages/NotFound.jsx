import React from 'react';
import Seo from '../components/Seo';

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="Sorry, the page you are looking for does not exist." />
      <div className="min-h-screen flex items-center justify-center bg-warm-50 px-4 py-12">
        <div className="w-full max-w-lg bg-white border border-warm-200 rounded-2xl shadow-warm-md p-8 md:p-12 mx-auto flex flex-col items-center text-center">
          <h1 className="font-display text-7xl font-bold text-warm-900 mb-4">404</h1>
          <p className="text-lg text-warm-700 mb-8">Sorry, the page you are looking for does not exist.</p>
          <a href="/" className="px-6 py-3 bg-teal-600 text-white rounded-xl font-semibold shadow hover:bg-teal-700 transition-all">Go Home</a>
        </div>
      </div>
    </>
  );
}
