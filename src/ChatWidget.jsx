import React, { useEffect, useState, useRef } from 'react';
import SockJS from 'sockjs-client';
import Stomp from '@stomp/stompjs';
import { useAuthStore } from './stores/authStore';
import MessageBubble from './components/MessageBubble';
import LoadingSpinner from './components/LoadingSpinner';

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'http://localhost:8080/ws';
const MESSAGE_TOPIC = '/topic/messages';
const SEND_ENDPOINT = '/app/chat.sendMessage';

export default function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const stompClient = useRef(null);
  const user = useAuthStore((state) => state.user);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    setLoading(true);
    const socket = new SockJS(SOCKET_URL);
    stompClient.current = Stomp.over(socket);
    stompClient.current.connect({}, () => {
      stompClient.current.subscribe(MESSAGE_TOPIC, (msg) => {
        const message = JSON.parse(msg.body);
        setMessages((prev) => [...prev, message]);
        setLoading(false);
      });
      setLoading(false);
    });
    return () => {
      if (stompClient.current) stompClient.current.disconnect();
    };
  }, []);

  // Mark all delivered messages as seen when focused
  useEffect(() => {
    if (focused && user) {
      // In real app, call backend to mark as seen for this chat
      // Example: markMessagesSeen(conversationId, user.id)
      setMessages((prev) => prev.map(m =>
        m.status === 'DELIVERED' && m.senderId !== user.id
          ? { ...m, status: 'SEEN' }
          : m
      ));
    }
  }, [focused, user]);

  const sendMessage = () => {
    if (input.trim() && stompClient.current && user) {
      setLoading(true);
      const message = {
        content: input,
        senderId: user.id,
        status: 'DELIVERED',
      };
      stompClient.current.send(SEND_ENDPOINT, {}, JSON.stringify(message));
      setInput('');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow rounded p-4">
      <div
        className="h-64 overflow-y-auto border-b mb-2"
        tabIndex={0}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        {messages.map((msg, idx) => (
          <MessageBubble
            key={msg.id || idx}
            content={msg.content}
            isOwn={user && msg.senderId === user.id}
            status={msg.status}
          />
        ))}
        {loading && <LoadingSpinner />}
      </div>
      <div className="flex gap-2 mt-2">
        <input
          className="flex-1 border rounded px-2 py-1"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
          placeholder="Type a message..."
        />
        <button className="bg-primary-600 text-white px-4 py-1 rounded" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}
