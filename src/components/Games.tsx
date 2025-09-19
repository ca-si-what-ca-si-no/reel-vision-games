import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Play, Star, TrendingUp, X, Clock } from "lucide-react";
import { RussiaFlag, USAFlag, GermanyFlag, FranceFlag } from "@/components/ui/flag-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
const Games = () => {
  const [isKenoModalOpen, setIsKenoModalOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const gameTypes = [{
    title: "Keno",
    description: "Классическая лотерейная игра с современным интерфейсом и настраиваемым RTP",
    features: {
      volatility: 3,
      rtp: "94-97%",
      platforms: ["Web", "Mobile", "Desktop"],
      languages: [<RussiaFlag size={20} />, <USAFlag size={20} />, <GermanyFlag size={20} />],
      maxMultiplier: "1000x"
    },
    badge: "Популярное",
    image: "/lovable-uploads/8ae2ba9a-e0ad-4bcd-a93e-b8aec9370099.png"
  }, {
    title: "Space Ball",
    description: "Crash-игра с уникальным дизайном и механиками",
    features: {
      volatility: 5,
      rtp: "98%",
      platforms: ["Web", "Mobile"],
      languages: [<RussiaFlag size={20} />, <USAFlag size={20} />],
      maxMultiplier: "x50000"
    },
    badge: "Скоро в продаже",
    image: "/lovable-uploads/b17f2fcd-8c2a-4f79-9914-3e3373e0a661.png"
  }, {
    title: "Arrow Shot",
    description: "Crash-игра с уникальным дизайном и механиками",
    features: {
      volatility: 5,
      rtp: "98%",
      platforms: ["Web", "Mobile"],
      languages: [<RussiaFlag size={20} />, <USAFlag size={20} />],
      maxMultiplier: "x50000"
    },
    badge: "Скоро в продаже",
    image: "/lovable-uploads/arrow-shot-game.png"
  }, {
    title: "Hilo",
    description: "Увлекательная карточная игра с простыми правилами и высокой отдачей",
    features: {
      volatility: 4,
      rtp: "96-98%",
      platforms: ["Web", "Mobile"],
      languages: [<RussiaFlag size={20} />, <USAFlag size={20} />],
      maxMultiplier: "2500x"
    },
    badge: "Скоро в продаже",
    image: "/lovable-uploads/e380c354-c9a4-40de-a8be-22c8b6d81ccf.png"
  }];
  return <section id="games" className="min-h-screen flex items-center justify-center relative snap-section">
      <div className="container mx-auto px-6 w-full">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Наши</span>{" "}
            <span className="text-transparent bg-gradient-accent bg-clip-text">решения</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-tight">
            Портфолио готовых игровых продуктов с современными технологиями 
            и гибкими настройками для каждого оператора.
          </p>
        </div>


        {/* Game Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gameTypes.map((game, index) => <div key={index} className="game-card animate-fade-in rounded-xl flex flex-col group overflow-hidden relative will-change-transform" style={{
          animationDelay: `${index * 0.15}s`
        }}>
              {/* Image section */}
              <div className="game-image relative h-56 transition-all duration-500 transform-gpu group-hover:scale-y-0 group-hover:opacity-0 origin-top">
                <img src={game.image} alt={`${game.title} game interface`} className="w-full h-56 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/60"></div>
                <div className="absolute top-4 left-4 transition-opacity duration-300 group-hover:opacity-0">
                  <div className="game-badge px-3 py-1 rounded-full text-sm">
                    {game.badge}
                  </div>
                </div>
              </div>
              
              {/* Content section */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex-1 space-y-4 pb-6">
                  {/* Upper content that moves up on hover */}
                  <div className="relative transition-all duration-500 transform-gpu will-change-transform group-hover:-translate-y-56">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2 tracking-tight">
                        {game.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {game.description}
                      </p>
                    </div>
                    
                    {/* Features list - показывается при наведении */}
                    <div className="opacity-0 transform-gpu transition-all duration-500 group-hover:opacity-100 space-y-3 absolute inset-x-0 top-24 z-10 pointer-events-none group-hover:pointer-events-auto">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground">Волатильность:</span>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-3 h-3 ${i < game.features.volatility ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} />
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>RTP:</span>
                        <span className="text-foreground">{game.features.rtp}</span>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground flex-wrap">
                        <span>Адаптивный дизайн:</span>
                        <span className="text-foreground">{game.features.platforms.join(", ")}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>Языки:</span>
                        <div className="flex gap-2">
                          {game.features.languages.map((flag, i) => (
                            <span key={i}>{flag}</span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>Макс. множитель:</span>
                        <span className="text-green-400 font-semibold">{game.features.maxMultiplier}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto pt-6 border-t border-border/50 transition-all duration-300">
                  {game.title === "Keno" ? (
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-2">
                      <button onClick={() => setIsKenoModalOpen(true)} className="bg-gradient-to-r from-primary/90 via-primary-glow/90 to-accent/90 text-primary-foreground font-semibold flex-1 py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-center text-sm sm:text-base border border-primary-glow/30 shadow-lg hover:shadow-xl hover:from-primary hover:via-primary-glow hover:to-accent transition-all duration-300 hover:scale-[1.02]">
                        Играть!
                      </button>
                      <Link to="/keno" className="outline-button py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-center text-sm sm:text-base whitespace-nowrap">
                        Подробнее
                      </Link>
                    </div>
                  ) : game.title === "Space Ball" || game.title === "Arrow Shot" ? (
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-2">
                      <button onClick={() => setSelectedGame(game)} className="outline-button flex-1 py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-center text-sm sm:text-base">
                        Подробнее
                      </button>
                    </div>
                  ) : game.title === "Hilo" ? (
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-2">
                      <Link to="/hilo" className="outline-button flex-1 py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-center text-sm sm:text-base">
                        Подробнее
                      </Link>
                    </div>
                  ) : (
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-2">
                      <button onClick={() => setSelectedGame(game)} className="outline-button flex-1 py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-center text-sm sm:text-base">
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
                  <h3 className="text-lg font-semibold mb-3">Характеристики игры</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <span className="text-sm text-muted-foreground">Волатильность</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < selectedGame.features.volatility ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <span className="text-sm text-muted-foreground">RTP</span>
                      <span className="text-sm font-medium">{selectedGame.features.rtp}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <span className="text-sm text-muted-foreground">Платформы</span>
                      <span className="text-sm font-medium">{selectedGame.features.platforms.join(", ")}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <span className="text-sm text-muted-foreground">Языки</span>
                      <div className="flex gap-2">
                        {selectedGame.features.languages.map((flag, i) => (
                          <span key={i}>{flag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <span className="text-sm text-muted-foreground">Макс. множитель</span>
                      <span className="text-sm font-semibold text-green-400">{selectedGame.features.maxMultiplier}</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <div className="flex gap-4">
                    <Button onClick={() => setSelectedGame(null)} className="accent-gradient glow-effect font-semibold flex-1">
                      Закрыть
                    </Button>
                    <Button onClick={() => {
                      setSelectedGame(null);
                      setTimeout(() => {
                        const contactSection = document.querySelector('#contact');
                        if (contactSection) {
                          const elementPosition = contactSection.getBoundingClientRect().top;
                          const offsetPosition = elementPosition + window.pageYOffset - 100;
                          
                          window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                          });
                        }
                      }, 100);
                    }} className="accent-gradient glow-effect font-semibold flex-1">
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