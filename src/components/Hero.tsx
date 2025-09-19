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
          
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-8 text-base md:text-lg flex-wrap">
            <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm md:text-base font-medium">
              🎯 Любой RTP
            </span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm md:text-base font-medium">
              ⚡ Быстрая интеграция
            </span>
            <span className="bg-primary-glow/10 text-primary-glow px-3 py-1 rounded-full text-sm md:text-base font-medium">
              🎮 5+ игр
            </span>
            <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm md:text-base font-medium">
              ✓ Provably Fair
            </span>
          </div>
          
          <div className="text-lg md:text-xl font-poppins font-medium bg-gradient-to-r from-foreground/90 via-foreground/70 via-primary/80 via-primary-glow/90 to-accent/80 bg-clip-text text-transparent mb-10 max-w-2xl mx-auto leading-tight min-h-[6rem] flex items-start justify-center text-center">
            <TypewriterText initialText="Новые игры " typeText="без головной боли" speed={80} />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center w-full max-w-4xl mx-auto">
            <Button 
              className="bg-gradient-to-r from-primary via-primary-glow to-accent text-primary-foreground font-bold text-lg sm:text-2xl px-8 sm:px-16 py-4 sm:py-8 shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-glow hover:brightness-110 w-full sm:min-w-[280px] sm:w-auto rounded-full"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Связаться с нами
            </Button>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-[10px] w-full sm:w-auto">
              <Button 
                className="bg-white hover:bg-white border border-white/20 font-bold text-lg sm:text-2xl px-6 sm:px-14 py-4 sm:py-8 shadow-2xl transition-all duration-300 transform hover:scale-105 w-full sm:min-w-[240px] sm:w-auto rounded-full"
                onClick={() => {
                  document.getElementById('games')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                <span className="text-transparent bg-gradient-accent bg-clip-text">Каталог</span>
              </Button>
              
              <Button className="border border-white/20 font-bold text-lg sm:text-2xl px-6 sm:px-16 py-4 sm:py-8 shadow-2xl transition-all duration-300 transform hover:scale-105 w-full sm:min-w-[200px] sm:w-auto rounded-full" style={{
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