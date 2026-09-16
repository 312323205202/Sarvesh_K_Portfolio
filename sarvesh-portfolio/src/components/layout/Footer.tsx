import { FileCode2, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { Container } from "@/components/ui/Container";
import { personal } from "@/lib/data/personal";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-foreground">{personal.name}</p>
          <p className="mt-1 text-sm text-muted">
            {personal.title} · {personal.tagline}
          </p>
        </div>

        <div className="flex items-center gap-1">
          <a
            href={personal.social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="flex size-9 items-center justify-center rounded-md text-muted transition-colors hover:text-foreground"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="flex size-9 items-center justify-center rounded-md text-muted transition-colors hover:text-foreground"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href={personal.social.leetcode}
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode profile"
            className="flex size-9 items-center justify-center rounded-md text-muted transition-colors hover:text-foreground"
          >
            <FileCode2 size={16} strokeWidth={1.75} />
          </a>
          <a
            href={`mailto:${personal.social.email}`}
            aria-label="Send an email"
            className="flex size-9 items-center justify-center rounded-md text-muted transition-colors hover:text-foreground"
          >
            <Mail size={16} strokeWidth={1.75} />
          </a>
        </div>
      </Container>
      <Container className="pb-8">
        <p className="text-xs text-muted">© {year} {personal.name}</p>
      </Container>
    </footer>
  );
}
