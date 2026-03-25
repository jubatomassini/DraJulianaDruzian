import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  variant: "hero" | "about";
};

export function DoctorVisual({ src, alt, priority, variant }: Props) {
  if (variant === "hero") {
    return (
      <div className="relative w-full max-w-full bg-transparent">
        {/* Mobile: largura do container, altura limitada para caber no viewport */}
        {/* Desktop (lg+): 100% da coluna, área alta para a imagem em escala máxima */}
        <div
          className={
            "relative w-full max-w-full " +
            "min-h-[min(42vh,360px)] max-h-[min(64vh,520px)] " +
            "sm:min-h-[min(46vh,400px)] sm:max-h-[min(68vh,580px)] " +
            "lg:mx-0 lg:min-h-[min(88vh,920px)] lg:max-h-[min(96vh,1000px)] lg:w-full lg:max-w-none"
          }
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-contain object-bottom"
          />
        </div>
      </div>
    );
  }

  const sizes = "(max-width: 1024px) 100vw, 40vw";

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.35rem] bg-gradient-to-tr from-beige-warm via-white to-rose-soft/30 shadow-md ring-1 ring-brown-soft/10 sm:rounded-3xl">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover object-top"
      />
    </div>
  );
}

export function DoctorMonogram({ variant }: { variant: "hero" | "about" }) {
  return (
    <div
      className={
        variant === "hero"
          ? "relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-rose-soft/50 via-beige-warm to-sage/30 shadow-lg shadow-brown-soft/10 ring-1 ring-brown-soft/10 sm:rounded-3xl"
          : "relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-[1.35rem] bg-gradient-to-tr from-beige-warm via-white to-rose-soft/40 shadow-md ring-1 ring-brown-soft/10 sm:rounded-3xl"
      }
      aria-hidden
    >
      <span className="font-sans text-6xl font-light tracking-tight text-brown-soft/40 sm:text-7xl md:text-8xl">
        JD
      </span>
    </div>
  );
}
