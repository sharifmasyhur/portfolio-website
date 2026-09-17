interface SectionHeadingProps {
  title: string;
  description?: string;
}

/**
 * Standard section header: an editorial serif heading with a short
 * indigo rule sitting beside it (not above it, not a full-width
 * underline), optionally a one-line description underneath.
 *
 * Deliberately does NOT use an uppercase tracked-letter "eyebrow"
 * label above the heading -- combined with a nav bar that already
 * names every section, a repeated label above each heading would be
 * redundant chrome rather than information, and it's one of the
 * more recognizable "generated page" tells.
 */
export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16 max-w-2xl">
      <div className="flex items-baseline gap-4">
        <span className="inline-block w-8 h-[3px] bg-indigo shrink-0" aria-hidden="true" />
        <h2 className="text-3xl md:text-4xl text-ink">{title}</h2>
      </div>
      {description && (
        <p className="mt-4 text-lg text-ink-muted leading-relaxed">{description}</p>
      )}
    </div>
  );
}
