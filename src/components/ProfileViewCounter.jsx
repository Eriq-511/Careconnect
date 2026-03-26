import React from 'react';

export default function ProfileViewCounter({ count }) {
  return (
    <div className="text-sm text-primary-600 mt-2">Profile views: <span className="font-bold">{count}</span></div>
  );
}
