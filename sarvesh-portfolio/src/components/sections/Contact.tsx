import { Mail, FileCode2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { personal } from "@/lib/data/personal";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border py-24 sm:py-32">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
            Let&apos;s build something useful.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted sm:text-base">
            Open to internships, graduate software engineering roles, and technical
            collaborations. The fastest way to reach me is email.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${personal.social.email}`}
              className="inline-flex h-10 items-center gap-2 rounded-md bg-accent px-4 text-sm font-medium text-accent-foreground transition-[transform,opacity] hover:-translate-y-px hover:opacity-90"
            >
              <Mail size={15} strokeWidth={1.75} />
              {personal.social.email}
            </a>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-md border border-border px-4 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:text-accent"
            >
              <LinkedinIcon size={15} />
              LinkedIn
            </a>
            <a
              href={personal.social.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-md border border-border px-4 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:text-accent"
            >
              <GithubIcon size={15} />
              GitHub
            </a>
            <a
              href={personal.social.leetcode}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-md border border-border px-4 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:text-accent"
            >
              <FileCode2 size={15} strokeWidth={1.75} />
              LeetCode
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
