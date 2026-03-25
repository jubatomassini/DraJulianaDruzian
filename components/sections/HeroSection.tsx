import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { DoctorMonogram, DoctorVisual } from "@/components/DoctorVisual";
import { getWhatsAppHref, site } from "@/lib/site";

export function HeroSection() {
  const wa = getWhatsAppHref();
  const heroSrc = site.heroImageSrc;

  return (
    <section
      className="relative overflow-x-hidden overflow-y-visible bg-gradient-to-b from-beige-warm/90 via-white to-white pb-12 pt-8 sm:pb-16 sm:pt-12 lg:pb-24 lg:pt-16"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-rose-soft/30 to-transparent blur-2xl sm:h-72"
        aria-hidden
      />
      <Container className="relative grid min-w-0 grid-cols-1 items-end gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-stretch lg:gap-8 xl:gap-12">
        <div className="animate-fade-up order-1 flex min-w-0 max-w-xl flex-col justify-center text-center sm:text-left lg:max-w-none lg:py-6">
          <p className="mb-3 text-xs font-light uppercase leading-relaxed tracking-[0.14em] text-sage sm:text-sm sm:tracking-[0.18em]">
            Reumatologia · {site.cityUf}
          </p>
          <h1
            id="hero-heading"
            className="text-balance font-sans text-3xl font-light leading-[1.12] tracking-tight text-foreground sm:text-left sm:text-4xl sm:leading-[1.1] md:text-5xl lg:text-6xl"
          >
            Cuidando da sua saúde com precisão, empatia e ciência.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted sm:mt-5 sm:text-lg">
            Especialista em{" "}
            <strong className="font-medium text-foreground">
              doenças reumatológicas
            </strong>{" "}
            com foco em qualidade de vida.
          </p>
          <div className="mt-7 flex w-full min-w-0 flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-start">
            <WhatsAppLink
              href={wa}
              tone="primary"
              className="w-full sm:w-auto"
            >
              Agendar consulta
            </WhatsAppLink>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
              <Link
                href="/#especialidades"
                className="focus-ring text-center text-sm font-light text-brown-soft underline-offset-4 sm:text-left hover:underline"
              >
                Ver condições acompanhadas
              </Link>
              <span className="hidden text-brown-soft/30 sm:inline" aria-hidden>
                ·
              </span>
              <Link
                href="/#sobre"
                className="focus-ring text-center text-sm font-light text-brown-soft underline-offset-4 sm:text-left hover:underline"
              >
                Conhecer a médica
              </Link>
            </div>
          </div>
          <p className="mx-auto mt-5 max-w-md text-xs leading-relaxed text-muted sm:mx-0 sm:mt-6 sm:text-left">
            Conteúdo informativo. Não substitui consulta médica presencial.
          </p>
        </div>
        <div className="animate-fade-up order-2 flex w-full min-w-0 justify-center lg:min-h-0 lg:w-full lg:items-end lg:self-stretch">
          {/* Mobile: largura total da viewport; desktop: 100% da coluna da grelha */}
          <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 lg:static lg:left-auto lg:flex lg:h-full lg:min-h-0 lg:w-full lg:max-w-none lg:translate-x-0 lg:flex-col lg:justify-end">
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
