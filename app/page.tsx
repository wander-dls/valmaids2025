import HeroSection from "@/components/HeroSection"
import About from "@/components/About";
import ServicesSection from "@/components/Services";

export default function Home() {
  return (
   <>
      <main>
        <HeroSection />
        <About />
        <ServicesSection />
      </main>
   </>
  );
}
