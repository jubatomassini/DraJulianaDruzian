import { Container } from "@/components/ui/Container";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { DoctorMonogram, DoctorVisual } from "@/components/DoctorVisual";
import { getWhatsAppHref, site } from "@/lib/site";

export function HeroSection() {
  const wa = getWhatsAppHref();
  const heroSrc = site.heroImageSrc;

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-beige-warm/80 via-white to-white pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-rose-soft/25 to-transparent blur-2xl"
        aria-hidden
      />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[1fr_minmax(0,420px)] lg:gap-16">
        <div className="animate-fade-up max-w-xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-sage">
            Reumatologia · {site.cityUf}
          </p>
          <h1
            id="hero-heading"
            className="font-serif text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl"
          >
            Cuidando da sua saúde com precisão, empatia e ciência.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Especialista em{" "}
            <strong className="font-semibold text-foreground">
              doenças reumatológicas
            </strong>{" "}
            com foco em qualidade de vida.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <WhatsAppLink
              href={wa}
              className="min-h-12 bg-sage px-8 py-3 text-white shadow-md shadow-sage/25"
            >
              Agendar consulta
            </WhatsAppLink>
            <a
              href="#sobre"
              className="focus-ring text-sm font-medium text-brown-soft underline-offset-4 hover:underline"
            >
              Conhecer a médica
            </a>
          </div>
          <p className="mt-6 max-w-md text-xs leading-relaxed text-muted">
            Conteúdo informativo. Não substitui consulta médica presencial.
          </p>
        </div>
        <div className="animate-fade-up justify-self-center lg:justify-self-end">
          {heroSrc ? (
            <DoctorVisual
              variant="hero"
              src={heroSrc}
              alt={`Retrato da ${site.name}, reumatologista`}
              priority
            />
          ) : (
            <DoctorMonogram variant="hero" />
          )}
        </div>
      </Container>
    </section>
  );
}
