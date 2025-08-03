import React from 'react';
import { cn } from '@/lib/utils';

interface BorderBeamProps {
  duration?: number;
  size?: number;
  className?: string;
  reverse?: boolean;
}

export function BorderBeam({ duration = 8, size = 300, className, reverse = false }: BorderBeamProps) {
  return (
    <div
      className={cn(
        'absolute inset-0 rounded-2xl',
        'before:absolute before:inset-0 before:rounded-2xl before:p-[1px]',
        'before:bg-gradient-to-r before:from-transparent before:via-primary/40 before:to-transparent',
        reverse ? 'before:animate-spin-reverse' : 'before:animate-spin',
        className
      )}
      style={{
        animationDuration: `${duration}s`,
      }}
    />
  );
}