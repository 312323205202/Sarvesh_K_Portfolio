import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { experience } from "@/lib/data/experience";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-border py-20 sm:py-24">
      <Container>
        <SectionHeading title="Experience" />

        <div className="mt-8 divide-y divide-border border-y border-border">
          {experience.map((role, i) => (
            <Reveal key={role.company} delay={i * 60}>
              <div className="grid gap-3 py-7 sm:grid-cols-[minmax(0,15rem)_1fr] sm:gap-10">
                <div>
                  <h3 className="font-semibold text-foreground">{role.role}</h3>
                  <p className="mt-0.5 text-sm text-muted">{role.company}</p>
                  <p className="mt-2 font-mono text-xs text-muted">{role.period}</p>
                </div>
                <ul className="space-y-2.5">
                  {role.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-[15px] leading-relaxed text-muted"
                    >
                      <span className="mt-[11px] size-1 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
