import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, FileDown } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { Container } from "@/components/ui/Container";

import { personal } from "@/lib/data/personal";
import { experience } from "@/lib/data/experience";

const latestRole = experience[0];

function rise(ms: number) {
  return { "--rise-delay": `${ms}ms` } as CSSProperties;
}

export function Hero() {
  return (
    <section id="top" className="pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28">
      <Container>
        <div>
          <h1
            className="animate-rise text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]"
            style={rise(0)}
          >
            {personal.name}
          </h1>

          <p
            className="animate-rise mt-4 text-lg text-foreground sm:text-xl"
            style={rise(80)}
          >
            {personal.title}
            <span className="text-muted">
              {" "}
              — {personal.focusAreas.join(" · ")}
            </span>
          </p>

          <p
            className="animate-rise mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-[1.0625rem]"
            style={rise(160)}
          >
            {personal.summary}
          </p>

          <div
            className="animate-rise mt-8 flex flex-wrap items-center gap-3"
            style={rise(240)}
          >
            <Link
              href="#projects"
              className="inline-flex h-10 items-center gap-2 rounded-md bg-accent px-4 text-sm font-medium text-accent-foreground transition-[transform,opacity] hover:-translate-y-px hover:opacity-90"
            >
              View projects
              <ArrowRight size={15} strokeWidth={2} />
            </Link>
            <a 
              href={personal.resumePath}
              className="inline-flex h-10 items-center gap-2 rounded-md border border-border px-4 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:text-accent" 
            >
              <FileDown size={15} strokeWidth={1.75} />
              Resume
            </a>
            <a
              href={personal.social.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-md px-3 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              <GithubIcon size={15} />
              GitHub
            </a>
          </div>

          <div className="animate-rise mt-10 text-sm text-muted" style={rise(320)}>
            <p className="font-mono text-[11px] tracking-wider uppercase">Most recently</p>
            <p className="mt-1">
              <span className="text-foreground">{latestRole.role}</span>
              {" · "}
              {latestRole.company}
              <span className="ml-3 font-mono text-xs whitespace-nowrap">{latestRole.period}</span>
            </p>
          </div>
        </div> 
      </Container>
    </section>
  );
}
