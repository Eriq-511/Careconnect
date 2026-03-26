// CareConnect UI — Modal.jsx
// Portal-based overlay modal with close on backdrop click
import { useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function Modal({ open, onClose, children, className = '' }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-2xl shadow-warm-lg max-w-lg w-full p-8 relative ${className}`}
        onClick={e => e.stopPropagation()}
      >
        {children}
        <button
          className="absolute top-4 right-4 text-warm-400 hover:text-warm-900 transition"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>,
    document.body
  );
}
