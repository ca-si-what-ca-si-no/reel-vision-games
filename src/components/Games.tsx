import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { GermanyFlag, RussiaFlag, USAFlag } from "@/components/ui/flag-icons";
import { Star, Zap, Clock } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

// Helper to get correct public path with base URL
const getPublicPath = (path: string) => {
  const base = import.meta.env.BASE_URL;
  return base + path.replace(/^\//, '');
};

const Games = () => {
  const { t } = useLanguage();
  const [selectedGame, setSelectedGame] = useState(null);
  const gameTypes = [
    {
      title: "Keno",
      description: t('games.keno.description'),
      features: {
        volatility: 3,
        rtp: "94-97%",
        platforms: ["Web", "Mobile", "Desktop"],
        languages: [
          <RussiaFlag size={20} />,
          <USAFlag size={20} />,
          <GermanyFlag size={20} />,
        ],
        maxMultiplier: "1000x",
      },
      badge: t('games.badge.popular'),
      image: getPublicPath("lovable-uploads/8ae2ba9a-e0ad-4bcd-a93e-b8aec9370099.png"),
    },
    {
      title: "Space Ball",
      description: t('games.crash.description'),
      features: {
        volatility: 5,
        rtp: "98%",
        platforms: ["Web", "Mobile"],
        languages: [<RussiaFlag size={20} />, <USAFlag size={20} />],
        maxMultiplier: "x50000",
      },
      badge: t('games.badge.coming_soon'),
      image: getPublicPath("lovable-uploads/b17f2fcd-8c2a-4f79-9914-3e3373e0a661.png"),
    },
    {
      title: "Arrow Shot",
      description: t('games.crash.description'),
      features: {
        volatility: 5,
        rtp: "98%",
        platforms: ["Web", "Mobile"],
        languages: [<RussiaFlag size={20} />, <USAFlag size={20} />],
        maxMultiplier: "x50000",
      },
      badge: t('games.badge.coming_soon'),
      image: getPublicPath("lovable-uploads/arrow-shot-game.png"),
    },
    {
      title: "Hilo",
      description: t('games.hilo.description'),
      features: {
        volatility: 4,
        rtp: "96-98%",
        platforms: ["Web", "Mobile"],
        languages: [<RussiaFlag size={20} />, <USAFlag size={20} />],
        maxMultiplier: "2500x",
      },
      badge: t('games.badge.coming_soon'),
      image: getPublicPath("lovable-uploads/e380c354-c9a4-40de-a8be-22c8b6d81ccf.png"),
    },
  ];
  return (
    <section
      id="games"
      className="min-h-screen flex items-center justify-center relative py-24"
    >
      {/* Floating decorative elements */}
      <div
        className="absolute top-16 left-12 animate-float opacity-40 z-10"
        style={{
          animationDelay: "0s",
        }}
      >
        <Star className="w-5 h-5 text-accent/40" />
      </div>
      <div
        className="absolute top-1/3 right-16 animate-float opacity-35 z-10"
        style={{
          animationDelay: "1s",
        }}
      >
        <Zap className="w-6 h-6 text-primary-glow/35" />
      </div>
      <div
        className="absolute bottom-1/4 left-1/4 animate-float opacity-30 z-10"
        style={{
          animationDelay: "2s",
        }}
      >
        <Star className="w-4 h-4 text-primary/30" />
      </div>
      <div
        className="absolute top-20 right-1/3 animate-float opacity-25 z-10"
        style={{
          animationDelay: "2.5s",
        }}
      >
        <Star className="w-3 h-3 text-accent/25" />
      </div>
      <div
        className="absolute bottom-16 right-20 animate-float opacity-40 z-10"
        style={{
          animationDelay: "3s",
        }}
      >
        <Zap className="w-5 h-5 text-primary/40" />
      </div>
      <div className="max-w-[1200px] mx-auto px-6 w-full">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">{t('games.title.our')}</span>{" "}
            <span className="text-transparent bg-gradient-accent bg-clip-text">
              {t('games.title.games')}
            </span>
          </h2>
        </div>

        {/* Game Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gameTypes.map((game, index) => (
            <div
              key={index}
              className="game-card animate-fade-in rounded-xl flex flex-col overflow-hidden relative will-change-transform"
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              {/* Image section */}
              <div className="game-image relative h-56">
                <img
                  src={game.image}
                  alt={`${game.title} game interface`}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div className="game-badge px-3 py-1 rounded-full text-sm">
                    {game.badge}
                  </div>
                </div>
              </div>

              {/* Content section */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex-1 space-y-4 pb-6">
                  {/* Content always visible */}
                  <div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2 tracking-tight">
                        {game.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {game.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-border/50 transition-all duration-300">
                  {game.title === "Keno" ? (
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-2 items-stretch">
                      <Link to="/keno" className="w-full">
                        <Button
                          variant="gaming"
                          className="w-full h-10 sm:h-12 px-3 sm:px-4 rounded-lg text-sm sm:text-base"
                        >
                          {t('games.learn_more')}
                        </Button>
                      </Link>
                    </div>
                  ) : (
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-2">
                      <button
                        disabled
                        className="outline-button flex-1 py-2 sm:py-3 px-3 sm:px-4 rounded-lg text-center text-sm sm:text-base opacity-50 cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        <Clock className="w-4 h-4" />
                        {t('games.button.coming_soon')}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Game Info Modal */}
      <Dialog open={!!selectedGame} onOpenChange={() => setSelectedGame(null)}>
        <DialogContent className="max-w-2xl">
          {selectedGame && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-foreground">
                  {selectedGame.title}
                </h2>
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
                  <h3 className="text-lg font-semibold mb-2">{t('games.dialog.description')}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedGame.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    {t('games.dialog.features')}
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <span className="text-sm text-muted-foreground">
                        {t('games.dialog.volatility')}
                      </span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < selectedGame.features.volatility ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <span className="text-sm text-muted-foreground">RTP</span>
                      <span className="text-sm font-medium">
                        {selectedGame.features.rtp}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <span className="text-sm text-muted-foreground">
                        {t('games.dialog.platforms')}
                      </span>
                      <span className="text-sm font-medium">
                        {selectedGame.features.platforms.join(", ")}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <span className="text-sm text-muted-foreground">
                        {t('games.dialog.languages')}
                      </span>
                      <div className="flex gap-2">
                        {selectedGame.features.languages.map((flag, i) => (
                          <span key={i}>{flag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <span className="text-sm text-muted-foreground">
                        {t('games.dialog.max_multiplier')}
                      </span>
                      <span className="text-sm font-semibold text-green-400">
                        {selectedGame.features.maxMultiplier}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex gap-4">
                    <Button
                      onClick={() => setSelectedGame(null)}
                      className="accent-gradient glow-effect font-semibold flex-1"
                    >
                      {t('games.dialog.close')}
                    </Button>
                    <Button
                      onClick={() => {
                        setSelectedGame(null);
                        setTimeout(() => {
                          const contactSection =
                            document.querySelector("#contact");
                          if (contactSection) {
                            const elementPosition =
                              contactSection.getBoundingClientRect().top;
                            const offsetPosition =
                              elementPosition + window.pageYOffset - 100;
                            window.scrollTo({
                              top: offsetPosition,
                              behavior: "smooth",
                            });
                          }
                        }, 100);
                      }}
                      className="accent-gradient glow-effect font-semibold flex-1"
                    >
                      {t('games.dialog.request_integration')}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
export default Games;
