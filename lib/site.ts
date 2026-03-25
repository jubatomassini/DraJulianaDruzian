const trimSlash = (s: string) => s.replace(/\/+$/, "");

function envUrl(key: string): string {
  const v = process.env[key]?.trim();
  return v && v.length > 0 ? v : "";
}

export const site = {
  name: "Dra. Juliana Druzian",
  specialty: "Reumatologia",
  /** Cidade e UF — ajuste para SEO local */
  cityUf: process.env.NEXT_PUBLIC_CITY_UF ?? "Cidade – UF",
  titleTemplate: "%s | Dra. Juliana Druzian — Reumatologia",
  defaultTitle:
    "Dra. Juliana Druzian — Reumatologista | " +
    (process.env.NEXT_PUBLIC_CITY_UF ?? "Atendimento humanizado"),
  description:
    "Reumatologista com atendimento humanizado e baseado em evidências. " +
    "Tratamento de artrite, doenças autoimunes, osteoporose e dor crônica. " +
    `Atendimento em ${process.env.NEXT_PUBLIC_CITY_UF ?? "sua região"}.`,
  url: trimSlash(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  whatsappE164: process.env.NEXT_PUBLIC_WHATSAPP_E164 ?? "",
  addressLine:
    process.env.NEXT_PUBLIC_ADDRESS ?? "Endereço do consultório a confirmar",
  crm: process.env.NEXT_PUBLIC_CRM ?? "CRM-UF a confirmar",
  mapsEmbedUrl: process.env.NEXT_PUBLIC_MAPS_EMBED_URL ?? "",
  mapsDirectionsUrl: process.env.NEXT_PUBLIC_MAPS_DIRECTIONS_URL ?? "",
  /** Padrão: recorte com transparência / fade no hero. Sobrescreva com NEXT_PUBLIC_HERO_IMAGE. */
  heroImageSrc:
    process.env.NEXT_PUBLIC_HERO_IMAGE?.trim() ||
    "/dra-juliana-druzian-reumatologista-compressed.jpeg",
  aboutImageSrc: process.env.NEXT_PUBLIC_ABOUT_IMAGE?.trim() || "",
  jsonLdIncludeAddress:
    process.env.NEXT_PUBLIC_JSONLD_INCLUDE_ADDRESS === "true",
  facebookUrl: envUrl("NEXT_PUBLIC_FACEBOOK_URL"),
  instagramUrl: envUrl("NEXT_PUBLIC_INSTAGRAM_URL"),
  lattesUrl: envUrl("NEXT_PUBLIC_LATTES_URL"),
} as const;

export const whatsAppPrefill =
  "Olá! Gostaria de agendar uma consulta com a Dra. Juliana Druzian.";

export function getWhatsAppHref(): string | null {
  const raw = site.whatsappE164.replace(/\D/g, "");
  if (!raw) return null;
  const q = new URLSearchParams({ text: whatsAppPrefill });
  return `https://wa.me/${raw}?${q.toString()}`;
}

export function absoluteUrl(path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${site.url}${p}`;
}
