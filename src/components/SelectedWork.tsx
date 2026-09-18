import { Section, SectionHeading, Divider } from "./ui";
import { FEATURED_PROJECTS } from "@/data/projects";
import { ProjectEntry } from "./ProjectEntry";

export function SelectedWork() {
  return (
    <Section id="work">
      <SectionHeading
        title="Selected work"
        description="A curated set of projects — spanning group, professional, personal, and research work — rather than a complete list of everything built during the degree."
      />

      <div>
        {FEATURED_PROJECTS.map((project, i) => (
          <div key={project.title}>
            <ProjectEntry project={project} />
            {i < FEATURED_PROJECTS.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    </Section>
  );
}
