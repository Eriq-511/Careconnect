import React from 'react';

export default function ConversationList({ conversations, onSelect, selectedId }) {
  return (
    <aside className="w-full md:w-80 bg-white border-r border-warm-100 flex-shrink-0 flex flex-col">
      <div className="p-6 border-b border-warm-100">
        <h3 className="font-display text-lg font-bold text-warm-900">Messages</h3>
      </div>
      <div className="flex-1 overflow-y-auto">
        {conversations.map(conv => (
          <div
            key={conv.id}
            className={`flex items-center gap-2 px-6 py-4 cursor-pointer transition-all ${selectedId === conv.id ? 'bg-warm-100' : 'hover:bg-warm-50'}`}
            onClick={() => onSelect(conv.id)}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-700 to-teal-400 flex items-center justify-center font-display font-bold text-white text-lg">{conv.title[0]}</div>
            <div className="flex-1">
              <div className="font-semibold text-warm-900 text-sm">{conv.title}</div>
              {conv.unread > 0 && <span className="inline-block bg-amber text-white text-xs font-bold px-2 py-0.5 rounded-full ml-1">{conv.unread}</span>}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
