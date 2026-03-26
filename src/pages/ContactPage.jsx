
import React from 'react';
import Seo from '../components/Seo';

export default function ContactPage() {
  return (
    <>
      <Seo title="Contact CareConnect" description="Contact CareConnect for support, questions, or feedback. We're here to help you connect with trusted babysitters and parents." />
      <div className="max-w-2xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-primary-900">Contact Us</h2>
        <p className="text-lg text-primary-700 mb-4">
          Have questions or need support? Reach out to our team and we’ll get back to you as soon as possible.
        </p>
        <a href="mailto:support@careconnect.com" className="text-primary-600 underline">support@careconnect.com</a>
      </div>
    </>
  );
}
