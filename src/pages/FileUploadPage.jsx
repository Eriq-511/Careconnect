import React, { useState } from 'react';
import FileUpload from '../components/FileUpload';
import { uploadFile } from '../api/api';
import NotificationBanner from '../components/NotificationBanner';

export default function FileUploadPage() {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleUpload = async (file) => {
    setError(''); setSuccess('');
    if (!file) return;
    if (!['image/png', 'image/jpeg', 'application/pdf'].includes(file.type)) {
      setError('Only PNG, JPEG, or PDF files allowed.');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError('File must be under 5MB.');
      return;
    }
    try {
      await uploadFile(file);
      setSuccess('File uploaded successfully!');
    } catch (e) {
      setError(e.response?.data?.message || 'Upload failed');
    }
  };

  return (
    <div className="max-w-md mx-auto py-12">
      <h2 className="text-2xl font-bold mb-4">Upload File</h2>
      {error && <NotificationBanner message={error} type="error" onClose={() => setError('')} />}
      {success && <NotificationBanner message={success} type="success" onClose={() => setSuccess('')} />}
      <FileUpload onUpload={handleUpload} accept="image/png, image/jpeg, application/pdf" maxSize={5 * 1024 * 1024} />
    </div>
  );
}
