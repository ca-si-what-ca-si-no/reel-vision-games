import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Games from "@/components/Games";
import Integrators from "@/components/Integrators";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
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
