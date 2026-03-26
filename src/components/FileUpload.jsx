import React from 'react';
import { useDropzone } from 'react-dropzone';

export default function FileUpload({ onUpload, accept, maxSize }) {
  const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
    accept,
    maxSize,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length) onUpload(acceptedFiles[0]);
    },
  });

  return (
    <div {...getRootProps()} className={`border-2 border-dashed rounded p-6 text-center cursor-pointer ${isDragActive ? 'bg-blue-50' : ''}`}>
      <input {...getInputProps()} />
      <p>Drag & drop a file here, or click to select</p>
      {fileRejections.length > 0 && <p className="text-red-600">File rejected (type/size)</p>}
    </div>
  );
}
