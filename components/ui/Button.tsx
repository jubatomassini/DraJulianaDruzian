import type { ReactNode } from "react";
import {
  buttonBase,
  buttonPrimary,
  buttonSecondary,
} from "@/components/ui/buttonStyles";

type Variant = "primary" | "secondary";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: Variant;
  external?: boolean;
  ariaLabel?: string;
};

const variantClass: Record<Variant, string> = {
  primary: buttonPrimary,
  secondary: buttonSecondary,
};

export function ButtonLink({
  href,
  children,
  className = "",
  variant = "secondary",
  external,
  ariaLabel,
}: Props) {
  const isExternal =
    external ?? /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      className={`${buttonBase} ${variantClass[variant]} ${className}`.trim()}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
