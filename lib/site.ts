const trimSlash = (s: string) => s.replace(/\/+$/, "");

function envUrl(key: string): string {
  const v = process.env[key]?.trim();
  return v && v.length > 0 ? v : "";
}

export const site = {
  name: "Dra. Juliana Druzian",
  specialty: "Reumatologia",
  /** Cidade e UF — ajuste para SEO local */
  cityUf: process.env.NEXT_PUBLIC_CITY_UF ?? "Sinop – MT",
  titleTemplate: "%s | Dra. Juliana Druzian — Reumatologia",
  defaultTitle:
    "Dra. Juliana Druzian — Reumatologista | " +
    (process.env.NEXT_PUBLIC_CITY_UF ?? "Sinop – MT"),
  description:
    "Reumatologista (RQE 9656) em Sinop–MT, na Clínica Cimed. Atendimento humanizado " +
    "e baseado em evidências: doenças articulares, autoimunes e inflamatórias.",
  url: trimSlash(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  whatsappE164: process.env.NEXT_PUBLIC_WHATSAPP_E164 ?? "556635310333",
  addressLine:
    process.env.NEXT_PUBLIC_ADDRESS ??
    "Clínica Cimed Sinop — Av. das Embaúbas, 1900 — CEP 78550-084",
  crm: process.env.NEXT_PUBLIC_CRM ?? "RQE 9656",
  mapsEmbedUrl:
    process.env.NEXT_PUBLIC_MAPS_EMBED_URL ??
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5!2d-55.5100817!3d-11.8568691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a77f53ff4310bb%3A0x4d06e7bf295c4689!2sCl%C3%ADnica%20Cimed!5e0!3m2!1spt-BR!2sbr!4v1!5m2!1spt-BR!2sbr",
  mapsDirectionsUrl:
    process.env.NEXT_PUBLIC_MAPS_DIRECTIONS_URL ??
    "https://maps.app.goo.gl/V5DLQ9kPJwKnQvZr6",
  /** Padrão: hero em /public. Sobrescreva com NEXT_PUBLIC_HERO_IMAGE. */
  heroImageSrc:
    process.env.NEXT_PUBLIC_HERO_IMAGE?.trim() ||
    "/dra-juliana-druzian-reumatologista-compreed.webp",
  aboutImageSrc:
    process.env.NEXT_PUBLIC_ABOUT_IMAGE?.trim() || "/dra-juliana-druzian.jpg",
  /** Inclui endereço no JSON-LD; desative com NEXT_PUBLIC_JSONLD_INCLUDE_ADDRESS=false */
  jsonLdIncludeAddress:
    process.env.NEXT_PUBLIC_JSONLD_INCLUDE_ADDRESS !== "false",
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
