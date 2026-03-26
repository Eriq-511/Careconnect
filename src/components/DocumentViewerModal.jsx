import React from 'react';

export default function DocumentViewerModal({ open, onClose, fileUrl, fileType }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-2xl font-bold">&times;</button>
        {fileType === 'pdf' ? (
          <iframe src={fileUrl} title="Document" className="w-full h-96" />
        ) : (
          <img src={fileUrl} alt="Document" className="w-full max-h-96 object-contain" />
        )}
      </div>
    </div>
  );
}
