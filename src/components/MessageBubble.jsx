import React from 'react';

export default function MessageBubble({ content, isOwn, status }) {
  return (
    <div className={`my-1 flex ${isOwn ? 'justify-end' : 'justify-start'}`}>
      <div className={`px-4 py-2 rounded-lg max-w-xs ${isOwn ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-900'}`}>
        <div>{content}</div>
        {isOwn && (
          <div className="text-xs mt-1 text-right opacity-70">
            {status === 'SEEN' ? 'Seen' : 'Delivered'}
          </div>
        )}
      </div>
    </div>
  );
}
