import { LazyMapEmbed } from "@/components/maps/LazyMapEmbed";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { site } from "@/lib/site";

export function LocationSection() {
  const hasEmbed = Boolean(site.mapsEmbedUrl);
  const hasDirections = Boolean(site.mapsDirectionsUrl);

  return (
    <section
      id="localizacao"
      className="scroll-mt-24 bg-beige-warm/40 py-16 sm:py-20 lg:py-24"
      aria-labelledby="location-heading"
    >
      <Container>
        <SectionTitle
          id="location-heading"
          eyebrow="Localização"
          title="Onde atendemos"
          as="h2"
        />
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <address className="not-italic">
              <p className="text-lg font-medium text-foreground">
                {site.addressLine}
              </p>
              <p className="mt-2 text-muted">{site.cityUf}</p>
            </address>
            {hasDirections ? (
              <a
                href={site.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-sage/40 bg-white px-6 py-2.5 text-sm font-medium text-sage transition hover:bg-sage/10"
              >
                Como chegar
              </a>
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
          <div>
            {hasEmbed ? (
              <LazyMapEmbed
                embedUrl={site.mapsEmbedUrl}
                title="Mapa do consultório da Dra. Juliana Druzian"
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
