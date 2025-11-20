import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export const GradientText = ({ children, className }: GradientTextProps) => {
  return (
    <span
      className={cn(
        'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent will-change-[background-position]',
        className,
      )}
    >
      {children}
    </span>
  );
};
