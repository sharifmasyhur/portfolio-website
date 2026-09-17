import type { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  id?: string;
  children: ReactNode;
  /** Use the slightly raised paper tone to differentiate a section without a card/box. */
  tone?: "paper" | "raised";
  className?: string;
}

export function Section({ id, children, tone = "paper", className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${
        tone === "raised" ? "bg-paper-raised" : "bg-paper"
      } ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
