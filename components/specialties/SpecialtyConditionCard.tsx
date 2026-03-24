import type { SpecialtyItem } from "@/lib/specialties";
import { SpecialtyCardImage } from "./SpecialtyCardImage";

export function SpecialtyConditionCard({ item }: { item: SpecialtyItem }) {
  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-brown-soft/12 bg-white shadow-[0_2px_24px_-4px_rgba(61,52,48,0.08)] ring-1 ring-black/[0.02] transition hover:border-sage/25 hover:shadow-[0_12px_40px_-12px_rgba(61,52,48,0.12)] motion-safe:hover:-translate-y-1 motion-safe:transition-transform">
      <SpecialtyCardImage
        slug={item.slug}
        title={item.title}
        palette={item.palette}
      />
      <div className="flex flex-1 flex-col px-4 pb-5 pt-4 text-center sm:px-5 sm:pt-5 sm:text-left">
        <h4 className="font-sans text-lg font-light leading-snug text-foreground sm:text-xl">
          {item.title}
        </h4>
        <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted sm:text-sm">
          {item.description}
        </p>
      </div>
    </article>
  );
}
