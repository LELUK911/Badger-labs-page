
import { ContactSection } from "./components/homeComponent/ContactSection";
import { HeroSection } from "./components/homeComponent/HeroSection";
import ProcessSection from "./components/homeComponent/ProcessSection";

import { ServicesOffer } from "./components/homeComponent/ServiceOffer";
import { ServiceSection } from "./components/homeComponent/ServiceSection";
import TestimonialsSection from "./components/homeComponent/TestimonialsSection";
import { WorkCarousel } from "./components/homeComponent/WorkCarousel";
import { hero } from "./texts/heroTexts";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="flex flex-row items-center justify-center p-4 space-x-10 w-full bg-blue-100">
        {hero.map((item, index) => {
          const { title, description, image } = item;
          return (
            <ServiceSection
              key={index}
              title={title}
              description={description}
              image={image}
            />
          );
        })
        }
      </div>
      <ProcessSection />
      <WorkCarousel />
      <ServicesOffer />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
