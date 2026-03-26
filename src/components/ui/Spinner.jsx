// CareConnect UI — Spinner.jsx
// Teal ring spinner for loading states
export default function Spinner({ size = 32, className = '' }) {
  return (
    <svg
      className={`animate-spin ${className}`}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="16"
        cy="16"
        r="12"
        stroke="#14B8A6"
        strokeWidth="4"
        strokeDasharray="60 40"
        strokeLinecap="round"
        opacity="0.2"
      />
      <circle
        cx="16"
        cy="16"
        r="12"
        stroke="#14B8A6"
        strokeWidth="4"
        strokeDasharray="40 60"
        strokeLinecap="round"
      />
    </svg>
  );
}
