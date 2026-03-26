// CareConnect UI — Avatar.jsx
// If avatarUrl exists: show <img> with rounded-2xl
// Else: teal gradient div with white initials in Lora font
// Sizes: sm=8, md=12, lg=16, xl=24 (Tailwind w/h units)
import clsx from 'clsx';

const GRADIENTS = [
  'from-teal-700 to-teal-400',
  'from-amber-800 to-amber-400',
  'from-blue-900 to-blue-400',
  'from-purple-900 to-purple-400',
  'from-rose-800 to-rose-400',
];
const getGradient = (userId = '') =>
  GRADIENTS[userId.charCodeAt(0) % GRADIENTS.length];

const sizes = {
  sm: 'w-8 h-8 text-sm',
  md: 'w-12 h-12 text-base',
  lg: 'w-16 h-16 text-lg',
  xl: 'w-24 h-24 text-2xl',
};

function getInitials(firstName = '', lastName = '') {
  return `${firstName[0] || ''}${lastName[0] || ''}`.toUpperCase();
}

export default function Avatar({
  avatarUrl,
  userId = '',
  firstName = '',
  lastName = '',
  size = 'md',
  className = '',
  ...props
}) {
  if (avatarUrl) {
    return (
      <img
        src={avatarUrl}
        alt={firstName + ' ' + lastName}
        className={clsx('rounded-2xl object-cover', sizes[size], className)}
        {...props}
      />
    );
  }
  return (
    <div
      className={clsx(
        'flex items-center justify-center rounded-2xl font-display font-bold text-white select-none',
        `bg-gradient-to-br ${getGradient(userId)}`,
        sizes[size],
        className
      )}
      {...props}
    >
      {getInitials(firstName, lastName)}
    </div>
  );
}
