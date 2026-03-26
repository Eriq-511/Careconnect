import React from 'react';
import MessageBubble from './MessageBubble';

export default function ChatWindow({ messages, onSend, currentUserId }) {
  const [input, setInput] = React.useState('');
  return (
    <div className="w-full max-w-md mx-auto bg-white shadow rounded p-4">
      <div className="h-64 overflow-y-auto border-b mb-2">
        {messages.map((msg, idx) => (
          <MessageBubble
            key={msg.id || idx}
            content={msg.content}
            isOwn={msg.senderId === currentUserId}
            status={msg.status}
          />
        ))}
      </div>
      <div className="flex gap-2 mt-2">
        <input
          className="flex-1 border rounded px-2 py-1"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && onSend(input)}
          placeholder="Type a message..."
        />
        <button
          className="bg-primary-600 text-white rounded px-4 py-1 font-semibold hover:bg-primary-700 transition"
          onClick={() => { onSend(input); setInput(''); }}
        >Send</button>
      </div>
    </div>
  );
}
