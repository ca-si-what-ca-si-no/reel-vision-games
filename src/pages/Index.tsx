import { useEffect } from 'react';

import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Games from '@/components/Games';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Integrators from '@/components/Integrators';
import ParticlesBackground from '@/components/ParticlesBackground';

const Index = () => {
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="snap-scroll-container h-screen overflow-y-auto">
      <ParticlesBackground />
      {/* Animated Background */}
      <div className="animated-background">
        <div className="floating-orb" />
        <div className="floating-orb" />
        <div className="floating-orb" />
        <div className="floating-orb" />
        <div className="geometric-shape" />
        <div className="geometric-shape" />
        <div className="geometric-shape" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="animated-grid" />
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
