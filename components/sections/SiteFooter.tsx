import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { getWhatsAppHref, site } from "@/lib/site";

export function SiteFooter() {
  const wa = getWhatsAppHref();

  return (
    <footer className="border-t border-brown-soft/10 bg-white py-12">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-serif text-lg font-medium text-foreground">
            {site.name}
          </p>
          <p className="mt-1 text-sm text-muted">{site.specialty}</p>
          <p className="mt-2 text-sm text-muted">{site.crm}</p>
          <p className="mt-1 text-sm text-muted">{site.cityUf}</p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <WhatsAppLink
            href={wa}
            className="min-h-11 justify-start !px-0 text-sage underline-offset-4 hover:underline"
            ariaLabel="WhatsApp da Dra. Juliana Druzian"
          >
            WhatsApp para agendamento
          </WhatsAppLink>
          <Link
            href="/privacidade"
            className="focus-ring text-muted underline-offset-4 hover:text-foreground hover:underline"
          >
            Política de privacidade
          </Link>
        </div>
      </Container>
      <Container className="mt-10 border-t border-brown-soft/5 pt-6">
        <p className="text-center text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. Conteúdo informativo.
        </p>
      </Container>
    </footer>
  );
}
