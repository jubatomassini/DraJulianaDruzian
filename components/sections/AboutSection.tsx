import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { DoctorMonogram, DoctorVisual } from "@/components/DoctorVisual";
import { site } from "@/lib/site";
import { sectionScrollMt } from "@/lib/sectionClasses";

export function AboutSection() {
  const aboutSrc = site.aboutImageSrc;

  return (
    <section
      id="sobre"
      className={`${sectionScrollMt} border-y border-brown-soft/10 bg-gradient-to-b from-white via-beige-warm/35 to-white py-14 sm:py-20 lg:py-24`}
      aria-labelledby="about-heading"
    >
      <Container>
        <div className="grid min-w-0 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 min-w-0 text-center sm:order-1 sm:text-left">
            <SectionTitle
              id="about-heading"
              eyebrow="Sobre"
              title="Humanização e ciência, lado a lado"
              as="h2"
            />
            <div className="mx-auto max-w-none space-y-4 text-[0.9375rem] leading-relaxed text-muted sm:mx-0 sm:text-base">
              <p>
                <strong className="font-medium text-foreground">
                  {site.name}
                </strong>{" "}
                é médica especialista em Reumatologia (RQE 9656), dedicada ao
                cuidado de pacientes com doenças articulares, autoimunes e
                inflamatórias.
              </p>
              <p>
                Formada pela Unicesumar, construiu uma trajetória sólida com
                residência em Clínica Médica pela Santa Casa de Maringá e
                especialização em Reumatologia pelo HUMAP/UFMS, adquirindo ampla
                experiência tanto em atendimentos ambulatoriais quanto
                hospitalares, inclusive em casos de maior complexidade.
              </p>
              <p>
                Seu atendimento é pautado na medicina baseada em evidências,
                aliado a um olhar atento e individualizado. Com escuta
                qualificada, empatia e clareza, busca oferecer segurança ao
                paciente em todas as etapas do diagnóstico e tratamento.
              </p>
              <p>
                Seu compromisso é proporcionar um cuidado de excelência,
                promovendo controle da doença, bem-estar e mais qualidade de
                vida.
              </p>
            </div>
          </div>
          <div className="order-1 flex min-w-0 justify-center sm:order-2 lg:justify-end">
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
