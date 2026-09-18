export interface Project {
  index: string; // display numeral, e.g. "01"
  category: string; // honest category distinction (professional / group / personal / research)
  year: string;
  title: string;
  description: string;
  tags: string[];
  links?: { label: string; href: string }[];
}

/**
 * Order matches the approved hierarchy: strongest infrastructure/systems
 * story first, then professional credibility, then range, then research
 * depth. Do not reorder without revisiting that reasoning.
 */
export const FEATURED_PROJECTS: Project[] = [
  {
    index: "01",
    category: "Group Capstone",
    year: "2025",
    title: "SmartBoxIoT",
    description:
      "A three-part IoT system for real-time monitoring of a storage/distribution box: ESP32 firmware (C++/Arduino) reading temperature, humidity, and GPS; a Flask backend; and a web dashboard with admin login, threshold-based alerts (LED/buzzer plus in-app notifications), and CSV export of historical readings. Built as a final capstone with a group of engineering classmates. The project's public documentation doesn't break down individual contributions, so this is presented as group work rather than an individual credit.",
    tags: ["ESP32 / C++", "Flask", "IoT", "React", "Tailwind CSS", "JavaScript", "Python"],
    links: [{ label: "View repository", href: "https://github.com/andrewkristofer/SmartBox-IoT" }],
  },
  {
    index: "02",
    category: "Professional / Client Work",
    year: "2026",
    title: "NAClinic",
    description:
      "A live front-end for Klinik Nefi Asad, a private medical clinic — built and deployed as freelance web development work. Built with React, Vite, and Tailwind CSS.",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    links: [
      { label: "View repository", href: "https://github.com/sharifmasyhur/NAClinic" },
      { label: "Visit site", href: "https://na-clinic.vercel.app" },
    ],
  },
  {
    index: "03",
    category: "Personal Project — in progress",
    year: "2026",
    title: "Olympiaza",
    description:
      "A bodyweight and resistance-training platform inspired by ancient Greek athletic culture, originally prototyped as \u201CPalestra.\u201D Built with Next.js, TypeScript, and Tailwind CSS. The homepage and a Train module \u2014 a 71-exercise library and a deterministic, rule-based workout generator \u2014 are built. A progress-tracking system, a calculator toolkit, and an editorial Learn section are planned but not yet started.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: [{ label: "View repository", href: "https://github.com/sharifmasyhur/Olympiaza" }],
  },
  {
    index: "04",
    category: "Undergraduate Thesis",
    year: "2026",
    title: "Cloud Security Assessment",
    description:
      "Evaluation of Cloud Service Security Using Access Management and Monitoring Approaches \u2014 a research project assessing AWS security posture using IAM, CloudTrail, CloudWatch, and Config, audited with Prowler. Presented here as academic research demonstrating cloud/security exposure, not as professional security work.",
    tags: ["AWS IAM", "CloudTrail", "Prowler"],
  },
  {
    index: "05",
    category: "Group Project",
    year: "2024",
    title: "QuickCanteen",
    description:
      "This project aims to reduce queues and save students time by providing a user-friendly campus canteen website for online food ordering. Students can conveniently enjoy their meals without waiting in long lines.",
    tags: ["React", "Typescript", "MongoDB", "JWT", "Stripe", "Tailwind CSS",],
    links: [
      { label: "View repository", href: "https://github.com/sharifmasyhur/DatabasePride." },
    ],
  },
];
