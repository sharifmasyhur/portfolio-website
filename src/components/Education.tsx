import { Section, SectionHeading } from "./ui";
import { EDUCATION } from "@/data/education";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading title="Education" />

      <article className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-3">
        <div className="md:col-span-3">
          <p className="text-sm text-terracotta">{EDUCATION.category}</p>
          <p className="mt-3 text-sm text-ink-muted">{EDUCATION.period}</p>
        </div>

        <div className="md:col-span-9">
          <h3 className="text-2xl text-ink">{EDUCATION.institution}</h3>
          <p className="mt-1 text-ink-muted">{EDUCATION.degree}</p>
          <p className="mt-4 text-base text-ink-muted leading-relaxed max-w-2xl">
            {EDUCATION.description}
          </p>
        </div>
      </article>
    </Section>
  );
}
