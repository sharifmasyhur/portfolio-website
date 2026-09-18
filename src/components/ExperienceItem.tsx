import type { ExperienceEntry } from "@/data/experience";

export function ExperienceItem({ entry }: { entry: ExperienceEntry }) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-3 py-10 md:py-12">
      <div className="md:col-span-3">
        <p className="text-sm text-terracotta">{entry.category}</p>
        <p className="mt-3 text-sm text-ink-muted">{entry.period}</p>
        <p className="text-sm text-ink-muted">{entry.location}</p>
      </div>

      <div className="md:col-span-9">
        <h3 className="text-2xl text-ink">{entry.role}</h3>
        <p className="mt-1 text-ink-muted">{entry.organization}</p>
        <p className="mt-4 text-base text-ink-muted leading-relaxed max-w-2xl">
          {entry.description}
        </p>
      </div>
    </article>
  );
}
