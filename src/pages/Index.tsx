import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Games from "@/components/Games";
import Integrators from "@/components/Integrators";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import ParallaxContainer from "@/components/ParallaxContainer";
import ParallaxBackground from "@/components/ParallaxBackground";

const Index = () => {
  return (
    <ParallaxContainer className="min-h-screen">
      <ParticlesBackground />
      <ParallaxBackground />
      
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
      <main className="relative z-10">
        <Hero />
        <About />
        <Games />
        <Integrators />
        <Contact />
      </main>
      <Footer />
    </ParallaxContainer>
  );
};

export default Index;
