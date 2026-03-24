import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SpecialtyConditionCard } from "@/components/specialties/SpecialtyConditionCard";
import { specialtyGroups } from "@/lib/specialties";

export function SpecialtiesSection() {
  return (
    <section
      id="especialidades"
      className="scroll-mt-[calc(5rem+env(safe-area-inset-top))] bg-gradient-to-b from-beige-warm/70 via-white to-white pb-16 pt-14 sm:scroll-mt-24 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24"
      aria-labelledby="specialties-heading"
    >
      <Container>
        <SectionTitle
          id="specialties-heading"
          eyebrow="Especialidades"
          title="Condições acompanhadas em reumatologia"
          as="h2"
        />
        <p className="-mt-4 mb-12 max-w-2xl text-base leading-relaxed text-muted sm:mb-14">
          Cada tópico traz uma visão educativa sobre o que costuma ser avaliado
          na consulta. O conteúdo é informativo e{" "}
          <strong className="font-medium text-foreground">
            não substitui avaliação médica individual
          </strong>
          .
        </p>

        <div className="flex flex-col gap-14 sm:gap-16 lg:gap-20">
          {specialtyGroups.map((group) => (
            <div key={group.title} className="min-w-0">
              <header className="mb-6 border-l-[3px] border-sage/50 pl-4 sm:mb-8 sm:pl-5">
                <h3 className="font-serif text-xl font-medium text-foreground sm:text-2xl">
                  {group.title}
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                  {group.intro}
                </p>
              </header>
              <ul className="grid list-none grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
                {group.items.map((item) => (
                  <li key={item.slug} className="min-w-0">
                    <SpecialtyConditionCard item={item} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
