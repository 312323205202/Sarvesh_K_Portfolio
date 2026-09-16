import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-[15px] leading-relaxed text-muted">{description}</p>
      )}
    </Reveal>
  );
}
