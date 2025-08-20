import { Button } from "@/components/ui/button";
import { Rocket, Zap, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float" style={{ animationDelay: '0s' }}>
        <Star className="w-6 h-6 text-accent/60" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Zap className="w-8 h-8 text-primary-glow/50" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Star className="w-4 h-4 text-accent/40" />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Создаем</span>{" "}
            <span className="text-transparent bg-gradient-accent bg-clip-text">
              будущее
            </span>
            <br />
            <span className="text-foreground">казино игр</span>
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-8 text-lg">
            <div className="flex items-center gap-2">
              <Rocket className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold">Инновационные решения</span>
            </div>
            <div className="w-2 h-2 rounded-full bg-muted-foreground/50"></div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-primary-glow" />
              <span className="text-muted-foreground">Премиум качество</span>
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Разрабатываем высокотехнологичные игры для казино с современным дизайном, 
            надежной механикой и интеграцией для операторов по всему миру.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="accent-gradient text-lg px-8 py-4 glow-effect animate-glow-pulse font-semibold"
            >
              Посмотреть игры
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-border hover:bg-card"
            >
              Для интеграторов
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary-glow/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/20 blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;