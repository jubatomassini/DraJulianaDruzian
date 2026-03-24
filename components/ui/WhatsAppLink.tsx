import type { ReactNode } from "react";

type Props = {
  href: string | null;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
};

export function WhatsAppLink({
  href,
  className,
  children,
  ariaLabel = "Agendar consulta pelo WhatsApp",
}: Props) {
  if (!href) {
    return (
      <span
        className={`inline-flex cursor-not-allowed items-center justify-center rounded-full bg-muted/30 px-6 py-3 text-sm text-muted ${className ?? ""}`}
        title="Configure NEXT_PUBLIC_WHATSAPP_E164 no ambiente"
      >
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`focus-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-full font-medium transition hover:opacity-90 ${className ?? ""}`}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
