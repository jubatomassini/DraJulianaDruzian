import { Container } from "@/components/ui/Container";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { getWhatsAppHref, site } from "@/lib/site";

export function CtaSection() {
  const wa = getWhatsAppHref();

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-sage/90 to-brown-soft/85 py-16 text-white sm:py-20"
      aria-labelledby="cta-heading"
    >
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
        aria-hidden
      />
      <Container className="relative text-center">
        <h2
          id="cta-heading"
          className="mx-auto max-w-2xl font-serif text-3xl font-medium leading-tight sm:text-4xl"
        >
          Agende sua consulta e cuide da sua saúde hoje mesmo
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/90">
          Atendimento em {site.cityUf}. Fale pelo WhatsApp para combinar horário
          e tirar dúvidas sobre o primeiro passo.
        </p>
        <div className="mt-8 flex justify-center px-1 sm:px-0">
          <WhatsAppLink
            href={wa}
            className="min-h-12 w-full max-w-sm justify-center bg-white px-8 py-3.5 text-base text-sage shadow-lg sm:w-auto sm:max-w-none sm:px-10 sm:py-3"
            ariaLabel="Abrir WhatsApp para agendar consulta de reumatologia"
          >
            Falar no WhatsApp
          </WhatsAppLink>
        </div>
      </Container>
    </section>
  );
}
