"use client";

import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#conteudo-principal"
      className="focus-ring fixed bottom-24 left-[max(1rem,env(safe-area-inset-left,0px))] z-40 flex h-11 w-11 items-center justify-center rounded-full border border-brown-soft/15 bg-white/95 text-brown-soft shadow-md backdrop-blur-sm transition hover:border-sage/30 hover:text-sage motion-safe:hover:-translate-y-0.5 sm:bottom-[max(1.25rem,env(safe-area-inset-bottom,0px))]"
      aria-label="Voltar ao topo do conteúdo"
    >
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </a>
  );
}
