"use client";

import { useId, useState } from "react";
import { ArchitectureDiagram } from "@/components/projects/ArchitectureDiagram";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

const TABS = ["Overview", "Architecture", "Stack"] as const;
type Tab = (typeof TABS)[number];

export function ProjectCaseStudy({ project }: { project: Project }) {
  const [tab, setTab] = useState<Tab>("Overview");
  const baseId = useId();

  return (
    <div className="border-t border-border pt-6">
      <div
        role="tablist"
        aria-label={`${project.title} case study`}
        className="flex gap-4 border-b border-border"
      >
        {TABS.map((t) => (
          <button
            key={t}
            id={`${baseId}-tab-${t}`}
            type="button"
            role="tab"
            aria-selected={tab === t}
            aria-controls={`${baseId}-panel-${t}`}
            onClick={() => setTab(t)}
            className={cn(
              "-mb-px border-b-2 px-0.5 pb-2.5 text-sm transition-colors",
              tab === t
                ? "border-accent text-foreground"
                : "border-transparent text-muted hover:text-foreground",
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <div
        id={`${baseId}-panel-${tab}`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${tab}`}
        className="pt-6"
      >
        {tab === "Overview" && (
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
            <div className="space-y-6">
              <Block label="Problem">{project.caseStudy.problem}</Block>
              <Block label="Approach">{project.caseStudy.approach}</Block>
              <Block label="Implementation">{project.caseStudy.implementation}</Block>
            </div>
            <div className="space-y-6">
              <div>
                <Label>What it does</Label>
                <ul className="mt-2 space-y-1.5">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-[13.5px] leading-relaxed text-muted">
                      <span className="mt-[9px] size-1 shrink-0 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              {project.concepts && (
                <div>
                  <Label>SQL concepts</Label>
                  <p className="mt-2 font-mono text-[12.5px] leading-relaxed text-foreground">
                    {project.concepts.join("  ·  ")}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {tab === "Architecture" && (
          <div className="max-w-xl">
            <ArchitectureDiagram steps={project.architecture} />
          </div>
        )}

        {tab === "Stack" && (
          <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {project.stack.map((group) => (
              <div key={group.label}>
                <dt>
                  <Label>{group.label}</Label>
                </dt>
                <dd className="mt-1.5 text-sm text-foreground">{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[11px] tracking-wider text-muted uppercase">{children}</span>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <Label>{label}</Label>
      <p className="mt-1.5 text-[14.5px] leading-relaxed text-muted">{children}</p>
    </div>
  );
}
