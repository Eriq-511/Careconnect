import React, { useState } from 'react';
import FileUpload from '../components/FileUpload';
import { uploadFile } from '../api/api';
import NotificationBanner from '../components/NotificationBanner';

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
    <div className="min-h-screen flex items-center justify-center bg-warm-50 px-4 py-12">
      <div className="w-full max-w-md bg-white border border-warm-200 rounded-2xl shadow-warm-md p-8 md:p-12 mx-auto">
        <h2 className="font-display text-2xl font-bold mb-6 text-warm-900 text-center">Upload File</h2>
        {error && <NotificationBanner message={error} type="error" onClose={() => setError('')} />}
        {success && <NotificationBanner message={success} type="success" onClose={() => setSuccess('')} />}
        <FileUpload onUpload={handleUpload} accept="image/png, image/jpeg, application/pdf" maxSize={5 * 1024 * 1024} />
      </div>
    </div>
  );
}
