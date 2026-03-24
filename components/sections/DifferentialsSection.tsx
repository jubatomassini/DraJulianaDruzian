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
      className="bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="diff-heading"
    >
      <Container>
        <SectionTitle
          id="diff-heading"
          eyebrow="Por que escolher"
          title="Um cuidado pensado para você"
          as="h2"
        />
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, text, Icon }) => (
            <li key={title}>
              <div className="flex flex-col items-start rounded-2xl border border-transparent p-2 transition hover:border-rose-soft/40 hover:bg-beige-warm/40">
                <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-sage/15 text-sage">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-serif text-lg font-medium text-foreground">
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
