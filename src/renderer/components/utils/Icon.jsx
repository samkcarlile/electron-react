import React from 'react';

export default function Icon({ icon, color, size = 32, className }) {
  return (
    <svg
      className={`bi ${color ? `text-${color}` : ''} ${className}`}
      width={size}
      height={size}
      fill="currentColor"
    >
      <use xlinkHref={`bootstrap-icons.svg#${icon}`} />
    </svg>
  );
}
