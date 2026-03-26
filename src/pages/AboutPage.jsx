
import React from 'react';
import Seo from '../components/Seo';

export default function AboutPage() {
  return (
    <>
      <Seo title="About CareConnect" description="Learn about CareConnect, our mission, and our commitment to building trust between parents and babysitters." />
      <div className="max-w-2xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-primary-900">About CareConnect</h2>
        <p className="text-lg text-primary-700 mb-4">
          CareConnect is dedicated to building trust between parents and babysitters. Our platform makes it easy to find, connect, and communicate with childcare professionals in your area.
        </p>
        <p className="text-primary-600">We believe in safety, transparency, and community.</p>
      </div>
    </>
  );
}
