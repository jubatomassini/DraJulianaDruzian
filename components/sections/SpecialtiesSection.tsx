import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  IconBook,
  IconLeaf,
  IconTarget,
  IconUserCircle,
} from "@/components/icons/Highlights";
import { specialtyGroups } from "@/lib/specialties";

const icons = [IconLeaf, IconTarget, IconBook, IconUserCircle] as const;

export function SpecialtiesSection() {
  return (
    <section
      id="especialidades"
      className="scroll-mt-24 bg-beige-warm/50 py-16 sm:py-20 lg:py-24"
      aria-labelledby="specialties-heading"
    >
      <Container>
        <SectionTitle
          id="specialties-heading"
          eyebrow="Especialidades"
          title="Condições acompanhadas em reumatologia"
          as="h2"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:gap-10">
          {specialtyGroups.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <article
                key={group.title}
                className="rounded-2xl border border-brown-soft/10 bg-surface p-6 shadow-sm transition hover:border-sage/30 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-soft/40 text-brown-soft">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground">
                  {group.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {group.intro}
                </p>
                <ul className="mt-4 list-inside list-disc space-y-1.5 text-sm text-foreground marker:text-sage">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
