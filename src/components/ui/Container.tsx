import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Consistent horizontal rhythm for the whole site. Every section wraps
 * its content in this rather than repeating max-w/px utilities inline.
 */
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-5xl px-6 md:px-8 ${className}`}>
      {children}
    </div>
  );
}
