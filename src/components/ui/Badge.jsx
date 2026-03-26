// CareConnect UI — Badge.jsx
// status: 'verified' | 'pending' | 'rejected' | 'suspended'
import clsx from 'clsx';
import { Check } from 'lucide-react';

const badges = {
  verified:  'bg-teal-50 text-teal-700 border border-teal-200',
  pending:   'bg-amber-light text-amber border border-amber-light',
  rejected:  'bg-red-50 text-red-700 border border-red-200',
  suspended: 'bg-gray-100 text-gray-500 border border-gray-200',
};

export default function Badge({ status = 'verified', children, className = '' }) {
  return (
    <span
      className={clsx(
        'text-xs font-semibold px-3 py-1 rounded-full inline-flex items-center gap-1',
        badges[status],
        className
      )}
    >
      {status === 'verified' && <Check size={14} className="mr-1" />}
      {children}
    </span>
  );
}
