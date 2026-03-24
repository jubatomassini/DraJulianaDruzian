"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { site } from "@/lib/site";

const nav = [
  { href: "/#especialidades", label: "Especialidades" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#localizacao", label: "Localização" },
] as const;

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function IconLattes({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2.5L18.5 10H13V4.5zM8 14h8v2H8v-2zm0-4h5v2H8v-2zm0 8h8v2H8v-2z" />
    </svg>
  );
}

function SocialLinks({ className }: { className?: string }) {
  const items: {
    href: string;
    label: string;
    Icon: typeof IconFacebook;
  }[] = [];
  if (site.facebookUrl)
    items.push({
      href: site.facebookUrl,
      label: "Facebook da Dra. Juliana Druzian",
      Icon: IconFacebook,
    });
  if (site.instagramUrl)
    items.push({
      href: site.instagramUrl,
      label: "Instagram da Dra. Juliana Druzian",
      Icon: IconInstagram,
    });
  if (site.lattesUrl)
    items.push({
      href: site.lattesUrl,
      label: "Currículo Lattes",
      Icon: IconLattes,
    });

  if (items.length === 0) return null;

  return (
    <div className={`flex items-center justify-center gap-1 sm:justify-start ${className ?? ""}`}>
      {items.map(({ href, label, Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring flex h-11 w-11 items-center justify-center rounded-full text-brown-soft/80 transition hover:bg-beige-warm hover:text-sage"
          aria-label={label}
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}

function BrandMark({
  logoBroken,
  setLogoBroken,
}: {
  logoBroken: boolean;
  setLogoBroken: (v: boolean) => void;
}) {
  if (logoBroken) {
    return (
      <div className="flex min-w-0 flex-col leading-tight">
        <span className="truncate font-sans text-sm font-light text-foreground sm:text-base">
          Dra. Juliana Druzian
        </span>
        <span className="text-xs font-light text-sage">{site.specialty}</span>
      </div>
    );
  }

  return (
    <div className="relative h-10 w-10 shrink-0 sm:h-11 sm:w-11">
      <Image
        src="/logo.svg"
        alt=""
        width={44}
        height={44}
        className="object-contain"
        onError={() => setLogoBroken(true)}
        unoptimized
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
          className="focus-ring flex min-w-0 items-center gap-2.5 rounded-lg py-1"
          aria-label={`Início — ${site.name}`}
          onClick={close}
        >
          <BrandMark logoBroken={logoBroken} setLogoBroken={setLogoBroken} />
          {!logoBroken ? (
            <div className="flex min-w-0 flex-col leading-tight sm:hidden">
              <span className="truncate font-sans text-sm font-light text-foreground">
                Dra. Juliana Druzian
              </span>
              <span className="text-[11px] font-light text-sage">
                {site.specialty}
              </span>
            </div>
          ) : null}
          {!logoBroken ? (
            <div className="hidden min-w-0 flex-col leading-tight sm:flex">
              <span className="truncate font-sans text-sm font-light text-foreground">
                Dra. Juliana Druzian
              </span>
              <span className="text-xs font-light text-sage">{site.specialty}</span>
            </div>
          ) : null}
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
          <SocialLinks className="ml-2 border-l border-brown-soft/15 pl-3" />
        </nav>

        <button
          type="button"
          className="focus-ring flex h-11 w-11 items-center justify-center rounded-full text-foreground md:hidden"
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
              <SocialLinks />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
