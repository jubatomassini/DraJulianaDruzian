import { LazyMapEmbed } from "@/components/maps/LazyMapEmbed";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { site } from "@/lib/site";
import { sectionScrollMt } from "@/lib/sectionClasses";

export function LocationSection() {
  const hasEmbed = Boolean(site.mapsEmbedUrl);
  const hasDirections = Boolean(site.mapsDirectionsUrl);

  return (
    <section
      id="localizacao"
      className={`${sectionScrollMt} bg-beige-warm/40 py-16 sm:py-20 lg:py-24`}
      aria-labelledby="location-heading"
    >
      <Container>
        <SectionTitle
          id="location-heading"
          eyebrow="Localização"
          title="Onde atendemos"
          as="h2"
        />
        <div className="grid min-w-0 items-start gap-10 lg:grid-cols-2">
          <div className="min-w-0 text-center sm:text-left">
            <address className="not-italic">
              <p className="text-lg font-light text-foreground">
                {site.addressLine}
              </p>
              <p className="mt-2 text-muted">{site.cityUf}</p>
            </address>
            {hasDirections ? (
              <div className="mt-6 flex justify-center sm:justify-start">
                <ButtonLink
                  href={site.mapsDirectionsUrl}
                  variant="secondary"
                  className="min-h-12 px-8"
                  ariaLabel="Abrir rota no mapa — como chegar ao consultório"
                >
                  Como chegar
                </ButtonLink>
              </div>
            ) : (
              <p className="mt-4 text-sm text-muted">
                Configure{" "}
                <code className="rounded bg-white/80 px-1 text-xs">
                  NEXT_PUBLIC_MAPS_DIRECTIONS_URL
                </code>{" "}
                para exibir o botão &quot;Como chegar&quot;.
              </p>
            )}
          </div>
          <div className="min-w-0">
            {hasEmbed ? (
              <LazyMapEmbed
                embedUrl={site.mapsEmbedUrl}
                title="Mapa — Clínica Cimed Sinop (Dra. Juliana Druzian)"
              />
            ) : (
              <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-dashed border-brown-soft/25 bg-white/60 p-6 text-center text-sm text-muted">
                Adicione{" "}
                <code className="mx-1 rounded bg-beige-warm px-1 text-xs">
                  NEXT_PUBLIC_MAPS_EMBED_URL
                </code>{" "}
                para incorporar o Google Maps sem pesar o carregamento inicial
                da página.
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
