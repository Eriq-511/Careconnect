// CareConnect UI — Button.jsx
// variants: 'primary' | 'secondary' | 'ghost' | 'danger' | 'white'
// sizes: 'sm' | 'md' | 'lg'
import clsx from 'clsx';

const variants = {
  primary:   'bg-teal-600 text-white hover:bg-teal-700 shadow-cta hover:shadow-lg hover:-translate-y-0.5',
  secondary: 'border-2 border-warm-200 bg-white text-warm-900 hover:border-teal-400 hover:text-teal-700',
  ghost:     'border border-warm-200 text-warm-700 hover:border-teal-600 hover:text-teal-600 bg-transparent',
  danger:    'bg-red-600 text-white hover:bg-red-700',
  white:     'bg-white text-teal-800 hover:shadow-warm-md hover:-translate-y-0.5',
};
const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  return (
    <button
      className={clsx(
        'rounded-xl font-semibold transition-all duration-200 cursor-pointer',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
