import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/lib/data/projects";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-border py-20 sm:py-24">
      <Container>
        <SectionHeading
          title="Projects"
          description="Each card shows the data flow end to end. Open a case study for the problem, approach, implementation notes, and a step-by-step architecture view."
        />

        <div className="mt-10 flex flex-col gap-4">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 40}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
