import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Games from "@/components/Games";
import Integrators from "@/components/Integrators";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import { useEffect, useCallback } from "react";

const Index = () => {
  const calculateScale = useCallback(() => {
    const container = document.querySelector('.scalable-container') as HTMLElement;
    if (!container) return;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const containerWidth = 1920;
    const containerHeight = container.scrollHeight;

    const scaleX = windowWidth / containerWidth;
    const scaleY = windowHeight / containerHeight;
    const scale = Math.min(scaleX, scaleY, 1.2); // Max scale 1.2x
    const finalScale = Math.max(scale, 0.3); // Min scale 0.3x

    container.style.transform = `scale(${finalScale})`;
  }, []);

  useEffect(() => {
    // Initial scale calculation
    setTimeout(calculateScale, 100);

    // Handle window resize
    window.addEventListener('resize', calculateScale);
    
    // Handle hash navigation
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash) as HTMLElement | null;
        if (el) {
          el.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
        }
      }, 100);
    }

    return () => {
      window.removeEventListener('resize', calculateScale);
    };
  }, [calculateScale]);

  return (
    <div className="scalable-container">
      <ParticlesBackground />
      {/* Animated Background */}
      <div className="animated-background">
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="geometric-shape"></div>
        <div className="geometric-shape"></div>
        <div className="geometric-shape"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="animated-grid"></div>
      </div>
      <Header />
      <main>
        <Hero />
        <About />
        <Games />
        <Integrators />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
