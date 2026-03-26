import React from 'react';

export default function DesignSystem() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Design System</h2>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Color Palette</h3>
        <div className="flex gap-4">
          <div className="w-16 h-8 bg-primary-600 rounded" title="Primary" />
          <div className="w-16 h-8 bg-secondary-500 rounded" title="Secondary" />
          <div className="w-16 h-8 bg-blue-50 border rounded" title="Background" />
        </div>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Typography</h3>
        <div className="font-display text-3xl mb-2">Display Font Example</div>
        <div className="font-sans text-lg">Body Font Example</div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Buttons</h3>
        <button className="px-6 py-2 bg-primary-600 text-white rounded-lg font-semibold shadow hover:bg-primary-700 transition mr-2">Primary</button>
        <button className="px-6 py-2 bg-secondary-500 text-white rounded-lg font-semibold shadow hover:bg-secondary-600 transition">Secondary</button>
      </div>
    </div>
  );
}
