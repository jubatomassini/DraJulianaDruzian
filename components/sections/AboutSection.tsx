import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { DoctorMonogram, DoctorVisual } from "@/components/DoctorVisual";
import { site } from "@/lib/site";

export function AboutSection() {
  const aboutSrc = site.aboutImageSrc;

  return (
    <section
      id="sobre"
      className="scroll-mt-[calc(5rem+env(safe-area-inset-top))] border-y border-brown-soft/10 bg-gradient-to-b from-white via-beige-warm/35 to-white py-14 sm:scroll-mt-24 sm:py-20 lg:py-24"
      aria-labelledby="about-heading"
    >
      <Container>
        <div className="grid min-w-0 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 min-w-0 lg:order-1">
            <SectionTitle
              id="about-heading"
              eyebrow="Sobre"
              title="Humanização e ciência, lado a lado"
              as="h2"
            />
            <div className="max-w-none space-y-4 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
              <p>
                <strong className="font-semibold text-foreground">
                  {site.name}
                </strong>{" "}
                acredita que a reumatologia vai muito além do diagnóstico. Seu
                compromisso está em compreender cada paciente de forma única,
                respeitando sua história, suas dores e seus desafios.
              </p>
              <p>
                Com uma abordagem humanizada e baseada em evidências
                científicas, busca não apenas controlar doenças, mas devolver
                qualidade de vida, autonomia e bem-estar.
              </p>
              <p>
                Seu cuidado é guiado pela escuta atenta, precisão clínica e pelo
                compromisso genuíno com cada pessoa que atende.
              </p>
            </div>
          </div>
          <div className="order-1 flex min-w-0 justify-center lg:order-2 lg:justify-end">
            <div className="w-full max-w-[min(100%,17.5rem)] sm:max-w-xs lg:max-w-md">
              {aboutSrc ? (
                <DoctorVisual
                  variant="about"
                  src={aboutSrc}
                  alt={`${site.name} em ambiente de atendimento`}
                />
              ) : (
                <DoctorMonogram variant="about" />
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
