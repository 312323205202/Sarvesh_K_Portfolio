import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { skillCategories, coursework } from "@/lib/data/skills";

export function Skills() {
  const rows = [
    ...skillCategories.map((c) => ({ id: c.id, label: c.label, items: c.items })),
    { id: "coursework", label: coursework.category, items: coursework.courses },
  ];

  return (
    <section id="skills" className="scroll-mt-20 border-t border-border py-20 sm:py-24">
      <Container>
        <SectionHeading title="Skills" />

        <Reveal delay={60} className="mt-8">
          <dl className="divide-y divide-border border-y border-border">
            {rows.map((row) => (
              <div
                key={row.id}
                className="grid gap-2 py-4 sm:grid-cols-[10rem_1fr] sm:gap-8 sm:py-4"
              >
                <dt className="font-mono text-[11px] tracking-wider text-muted uppercase sm:pt-1">
                  {row.label}
                </dt>
                <dd className="flex flex-wrap gap-x-2 gap-y-1.5">
                  {row.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border bg-surface px-2.5 py-1 text-[13px] text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
