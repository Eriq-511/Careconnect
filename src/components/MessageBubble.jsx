import React from 'react';

export default function MessageBubble({ content, isOwn, status, avatarUrl, senderName, timestamp }) {
  return (
    <div className={`flex items-end gap-2 my-1 ${isOwn ? 'justify-end' : 'justify-start'}`}>
      {!isOwn && (
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-700 to-teal-400 flex items-center justify-center font-display font-bold text-white text-base shrink-0">
          {senderName ? senderName[0] : 'P'}
        </div>
      )}
      <div className={`max-w-[70%] px-4 py-3 rounded-2xl shadow-warm-sm ${isOwn ? 'bg-teal-600 text-white rounded-br-md' : 'bg-warm-100 text-warm-900 rounded-bl-md'}`}>
        <div className="whitespace-pre-line text-base leading-relaxed">{content}</div>
        <div className={`flex items-center gap-2 mt-1 text-xs ${isOwn ? 'justify-end text-teal-100/80' : 'text-warm-400'}`}>
          {timestamp && <span>{timestamp}</span>}
          {isOwn && (
            <span className="ml-2">{status === 'SEEN' ? 'Seen' : 'Delivered'}</span>
          )}
        </div>
      </div>
      {isOwn && (
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-700 to-teal-400 flex items-center justify-center font-display font-bold text-white text-base shrink-0">
          Me
        </div>
      )}
    </div>
  );
}
