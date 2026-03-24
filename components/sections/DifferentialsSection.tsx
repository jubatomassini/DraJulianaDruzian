import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  IconBook,
  IconHeart,
  IconTarget,
  IconUserCircle,
} from "@/components/icons/Highlights";

const items = [
  {
    title: "Atendimento humanizado",
    text: "Escuta atenta e respeito ao ritmo e às necessidades de cada paciente.",
    Icon: IconHeart,
  },
  {
    title: "Diagnóstico preciso",
    text: "Avaliação clínica criteriosa, alinhada às melhores práticas da especialidade.",
    Icon: IconTarget,
  },
  {
    title: "Tratamento individualizado",
    text: "Plano terapêutico construído em parceria, considerando seu contexto de vida.",
    Icon: IconUserCircle,
  },
  {
    title: "Atualização científica constante",
    text: "Decisões embasadas em evidências e em formação continuada.",
    Icon: IconBook,
  },
] as const;

export function DifferentialsSection() {
  return (
    <section
      className="bg-gradient-to-b from-white to-beige-warm/25 py-14 sm:py-20 lg:py-24"
      aria-labelledby="diff-heading"
    >
      <Container>
        <SectionTitle
          id="diff-heading"
          eyebrow="Por que escolher"
          title="Um cuidado pensado para você"
          as="h2"
        />
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {items.map(({ title, text, Icon }) => (
            <li key={title} className="min-w-0">
              <div className="flex h-full min-h-[8.5rem] flex-col items-start rounded-2xl border border-brown-soft/10 bg-white/90 p-4 shadow-sm transition hover:border-sage/25 hover:shadow-md sm:min-h-0 sm:p-5">
                <span className="mb-3 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage/12 text-sage">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-serif text-lg font-medium leading-snug text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
