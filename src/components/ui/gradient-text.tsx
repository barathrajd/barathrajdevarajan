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
        'bg-gradient-to-r from-[#4f7e32] via-[#3d612a] to-[#2e4324] dark:from-[#9ac978] dark:via-[#85ba61] dark:to-[#c8e2b4] bg-clip-text text-transparent will-change-[background-position]',
        className,
      )}
    >
      {children}
    </span>
  );
};
