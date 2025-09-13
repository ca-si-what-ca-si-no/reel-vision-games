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
                  <h2 className="text-2xl font-semibold mb-6">Ключевые игровые моменты</h2>
                  <div className="space-y-4">
                    
                    {/* Большой выигрыш */}
                    <div className="gaming-border card-shadow rounded-lg overflow-hidden smooth-transition hover:shadow-glow">
                      <button 
                        onClick={() => setActiveScreenshot(activeScreenshot === 'bigwin' ? null : 'bigwin')}
                        className="w-full flex items-center justify-between p-6 bg-muted/20 hover:bg-muted/30 transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-400/20 to-orange-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
                                <span className="text-white text-xs font-bold">$</span>
                              </div>
                            </div>
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
                              <span className="text-xs font-bold text-black">↑</span>
                            </div>
                          </div>
                          <div className="text-left">
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                              Крупный выигрыш
                            </h3>
                            <div className="flex items-center gap-4 mt-1">
                              <span className="text-sm text-muted-foreground">Множитель 5847x перед крашем</span>
                              <div className="flex items-center gap-1">
                                <span className="text-xs bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded">Множитель: 5847x</span>
                                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">Вероятность: 0.017%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {activeScreenshot === 'bigwin' ? (
                          <ChevronUp className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                        )}
                      </button>
                      {activeScreenshot === 'bigwin' && (
                        <div className="border-t border-border/50">
                          <div className="p-6 bg-gradient-to-br from-background via-background to-muted/10">
                            <div className="space-y-6">
                              <img 
                                src={gameData.image} 
                                alt="Crash game big win screen" 
                                className="w-full h-64 object-cover rounded-lg border border-border/50"
                              />
                              
                              <div>
                                <h4 className="font-semibold text-foreground mb-2">Описание момента</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                  Игрок поймал редкий момент - множитель достиг невероятных 5847x! 
                                  Это один из самых высоких множителей в истории игры. Игрок успел 
                                  забрать ставку за секунды до краша, получив огромный выигрыш.
                                </p>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                                  <span className="text-yellow-400 block mb-1 text-sm">Множитель</span>
                                  <span className="text-2xl font-bold text-yellow-400">5,847x</span>
                                  <div className="text-xs text-yellow-400/70 mt-1">+584,600% от ставки</div>
                                </div>
                                <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-lg">
                                  <span className="text-green-400 block mb-1 text-sm">Выигрыш</span>
                                  <span className="text-2xl font-bold text-green-400">584,700₽</span>
                                  <div className="text-xs text-green-400/70 mt-1">Ставка: 100₽</div>
                                </div>
                                <div className="bg-purple-500/10 border border-purple-500/20 p-4 rounded-lg">
                                  <span className="text-purple-400 block mb-1 text-sm">Время краша</span>
                                  <span className="text-2xl font-bold text-purple-400">58.47s</span>
                                  <div className="text-xs text-purple-400/70 mt-1">Секунд полета</div>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 p-4 rounded-lg">
                                  <h5 className="font-medium text-foreground mb-3 flex items-center gap-2">
                                    🚀 Статистика полета:
                                  </h5>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex justify-between items-center">
                                      <span className="text-muted-foreground">Вероятность 5000x+:</span>
                                      <span className="text-yellow-400 font-medium">0.02%</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <span className="text-muted-foreground">Средний краш:</span>
                                      <span className="text-red-400 font-medium">2.37x</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <span className="text-muted-foreground">Рекорд сессии:</span>
                                      <span className="text-purple-400 font-medium">8,924x</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <span className="text-muted-foreground">Игроков забрали:</span>
                                      <span className="text-green-400 font-medium">3 из 47</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 p-4 rounded-lg">
                                  <h5 className="font-medium text-foreground mb-3 flex items-center gap-2">
                                    🎮 Элементы интерфейса:
                                  </h5>
                                  <div className="space-y-2 text-sm">
                                    <div className="text-muted-foreground">• Растущий график множителя</div>
                                    <div className="text-muted-foreground">• Кнопка "Забрать" с текущим выигрышем</div>
                                    <div className="text-muted-foreground">• Список ставок других игроков</div>
                                    <div className="text-muted-foreground">• Звуковые эффекты нарастания</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Краш */}
                    <div className="gaming-border card-shadow rounded-lg overflow-hidden smooth-transition hover:shadow-glow">
                      <button 
                        onClick={() => setActiveScreenshot(activeScreenshot === 'crash' ? null : 'crash')}
                        className="w-full flex items-center justify-between p-6 bg-muted/20 hover:bg-muted/30 transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-400/20 to-rose-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-400 to-rose-500 flex items-center justify-center">
                              <span className="text-white text-xs font-bold">💥</span>
                            </div>
                          </div>
                          <div className="text-left">
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                              Краш в критический момент
                            </h3>
                            <div className="flex items-center gap-4 mt-1">
                              <span className="text-sm text-muted-foreground">Краш на 1.47x - почти дотянули до 1.5x</span>
                              <div className="flex items-center gap-1">
                                <span className="text-xs bg-red-400/20 text-red-400 px-2 py-1 rounded">Краш: 1.47x</span>
                                <span className="text-xs bg-orange-400/20 text-orange-400 px-2 py-1 rounded">Потери: 15 игроков</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {activeScreenshot === 'crash' ? (
                          <ChevronUp className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                        )}
                      </button>
                      {activeScreenshot === 'crash' && (
                        <div className="border-t border-border/50">
                          <div className="p-6 bg-gradient-to-br from-background via-background to-muted/10">
                            <div className="space-y-6">
                              <img 
                                src={gameData.image} 
                                alt="Crash game crash screen" 
                                className="w-full h-64 object-cover rounded-lg border border-border/50"
                              />
                              
                              <div>
                                <h4 className="font-semibold text-foreground mb-2">Описание момента</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                  Драматический момент краша! Множитель остановился на 1.47x, всего в 0.03x от 
                                  психологически важной отметки 1.50x. Многие игроки рассчитывали на этот уровень 
                                  и не успели забрать ставки. Такие моменты создают особое напряжение в игре.
                                </p>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                                  <span className="text-red-400 block mb-1 text-sm">Точка краша</span>
                                  <span className="text-2xl font-bold text-red-400">1.47x</span>
                                  <div className="text-xs text-red-400/70 mt-1">Внезапный обрыв</div>
                                </div>
                                <div className="bg-orange-500/10 border border-orange-500/20 p-4 rounded-lg">
                                  <span className="text-orange-400 block mb-1 text-sm">Потери игроков</span>
                                  <span className="text-2xl font-bold text-orange-400">15</span>
                                  <div className="text-xs text-orange-400/70 mt-1">Не забрали ставки</div>
                                </div>
                                <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                                  <span className="text-yellow-400 block mb-1 text-sm">Время до краша</span>
                                  <span className="text-2xl font-bold text-yellow-400">1.47s</span>
                                  <div className="text-xs text-yellow-400/70 mt-1">Секунд полета</div>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 p-4 rounded-lg">
                                  <h5 className="font-medium text-foreground mb-3 flex items-center gap-2">
                                    📊 Анализ раунда:
                                  </h5>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex justify-between items-center">
                                      <span className="text-muted-foreground">Всего игроков в раунде:</span>
                                      <span className="text-blue-400 font-medium">23</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <span className="text-muted-foreground">Забрали вовремя:</span>
                                      <span className="text-green-400 font-medium">8 игроков</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <span className="text-muted-foreground">Общая сумма ставок:</span>
                                      <span className="text-yellow-400 font-medium">12,400₽</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <span className="text-muted-foreground">Средний автокеш:</span>
                                      <span className="text-cyan-400 font-medium">1.52x</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 p-4 rounded-lg">
                                  <h5 className="font-medium text-foreground mb-3 flex items-center gap-2">
                                    ⚡ Ключевые элементы:
                                  </h5>
                                  <div className="space-y-2 text-sm">
                                    <div className="text-muted-foreground">• Красный экран краша</div>
                                    <div className="text-muted-foreground">• Анимация взрыва ракеты</div>
                                    <div className="text-muted-foreground">• Статистика потерянных ставок</div>
                                    <div className="text-muted-foreground">• Таймер до следующего раунда</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Игровой процесс */}
                    <div className="gaming-border card-shadow rounded-lg overflow-hidden smooth-transition hover:shadow-glow">
                      <button 
                        onClick={() => setActiveScreenshot(activeScreenshot === 'gameplay' ? null : 'gameplay')}
                        className="w-full flex items-center justify-between p-6 bg-muted/20 hover:bg-muted/30 transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center transform rotate-45">
                              <div className="w-3 h-3 bg-white rounded-sm transform -rotate-45"></div>
                            </div>
                          </div>
                          <div className="text-left">
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                              Активный игровой процесс
                            </h3>
                            <div className="flex items-center gap-4 mt-1">
                              <span className="text-sm text-muted-foreground">Ракета набирает высоту - 2.34x</span>
                              <div className="flex items-center gap-1">
                                <span className="text-xs bg-blue-400/20 text-blue-400 px-2 py-1 rounded">Текущий: 2.34x</span>
                                <span className="text-xs bg-green-400/20 text-green-400 px-2 py-1 rounded">Ставка: 500₽</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {activeScreenshot === 'gameplay' ? (
                          <ChevronUp className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                        )}
                      </button>
                      {activeScreenshot === 'gameplay' && (
                        <div className="border-t border-border/50">
                          <div className="p-6 bg-gradient-to-br from-background via-background to-muted/10">
                            <div className="space-y-6">
                              <img 
                                src={gameData.image} 
                                alt="Crash game gameplay screen" 
                                className="w-full h-64 object-cover rounded-lg border border-border/50"
                              />
                              
                              <div>
                                <h4 className="font-semibold text-foreground mb-2">Описание момента</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                  Напряженный момент активной игры! Ракета уже достигла множителя 2.34x и продолжает 
                                  подъем. Игрок поставил 500₽ и сейчас может забрать 1,170₽. Каждую секунду выигрыш 
                                  растет, но увеличивается и риск краша. Решение нужно принимать быстро!
                                </p>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
                                  <span className="text-blue-400 block mb-1 text-sm">Текущий множитель</span>
                                  <span className="text-2xl font-bold text-blue-400">2.34x</span>
                                  <div className="text-xs text-blue-400/70 mt-1">Растет каждую секунду</div>
                                </div>
                                <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-lg">
                                  <span className="text-green-400 block mb-1 text-sm">Возможный выигрыш</span>
                                  <span className="text-2xl font-bold text-green-400">1,170₽</span>
                                  <div className="text-xs text-green-400/70 mt-1">Ставка: 500₽</div>
                                </div>
                                <div className="bg-purple-500/10 border border-purple-500/20 p-4 rounded-lg">
                                  <span className="text-purple-400 block mb-1 text-sm">Время полета</span>
                                  <span className="text-2xl font-bold text-purple-400">2.3s</span>
                                  <div className="text-xs text-purple-400/70 mt-1">Секунд в воздухе</div>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 p-4 rounded-lg">
                                  <h5 className="font-medium text-foreground mb-3 flex items-center gap-2">
                                    🎯 Статистика раунда:
                                  </h5>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex justify-between items-center">
                                      <span className="text-muted-foreground">Шанс краша на 2.5x:</span>
                                      <span className="text-orange-400 font-medium">60%</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <span className="text-muted-foreground">Игроков в раунде:</span>
                                      <span className="text-blue-400 font-medium">34</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <span className="text-muted-foreground">Уже забрали:</span>
                                      <span className="text-green-400 font-medium">7 игроков</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <span className="text-muted-foreground">Средний автокеш:</span>
                                      <span className="text-cyan-400 font-medium">2.87x</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 p-4 rounded-lg">
                                  <h5 className="font-medium text-foreground mb-3 flex items-center gap-2">
                                    🚀 Элементы интерфейса:
                                  </h5>
                                  <div className="space-y-2 text-sm">
                                    <div className="text-muted-foreground">• Анимированная траектория ракеты</div>
                                    <div className="text-muted-foreground">• Крупная кнопка "ЗАБРАТЬ"</div>
                                    <div className="text-muted-foreground">• Живой чат других игроков</div>
                                    <div className="text-muted-foreground">• История последних крашей</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                </div>
                
                <div className="pt-6 border-t">
                  <div className="flex gap-4">
                    <Link to="/#games" className="outline-button flex-1 py-3 px-4 rounded-lg text-center">
                      Назад к играм
                    </Link>
                    <Link to="/#contact" className="accent-gradient glow-effect font-semibold flex-1 py-3 px-4 rounded-lg text-center text-white">
                      Запросить интеграцию
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