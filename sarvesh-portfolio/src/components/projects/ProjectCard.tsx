"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { Chip } from "@/components/ui/Chip";
import { ArchitectureStrip } from "@/components/projects/ArchitectureDiagram";
import { ProjectCaseStudy } from "@/components/projects/ProjectCaseStudy";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();

  return (
    <article className="rounded-xl border border-border bg-surface transition-colors hover:border-foreground/15">
      <div className="p-6 sm:p-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="font-mono text-xs text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                {project.title}
              </h3>
              {project.status === "ongoing" && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 px-2 py-0.5 font-mono text-[10px] tracking-wider text-accent uppercase">
                  <span className="size-1.5 rounded-full bg-accent" />
                  Ongoing
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
          </div>

          <div className="flex shrink-0 items-center gap-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-8 items-center gap-1.5 rounded-md border border-border px-2.5 text-[13px] text-foreground transition-colors hover:border-accent/40 hover:text-accent"
                title={
                  project.githubIsProfile
                    ? "Repository not yet published — opens GitHub profile"
                    : "View repository"
                }
              >
                <GithubIcon size={13} />
                GitHub
              </a>
            )}
            <button
              type="button"
              aria-expanded={expanded}
              aria-controls={panelId}
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex h-8 items-center gap-1 rounded-md px-2.5 text-[13px] font-medium text-accent transition-colors hover:bg-accent-soft"
            >
              {expanded ? "Close" : "Case study"}
              <ChevronDown
                size={13}
                strokeWidth={2}
                className={cn("transition-transform duration-300", expanded && "rotate-180")}
              />
            </button>
          </div>
        </div>

        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
          {project.description}
        </p>

        {project.facts && (
          <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-2">
            {project.facts.map((fact) => (
              <div key={fact.label} className="flex items-baseline gap-2">
                <dd className="font-mono text-base text-foreground">{fact.value}</dd>
                <dt className="text-xs text-muted">{fact.label.toLowerCase()}</dt>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-6">
          <ArchitectureStrip steps={project.architecture} />
        </div>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </div>
      </div>

      <div id={panelId} className="collapsible" data-open={expanded} inert={!expanded}>
        <div>
          <div className="px-6 pb-6 sm:px-7 sm:pb-7">
            <ProjectCaseStudy project={project} />
          </div>
        </div>
      </div>
    </article>
  );
}
