
import React from 'react';
import Seo from '../components/Seo';

export default function AboutPage() {
  return (
    <>
      <Seo title="About CareConnect" description="Learn about CareConnect, our mission, and our commitment to building trust between parents and babysitters." />
      <div className="min-h-screen flex items-center justify-center bg-warm-50 px-4 py-12">
        <div className="w-full max-w-2xl bg-white border border-warm-200 rounded-2xl shadow-warm-md p-8 md:p-12 mx-auto">
          <h2 className="font-display text-3xl font-bold mb-6 text-warm-900 text-center">About CareConnect</h2>
          <p className="text-warm-700 text-lg mb-6 text-center">
            CareConnect is dedicated to building trust between parents and babysitters. Our platform makes it easy to find, connect, and communicate with childcare professionals in your area.
          </p>
          <p className="text-warm-600 text-base text-center">We believe in safety, transparency, and community.</p>
        </div>
      </div>
    </>
  );
}
