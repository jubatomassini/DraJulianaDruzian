# Site — Dra. Juliana Druzian

Site institucional em **Next.js (App Router)**, **TypeScript** e **Tailwind CSS v4**, pensado para performance, SEO (`sitemap.xml`, `robots.txt`, Open Graph) e conversão via **WhatsApp**.

Repositório: [github.com/jubatomassini/DraJulianaDruzian](https://github.com/jubatomassini/DraJulianaDruzian)

## Requisitos

- Node.js 20+
- npm

## Fluxo recomendado: Vercel primeiro

1. **Subir o código** para o GitHub (commit + push neste repositório).
2. Na **Vercel**: importar o projeto, framework Next.js detectado automaticamente; o primeiro deploy já funciona com valores padrão de `lib/site.ts` / fallbacks de UI.
3. **Depois do deploy:** no painel da Vercel → *Settings → Environment Variables*, cadastre as variáveis (veja `.env.example`). Principal: `NEXT_PUBLIC_SITE_URL` com a URL real do site (ex.: `https://drajulianadruzian.vercel.app` ou domínio próprio) e `NEXT_PUBLIC_WHATSAPP_E164` para ativar os botões de WhatsApp.
4. **Opcional (novo commit):** fotos em `public/images/`, variáveis `NEXT_PUBLIC_HERO_IMAGE` / `NEXT_PUBLIC_ABOUT_IMAGE`, URLs do Google Maps — ajuste no painel da Vercel e faça *Redeploy* se necessário.

Variáveis locais para desenvolvimento: copie `.env.example` para `.env.local` quando for rodar `npm run dev` com dados reais.

## Desenvolvimento local

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000)

## Build de produção

```bash
npm run build
npm start
```

## Logo e menu

- Coloque o arquivo **`public/logo.svg`** (vector da marca). Enquanto o SVG não carregar, o cabeçalho mostra o nome **Dra. Juliana Druzian** em texto.
- O menu fixo inclui âncoras (Início, Especialidades, Sobre, Localização) e ícones para **Facebook**, **Instagram** e **Currículo Lattes** quando as URLs abaixo estiverem definidas.

## Checklist rápido na Vercel

| Variável | Quando |
|----------|--------|
| `NEXT_PUBLIC_SITE_URL` | Sempre em produção (canônica + sitemap + OG) |
| `NEXT_PUBLIC_WHATSAPP_E164` | Para CTAs e botão flutuante |
| `NEXT_PUBLIC_CITY_UF`, `NEXT_PUBLIC_ADDRESS`, `NEXT_PUBLIC_CRM` | Conteúdo e SEO local |
| `NEXT_PUBLIC_MAPS_EMBED_URL` / `NEXT_PUBLIC_MAPS_DIRECTIONS_URL` | Seção do mapa |
| `NEXT_PUBLIC_JSONLD_INCLUDE_ADDRESS` | `true` só com endereço real conferido |
| `NEXT_PUBLIC_FACEBOOK_URL` | Link do Facebook (menu) |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Link do Instagram (menu) |
| `NEXT_PUBLIC_LATTES_URL` | Currículo na Plataforma Lattes (menu) |

## Fotos por condição (especialidades)

Cada card tenta carregar `public/images/specialties/{slug}.jpg`. Se o arquivo não existir, aparece um **placeholder visual** editorial até você subir a foto.

Slugs atuais: `les`, `sjogren`, `esclerose-sistemica`, `miosites`, `artrite-reumatoide`, `espondiloartrites`, `gota`, `osteoporose`, `artrose`, `fibromialgia`, `tendinites-bursites`.

## Estrutura principal

- `app/` — rotas, metadata, `opengraph-image.tsx`, `sitemap.ts`, `robots.ts`
- `components/SiteHeader.tsx` — cabeçalho fixo, menu mobile e redes
- `components/sections/` — blocos da página inicial
- `components/maps/LazyMapEmbed.tsx` — mapa ao entrar na viewport
- `lib/site.ts` — URLs e textos a partir das envs
- `app/privacidade/` — política de privacidade (LGPD)

## Performance

O iframe do Google Maps só é montado quando a seção fica visível, para ajudar LCP e Lighthouse.
