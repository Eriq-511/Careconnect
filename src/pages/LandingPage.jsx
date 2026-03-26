
import React from 'react';
import Seo from '../components/Seo';

export default function LandingPage() {
  return (
    <>
      <Seo
        title="CareConnect – Find Babysitters & Parents Near You"
        description="CareConnect connects parents and babysitters with trust, safety, and ease. Find the perfect match for your family or your next babysitting opportunity."
      />
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white text-center px-4">
        <img src="/logo.png" alt="CareConnect Logo" className="w-24 h-24 mb-6 mx-auto" />
        <h1 className="text-5xl font-bold text-primary-900 mb-4 font-display">Welcome to CareConnect</h1>
        <p className="text-lg text-primary-700 mb-8 max-w-xl mx-auto">
          Connecting parents and babysitters with trust, safety, and ease. Find the perfect match for your family or your next babysitting opportunity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href="/about" className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold shadow hover:bg-primary-700 transition">Learn More</a>
          <a href="/signup" className="px-6 py-3 bg-secondary-500 text-white rounded-lg font-semibold shadow hover:bg-secondary-600 transition">Get Started</a>
        </div>
        {/* Trust Badges */}
        <div className="flex flex-wrap gap-6 justify-center mb-12">
          <div className="flex flex-col items-center">
            <span className="text-3xl">🔒</span>
            <span className="text-primary-700 font-semibold mt-2">Verified & Secure</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl">👨‍👩‍👧‍👦</span>
            <span className="text-primary-700 font-semibold mt-2">Trusted by Families</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl">⭐</span>
            <span className="text-primary-700 font-semibold mt-2">Top-rated Sitters</span>
          </div>
        </div>
        {/* Testimonials */}
        <div className="max-w-2xl mx-auto mb-12">
          <h3 className="text-2xl font-bold mb-4 text-primary-900">What Our Users Say</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-4">
              <p className="text-primary-700 italic">“CareConnect made finding a sitter so easy and stress-free!”</p>
              <span className="block mt-2 text-primary-900 font-semibold">— Sarah, Parent</span>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <p className="text-primary-700 italic">“I love how safe and transparent the platform is.”</p>
              <span className="block mt-2 text-primary-900 font-semibold">— Emily, Babysitter</span>
            </div>
          </div>
        </div>
        {/* Featured Sitters */}
        <div className="max-w-3xl mx-auto mb-12">
          <h3 className="text-2xl font-bold mb-4 text-primary-900">Featured Babysitters</h3>
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="bg-white rounded-lg shadow p-4 w-48">
              <img src="/avatar1.jpg" alt="Sitter 1" className="w-16 h-16 rounded-full mx-auto mb-2" />
              <div className="font-semibold text-primary-800">Jessica R.</div>
              <div className="text-primary-600 text-sm">5 yrs exp • CPR Cert.</div>
            </div>
            <div className="bg-white rounded-lg shadow p-4 w-48">
              <img src="/avatar2.jpg" alt="Sitter 2" className="w-16 h-16 rounded-full mx-auto mb-2" />
              <div className="font-semibold text-primary-800">Megan T.</div>
              <div className="text-primary-600 text-sm">3 yrs exp • Early Ed.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
