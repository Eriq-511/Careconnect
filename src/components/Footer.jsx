import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t py-6 mt-12 text-center text-primary-600 text-sm">
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="/terms" className="hover:underline">Terms</a>
        <a href="/privacy" className="hover:underline">Privacy</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </div>
      <div className="mt-2">&copy; {new Date().getFullYear()} CareConnect. All rights reserved.</div>
    </footer>
  );
}
