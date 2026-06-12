import React from 'react';

interface KitProps {
  type: 'stripes' | 'chevrons' | 'sash' | 'diamonds';
  primary: string;
  accent: string;
}

export const KitPatternSVG: React.FC<KitProps> = ({ type, primary, accent }) => {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none mix-blend-screen" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={`pat-${type}`} width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          {type === 'stripes' && (
            <rect width="20" height="40" fill={accent} fillOpacity="0.35" />
          )}
          {type === 'diamonds' && (
            <polygon points="20,0 40,20 20,40 0,20" fill={accent} fillOpacity="0.25" />
          )}
          {type === 'sash' && (
            <line x1="0" y1="0" x2="40" y2="40" stroke={accent} strokeWidth="12" strokeOpacity="0.3" />
          )}
          {type === 'chevrons' && (
            <path d="M 0 20 L 20 40 L 40 20 L 40 10 L 20 30 L 0 10 Z" fill={accent} fillOpacity="0.25" />
          )}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={primary} fillOpacity="0.2" />
      <rect width="100%" height="100%" fill={`url(#pat-${type})`} />
    </svg>
  );
};
