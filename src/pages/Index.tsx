import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Games from "@/components/Games";
import Integrators from "@/components/Integrators";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import ScrollIndicator from "@/components/ScrollIndicator";
import { FloatingBall1, FloatingBall2, FloatingBall3 } from "@/components/FloatingBall";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash) as HTMLElement | null;
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen">
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
        <FloatingBall1 />
        <FloatingBall2 />
        <FloatingBall3 />
        <div className="animated-grid"></div>
      </div>
      <Header />
      <main>
        <Hero />
        <Games />
        <Integrators />
        <Contact />
      </main>
      <Footer />
      <ScrollIndicator />
    </div>
  );
};

export default Index;
