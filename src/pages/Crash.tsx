import { Button } from "@/components/ui/button";
import { Star, ArrowLeft, Smartphone, Monitor, Tablet, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Crash = () => {
  const [selectedDevice, setSelectedDevice] = useState('mobile');
  const [isDesktopModalOpen, setIsDesktopModalOpen] = useState(false);
  const [isTabletModalOpen, setIsTabletModalOpen] = useState(false);
  const [activeScreenshot, setActiveScreenshot] = useState<string | null>(null);

  // Прокручиваем страницу наверх при загрузке
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gameData = {
    title: "Crash Games Pack",
    description: "Полный пакет краш-игр с уникальными механиками и дизайном",
    features: {
      volatility: 5,
      rtp: "95-99%",
      platforms: ["Web", "Mobile", "Desktop", "API"],
      languages: ["RU", "EN", "DE", "FR"],
      maxMultiplier: "10000x"
    },
    badge: "Новинка",
    image: "/lovable-uploads/b17f2fcd-8c2a-4f79-9914-3e3373e0a661.png"
  };

  return (
    <div className="min-h-screen">
      {/* Animated Background */}
      <div className="animated-background">
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="geometric-shape"></div>
        <div className="geometric-shape"></div>
        <div className="geometric-shape"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="animated-grid"></div>
      </div>
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link to="/#games" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Назад к играм
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Game Information */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <h1 className="text-4xl font-bold text-foreground">{gameData.title}</h1>
                  <div className="game-badge px-3 py-1 rounded-full text-sm">
                    {gameData.badge}
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Описание игры</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {gameData.description}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Crash Games Pack - это полный набор краш-игр с различными механиками и уникальным дизайном. 
                    Игроки делают ставки и наблюдают за ростом множителя, который может в любой момент "упасть". 
                    Цель - забрать выигрыш до того, как произойдет краш. Чем дольше вы ждете, тем больше множитель, 
                    но и тем выше риск потерять всё!
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Характеристики игры</h2>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                      <span className="text-muted-foreground">Волатильность</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-5 h-5 ${i < gameData.features.volatility ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                      <span className="text-muted-foreground">RTP</span>
                      <span className="font-medium text-lg">{gameData.features.rtp}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                      <span className="text-muted-foreground">Платформы</span>
                      <span className="font-medium">{gameData.features.platforms.join(", ")}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                      <span className="text-muted-foreground">Языки</span>
                      <span className="font-medium">{gameData.features.languages.join(", ")}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                      <span className="text-muted-foreground">Макс. множитель</span>
                      <span className="font-semibold text-green-400 text-lg">{gameData.features.maxMultiplier}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Особенности</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Высокий RTP от 95% до 99%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Уникальные графические эффекты и анимации</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Поддержка API для интеграции</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Мультиязычная поддержка</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Экстремальные множители до 10000x</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Скриншоты игры</h2>
                  <div className="space-y-3">
                    {/* Большой выигрыш */}
                    <div className="border border-border rounded-lg overflow-hidden">
                      <button 
                        onClick={() => setActiveScreenshot(activeScreenshot === 'bigwin' ? null : 'bigwin')}
                        className="w-full flex items-center justify-between p-4 bg-muted/30 hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"></div>
                          <span className="font-medium text-lg">Большой выигрыш</span>
                        </div>
                        {activeScreenshot === 'bigwin' ? (
                          <ChevronUp className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        )}
                      </button>
                      {activeScreenshot === 'bigwin' && (
                        <div className="p-4 border-t border-border text-center">
                          <img 
                            src={gameData.image} 
                            alt="Crash game big win screen" 
                            className="w-full h-64 object-cover rounded-lg"
                          />
                          <p className="text-base text-muted-foreground mt-3">
                            Экран с большим выигрышем и высоким множителем
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Краш */}
                    <div className="border border-border rounded-lg overflow-hidden">
                      <button 
                        onClick={() => setActiveScreenshot(activeScreenshot === 'crash' ? null : 'crash')}
                        className="w-full flex items-center justify-between p-4 bg-muted/30 hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-400 to-rose-500"></div>
                          <span className="font-medium text-lg">Краш</span>
                        </div>
                        {activeScreenshot === 'crash' ? (
                          <ChevronUp className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        )}
                      </button>
                      {activeScreenshot === 'crash' && (
                        <div className="p-4 border-t border-border text-center">
                          <img 
                            src={gameData.image} 
                            alt="Crash game crash screen" 
                            className="w-full h-64 object-cover rounded-lg"
                          />
                          <p className="text-base text-muted-foreground mt-3">
                            Экран краша игры
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Игровой процесс */}
                    <div className="border border-border rounded-lg overflow-hidden">
                      <button 
                        onClick={() => setActiveScreenshot(activeScreenshot === 'gameplay' ? null : 'gameplay')}
                        className="w-full flex items-center justify-between p-4 bg-muted/30 hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500"></div>
                          <span className="font-medium text-lg">Игровой процесс</span>
                        </div>
                        {activeScreenshot === 'gameplay' ? (
                          <ChevronUp className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        )}
                      </button>
                       {activeScreenshot === 'gameplay' && (
                         <div className="p-4 border-t border-border text-center">
                           <img 
                             src={gameData.image} 
                             alt="Crash game gameplay screen" 
                             className="w-full h-64 object-cover rounded-lg"
                           />
                           <p className="text-base text-muted-foreground mt-3">
                             Основной игровой интерфейс
                           </p>
                         </div>
                       )}
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t">
                  <div className="flex gap-4">
                    <Link to="/#games" className="flex-1">
                      <Button variant="outline" className="w-full">
                        Назад к играм
                      </Button>
                    </Link>
                    <Link to="/#contact" className="flex-1">
                      <Button className="w-full">
                        Запросить интеграцию
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Demo Game */}
            <div className="lg:sticky lg:top-16 lg:self-start">
              <div className="bg-muted/20 rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-6 text-center">Демо-версия скоро</h2>
                
                <div className="flex justify-center items-center h-96 bg-muted/30 rounded-lg">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-accent flex items-center justify-center">
                      <Star className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Скоро в продаже</h3>
                    <p className="text-muted-foreground max-w-sm">
                      Мы работаем над финальной версией игры. 
                      Демо будет доступно в ближайшее время.
                    </p>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground text-center mt-4">
                  Свяжитесь с нами для получения дополнительной информации о релизе.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Crash;