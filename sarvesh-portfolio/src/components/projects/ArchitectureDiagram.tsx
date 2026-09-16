import { ArrowDown, ArrowRight } from "lucide-react";
import type { ArchitectureStep } from "@/types";

/**
 * Compact horizontal flow used on the project card. Wraps on narrow screens.
 */
export function ArchitectureStrip({ steps }: { steps: ArchitectureStep[] }) {
  return (
    <ol className="flex flex-wrap items-center gap-y-2 font-mono text-[12px]" aria-label="Architecture">
      {steps.map((step, i) => (
        <li key={step.label} className="flex items-center">
          <span className="rounded-md border border-border bg-background px-2 py-1 text-foreground">
            {step.label}
          </span>
          {i < steps.length - 1 && (
            <ArrowRight size={12} strokeWidth={1.75} className="mx-1.5 shrink-0 text-muted/70" aria-hidden />
          )}
        </li>
      ))}
    </ol>
  );
}

/**
 * Detailed vertical flow with per-step descriptions, used in the case study.
 */
export function ArchitectureDiagram({ steps }: { steps: ArchitectureStep[] }) {
  return (
    <ol className="relative">
      {steps.map((step, i) => (
        <li key={step.label} className="relative flex gap-4">
          <div className="flex flex-col items-center">
            <span className="mt-1.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent-soft font-mono text-[10px] text-accent">
              {i + 1}
            </span>
            {i < steps.length - 1 && (
              <span className="my-1 flex flex-1 flex-col items-center">
                <span className="w-px flex-1 bg-border" />
                <ArrowDown size={12} strokeWidth={1.75} className="-mt-1 text-muted/60" aria-hidden />
              </span>
            )}
          </div>
          <div className={i < steps.length - 1 ? "pb-5" : ""}>
            <p className="font-mono text-sm text-foreground">{step.label}</p>
            {step.detail && <p className="mt-0.5 text-[13px] text-muted">{step.detail}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}
