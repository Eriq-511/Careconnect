import React from 'react';
import MessageBubble from './MessageBubble';
import ConversationList from './ConversationList';

// Dummy data for visual structure
const dummyConversations = [
  { id: '1', title: 'Parent: Sarah K.', unread: 2 },
  { id: '2', title: 'Parent: John M.', unread: 0 },
  { id: '3', title: 'Parent: Aisha B.', unread: 1 },
];
const dummyMessages = [
  { id: 1, senderId: 'me', content: 'Hi Sarah! I saw your request.', status: 'SEEN' },
  { id: 2, senderId: 'sarah', content: 'Hi Amara! Are you available this weekend?', status: 'DELIVERED' },
  { id: 3, senderId: 'me', content: 'Yes, I am! What times do you need?', status: 'SEEN' },
];

export default function ChatWindow({ messages = dummyMessages, onSend, currentUserId = 'me', conversations = dummyConversations, onSelectConversation, selectedConversationId }) {
  const [input, setInput] = React.useState('');
  const [selectedId, setSelectedId] = React.useState(selectedConversationId || conversations[0]?.id);

  // Responsive two-column layout
  return (
    <div className="w-full min-h-[600px] bg-warm-50 rounded-2xl shadow-warm-md flex flex-col md:flex-row overflow-hidden">
      {/* Sidebar: Conversation List */}
      <aside className="w-full md:w-80 bg-white border-r border-warm-100 flex-shrink-0 flex flex-col">
        <div className="p-6 border-b border-warm-100">
          <h3 className="font-display text-lg font-bold text-warm-900">Messages</h3>
        </div>
        <div className="flex-1 overflow-y-auto">
          {conversations.map(conv => (
            <div
              key={conv.id}
              className={`flex items-center gap-2 px-6 py-4 cursor-pointer transition-all ${selectedId === conv.id ? 'bg-warm-100' : 'hover:bg-warm-50'}`}
              onClick={() => { setSelectedId(conv.id); onSelectConversation && onSelectConversation(conv.id); }}
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
      {/* Main chat area */}
      <main className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-2">
          {messages.map((msg, idx) => (
            <MessageBubble
              key={msg.id || idx}
              content={msg.content}
              isOwn={msg.senderId === currentUserId}
              status={msg.status}
            />
          ))}
        </div>
        <div className="border-t border-warm-100 bg-white px-6 py-4 sticky bottom-0 z-10 flex gap-2">
          <input
            className="flex-1 border border-warm-200 rounded-xl px-4 py-3 bg-warm-50 outline-none transition-all focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && input.trim() && (onSend ? onSend(input) : null)}
            placeholder="Type a message..."
          />
          <button
            className="bg-teal-600 text-white rounded-xl px-6 py-3 font-semibold hover:bg-teal-700 transition-all"
            onClick={() => { if (onSend) onSend(input); setInput(''); }}
            disabled={!input.trim()}
          >Send</button>
        </div>
      </main>
    </div>
  );
}
