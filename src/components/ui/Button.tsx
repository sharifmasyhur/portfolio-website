import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

/**
 * Rendered as an anchor (used for both in-page nav and external links).
 * Two variants only — no gradient fills, no oversized rounded-pill shape.
 */
export function Button({ children, variant = "primary", className = "", ...rest }: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-md transition-colors duration-base";
  const variants = {
    primary: "bg-ink text-paper hover:bg-indigo",
    secondary: "border border-line text-ink hover:border-indigo hover:text-indigo",
  };

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}
