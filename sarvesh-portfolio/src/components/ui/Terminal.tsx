import type { CSSProperties } from "react";
import { projects } from "@/lib/data/projects";

/**
 * A quiet, editor-style panel that lists the real project directories.
 * Output mirrors what `tree -L 1` prints — nothing is faked.
 */
export function Terminal() {
  const width = Math.max(...projects.map((p) => p.slug.length));

  const rows = projects.map((p, i) => {
    const last = i === projects.length - 1;
    const branch = last ? "└──" : "├──";
    const pad = " ".repeat(width - p.slug.length + 2);
    const note =
      p.status === "ongoing" ? "ongoing" : p.technologies.slice(0, 2).join(" · ");
    return { branch, slug: p.slug, pad, note };
  });

  return (
    <div className="w-full max-w-md overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
        <span className="size-2 rounded-full bg-border" />
        <span className="size-2 rounded-full bg-border" />
        <span className="size-2 rounded-full bg-border" />
        <span className="ml-2 font-mono text-[11px] text-muted">~/projects</span>
      </div>
      <pre className="overflow-x-auto px-4 py-4 font-mono text-[12.5px] leading-6 text-muted sm:text-[13px]">
        <Line i={0}>
          <span className="text-accent">$</span>{" "}
          <span className="text-foreground">tree -L 1 projects</span>
        </Line>
        <Line i={1}>projects</Line>
        {rows.map((r, i) => (
          <Line key={r.slug} i={i + 2}>
            {r.branch} <span className="text-foreground">{r.slug}</span>
            <span className="hidden sm:inline">
              {r.pad}
              <span className="text-muted/70"># {r.note}</span>
            </span>
          </Line>
        ))}
        <Line i={rows.length + 2}>
          {projects.length} directories, {projects.filter((p) => p.status === "ongoing").length}{" "}
          in progress
        </Line>
      </pre>
    </div>
  );
}

function Line({ i, children }: { i: number; children: React.ReactNode }) {
  return (
    <div
      className="animate-rise"
      style={{ "--rise-delay": `${200 + i * 70}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
