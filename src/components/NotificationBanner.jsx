import React from 'react';

export default function NotificationBanner({ message, type = 'info', onClose }) {
  if (!message) return null;
  const color = type === 'error' ? 'bg-red-100 text-red-800 border-red-300' : type === 'success' ? 'bg-green-100 text-green-800 border-green-300' : 'bg-blue-100 text-blue-800 border-blue-300';
  return (
    <div className={`border ${color} px-4 py-2 rounded mb-4 flex items-center justify-between`} role="alert">
      <span>{message}</span>
      {onClose && (
        <button onClick={onClose} className="ml-4 text-lg font-bold">&times;</button>
      )}
    </div>
  );
}
