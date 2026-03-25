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
      <div className="relative w-full overflow-visible bg-transparent">
        <div className="relative mx-auto w-full min-h-[min(52vh,520px)] max-h-[min(72vh,680px)] sm:min-h-[min(48vh,480px)] lg:mx-0 lg:ml-auto lg:max-h-[min(78vh,720px)] lg:max-w-[min(100%,36rem)] xl:max-w-[min(100%,42rem)]">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 1024px) 100vw, min(42rem, 45vw)"
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
