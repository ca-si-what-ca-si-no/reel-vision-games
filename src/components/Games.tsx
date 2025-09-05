import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Play, Star, TrendingUp, X, Clock } from "lucide-react";
import { useState } from "react";
const Games = () => {
  const [isKenoModalOpen, setIsKenoModalOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const gameTypes = [{
    title: "Keno",
    description: "Классическая лотерейная игра с современным интерфейсом и настраиваемым RTP",
    features: ["Настраиваемый RTP", "Веб-интерфейс управления", "Реалтайм аналитика"],
    badge: "Популярное",
    image: "/lovable-uploads/255be87f-66e2-49cd-a556-b9ece8de555d.png"
  }, {
    title: "Hilo",
    description: "Увлекательная карточная игра с простыми правилами и высокой отдачей",
    features: ["Быстрые раунды", "Мобильная оптимизация", "Настройка лимитов"],
    badge: "Топ",
    image: "/lovable-uploads/bf859430-c5c0-4373-aafa-f3290eb90cc3.png"
  }, {
    title: "Crash Games Pack",
    description: "Полный пакет краш-игр с уникальными механиками и дизайном",
    features: ["5 уникальных игр", "Единое управление", "Высокая волатильность"],
    badge: "Новинка",
    image: "/lovable-uploads/b17f2fcd-8c2a-4f79-9914-3e3373e0a661.png"
  }];
  return <section id="games" className="py-24 relative background-grid">
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
          {gameTypes.map((game, index) => <div key={index} className="game-card animate-fade-in rounded-xl flex flex-col" style={{
          animationDelay: `${index * 0.15}s`
        }}>
              <div className="game-image relative group">
                <img src={game.image} alt={`${game.title} game interface`} className="w-full h-56 object-cover transition-opacity duration-300 group-hover:opacity-0" />
                
                {/* Hover content - описание и функции */}
                <div className="absolute inset-0 bg-background/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-6">
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {game.description}
                    </p>
                    <div className="space-y-2">
                      {game.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/60 group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <div className="game-badge px-3 py-1 rounded-full text-sm">
                    {game.badge}
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 tracking-tight">
                      {game.title}
                    </h3>
                  </div>
                </div>
                
                <div className="mt-auto pt-6 border-t border-border/50">
                  {game.title === "Keno" ? (
                    <div className="flex gap-2">
                      <button onClick={() => setIsKenoModalOpen(true)} className="demo-button flex-1 py-3 px-4 rounded-lg text-center">
                        Играть!
                      </button>
                      <button onClick={() => setSelectedGame(game)} className="outline-button py-3 px-4 rounded-lg text-center">
                        Подробнее
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2">
                      <div className="coming-soon-badge w-full py-3 px-4 rounded-lg text-center flex items-center justify-center gap-2 text-sm">
                        <Clock className="w-4 h-4" />
                        Скоро в продаже
                      </div>
                      <button onClick={() => setSelectedGame(game)} className="outline-button w-full py-2 px-4 rounded-lg text-center text-sm">
                        Подробнее
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>)}
        </div>
      </div>

      {/* Game Info Modal */}
      <Dialog open={!!selectedGame} onOpenChange={() => setSelectedGame(null)}>
        <DialogContent className="max-w-2xl">
          {selectedGame && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-foreground">{selectedGame.title}</h2>
                <div className="game-badge px-3 py-1 rounded-full text-sm">
                  {selectedGame.badge}
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={selectedGame.image} 
                  alt={`${selectedGame.title} game interface`} 
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Описание</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedGame.description}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Ключевые особенности</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {selectedGame.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <div className="flex gap-4">
                    <Button onClick={() => setSelectedGame(null)} variant="outline" className="flex-1">
                      Закрыть
                    </Button>
                    <Button className="flex-1">
                      Запросить интеграцию
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Keno Demo Modal */}
      <Dialog open={isKenoModalOpen} onOpenChange={setIsKenoModalOpen}>
        <DialogContent className="max-w-7xl w-full h-[95vh] p-0">
          <iframe src="https://dev-dot-casino-games-462502.lm.r.appspot.com/keno" className="w-full h-full rounded-lg border-0" title="Keno Demo Game" allow="fullscreen" />
        </DialogContent>
      </Dialog>
    </section>;
};
export default Games;