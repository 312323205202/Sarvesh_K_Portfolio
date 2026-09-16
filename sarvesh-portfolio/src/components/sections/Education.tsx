import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { education, certifications } from "@/lib/data/education";

export function Education() {
  return (
    <section id="education" className="scroll-mt-20 border-t border-border py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-[1fr_minmax(0,20rem)] lg:gap-16">
        <div>
          <SectionHeading title="Education" />
          <div className="mt-8 divide-y divide-border border-y border-border">
            {education.map((entry, i) => (
              <Reveal key={entry.institution} delay={i * 60}>
                <div className="grid gap-2 py-6 sm:grid-cols-[minmax(0,15rem)_1fr] sm:gap-10">
                  <div>
                    <h3 className="font-semibold text-foreground">{entry.institution}</h3>
                    {entry.period && (
                      <p className="mt-2 font-mono text-xs text-muted">{entry.period}</p>
                    )}
                  </div>
                  <div>
                    <p className="text-[15px] text-foreground">{entry.credential}</p>
                    <p className="mt-1 font-mono text-[13px] text-muted">{entry.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading title="Certifications" />
          <Reveal delay={80}>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {certifications.map((cert) => (
                <li key={cert.name} className="flex items-baseline justify-between gap-4 py-3.5">
                  <div>
                    <p className="text-[15px] text-foreground">{cert.name}</p>
                    <p className="mt-0.5 text-sm text-muted">{cert.issuer}</p>
                  </div>
                  <span className="font-mono text-xs text-muted">{cert.year}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
