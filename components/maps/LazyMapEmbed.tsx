"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  embedUrl: string;
  title: string;
};

export function LazyMapEmbed({ embedUrl, title }: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) setShow(true);
      },
      { rootMargin: "120px", threshold: 0.01 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={hostRef}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-beige-warm ring-1 ring-brown-soft/10"
    >
      {show ? (
        <iframe
          title={title}
          src={embedUrl}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center text-sm text-muted"
          aria-hidden
        >
          Carregando mapa…
        </div>
      )}
    </div>
  );
}
