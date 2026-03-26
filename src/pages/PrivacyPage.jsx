
import React from 'react';
import Seo from '../components/Seo';

export default function PrivacyPage() {
  return (
    <>
      <Seo title="CareConnect Privacy Policy" description="Read the CareConnect Privacy Policy. Learn how we protect your data and respect your privacy as a user." />
      <div className="min-h-screen flex items-center justify-center bg-warm-50 px-4 py-12">
        <div className="w-full max-w-2xl bg-white border border-warm-200 rounded-2xl shadow-warm-md p-8 md:p-12 mx-auto">
          <h2 className="font-display text-3xl font-bold mb-6 text-warm-900 text-center">Privacy Policy</h2>
          <p className="text-warm-700 mb-6 text-center">Your privacy is important to us. We are committed to protecting your data and being transparent about how we use it.</p>
          <ul className="text-left list-disc list-inside mx-auto max-w-lg text-warm-700 text-base leading-relaxed space-y-2">
            <li>We do not sell your personal information.</li>
            <li>Data is used only to improve your experience.</li>
            <li>Contact us for any privacy concerns.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
