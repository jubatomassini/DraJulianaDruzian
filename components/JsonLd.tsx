import { site } from "@/lib/site";

export function JsonLd() {
  const graph: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: site.name,
    medicalSpecialty: "Rheumatology",
    url: site.url,
    description: site.description,
  };

  if (site.jsonLdIncludeAddress && site.addressLine) {
    Object.assign(graph, {
      address: {
        "@type": "PostalAddress",
        streetAddress: site.addressLine,
        addressLocality: site.cityUf,
        addressCountry: "BR",
      },
    });
  }

  if (site.whatsappE164.replace(/\D/g, "")) {
    Object.assign(graph, {
      telephone: `+${site.whatsappE164.replace(/\D/g, "")}`,
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
