import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { quickFacts } from "@/lib/data/personal";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1fr_minmax(0,18rem)] lg:gap-16">
        <div>
          <SectionHeading title="About" />
          <Reveal delay={60} className="mt-6 max-w-2xl space-y-4 text-[15px] leading-relaxed text-muted sm:text-base">
            <p>
              I&apos;m a final-year B.Tech Information Technology student at
              St. Joseph&apos;s College of Engineering, Chennai. My work so far
              sits close to the data layer: relational schema design and query
              optimization in PostgreSQL, Python pipelines for ingestion and
              analysis, and API integrations that wire services together.
            </p>
            <p>
              Across two internships I&apos;ve shipped a Gmail-based email
              automation workflow, trained and evaluated a handwritten digit
              classifier, and built Pandas/Matplotlib analysis workflows on
              operational data. Right now I&apos;m building an AI interview
              preparation platform on the Gemini API, and I&apos;m looking for
              internship and new-grad software engineering roles where I can
              keep working on backend, data, and applied ML problems.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <dl className="divide-y divide-border border-y border-border text-sm">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="grid grid-cols-[6.5rem_1fr] gap-3 py-3">
                <dt className="font-mono text-[11px] tracking-wider text-muted uppercase">
                  {fact.label}
                </dt>
                <dd className="text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
