import { ArrowUpRight } from "lucide-react";
import { Tag } from "./ui";
import type { Project } from "@/data/projects";

export function ProjectEntry({ project }: { project: Project }) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-4 py-10 md:py-12">
      <div className="md:col-span-3">
        <p className="font-display text-4xl text-line-strong leading-none">{project.index}</p>
        <p className="mt-3 text-sm text-terracotta">{project.category}</p>
        <p className="mt-1 text-sm text-ink-muted">{project.year}</p>
      </div>

      <div className="md:col-span-9">
        <h3 className="text-2xl text-ink">{project.title}</h3>
        <p className="mt-3 text-base text-ink-muted leading-relaxed max-w-2xl">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        {project.links && project.links.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-ink hover:text-indigo underline decoration-line underline-offset-4 hover:decoration-indigo transition-colors duration-[150ms]"
              >
                {link.label}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
