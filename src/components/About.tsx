import { Section, SectionHeading } from "./ui";

const FOCUS_AREAS = [
  "Networking",
  "IT Infrastructure",
  "Systems & Troubleshooting",
  "Cloud & Web (supporting)",
];

export function About() {
  return (
    <Section id="about" tone="raised">
      <SectionHeading title="About" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-10">
        <div className="md:col-span-7 space-y-5 text-lg text-ink-muted leading-relaxed">
          <p>
            My primary interest is networking and IT infrastructure — the
            systems, protocols, and hardware that keep a network reliable,
            rather than the applications running on top of it. Coursework and
            hands-on projects during my degree have centered on this: a group
            IoT capstone built around real hardware and a monitoring backend,
            a database-driven ordering system, and a research project
            evaluating cloud security controls.
          </p>
          <p>
            Alongside that, I have professional experience in front-end web
            development, building a live site for a private medical clinic,
            and hands-on exposure to systems troubleshooting and cloud
            security tooling (AWS IAM, CloudTrail, CloudWatch, Config). I
            treat these as supporting skills that make me more effective in
            an infrastructure role, not a separate specialization.
          </p>
        </div>

        <div className="md:col-span-4 md:col-start-9">
          <p className="text-sm text-ink-muted mb-3">Focus areas, in order</p>
          <ol className="space-y-2">
            {FOCUS_AREAS.map((area, i) => (
              <li key={area} className="text-ink flex gap-3">
                <span className="text-ink-muted tabular-nums">{i + 1}.</span>
                {area}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
