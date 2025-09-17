import { useState } from 'react';

import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { GermanyFlag, RussiaFlag, USAFlag } from '@/components/ui/flag-icons';

interface GameType {
  title: string;
  description: string;
  features: {
    volatility: number;
    rtp: string;
    platforms: string[];
    languages: React.ReactElement[];
    maxMultiplier: string;
  };
  badge: string;
  image: string;
}

const Games = () => {
  const [isKenoModalOpen, setIsKenoModalOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState<GameType | null>(null);
  const gameTypes = [
    {
      title: 'Keno',
      description: 'Классическая лотерейная игра с современным интерфейсом и настраиваемым RTP',
      features: {
        volatility: 3,
        rtp: '94-97%',
        platforms: ['Web', 'Mobile', 'Desktop'],
        languages: [
          <RussiaFlag key="ru" size={20} />,
          <USAFlag key="en" size={20} />,
          <GermanyFlag key="de" size={20} />,
        ],
        maxMultiplier: '1000x',
      },
      badge: 'Популярное',
      image: '/lovable-uploads/8ae2ba9a-e0ad-4bcd-a93e-b8aec9370099.png',
    },
    {
      title: 'Space Ball',
      description: 'Crash-игра с уникальным дизайном и механиками',
      features: {
        volatility: 5,
        rtp: '98%',
        platforms: ['Web', 'Mobile'],
        languages: [<RussiaFlag key="ru" size={20} />, <USAFlag key="en" size={20} />],
        maxMultiplier: 'x50000',
      },
      badge: 'Скоро в продаже',
      image: '/lovable-uploads/b17f2fcd-8c2a-4f79-9914-3e3373e0a661.png',
    },
    {
      title: 'Arrow Shot',
      description: 'Crash-игра с уникальным дизайном и механиками',
      features: {
        volatility: 5,
        rtp: '98%',
        platforms: ['Web', 'Mobile'],
        languages: [<RussiaFlag key="ru" size={20} />, <USAFlag key="en" size={20} />],
        maxMultiplier: 'x50000',
      },
      badge: 'Скоро в продаже',
      image: '/lovable-uploads/arrow-shot-game.png',
    },
    {
      title: 'Hilo',
      description: 'Увлекательная карточная игра с простыми правилами и высокой отдачей',
      features: {
        volatility: 4,
        rtp: '96-98%',
        platforms: ['Web', 'Mobile'],
        languages: [<RussiaFlag key="ru" size={20} />, <USAFlag key="en" size={20} />],
        maxMultiplier: '2500x',
      },
      badge: 'Скоро в продаже',
      image: '/lovable-uploads/e380c354-c9a4-40de-a8be-22c8b6d81ccf.png',
    },
  ];
  return (
    <section
      id="games"
      className="snap-section relative flex min-h-screen items-center justify-center"
    >
      <div className="container mx-auto w-full px-6">
        <div className="mb-16 animate-fade-in text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            <span className="text-foreground">Наши</span>{' '}
            <span className="bg-gradient-accent bg-clip-text text-transparent">решения</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-tight text-muted-foreground md:text-xl">
            Портфолио готовых игровых продуктов с современными технологиями и гибкими настройками
            для каждого оператора.
          </p>
        </div>

        {/* Game Categories */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {gameTypes.map((game, index) => (
            <div
              key={index}
              className="game-card group relative flex animate-fade-in flex-col overflow-hidden rounded-xl will-change-transform"
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              {/* Image section */}
              <div className="game-image relative h-56 origin-top transform-gpu transition-all duration-500 group-hover:scale-y-0 group-hover:opacity-0">
                <img
                  src={game.image}
                  alt={`${game.title} game interface`}
                  className="h-56 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/60" />
                <div className="absolute left-4 top-4 transition-opacity duration-300 group-hover:opacity-0">
                  <div className="game-badge rounded-full px-3 py-1 text-sm">{game.badge}</div>
                </div>
              </div>

              {/* Content section */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex-1 space-y-4 pb-6">
                  {/* Upper content that moves up on hover */}
                  <div className="relative transform-gpu transition-all duration-500 will-change-transform group-hover:-translate-y-56">
                    <div>
                      <h3 className="mb-2 text-2xl font-bold tracking-tight text-foreground">
                        {game.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {game.description}
                      </p>
                    </div>

                    {/* Features list - показывается при наведении */}
                    <div className="pointer-events-none absolute inset-x-0 top-24 z-10 transform-gpu space-y-3 opacity-0 transition-all duration-500 group-hover:pointer-events-auto group-hover:opacity-100">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground">Волатильность:</span>
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i < game.features.volatility ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>RTP:</span>
                        <span className="text-foreground">{game.features.rtp}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>Платформы:</span>
                        <span className="text-foreground">
                          {game.features.platforms.join(', ')}
                        </span>
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
                        <span className="font-semibold text-green-400">
                          {game.features.maxMultiplier}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto border-t border-border/50 pt-6 transition-all duration-300">
                  {game.title === 'Keno' ? (
                    <div className="flex flex-col gap-2 sm:flex-row sm:gap-2">
                      <button
                        onClick={() => setIsKenoModalOpen(true)}
                        className="accent-gradient glow-effect flex-1 rounded-lg px-3 py-2 text-center text-sm font-semibold sm:px-4 sm:py-3 sm:text-base"
                      >
                        Играть!
                      </button>
                      <Link
                        to="/keno"
                        className="outline-button whitespace-nowrap rounded-lg px-3 py-2 text-center text-sm sm:px-4 sm:py-3 sm:text-base"
                      >
                        Подробнее
                      </Link>
                    </div>
                  ) : game.title === 'Space Ball' || game.title === 'Arrow Shot' ? (
                    <div className="flex flex-col gap-2 sm:flex-row sm:gap-2">
                      <button
                        onClick={() => setSelectedGame(game)}
                        className="outline-button flex-1 rounded-lg px-3 py-2 text-center text-sm sm:px-4 sm:py-3 sm:text-base"
                      >
                        Подробнее
                      </button>
                    </div>
                  ) : game.title === 'Hilo' ? (
                    <div className="flex flex-col gap-2 sm:flex-row sm:gap-2">
                      <Link
                        to="/hilo"
                        className="outline-button flex-1 rounded-lg px-3 py-2 text-center text-sm sm:px-4 sm:py-3 sm:text-base"
                      >
                        Подробнее
                      </Link>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2 sm:flex-row sm:gap-2">
                      <button
                        onClick={() => setSelectedGame(game)}
                        className="outline-button flex-1 rounded-lg px-3 py-2 text-center text-sm sm:px-4 sm:py-3 sm:text-base"
                      >
                        Подробнее
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
      <Dialog open={Boolean(selectedGame)} onOpenChange={() => setSelectedGame(null)}>
        <DialogContent className="max-w-2xl">
          {selectedGame && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-foreground">{selectedGame?.title}</h2>
                <div className="game-badge rounded-full px-3 py-1 text-sm">
                  {selectedGame?.badge}
                </div>
              </div>

              <div className="overflow-hidden rounded-lg">
                <img
                  src={selectedGame?.image}
                  alt={`${selectedGame?.title} game interface`}
                  className="h-64 w-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Описание</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {selectedGame?.description}
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-semibold">Характеристики игры</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
                      <span className="text-sm text-muted-foreground">Волатильность</span>
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < (selectedGame?.features.volatility ?? 0) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
                      <span className="text-sm text-muted-foreground">RTP</span>
                      <span className="text-sm font-medium">{selectedGame?.features.rtp}</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
                      <span className="text-sm text-muted-foreground">Платформы</span>
                      <span className="text-sm font-medium">
                        {selectedGame?.features.platforms.join(', ')}
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
                      <span className="text-sm text-muted-foreground">Языки</span>
                      <div className="flex gap-2">
                        {selectedGame?.features.languages.map((flag, i) => (
                          <span key={i}>{flag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
                      <span className="text-sm text-muted-foreground">Макс. множитель</span>
                      <span className="text-sm font-semibold text-green-400">
                        {selectedGame.features.maxMultiplier}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex gap-4">
                    <Button
                      onClick={() => setSelectedGame(null)}
                      className="accent-gradient glow-effect flex-1 font-semibold"
                    >
                      Закрыть
                    </Button>
                    <Button
                      onClick={() => {
                        setSelectedGame(null);
                        setTimeout(() => {
                          const contactSection = document.querySelector('#contact');
                          if (contactSection) {
                            const elementPosition = contactSection.getBoundingClientRect().top;
                            const offsetPosition = elementPosition + window.pageYOffset - 100;

                            window.scrollTo({
                              top: offsetPosition,
                              behavior: 'smooth',
                            });
                          }
                        }, 100);
                      }}
                      className="accent-gradient glow-effect flex-1 font-semibold"
                    >
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
        <DialogContent className="h-[95vh] w-full max-w-7xl p-0">
          <iframe
            src="https://dev-dot-casino-games-462502.lm.r.appspot.com/keno"
            className="h-full w-full rounded-lg border-0"
            title="Keno Demo Game"
            allow="fullscreen"
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};
export default Games;
