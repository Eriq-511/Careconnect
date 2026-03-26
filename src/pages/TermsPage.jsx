
import React from 'react';
import Seo from '../components/Seo';

export default function TermsPage() {
  return (
    <>
      <Seo title="CareConnect Terms of Service" description="Read the CareConnect Terms of Service. Understand your rights and responsibilities as a user of our platform." />
      <div className="max-w-2xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-primary-900">Terms of Service</h2>
        <p className="text-primary-700 mb-4">By using CareConnect, you agree to our terms and conditions. Please read them carefully before using our platform.</p>
        <ul className="text-left list-disc list-inside mx-auto max-w-lg text-primary-600">
          <li>Use the platform responsibly and respectfully.</li>
          <li>Do not share sensitive information publicly.</li>
          <li>All users must comply with local laws and regulations.</li>
        </ul>
      </div>
    </>
  );
}
