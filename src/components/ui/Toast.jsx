// CareConnect UI — Toast.jsx
// Success/error/info toasts (fixed bottom-right)
import { useEffect } from 'react';
import clsx from 'clsx';

export default function Toast({
  open,
  message,
  type = 'info', // 'success' | 'error' | 'info'
  onClose,
  duration = 3500,
}) {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [open, duration, onClose]);

  if (!open) return null;
  return (
    <div
      className={clsx(
        'fixed bottom-6 right-6 z-50 px-5 py-3 rounded-xl shadow-warm-md flex items-center gap-2 font-medium transition-all',
        type === 'success' && 'bg-success text-white',
        type === 'error' && 'bg-danger text-white',
        type === 'info' && 'bg-warm-900 text-white'
      )}
      role="alert"
    >
      {message}
      <button
        className="ml-3 text-white/70 hover:text-white transition"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
    </div>
  );
}
