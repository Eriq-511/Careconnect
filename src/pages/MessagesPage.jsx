import React, { useEffect, useState } from 'react';
import { api } from '../api/api';
import LoadingSpinner from '../components/LoadingSpinner';
import MessageWindow from '../components/ChatWindow';
import { useAuthStore } from '../stores/authStore';

export default function MessagesPage() {
  const [conversations, setConversations] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    api.get('/messages/conversations').then(res => {
      setConversations(res.data);
      if (res.data.length) setSelectedId(res.data[0].id);
    });
  }, []);

  useEffect(() => {
    if (!selectedId || !user) return;
    setLoading(true);
    // Mark as seen
    api.put(`/conversations/${selectedId}/messages/seen`, null, { params: { userId: user.id } })
      .catch(() => {})
      .finally(() => {
        api.get(`/messages/${selectedId}`)
          .then(res => setMessages(res.data))
          .finally(() => setLoading(false));
      });
  }, [selectedId, user]);

  const handleSend = async (content) => {
    if (!content.trim()) return;
    await api.post(`/messages/${selectedId}`, { content });
    const res = await api.get(`/messages/${selectedId}`);
    setMessages(res.data);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 flex gap-6">
      <div className="w-1/3">
        <h3 className="font-bold mb-2">Conversations</h3>
        <div className="bg-white rounded shadow divide-y">
          {conversations.map(conv => (
            <div key={conv.id} className={`p-4 cursor-pointer ${selectedId === conv.id ? 'bg-blue-100' : ''}`} onClick={() => setSelectedId(conv.id)}>
              {conv.title}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1">
        {loading ? <LoadingSpinner /> : <MessageWindow messages={messages} onSend={handleSend} currentUserId={user?.id} />}
      </div>
    </div>
  );
}
