import { Section, Divider } from "./ui";

interface PlaceholderSectionProps {
  id: string;
  label: string;
  stage: string;
}

/**
 * STAGE 2 SCAFFOLD ONLY.
 * Renders just enough for the id to exist (so nav links/scroll-spy work)
 * and to make it visually obvious this is not real content yet. Replaced
 * section-by-section in Stages 3-5.
 */
export function PlaceholderSection({ id, label, stage }: PlaceholderSectionProps) {
  return (
    <Section id={id} tone={id === "about" || id === "education" ? "raised" : "paper"}>
      <p className="text-ink-muted/50 text-sm">
        {label} — content arrives in {stage}
      </p>
      <Divider className="mt-8" />
    </Section>
  );
}
