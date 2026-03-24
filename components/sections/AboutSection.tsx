import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { DoctorMonogram, DoctorVisual } from "@/components/DoctorVisual";
import { site } from "@/lib/site";

export function AboutSection() {
  const aboutSrc = site.aboutImageSrc;

  return (
    <section
      id="sobre"
      className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="about-heading"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <SectionTitle
              id="about-heading"
              eyebrow="Sobre"
              title="Humanização e ciência, lado a lado"
              as="h2"
            />
            <div className="max-w-none space-y-4 text-base leading-relaxed text-muted">
              <p>
                <strong className="font-semibold text-foreground">
                  {site.name}
                </strong>{" "}
                acredita que a reumatologia vai muito além do diagnóstico. Seu
                compromisso está em compreender cada paciente de forma única,
                respeitando sua história, suas dores e seus desafios.
              </p>
              <p className="mt-4">
                Com uma abordagem humanizada e baseada em evidências
                científicas, busca não apenas controlar doenças, mas devolver
                qualidade de vida, autonomia e bem-estar.
              </p>
              <p className="mt-4">
                Seu cuidado é guiado pela escuta atenta, precisão clínica e pelo
                compromisso genuíno com cada pessoa que atende.
              </p>
            </div>
          </div>
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
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
      </Container>
    </section>
  );
}
