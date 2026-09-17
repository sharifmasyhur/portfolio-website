interface TagProps {
  children: string;
}

/**
 * Plain-text technology/category label. Deliberately not a colorful
 * pill/badge — this system avoids "skill badge soup" — and deliberately
 * not all-caps, which reads as generic template chrome. Sentence case,
 * quiet border, used sparingly (e.g. 2-4 technologies under a project).
 */
export function Tag({ children }: TagProps) {
  return (
    <span className="text-sm text-ink-muted border border-line rounded-sm px-2 py-1">
      {children}
    </span>
  );
}
