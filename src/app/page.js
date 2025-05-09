
import { ContactSection } from "./components/homeComponent/ContactSection";
import { HeroSection } from "./components/homeComponent/HeroSection";

import { ServicesOffer } from "./components/homeComponent/ServiceOffer";
import { ServiceSection } from "./components/homeComponent/ServiceSection";
import { WorkCarousel } from "./components/homeComponent/WorkCarousel";
import { hero1 } from "./texts/heroTexts";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="flex flex-row items-center justify-center p-4 space-x-10 w-full bg-blue-100">
        <ServiceSection title={hero1.title} description={hero1.description} image={hero1.image} />
        <ServiceSection title={hero1.title} description={hero1.description} image={hero1.image} />
      </div>
      <WorkCarousel/>
      <ServicesOffer/>
      <ContactSection/>
    </>
  );
}
