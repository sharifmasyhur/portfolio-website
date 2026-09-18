import { Section, SectionHeading, Divider } from "./ui";
import { EXPERIENCE } from "@/data/experience";
import { ExperienceItem } from "./ExperienceItem";

export function Experience() {
  return (
    <Section id="experience" tone="raised">
      <SectionHeading title="Experience" />

      <div>
        {EXPERIENCE.map((entry, i) => (
          <div key={entry.role + entry.organization}>
            <ExperienceItem entry={entry} />
            {i < EXPERIENCE.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    </Section>
  );
}
