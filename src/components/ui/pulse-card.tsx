import React from 'react';
import { cn } from '@/lib/utils';

interface CardHoverEffectProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  variant?: 'purple' | 'blue' | 'amber' | 'rose';
  glowEffect?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function CardHoverEffect({
  icon,
  title,
  description,
  variant = 'purple',
  glowEffect = false,
  size = 'md',
  className,
}: CardHoverEffectProps) {
  const variantClasses = {
    purple: 'from-purple-500/20 to-purple-500/5 border-purple-500/20 text-purple-400',
    blue: 'from-blue-500/20 to-blue-500/5 border-blue-500/20 text-blue-400',
    amber: 'from-amber-500/20 to-amber-500/5 border-amber-500/20 text-amber-400',
    rose: 'from-rose-500/20 to-rose-500/5 border-rose-500/20 text-rose-400',
  };

  const sizeClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={cn(
        'relative rounded-2xl border backdrop-blur-sm bg-gradient-to-br transition-all duration-300 hover:scale-105',
        variantClasses[variant],
        sizeClasses[size],
        glowEffect && 'hover:shadow-elegant',
        className
      )}
    >
      <div className="space-y-4">
        <div className="text-2xl">{icon}</div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}