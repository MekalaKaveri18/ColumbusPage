import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/use-cases/HeroSection";
import { ApplicationGridSection } from "@/components/use-cases/ApplicationGridSection";
import { MoreApplicationsSection } from "@/components/use-cases/MoreApplicationsSection";
import { CTASection } from "@/components/use-cases/CTASection";
import { CaseIntroSection } from "@/components/use-cases/CaseIntroSection";
import { SeeCaseStudiesSection } from "@/components/use-cases/SeeCaseStudiesSection";
import { RealEstateSection } from "@/components/use-cases/RealEstateSection";
import { GenerativeGeodataSection } from "@/components/use-cases/GenerativeGeodataSection";
import { LogisticsSection } from "@/components/use-cases/LogisticsSection";
import { UrbanPlanningSection } from "@/components/use-cases/UrbanPlanningSection";
import { ConsumerMappingSection } from "@/components/use-cases/ConsumerMappingSection";
import { GeomarketingSection } from "@/components/use-cases/GeomarketingSection";
import { GroundDueDiligenceSection } from "@/components/use-cases/GroundDueDiligenceSection";
import { CommercialRealEstateSection } from "@/components/use-cases/CommercialRealEstateSection";
import { SiteSelectionSection } from "@/components/use-cases/SiteSelectionSection";
import { UseCasesScrollProgress } from "@/components/use-cases/UseCasesScrollProgress";

function SectionLabel({ letter }: { letter: string }) {
  return (
    <span
      className="absolute left-4 top-4 z-[100] flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-lg font-bold uppercase text-[#0a1628] shadow-md ring-1 ring-black/10"
      aria-hidden
    >
      {letter}
    </span>
  );
}

function SectionBottomLine() {
  return (
    <div
      className="absolute bottom-0 left-6 right-6 max-w-[1704px] mx-auto border-t border-[#E0E1E2]"
      aria-hidden
    />
  );
}

export default function UseCasesRoute() {
  return (
    <main className="relative">
      <UseCasesScrollProgress />
      <section className="relative">
        <SectionLabel letter="a" />
        <Navbar />
        <SectionBottomLine />
      </section>
      <section className="relative">
        <SectionLabel letter="b" />
        <HeroSection />
        <SectionBottomLine />
      </section>
      <section className="relative">
        <SectionLabel letter="c" />
        <ApplicationGridSection />
        <SectionBottomLine />
      </section>
      <section className="relative">
        <SectionLabel letter="d" />
        <CaseIntroSection />
        <SectionBottomLine />
      </section>
      <section className="relative">
        <SectionLabel letter="e" />
        <SeeCaseStudiesSection />
      </section>
      <section id="residential-real-estate" className="relative bg-[#FEFEFE]">
        <SectionLabel letter="f" />
        <RealEstateSection />
        <SectionBottomLine />
      </section>
      <section id="commercial-real-estate" className="relative bg-[#FEFEFE]">
        <SectionLabel letter="g" />
        <CommercialRealEstateSection />
        <SectionBottomLine />
      </section>
      <section id="generative-geodata" className="relative bg-[#FEFEFE]">
        <SectionLabel letter="h" />
        <GenerativeGeodataSection />
        <SectionBottomLine />
      </section>
      <section id="logistics-optimization" className="relative bg-[#FEFEFE]">
        <SectionLabel letter="i" />
        <LogisticsSection />
        <SectionBottomLine />
      </section>
      <section id="urban-planning" className="relative bg-[#FEFEFE]">
        <SectionLabel letter="j" />
        <UrbanPlanningSection />
        <SectionBottomLine />
      </section>
      <section id="site-selection" className="relative bg-[#FEFEFE]">
        <SectionLabel letter="k" />
        <SiteSelectionSection />
        <SectionBottomLine />
      </section>
      <section id="consumer-mapping" className="relative bg-[#FEFEFE]">
        <SectionLabel letter="l" />
        <ConsumerMappingSection />
        <SectionBottomLine />
      </section>
      <section id="ground-due-diligence" className="relative bg-[#FEFEFE]">
        <SectionLabel letter="m" />
        <GroundDueDiligenceSection />
        <SectionBottomLine />
      </section>
      <section id="geomarketing" className="relative bg-[#FEFEFE]">
        <SectionLabel letter="n" />
        <GeomarketingSection />
        <SectionBottomLine />
      </section>
      <section className="relative">
        <SectionLabel letter="o" />
        <MoreApplicationsSection />
      </section>
      <section className="relative">
        <SectionLabel letter="p" />
        <CTASection />
      </section>
      <section className="relative">
        <SectionLabel letter="q" />
        <Footer />
        <SectionBottomLine />
      </section>
    </main>
  );
}
