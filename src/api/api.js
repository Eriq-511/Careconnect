import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

export const api = axios.create({
  baseURL: API_BASE,
  withCredentials: true,
});

// Attach token if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Auth
export const login = (email, password) => api.post('/auth/login', { email, password });
export const signup = (email, password, role) => api.post('/auth/signup', { email, password, role });
export const getMe = () => api.get('/auth/me');

// Profile
export const getProfile = () => api.get('/profile');
export const updateProfile = (data) => api.put('/profile', data);

// Directory
export const searchBabysitters = (params) => api.get('/babysitters', { params });

// Messaging
export const getConversations = () => api.get('/messages/conversations');
export const getMessages = (conversationId) => api.get(`/messages/${conversationId}`);
export const sendMessage = (conversationId, content) => api.post(`/messages/${conversationId}`, { content });

// Mark all delivered messages as seen in a conversation
export const markMessagesSeen = (conversationId, userId) =>
  api.put(`/conversations/${conversationId}/messages/seen`, null, { params: { userId } });

// File Uploads
export const uploadFile = (file) => {
  const formData = new FormData();
  formData.append('file', file);
  return api.post('/files/upload', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
};
