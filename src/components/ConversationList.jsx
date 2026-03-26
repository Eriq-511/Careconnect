import React from 'react';

export default function ConversationList({ conversations, onSelect, selectedId }) {
  return (
    <div className="w-64 bg-white border-r h-full overflow-y-auto">
      <h3 className="text-lg font-bold p-4 border-b">Conversations</h3>
      {conversations.map((conv) => (
        <div
          key={conv.id}
          className={`p-4 cursor-pointer hover:bg-blue-50 ${selectedId === conv.id ? 'bg-blue-100' : ''}`}
          onClick={() => onSelect(conv.id)}
        >
          {conv.title}
        </div>
      ))}
    </div>
  );
}
