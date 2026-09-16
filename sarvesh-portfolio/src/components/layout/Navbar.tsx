"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FileCode2, Menu, X, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { useActiveSection } from "@/lib/hooks/useActiveSection";
import { useScrolled } from "@/lib/hooks/useScrolled";
import { NAV_SECTIONS, cn } from "@/lib/utils";
import { personal } from "@/lib/data/personal";

const SECTION_IDS = NAV_SECTIONS.map((s) => s.id);

export function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const activeId = useActiveSection(SECTION_IDS);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-theme",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container>
        <nav
          className={cn(
            "flex items-center justify-between transition-[height] duration-300",
            scrolled ? "h-16" : "h-20",
          )}
          aria-label="Primary"
        >
          <Link
            href="#top"
            className="text-sm font-semibold tracking-tight text-foreground"
            aria-label="Back to top"
          >
            {personal.name}
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_SECTIONS.map((section) => (
              <li key={section.id}>
                <Link
                  href={`#${section.id}`}
                  aria-current={activeId === section.id ? "true" : undefined}
                  className={cn(
                    "relative px-3 py-2 text-sm transition-colors",
                    activeId === section.id
                      ? "text-foreground"
                      : "text-muted hover:text-foreground",
                  )}
                >
                  {section.label}
                  {activeId === section.id && (
                    <span className="absolute inset-x-3 -bottom-px h-px bg-accent" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-1 md:flex">
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
              href={personal.resumePath}
              download
              className="ml-2 inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm text-foreground transition-colors hover:border-accent/40 hover:text-accent"
            >
              <FileDown size={14} strokeWidth={1.75} />
              Resume
            </a>
            <div className="ml-1">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex size-9 items-center justify-center rounded-md border border-border text-foreground"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </Container>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_SECTIONS.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2.5 text-base",
                  activeId === section.id
                    ? "bg-accent-soft text-accent"
                    : "text-muted",
                )}
              >
                {section.label}
              </Link>
            ))}
            <div className="mt-3 flex items-center gap-2 border-t border-border pt-4">
              <a
                href={personal.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="flex size-10 items-center justify-center rounded-md border border-border text-muted"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="flex size-10 items-center justify-center rounded-md border border-border text-muted"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={personal.social.leetcode}
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode profile"
                className="flex size-10 items-center justify-center rounded-md border border-border text-muted"
              >
                <FileCode2 size={16} strokeWidth={1.75} />
              </a>
              <a
                href={personal.resumePath}
                download
                className="ml-auto inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-2 text-sm font-medium text-accent-foreground"
              >
                <FileDown size={14} strokeWidth={1.75} />
                Resume
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
