
import React from 'react';
import Seo from '../components/Seo';

export default function PrivacyPage() {
  return (
    <>
      <Seo title="CareConnect Privacy Policy" description="Read the CareConnect Privacy Policy. Learn how we protect your data and respect your privacy as a user." />
      <div className="max-w-2xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-primary-900">Privacy Policy</h2>
        <p className="text-primary-700 mb-4">Your privacy is important to us. We are committed to protecting your data and being transparent about how we use it.</p>
        <ul className="text-left list-disc list-inside mx-auto max-w-lg text-primary-600">
          <li>We do not sell your personal information.</li>
          <li>Data is used only to improve your experience.</li>
          <li>Contact us for any privacy concerns.</li>
        </ul>
      </div>
    </>
  );
}
