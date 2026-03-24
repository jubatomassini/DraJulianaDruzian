import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  variant: "hero" | "about";
};

export function DoctorVisual({ src, alt, priority, variant }: Props) {
  const sizes =
    variant === "hero"
      ? "(max-width: 1024px) 100vw, 42vw"
      : "(max-width: 1024px) 100vw, 40vw";

  return (
    <div
      className={
        variant === "hero"
          ? "relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-rose-soft/40 via-beige-warm to-sage/25 shadow-lg shadow-brown-soft/10 ring-1 ring-brown-soft/10 lg:max-w-none"
          : "relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl bg-gradient-to-tr from-beige-warm via-white to-rose-soft/30 shadow-md ring-1 ring-brown-soft/10"
      }
    >
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
          ? "relative flex aspect-[4/5] w-full max-w-md items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-rose-soft/50 via-beige-warm to-sage/30 shadow-lg shadow-brown-soft/10 ring-1 ring-brown-soft/10 lg:max-w-none"
          : "relative flex aspect-[4/5] w-full max-w-md items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-tr from-beige-warm via-white to-rose-soft/40 shadow-md ring-1 ring-brown-soft/10"
      }
      aria-hidden
    >
      <span className="font-serif text-7xl font-light tracking-tight text-brown-soft/35 sm:text-8xl">
        JD
      </span>
    </div>
  );
}
