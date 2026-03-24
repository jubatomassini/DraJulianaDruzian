import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SpecialtyConditionCard } from "@/components/specialties/SpecialtyConditionCard";
import { specialtyGroups } from "@/lib/specialties";
import { sectionScrollMt } from "@/lib/sectionClasses";

export function SpecialtiesSection() {
  return (
    <section
      id="especialidades"
      className={`${sectionScrollMt} bg-gradient-to-b from-beige-warm/70 via-white to-white pb-16 pt-14 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24`}
      aria-labelledby="specialties-heading"
    >
      <Container>
        <SectionTitle
          id="specialties-heading"
          eyebrow="Especialidades"
          title="Condições acompanhadas em reumatologia"
          as="h2"
        />
        <p className="-mt-4 mb-12 max-w-[min(100%,42rem)] text-center text-base leading-relaxed text-muted sm:mx-0 sm:mb-14 sm:max-w-2xl sm:text-left">
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
              <header className="mb-6 text-center sm:mb-8 sm:border-l-[3px] sm:border-sage/50 sm:pl-5 sm:text-left">
                <h3 className="font-sans text-xl font-light text-foreground sm:text-2xl">
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
