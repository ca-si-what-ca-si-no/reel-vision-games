import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Play, Star, TrendingUp, X, Clock } from "lucide-react";
import { useState } from "react";

const Games = () => {
  const [isKenoModalOpen, setIsKenoModalOpen] = useState(false);

  const gameTypes = [
    {
      title: "Keno",
      description: "Классическая лотерейная игра с современным интерфейсом и настраиваемым RTP",
      features: ["Настраиваемый RTP", "Веб-интерфейс управления", "Реалтайм аналитика"],
      badge: "Популярное",
      image: "/lovable-uploads/255be87f-66e2-49cd-a556-b9ece8de555d.png"
    },
    {
      title: "Hilo",
      description: "Увлекательная карточная игра с простыми правилами и высокой отдачей",
      features: ["Быстрые раунды", "Мобильная оптимизация", "Настройка лимитов"],
      badge: "Топ",
      image: "/lovable-uploads/bf859430-c5c0-4373-aafa-f3290eb90cc3.png"
    },
    {
      title: "Crash Games Pack",
      description: "Полный пакет краш-игр с уникальными механиками и дизайном",
      features: ["5 уникальных игр", "Единое управление", "Высокая волатильность", "Автоматические турниры"],
      badge: "Новинка",
      image: "/lovable-uploads/b17f2fcd-8c2a-4f79-9914-3e3373e0a661.png"
    }
  ];

  return (
    <section id="games" className="py-24 relative background-grid">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Наши</span>{" "}
            <span className="text-transparent bg-gradient-accent bg-clip-text">решения</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Портфолио готовых игровых продуктов с современными технологиями 
            и гибкими настройками для каждого оператора.
          </p>
        </div>


        {/* Game Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gameTypes.map((game, index) => (
            <div 
              key={index}
              className="game-card animate-fade-in rounded-xl"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="game-image relative">
                <img 
                  src={game.image} 
                  alt={`${game.title} game interface`} 
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/60"></div>
                <div className="absolute top-4 left-4">
                  <div className="game-badge px-3 py-1 rounded-full text-sm">
                    {game.badge}
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col h-auto">
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 tracking-tight">
                      {game.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {game.description}
                    </p>
                  </div>
                  
                  <div className="feature-list">
                    <h4 className="text-sm font-semibold text-foreground mb-3 opacity-80">
                      Особенности:
                    </h4>
                    <div className="space-y-2">
                      {game.features.map((feature, idx) => (
                        <div key={idx} className="feature-item text-sm text-muted-foreground">
                          <div className="feature-icon w-2 h-2 bg-accent rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-border/50">
                  {game.title === "Keno" ? (
                    <a 
                      href="#contact"
                      className="demo-button w-full py-3 px-4 rounded-lg text-center block transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                    >
                      Демо версия
                    </a>
                  ) : (
                    <div className="coming-soon-badge w-full py-3 px-4 rounded-lg text-center flex items-center justify-center gap-2 text-sm">
                      <Clock className="w-4 h-4" />
                      Скоро в продаже
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keno Demo Modal */}
      <Dialog open={isKenoModalOpen} onOpenChange={setIsKenoModalOpen}>
        <DialogContent className="max-w-7xl w-full h-[95vh] p-0">
          <iframe
            src="https://dev-dot-casino-games-462502.lm.r.appspot.com/keno"
            className="w-full h-full rounded-lg border-0"
            title="Keno Demo Game"
            allow="fullscreen"
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Games;