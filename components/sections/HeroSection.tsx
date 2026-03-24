import { Container } from "@/components/ui/Container";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { DoctorMonogram, DoctorVisual } from "@/components/DoctorVisual";
import { getWhatsAppHref, site } from "@/lib/site";

export function HeroSection() {
  const wa = getWhatsAppHref();
  const heroSrc = site.heroImageSrc;

  return (
    <section
      className="relative overflow-x-clip overflow-y-visible bg-gradient-to-b from-beige-warm/90 via-white to-white pb-12 pt-10 sm:pb-16 sm:pt-14 lg:pb-24 lg:pt-20"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-rose-soft/30 to-transparent blur-2xl sm:h-72"
        aria-hidden
      />
      <Container className="relative grid min-w-0 grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] lg:gap-14">
        <div className="animate-fade-up order-1 min-w-0 max-w-xl">
          <p className="mb-3 text-xs font-medium uppercase leading-relaxed tracking-[0.12em] text-sage sm:text-sm sm:tracking-[0.18em]">
            Reumatologia · {site.cityUf}
          </p>
          <h1
            id="hero-heading"
            className="text-balance font-serif text-[1.7rem] font-medium leading-[1.15] tracking-tight text-foreground min-[400px]:text-[1.85rem] sm:text-4xl sm:leading-[1.12] md:text-5xl"
          >
            Cuidando da sua saúde com precisão, empatia e ciência.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted sm:mt-5 sm:text-lg">
            Especialista em{" "}
            <strong className="font-semibold text-foreground">
              doenças reumatológicas
            </strong>{" "}
            com foco em qualidade de vida.
          </p>
          <div className="mt-7 flex w-full min-w-0 flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
            <WhatsAppLink
              href={wa}
              className="min-h-12 w-full justify-center rounded-full bg-sage px-8 py-3.5 text-[0.9375rem] text-white shadow-md shadow-sage/25 sm:w-auto sm:py-3"
            >
              Agendar consulta
            </WhatsAppLink>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
              <a
                href="#especialidades"
                className="focus-ring text-center text-sm font-medium text-brown-soft underline-offset-4 sm:text-left hover:underline"
              >
                Ver condições acompanhadas
              </a>
              <span className="hidden text-brown-soft/30 sm:inline" aria-hidden>
                ·
              </span>
              <a
                href="#sobre"
                className="focus-ring text-center text-sm font-medium text-brown-soft underline-offset-4 sm:text-left hover:underline"
              >
                Conhecer a médica
              </a>
            </div>
          </div>
          <p className="mt-5 max-w-md text-xs leading-relaxed text-muted sm:mt-6">
            Conteúdo informativo. Não substitui consulta médica presencial.
          </p>
        </div>
        <div className="animate-fade-up order-2 flex w-full min-w-0 justify-center lg:justify-end">
          <div className="w-full max-w-[min(100%,18rem)] sm:max-w-xs lg:max-w-none">
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
        </div>
      </Container>
    </section>
  );
}
