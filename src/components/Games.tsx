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
            <Card 
              key={index}
              className="gaming-border card-shadow smooth-transition hover:shadow-glow group animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={game.image} 
                  alt={`${game.title} game interface`} 
                  className="w-full h-48 object-cover group-hover:scale-105 smooth-transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-background/95 text-primary-glow border-primary-glow/50 font-semibold backdrop-blur-sm">
                  {game.badge}
                </Badge>
              </div>
              <CardContent className="p-6 text-center flex flex-col">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-accent smooth-transition">
                    {game.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {game.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Особенности:</h4>
                    <ul className="space-y-1">
                      {game.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <Star className="w-3 h-3 text-accent fill-current" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-auto pt-4">
                  {game.title === "Keno" ? (
                    <Button 
                      variant="outline" 
                      className="w-full border-border hover:bg-card"
                      asChild
                    >
                      <a href="#contact">Демо версия</a>
                    </Button>
                  ) : (
                    <Badge className="w-full py-2 bg-muted text-muted-foreground border-border font-semibold justify-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Скоро в продаже
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
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