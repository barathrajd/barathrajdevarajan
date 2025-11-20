import { cn } from "@/lib/utils";

interface BRLogoProps {
  className?: string;
}

export const BRLogo = ({ className }: BRLogoProps) => {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-10 h-10", className)}
    >
      {/* Circular background with gradient */}
      <circle cx="24" cy="24" r="22" fill="url(#logo-gradient)" />
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      
      {/* BR Text */}
      <text
        x="24"
        y="32"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="20"
        fontWeight="700"
        fill="white"
        textAnchor="middle"
      >
        BR
      </text>
      
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
        </linearGradient>
      </defs>
    </svg>
  );
};

