import { Button } from "@/components/ui/button";
import { Rocket, Zap, Star } from "lucide-react";
import TypewriterText from "./TypewriterText";
import ParallaxBackground from "./ParallaxBackground";
import ParallaxSection from "./ParallaxSection";
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements with Parallax */}
      <ParallaxBackground speed={0.2} className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Floating Orbs */}
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-gradient-to-r from-primary/20 via-primary-glow/10 to-transparent rounded-full blur-3xl animate-spin" style={{animationDuration: '4s'}}></div>
        <div className="absolute w-80 h-80 top-1/4 -right-40 bg-gradient-to-l from-accent/25 via-accent/10 to-transparent rounded-full blur-3xl animate-spin" style={{animationDuration: '5s', animationDirection: 'reverse'}}></div>
        <div className="absolute w-64 h-64 bottom-1/4 -left-32 bg-gradient-to-r from-secondary/20 via-secondary/10 to-transparent rounded-full blur-3xl animate-bounce" style={{animationDuration: '3s'}}></div>
        
        {/* Moving Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 animate-pulse"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-glow rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-accent rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-secondary rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-primary rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
        
        {/* Moving Light Streaks */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-glow/50 to-transparent animate-pulse transform rotate-12"></div>
        <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-transparent via-accent/50 to-transparent animate-pulse transform -rotate-12" style={{animationDelay: '2s'}}></div>
      </ParallaxBackground>
      
      {/* Enhanced Floating Elements with different parallax speeds */}
      <ParallaxBackground speed={0.4} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-float opacity-60" style={{animationDelay: '0s'}}>
          <Star className="w-6 h-6 text-accent/60" />
        </div>
        <div className="absolute top-40 right-20 animate-float opacity-50" style={{animationDelay: '1s'}}>
          <Zap className="w-8 h-8 text-primary-glow/50" />
        </div>
        <div className="absolute bottom-32 left-20 animate-float opacity-40" style={{animationDelay: '2s'}}>
          <Star className="w-4 h-4 text-accent/40" />
        </div>
      </ParallaxBackground>
      
      <ParallaxBackground speed={0.6} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 animate-float opacity-30" style={{animationDelay: '0.5s'}}>
          <Rocket className="w-5 h-5 text-primary/30" />
        </div>
        <div className="absolute bottom-1/4 right-1/3 animate-float opacity-25" style={{animationDelay: '1.5s'}}>
          <Star className="w-3 h-3 text-accent/25" />
        </div>
        <div className="absolute top-2/3 right-10 animate-float opacity-35" style={{animationDelay: '2.5s'}}>
          <Zap className="w-6 h-6 text-primary-glow/35" />
        </div>
      </ParallaxBackground>
      
      <ParallaxSection speed={0.1} className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Создаем</span>{" "}
            <span className="text-transparent bg-gradient-accent bg-clip-text">
              будущее
            </span>
            <br />
            <span className="text-foreground">iGaming</span>
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-8 text-lg">
            <div className="flex items-center gap-2">
              <Rocket className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold">Настраиваемый RTP</span>
            </div>
            <div className="w-2 h-2 rounded-full bg-muted-foreground/50"></div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-primary-glow" />
              <span className="text-muted-foreground">Топовые предложения</span>
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            <TypewriterText 
              initialText="Игровая студия "
              typeText="с экспертизой в создании iGaming-решений. Наш актуальный портфолио включает увлекательные игры с гибкой настройкой и полной кастомизацией."
              speed={80}
            />
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* CTA-1: Основная кнопка - Связаться с нами */}
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-4 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-w-[200px]" asChild>
              <a href="#integrators">Связаться с нами</a>
            </Button>
            
            {/* CTA-2: Вторичная кнопка - Каталог */}
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-primary/30 hover:border-primary hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-300 min-w-[200px] font-semibold" asChild>
              <a href="#games">Каталог</a>
            </Button>
          </div>
        </div>
      </ParallaxSection>
      
      {/* Enhanced Background Pattern with slower parallax */}
      <ParallaxBackground speed={0.15} className="absolute inset-0 opacity-8 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary-glow/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"></div>
      </ParallaxBackground>
    </section>
  );
};

export default Hero;