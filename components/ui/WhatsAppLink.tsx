import type { ReactNode } from "react";
import {
  buttonBase,
  buttonContrast,
  buttonPrimary,
  buttonWhatsApp,
} from "@/components/ui/buttonStyles";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

type Tone = "primary" | "whatsapp" | "contrast";

type Props = {
  href: string | null;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
  /** Visual do botão; `custom` usa só `className` + `buttonBase`. */
  tone?: Tone;
  showIcon?: boolean;
};

const toneClass: Record<Exclude<Tone, "custom">, string> = {
  primary: buttonPrimary,
  whatsapp: buttonWhatsApp,
  contrast: buttonContrast,
};

export function WhatsAppLink({
  href,
  className,
  children,
  ariaLabel = "Agendar consulta pelo WhatsApp",
  tone = "primary",
  showIcon = true,
}: Props) {
  const style = `${buttonBase} ${toneClass[tone]} ${className ?? ""}`.trim();

  if (!href) {
    return (
      <span
        className={`${buttonBase} cursor-not-allowed bg-muted/25 text-muted shadow-none ring-0 ${className ?? ""}`}
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
      className={style}
      aria-label={ariaLabel}
    >
      {showIcon ? <WhatsAppIcon className="h-5 w-5 shrink-0" /> : null}
      {children}
    </a>
  );
}
