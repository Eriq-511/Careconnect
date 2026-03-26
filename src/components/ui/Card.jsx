// CareConnect UI — Card.jsx
// Base card component for consistent styling
import clsx from 'clsx';

export default function Card({ className = '', children, ...props }) {
  return (
    <div
      className={clsx(
        'bg-white border border-warm-200 rounded-2xl shadow-warm-sm overflow-hidden',
        'transition-all duration-200',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
