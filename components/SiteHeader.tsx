"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { SocialIconLinks } from "@/components/SocialIconLinks";
import { site } from "@/lib/site";

const nav = [
  { href: "/#especialidades", label: "Especialidades" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#localizacao", label: "Localização" },
] as const;

function BrandMark({
  logoBroken,
  setLogoBroken,
}: {
  logoBroken: boolean;
  setLogoBroken: (v: boolean) => void;
}) {
  if (logoBroken) {
    return (
      <div className="flex min-w-0 max-w-[min(18rem,calc(100vw-5.5rem))] flex-col items-start leading-tight">
        <span className="truncate font-sans text-sm font-light text-foreground sm:text-base">
          Dra. Juliana Druzian
        </span>
        <span className="text-xs font-light text-sage">{site.specialty}</span>
      </div>
    );
  }

  return (
    <div className="relative h-12 w-auto max-w-[min(26rem,calc(100vw-5.5rem))] shrink-0 sm:h-14 md:h-14 lg:h-16 md:max-w-[28rem] lg:max-w-[32rem]">
      <Image
        src="/logo-dra-juliana.png"
        alt=""
        width={1164}
        height={194}
        className="h-full w-auto object-contain object-left"
        priority
        onError={() => setLogoBroken(true)}
      />
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [logoBroken, setLogoBroken] = useState(false);
  const panelId = useId();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const t = requestAnimationFrame(() => firstLinkRef.current?.focus());
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-brown-soft/10 bg-white/92 backdrop-blur-md supports-[backdrop-filter]:bg-white/80">
      <div
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:h-[4.25rem] sm:px-6 lg:px-8"
        style={{
          paddingTop: "max(0px, env(safe-area-inset-top, 0px))",
        }}
      >
        <Link
          href="/"
          className="focus-ring flex min-w-0 flex-1 items-center justify-start rounded-lg py-1 pr-2 md:flex-initial md:pr-0"
          aria-label={`Início — ${site.name}`}
          onClick={close}
        >
          <BrandMark logoBroken={logoBroken} setLogoBroken={setLogoBroken} />
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Navegação principal"
        >
          <Link
            href="/"
            className="focus-ring rounded-full px-3 py-2 text-sm font-extralight text-foreground/90 transition hover:bg-beige-warm hover:text-foreground"
          >
            Início
          </Link>
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="focus-ring rounded-full px-3 py-2 text-sm font-extralight text-foreground/90 transition hover:bg-beige-warm hover:text-foreground"
            >
              {label}
            </Link>
          ))}
          <SocialIconLinks className="ml-2 border-l border-brown-soft/15 pl-3" />
        </nav>

        <button
          type="button"
          className="focus-ring flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-foreground md:hidden"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open ? (
        <div
          id={panelId}
          className="max-h-[min(70vh,calc(100dvh-4.25rem))] overflow-y-auto border-t border-brown-soft/10 bg-white px-4 py-4 shadow-lg md:hidden"
          style={{
            paddingBottom: "max(1rem, env(safe-area-inset-bottom, 0px))",
          }}
        >
          <nav className="flex flex-col gap-1" aria-label="Menu mobile">
            <Link
              ref={firstLinkRef}
              href="/"
              className="focus-ring rounded-xl px-4 py-3 text-center text-base font-light text-foreground"
              onClick={close}
            >
              Início
            </Link>
            {nav.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="focus-ring rounded-xl px-4 py-3 text-center text-base font-light text-foreground"
                onClick={close}
              >
                {label}
              </Link>
            ))}
            <div className="mt-4 border-t border-brown-soft/10 pt-4">
              <p className="mb-2 text-center text-xs font-light uppercase tracking-wider text-muted">
                Redes e currículo
              </p>
              <SocialIconLinks />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
