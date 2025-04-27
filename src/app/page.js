import { ContactSection } from "./components/ContactSection";
import { HeroSection } from "./components/HeroSection";
import { NavBar } from "./components/NavBar";
import { ServicesOffer } from "./components/ServiceOffer";
import { ServiceSection } from "./components/ServiceSection";
import { WorkCarousel } from "./components/WorkCarousel";
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
