export interface ExperienceEntry {
  role: string;
  organization: string;
  category: string; // honest category distinction, same pattern as Selected Work
  period: string;
  location: string;
  description: string;
}

/**
 * Deliberately does NOT include networking/infrastructure academic projects
 * yet -- pending repo access and individual-contribution verification, per
 * instruction. Do not add anything here on the assumption that it "would
 * fit" the networking/infrastructure positioning; only verified entries.
 */
export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "Front-End Web Developer",
    organization: "NAClinic / Klinik Nefi Asad",
    category: "Professional / Client Work",
    period: "May – Jun 2026",
    location: "Hybrid",
    description:
      "Built and deployed the front-end for Klinik Nefi Asad, a private medical clinic, as freelance client work. Developed with React, Vite, and Tailwind CSS. This is front-end web development work — a supporting skill, distinct from my primary focus on networking and IT infrastructure.",
  },
  {
    role: "Media Creator / Assistant",
    organization: "Asyraaf UI (non-profit organization)",
    category: "Non-Profit / Media",
    period: "Jun 2023 – Apr 2024",
    location: "Remote",
    description:
      "Planned media content for the organization's channels, developing content plans based on audience insight, and handled content production from concept through publishing.",
  },
];
