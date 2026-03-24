import type { SpecialtyPalette } from "@/lib/specialties";

const gradients: Record<
  SpecialtyPalette,
  string
> = {
  rose: "from-rose-soft/55 via-beige-warm to-white",
  sage: "from-sage/35 via-beige-warm to-white",
  warm: "from-beige-warm via-rose-soft/35 to-white",
  brown: "from-brown-soft/25 via-beige-warm to-rose-soft/20",
};

type Props = {
  palette: SpecialtyPalette;
};

/** Área visual “tipo foto” até existir JPG em public/images/specialties/{slug}.jpg */
export function SpecialtyPhotoPlaceholder({ palette }: Props) {
  return (
    <div
      className={`relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br ${gradients[palette]}`}
      aria-hidden
    >
      <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,#3d3430_1px,transparent_0)] [background-size:14px_14px]" />
      <svg
        className="absolute inset-0 h-full w-full text-brown-soft/20"
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M0 220c80-40 120-20 200-90s120 20 200-40v210H0z"
          fill="currentColor"
          className="text-sage/25"
        />
        <circle cx="320" cy="70" r="36" fill="currentColor" className="text-rose-soft/40" />
        <rect
          x="40"
          y="48"
          width="140"
          height="100"
          rx="12"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-brown-soft/35"
        />
        <path
          d="M52 130l32-38 24 28 20-22 32 44"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-brown-soft/40"
        />
      </svg>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brown-soft/20 to-transparent px-4 py-4 pt-12">
        <p className="text-center text-[10px] font-light uppercase tracking-[0.28em] text-brown-soft/65">
          Espaço para foto
        </p>
      </div>
    </div>
  );
}
