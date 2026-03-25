import Image from "next/image";

/** Dimensões do ficheiro hero por defeito em /public (ajuste se trocar o asset). */
const HERO_INTRINSIC = { width: 1016, height: 1052 } as const;

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
        <Image
          src={src}
          alt={alt}
          width={HERO_INTRINSIC.width}
          height={HERO_INTRINSIC.height}
          priority={priority}
          quality={100}
          sizes="(max-width: 1023px) 100vw, 50vw"
          className="h-auto w-full max-w-none object-contain object-bottom"
        />
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
