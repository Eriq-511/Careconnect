
import React from 'react';
import Seo from '../components/Seo';

export default function ContactPage() {
  return (
    <>
      <Seo title="Contact CareConnect" description="Contact CareConnect for support, questions, or feedback. We're here to help you connect with trusted babysitters and parents." />
      <div className="min-h-screen flex items-center justify-center bg-warm-50 px-4 py-12">
        <div className="w-full max-w-2xl bg-white border border-warm-200 rounded-2xl shadow-warm-md p-8 md:p-12 mx-auto">
          <h2 className="font-display text-3xl font-bold mb-6 text-warm-900 text-center">Contact Us</h2>
          <p className="text-warm-700 text-lg mb-6 text-center">
            Have questions or need support? Reach out to our team and we’ll get back to you as soon as possible.
          </p>
          <a href="mailto:support@careconnect.com" className="text-teal-700 underline text-base font-semibold text-center block">support@careconnect.com</a>
        </div>
      </div>
    </>
  );
}
