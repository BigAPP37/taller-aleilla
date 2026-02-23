import { Hero } from "@/components/home/Hero";
import { WhyUs } from "@/components/home/WhyUs";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Gallery } from "@/components/home/Gallery";
import { Reviews } from "@/components/home/Reviews";
import { FAQ } from "@/components/home/FAQ";
import { CTABanner } from "@/components/home/CTABanner";
import { LocationSection } from "@/components/home/LocationSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyUs />
      <ServicesGrid />
      <Gallery />
      <CTABanner />
      <Reviews />
      <FAQ />
      <LocationSection />
    </>
  );
}
