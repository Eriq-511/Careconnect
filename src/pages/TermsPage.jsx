
import React from 'react';
import Seo from '../components/Seo';

export default function TermsPage() {
  return (
    <>
      <Seo title="CareConnect Terms of Service" description="Read the CareConnect Terms of Service. Understand your rights and responsibilities as a user of our platform." />
      <div className="min-h-screen flex items-center justify-center bg-warm-50 px-4 py-12">
        <div className="w-full max-w-2xl bg-white border border-warm-200 rounded-2xl shadow-warm-md p-8 md:p-12 mx-auto">
          <h2 className="font-display text-3xl font-bold mb-6 text-warm-900 text-center">Terms of Service</h2>
          <p className="text-warm-700 mb-6 text-center">By using CareConnect, you agree to our terms and conditions. Please read them carefully before using our platform.</p>
          <ul className="text-left list-disc list-inside mx-auto max-w-lg text-warm-700 text-base leading-relaxed space-y-2">
            <li>Use the platform responsibly and respectfully.</li>
            <li>Do not share sensitive information publicly.</li>
            <li>All users must comply with local laws and regulations.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
