import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { ChevronDown, Rocket, Star, Zap } from "lucide-react";
const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative"
    >
      {/* Enhanced Floating Elements */}
      <div
        className="absolute top-20 left-10 animate-float opacity-60 z-10"
        style={{
          animationDelay: "0s",
        }}
      >
        <Star className="w-6 h-6 text-accent/60" />
      </div>
      <div
        className="absolute top-40 right-20 animate-float opacity-50 z-10"
        style={{
          animationDelay: "1s",
        }}
      >
        <Zap className="w-8 h-8 text-primary-glow/50" />
      </div>
      <div
        className="absolute bottom-32 left-20 animate-float opacity-40 z-10"
        style={{
          animationDelay: "2s",
        }}
      >
        <Star className="w-4 h-4 text-accent/40" />
      </div>
      <div
        className="absolute top-1/3 left-1/4 animate-float opacity-30 z-10"
        style={{
          animationDelay: "0.5s",
        }}
      >
        <Rocket className="w-5 h-5 text-primary/30" />
      </div>
      <div
        className="absolute bottom-1/4 right-1/3 animate-float opacity-25 z-10"
        style={{
          animationDelay: "1.5s",
        }}
      >
        <Star className="w-3 h-3 text-accent/25" />
      </div>
      <div
        className="absolute top-2/3 right-10 animate-float opacity-35 z-10"
        style={{
          animationDelay: "2.5s",
        }}
      >
        <Zap className="w-6 h-6 text-primary-glow/35" />
      </div>

      {/* Дополнительные звездочки */}
      <div
        className="absolute top-1/4 right-1/4 animate-float opacity-30 z-10"
        style={{
          animationDelay: "3s",
        }}
      >
        <Star className="w-5 h-5 text-accent/30" />
      </div>
      <div
        className="absolute bottom-1/3 left-1/3 animate-float opacity-35 z-10"
        style={{
          animationDelay: "3.5s",
        }}
      >
        <Star className="w-4 h-4 text-primary/35" />
      </div>
      <div
        className="absolute top-16 right-1/3 animate-float opacity-25 z-10"
        style={{
          animationDelay: "4s",
        }}
      >
        <Star className="w-3 h-3 text-accent/25" />
      </div>
      <div
        className="absolute bottom-20 right-1/4 animate-float opacity-40 z-10"
        style={{
          animationDelay: "4.5s",
        }}
      >
        <Star className="w-6 h-6 text-primary-glow/40" />
      </div>

      {/* Дополнительные молнии */}
      <div
        className="absolute top-1/2 left-10 animate-float opacity-30 z-10"
        style={{
          animationDelay: "5s",
        }}
      >
        <Zap className="w-7 h-7 text-accent/30" />
      </div>
      <div
        className="absolute bottom-40 right-16 animate-float opacity-35 z-10"
        style={{
          animationDelay: "5.5s",
        }}
      >
        <Zap className="w-5 h-5 text-primary/35" />
      </div>
      <div
        className="absolute top-24 left-1/2 animate-float opacity-25 z-10"
        style={{
          animationDelay: "6s",
        }}
      >
        <Zap className="w-4 h-4 text-primary-glow/25" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Logo */}
          <div className="flex items-center justify-center mb-10 md:mb-12">
            <span className="text-xl font-bold text-foreground mr-3">
              2xWet
            </span>
            <img src={logo} alt="2xWet Studio Logo" className="w-8 h-8 mx-2" />
            <span className="text-xl font-bold text-accent ml-3">Studio</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 md:mb-8 leading-tight text-center">
            <span className="text-transparent bg-gradient-accent bg-clip-text">
              Zero-effort
            </span>
            <br />
            <span className="text-foreground">игровые решения</span>
          </h1>

          <div className="flex items-center justify-center gap-2 md:gap-4 mb-12 md:mb-16 text-base md:text-lg flex-wrap">
            <span className="bg-accent/30 text-accent px-3 py-1 rounded-full text-sm md:text-base font-medium">
              🎯 Любой RTP
            </span>
            <span className="bg-primary/30 text-primary px-3 py-1 rounded-full text-sm md:text-base font-medium">
              ⚡ Быстрая интеграция
            </span>
            <span className="bg-primary-glow/30 text-primary-glow px-3 py-1 rounded-full text-sm md:text-base font-medium">
              🎨 Полная кастомизация
            </span>
            <span className="bg-accent/30 text-accent px-3 py-1 rounded-full text-sm md:text-base font-medium">
              ✓ Provably Fair
            </span>
          </div>

          <div className="flex justify-center w-full mb-32 md:mb-40">
            <Button
              className="bg-gradient-to-r from-primary via-primary-glow to-accent text-primary-foreground font-bold text-base sm:text-lg px-12 py-4 shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-glow hover:brightness-110 rounded-full"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 md:bottom-8 bottom-16 left-1/2 transform -translate-x-1/2 z-20">
        <div
          className="flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300"
          onClick={() => {
            document
              .getElementById("games")
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          <span className="text-foreground/70 text-sm mb-2 font-medium">
            Наши игры
          </span>
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 text-foreground/70" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
