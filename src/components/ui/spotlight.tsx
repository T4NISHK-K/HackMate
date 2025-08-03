import React from 'react';

interface SpotlightProps {
  gradientFirst: string;
  gradientSecond: string;
  gradientThird: string;
  className?: string;
}

export function Spotlight({ gradientFirst, gradientSecond, gradientThird, className }: SpotlightProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div 
        className="absolute top-0 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ background: gradientFirst }}
      />
      <div 
        className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15"
        style={{ background: gradientSecond }}
      />
      <div 
        className="absolute bottom-1/4 left-1/2 w-72 h-72 rounded-full blur-3xl opacity-10"
        style={{ background: gradientThird }}
      />
    </div>
  );
}