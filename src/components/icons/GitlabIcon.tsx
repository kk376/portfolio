import React from 'react';

export const GitlabIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="m23.6 9.58-1.54-4.74a.8.8 0 0 0-1.52 0l-1.54 4.74H4.5L2.96 4.84a.8.8 0 0 0-1.52 0L.4 9.58a1.64 1.64 0 0 0 .6 1.83l10.5 7.64a.8.8 0 0 0 1 0l10.5-7.64a1.64 1.64 0 0 0 .6-1.83Z" />
  </svg>
);
