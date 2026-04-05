import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getWhatsAppHref, site } from "@/lib/site";

export function SiteFooter() {
  const wa = getWhatsAppHref();

  return (
    <footer className="border-t border-brown-soft/10 bg-white py-10 pb-[max(2.5rem,env(safe-area-inset-bottom,0px))] pt-10 sm:py-12">
      <Container className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
        <div>
          <p className="font-sans text-lg font-light text-foreground">
            {site.name}
          </p>
          <p className="mt-1 text-sm text-muted">{site.specialty}</p>
          <p className="mt-2 text-sm text-muted">{site.crm}</p>
          <p className="mt-1 text-sm text-muted">{site.cityUf}</p>
        </div>
        <div className="flex flex-col items-center gap-3 text-sm sm:items-start">
          {wa ? (
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring font-light text-sage underline-offset-4 hover:underline"
              aria-label="WhatsApp da Dra. Juliana Druzian"
            >
              WhatsApp para agendamento
            </a>
          ) : (
            <span className="text-muted">WhatsApp (configure o ambiente)</span>
          )}
          <Link
            href="/privacidade"
            className="focus-ring text-muted underline-offset-4 hover:text-foreground hover:underline"
          >
            Política de privacidade
          </Link>
        </div>
      </Container>
      <Container className="mt-10 border-t border-brown-soft/5 pt-6">
        <p className="text-center text-xs text-muted sm:text-left">
          © {new Date().getFullYear()} {site.name}. Conteúdo informativo.
        </p>
        <p className="mt-3 text-center text-xs text-muted sm:text-left">
          Desenvolvido por{" "}
          <a
            href="https://apolloonze.com"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring text-muted underline-offset-4 hover:text-foreground hover:underline"
          >
            Apollo Onze - Marketing e Comunicação
          </a>
          .
        </p>
      </Container>
    </footer>
  );
}
