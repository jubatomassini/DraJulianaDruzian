"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import type { SpecialtyPalette } from "@/lib/specialties";
import { SpecialtyPhotoPlaceholder } from "./SpecialtyPhotoPlaceholder";

type Props = {
  slug: string;
  title: string;
  palette: SpecialtyPalette;
};

export function SpecialtyCardImage({ slug, title, palette }: Props) {
  const [failed, setFailed] = useState(false);

  const onError = useCallback(() => {
    setFailed(true);
  }, []);

  if (failed) {
    return <SpecialtyPhotoPlaceholder palette={palette} />;
  }

  return (
    <div className="relative aspect-[4/3] w-full bg-beige-warm">
      <Image
        src={`/images/specialties/${slug}.jpg`}
        alt={`Imagem ilustrativa sobre ${title} na reumatologia`}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        onError={onError}
      />
    </div>
  );
}
