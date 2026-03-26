// CareConnect UI — Input.jsx
// Styled form input with label and error state
import clsx from 'clsx';

export default function Input({
  label,
  error,
  className = '',
  inputClass = '',
  ...props
}) {
  return (
    <div className={clsx('mb-4', className)}>
      {label && (
        <label className="block mb-1 text-sm font-medium text-warm-700 font-body">
          {label}
        </label>
      )}
      <input
        className={clsx(
          'border border-warm-200 rounded-xl px-4 py-3 w-full bg-white outline-none transition-all',
          'focus:border-teal-600 focus:ring-2 focus:ring-teal-100',
          error && 'border-danger',
          inputClass
        )}
        {...props}
      />
      {error && (
        <div className="text-danger text-xs mt-1">{error}</div>
      )}
    </div>
  );
}
