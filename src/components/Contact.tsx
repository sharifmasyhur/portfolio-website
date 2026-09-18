import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "./ui";
import { CONTACT } from "@/data/contact";

const LINKS = [
  { label: "Email", href: `mailto:${CONTACT.email}`, Icon: Mail, external: false },
  { label: "LinkedIn", href: CONTACT.linkedin, Icon: Linkedin, external: true },
  { label: "GitHub", href: CONTACT.github, Icon: Github, external: true },
];

export function Contact() {
  return (
    <Section id="contact" tone="raised">
      <SectionHeading
        title="Contact"
        description="The most direct ways to reach me are below."
      />

      <div className="flex flex-col sm:flex-row flex-wrap gap-x-10 gap-y-4">
        {LINKS.map(({ label, href, Icon, external }) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="inline-flex items-center gap-2 text-lg text-ink hover:text-indigo transition-colors duration-[150ms]"
          >
            <Icon size={18} className="text-ink-muted" />
            {label}
            <ArrowUpRight size={14} className="text-ink-muted" />
          </a>
        ))}
      </div>
    </Section>
  );
}
