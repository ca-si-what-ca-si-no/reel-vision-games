import { Button } from "@/components/ui/button";
import { Rocket, Zap, Star } from "lucide-react";
import TypewriterText from "./TypewriterText";
const Hero = () => {
  return <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 snap-section">
      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 animate-float opacity-60 z-10" style={{
      animationDelay: '0s'
    }}>
        <Star className="w-6 h-6 text-accent/60" />
      </div>
      <div className="absolute top-40 right-20 animate-float opacity-50 z-10" style={{
      animationDelay: '1s'
    }}>
        <Zap className="w-8 h-8 text-primary-glow/50" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float opacity-40 z-10" style={{
      animationDelay: '2s'
    }}>
        <Star className="w-4 h-4 text-accent/40" />
      </div>
      <div className="absolute top-1/3 left-1/4 animate-float opacity-30 z-10" style={{
      animationDelay: '0.5s'
    }}>
        <Rocket className="w-5 h-5 text-primary/30" />
      </div>
      <div className="absolute bottom-1/4 right-1/3 animate-float opacity-25 z-10" style={{
      animationDelay: '1.5s'
    }}>
        <Star className="w-3 h-3 text-accent/25" />
      </div>
      <div className="absolute top-2/3 right-10 animate-float opacity-35 z-10" style={{
      animationDelay: '2.5s'
    }}>
        <Zap className="w-6 h-6 text-primary-glow/35" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight text-center mt-8 md:mt-0">
            <span className="text-foreground">Создаем</span>{" "}
            <span className="text-transparent bg-gradient-accent bg-clip-text">
              будущее
            </span>
            <br />
            <span className="text-foreground">iGaming</span>
          </h1>
          
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-8 text-base md:text-lg">
            <div className="flex items-center gap-1 md:gap-2">
              <Rocket className="w-4 h-4 md:w-5 md:h-5 text-accent" />
              <span className="text-accent font-semibold text-sm md:text-base">Настраиваемый RTP</span>
            </div>
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-muted-foreground/50"></div>
            <div className="flex items-center gap-1 md:gap-2">
              <Star className="w-4 h-4 md:w-5 md:h-5 text-primary-glow" />
              <span className="text-muted-foreground text-sm md:text-base">Топовые предложения</span>
            </div>
          </div>
          
          <div className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-tight min-h-[6rem] flex items-start justify-center text-center">
            <TypewriterText initialText="Игровая студия " typeText="с экспертизой в создании iGaming-решений. Наш актуальный портфолио включает увлекательные игры с гибкой настройкой и полной кастомизацией." speed={80} />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Button 
              className="bg-gradient-to-r from-primary via-primary-glow to-accent text-primary-foreground font-bold text-2xl px-16 py-8 shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-glow hover:brightness-110 min-w-[280px] rounded-full"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Связаться с нами
            </Button>
            
            <div className="flex gap-[10px]">
              <Button 
                className="bg-white hover:bg-white border border-white/20 font-bold text-2xl px-14 py-8 shadow-2xl transition-all duration-300 transform hover:scale-105 min-w-[240px] rounded-full"
                onClick={() => {
                  document.getElementById('games')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                <span className="text-transparent bg-gradient-accent bg-clip-text">Каталог</span>
              </Button>
              
              <Button className="border border-white/20 font-bold text-2xl px-16 py-8 shadow-2xl transition-all duration-300 transform hover:scale-105 min-w-[200px] rounded-full" style={{
              backgroundColor: 'white',
              '--tw-bg-opacity': '1'
            } as React.CSSProperties} asChild>
                
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;