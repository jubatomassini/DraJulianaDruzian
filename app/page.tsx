import { AboutSection } from "@/components/sections/AboutSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { SpecialtiesSection } from "@/components/sections/SpecialtiesSection";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col overflow-x-clip">
      <main id="conteudo-principal">
        <HeroSection />
        <SpecialtiesSection />
        <AboutSection />
        <DifferentialsSection />
        <CtaSection />
        <LocationSection />
      </main>
      <SiteFooter />
    </div>
  );
}
