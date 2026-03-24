import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description:
    "Como tratamos dados pessoais no site da Dra. Juliana Druzian, em conformidade com a LGPD.",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-full bg-white pb-16 pt-12">
      <Container className="max-w-3xl text-center sm:text-left">
        <Link
          href="/"
          className="focus-ring inline-block text-sm font-semibold text-sage underline-offset-4 hover:underline"
        >
          ← Voltar ao início
        </Link>
        <h1 className="mt-8 font-sans text-3xl font-bold text-foreground sm:text-4xl">
          Política de privacidade
        </h1>
        <p className="mt-4 text-sm text-muted">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>
        <div className="mt-10 space-y-6 text-base leading-relaxed text-muted sm:text-left">
          <p>
            Esta página descreve como o site institucional de{" "}
            <strong className="text-foreground">{site.name}</strong> trata dados
            pessoais, em linha com a Lei Geral de Proteção de Dados (Lei nº
            13.709/2018 — LGPD).
          </p>
          <section aria-labelledby="p1">
            <h2 id="p1" className="font-sans text-xl font-semibold text-foreground">
              1. Quem é o responsável
            </h2>
            <p className="mt-3">
              Responsável pelo tratamento dos dados coletados por este site:{" "}
              {site.name}, {site.specialty}, em atendimento em {site.cityUf}.
            </p>
          </section>
          <section aria-labelledby="p2">
            <h2 id="p2" className="font-sans text-xl font-semibold text-foreground">
              2. Quais dados podemos tratar
            </h2>
            <p className="mt-3">
              Este site, em sua configuração básica, pode coletar dados técnicos
              comuns de navegação (como endereço IP, tipo de navegador e páginas
              acessadas) quando há uso de serviços de hospedagem, segurança ou
              estatísticas — conforme as ferramentas eventualmente
              configuradas.
            </p>
            <p className="mt-3">
              Se você entrar em contato por WhatsApp ou por outros canais, as
              informações que enviar (nome, telefone, mensagem) serão tratadas
              para fins de atendimento e agendamento.
            </p>
          </section>
          <section aria-labelledby="p3">
            <h2 id="p3" className="font-sans text-xl font-semibold text-foreground">
              3. Finalidades e bases legais
            </h2>
            <p className="mt-3">
              Tratamos dados para: responder solicitações de contato, viabilizar
              agendamentos, cumprir obrigações legais e melhorar a experiência
              de uso do site. As bases legais podem incluir execução de
              procedimentos preliminares relacionados a contrato, legítimo
              interesse (com equilíbrio com seus direitos) e cumprimento de
              obrigação legal, conforme cada hipótese.
            </p>
          </section>
          <section aria-labelledby="p4">
            <h2 id="p4" className="font-sans text-xl font-semibold text-foreground">
              4. Compartilhamento e cookies
            </h2>
            <p className="mt-3">
              Dados podem ser compartilhados com provedores de hospedagem,
              ferramentas de mapas incorporadas (por exemplo, Google Maps) ou
              outros serviços estritamente necessários à operação do site,
              sempre observando a LGPD.
            </p>
            <p className="mt-3">
              Caso passemos a utilizar cookies ou pixels de publicidade,
              atualizaremos esta política e, quando exigido, solicitaremos seu
              consentimento.
            </p>
          </section>
          <section aria-labelledby="p5">
            <h2 id="p5" className="font-sans text-xl font-semibold text-foreground">
              5. Seus direitos
            </h2>
            <p className="mt-3">
              Você pode solicitar confirmação de tratamento, acesso, correção,
              anonimização, portabilidade, eliminação de dados desnecessários,
              informação sobre compartilhamentos e revogação de consentimento,
              quando aplicável, entrando em contato pelos canais indicados no
              site.
            </p>
          </section>
          <section aria-labelledby="p6">
            <h2 id="p6" className="font-sans text-xl font-semibold text-foreground">
              6. Conteúdo informativo
            </h2>
            <p className="mt-3">
              As informações aqui publicadas têm caráter educativo e não
              substituem consulta médica presencial.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
