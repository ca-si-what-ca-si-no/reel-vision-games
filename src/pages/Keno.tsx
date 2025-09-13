import { Button } from "@/components/ui/button";
import { Star, ArrowLeft, Smartphone, Monitor, Tablet, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechnicalSpecs from "@/components/TechnicalSpecs";
const Keno = () => {
  const [selectedDevice, setSelectedDevice] = useState('mobile');
  const [isDesktopModalOpen, setIsDesktopModalOpen] = useState(false);
  const [isTabletModalOpen, setIsTabletModalOpen] = useState(false);
  const [activeScreenshot, setActiveScreenshot] = useState<string | null>(null);

  // Прокручиваем страницу наверх при загрузке
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const gameData = {
    title: "Keno",
    description: "Классическая лотерейная игра с современным интерфейсом и настраиваемым RTP",
    features: {
      volatility: 3,
      rtp: "94-97%",
      platforms: ["Web", "Mobile", "Desktop"],
      languages: ["RU", "EN", "DE"],
      maxMultiplier: "1000x"
    },
    badge: "Популярное",
    image: "/lovable-uploads/8ae2ba9a-e0ad-4bcd-a93e-b8aec9370099.png"
  };
  return <div className="min-h-screen">
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
                    Keno - это захватывающая лотерейная игра, которая сочетает в себе простоту классической лотереи 
                    с современными игровыми механиками. Игроки выбирают числа из сетки, а затем наблюдают, 
                    как система случайным образом определяет выигрышные номера. Чем больше совпадений, 
                    тем выше выигрыш!
                  </p>
                </div>
                
                <TechnicalSpecs features={{
                ...gameData.features,
                minBet: "0.25",
                maxBet: "500.00",
                roundTime: "~15сек",
                autoPlay: false
              }} />

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Особенности</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Настраиваемый RTP от 94% до 97%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Современный и интуитивно понятный интерфейс</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Поддержка всех основных платформ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Мультиязычная поддержка</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Высокие множители до 1000x</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-6">Ключевые игровые моменты</h2>
                  <div className="space-y-4">
                    
                    {/* Джекпот */}
                    <div className="gaming-border card-shadow rounded-lg overflow-hidden smooth-transition hover:shadow-glow">
                      <button onClick={() => setActiveScreenshot(activeScreenshot === 'jackpot' ? null : 'jackpot')} className="w-full flex items-center justify-between p-6 bg-muted/20 hover:bg-muted/30 transition-all duration-300 group">
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-400/20 to-orange-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
                                <span className="text-white text-xs font-bold">★</span>
                              </div>
                            </div>
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-400 rounded-full flex items-center justify-center">
                              <span className="text-xs font-bold text-white">15</span>
                            </div>
                          </div>
                          <div className="text-left">
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                              Джекпот - 15 угаданных номеров
                            </h3>
                            <div className="flex items-center gap-4 mt-1">
                              <span className="text-sm text-muted-foreground">15 из 15 номеров угадано!</span>
                              <div className="flex items-center gap-1">
                                <span className="text-xs bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded">Множитель: 1000x</span>
                                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">Вероятность: 0.000006%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {activeScreenshot === 'jackpot' ? <ChevronUp className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" /> : <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />}
                      </button>
                      {activeScreenshot === 'jackpot' && <div className="border-t border-border/50">
                          <div className="p-6 bg-gradient-to-br from-background via-background to-muted/10">
                            <div className="space-y-6">
                              <img src={gameData.image} alt="Keno jackpot screen" className="w-full h-64 object-cover rounded-lg border border-border/50" />
                              
                              <div>
                                <h4 className="font-semibold text-foreground mb-2">Описание момента</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                  Невероятно редкий случай! Игрок угадал все 15 выбранных номеров из 20 возможных. 
                                  Это событие происходит раз в несколько миллионов игр. Максимальный множитель 1000x 
                                  превратил небольшую ставку в огромный выигрыш!
                                </p>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                                  <span className="text-yellow-400 block mb-1 text-sm">Угадано номеров</span>
                                  <span className="text-2xl font-bold text-yellow-400">15/15</span>
                                  <div className="text-xs text-yellow-400/70 mt-1">Полный джекпот!</div>
                                </div>
                                <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-lg">
                                  <span className="text-green-400 block mb-1 text-sm">Выигрыш</span>
                                  <span className="text-2xl font-bold text-green-400">250,000₽</span>
                                  <div className="text-xs text-green-400/70 mt-1">Ставка: 250₽</div>
                                </div>
                                <div className="bg-purple-500/10 border border-purple-500/20 p-4 rounded-lg">
                                  <span className="text-purple-400 block mb-1 text-sm">Множитель</span>
                                  <span className="text-2xl font-bold text-purple-400">1,000x</span>
                                  <div className="text-xs text-purple-400/70 mt-1">Максимальный!</div>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 p-4 rounded-lg">
                                  <h5 className="font-medium text-foreground mb-3 flex items-center gap-2">
                                    🎰 Статистика джекпота:
                                  </h5>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex justify-between items-center">
                                      <span className="text-muted-foreground">Вероятность 15/15:</span>
                                      <span className="text-yellow-400 font-medium">1 к 16M</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <span className="text-muted-foreground">Последний джекпот:</span>
                                      <span className="text-purple-400 font-medium">8 мес. назад</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <span className="text-muted-foreground">Всего номеров вышло:</span>
                                      <span className="text-blue-400 font-medium">20 из 80</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <span className="text-muted-foreground">RTP раунда:</span>
                                      <span className="text-green-400 font-medium">97%</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 p-4 rounded-lg">
                                  <h5 className="font-medium text-foreground mb-3 flex items-center gap-2">
                                    🎮 Элементы интерфейса:
                                  </h5>
                                  <div className="space-y-2 text-sm">
                                    <div className="text-muted-foreground">• Вспышки на всех угаданных номерах</div>
                                    <div className="text-muted-foreground">• Анимация золотого дождя</div>
                                    <div className="text-muted-foreground">• Звук фанфар джекпота</div>
                                    <div className="text-muted-foreground">• Таблица выплат с подсветкой</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>}
                    </div>

                    {/* Частичный выигрыш */}
                    <div className="gaming-border card-shadow rounded-lg overflow-hidden smooth-transition hover:shadow-glow">
                      <button onClick={() => setActiveScreenshot(activeScreenshot === 'win' ? null : 'win')} className="w-full flex items-center justify-between p-6 bg-muted/20 hover:bg-muted/30 transition-all duration-300 group">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-400/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center">
                              <span className="text-white text-xs font-bold">9</span>
                            </div>
                          </div>
                          <div className="text-left">
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                              Хороший выигрыш - 9 совпадений
                            </h3>
                            <div className="flex items-center gap-4 mt-1">
                              <span className="text-sm text-muted-foreground">9 из 10 номеров угадано</span>
                              <div className="flex items-center gap-1">
                                <span className="text-xs bg-green-400/20 text-green-400 px-2 py-1 rounded">Множитель: 25x</span>
                                <span className="text-xs bg-blue-400/20 text-blue-400 px-2 py-1 rounded">Вероятность: 0.16%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {activeScreenshot === 'win' ? <ChevronUp className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" /> : <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />}
                      </button>
                      {activeScreenshot === 'win' && <div className="border-t border-border/50">
                          <div className="p-6 bg-gradient-to-br from-background via-background to-muted/10">
                            <div className="space-y-6">
                              <img src={gameData.image} alt="Keno winning screen" className="w-full h-64 object-cover rounded-lg border border-border/50" />
                              
                              <div>
                                <h4 className="font-semibold text-foreground mb-2">Описание момента</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                  Отличный результат! Игрок выбрал 10 номеров и угадал 9 из них. Это очень хороший 
                                  результат, который встречается примерно в одной игре из 600. Множитель 25x дает 
                                  солидный выигрыш и хорошее настроение!
                                </p>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-lg">
                                  <span className="text-green-400 block mb-1 text-sm">Угадано номеров</span>
                                  <span className="text-2xl font-bold text-green-400">9/10</span>
                                  <div className="text-xs text-green-400/70 mt-1">Почти идеально!</div>
                                </div>
                                <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
                                  <span className="text-blue-400 block mb-1 text-sm">Выигрыш</span>
                                  <span className="text-2xl font-bold text-blue-400">3,750₽</span>
                                  <div className="text-xs text-blue-400/70 mt-1">Ставка: 150₽</div>
                                </div>
                                <div className="bg-purple-500/10 border border-purple-500/20 p-4 rounded-lg">
                                  <span className="text-purple-400 block mb-1 text-sm">Множитель</span>
                                  <span className="text-2xl font-bold text-purple-400">25x</span>
                                  <div className="text-xs text-purple-400/70 mt-1">Отличный результат</div>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 p-4 rounded-lg">
                                  <h5 className="font-medium text-foreground mb-3 flex items-center gap-2">
                                    📊 Анализ результата:
                                  </h5>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex justify-between items-center">
                                      <span className="text-muted-foreground">Вероятность 9/10:</span>
                                      <span className="text-green-400 font-medium">0.16%</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <span className="text-muted-foreground">Следующий уровень (10/10):</span>
                                      <span className="text-yellow-400 font-medium">100x</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <span className="text-muted-foreground">Промах номера:</span>
                                      <span className="text-red-400 font-medium">№47</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <span className="text-muted-foreground">Процент от джекпота:</span>
                                      <span className="text-cyan-400 font-medium">2.5%</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 p-4 rounded-lg">
                                  <h5 className="font-medium text-foreground mb-3 flex items-center gap-2">
                                    ✨ Элементы интерфейса:
                                  </h5>
                                  <div className="space-y-2 text-sm">
                                    <div className="text-muted-foreground">• Зеленая подсветка угаданных номеров</div>
                                    <div className="text-muted-foreground">• Анимация подсчета выигрыша</div>
                                    <div className="text-muted-foreground">• Звук успешного совпадения</div>
                                    <div className="text-muted-foreground">• Увеличенная таблица выплат</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>}
                    </div>

                    {/* Выбор номеров */}
                    <div className="gaming-border card-shadow rounded-lg overflow-hidden smooth-transition hover:shadow-glow">
                      <button onClick={() => setActiveScreenshot(activeScreenshot === 'selection' ? null : 'selection')} className="w-full flex items-center justify-between p-6 bg-muted/20 hover:bg-muted/30 transition-all duration-300 group">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                            <div className="grid grid-cols-2 gap-1">
                              <div className="w-2 h-2 rounded-sm bg-gradient-to-br from-blue-400 to-cyan-500"></div>
                              <div className="w-2 h-2 rounded-sm bg-gradient-to-br from-blue-400 to-cyan-500"></div>
                              <div className="w-2 h-2 rounded-sm bg-gradient-to-br from-blue-400 to-cyan-500"></div>
                              <div className="w-2 h-2 rounded-sm bg-muted-foreground/30"></div>
                            </div>
                          </div>
                          <div className="text-left">
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                              Стратегический выбор номеров
                            </h3>
                            <div className="flex items-center gap-4 mt-1">
                              <span className="text-sm text-muted-foreground">Выбор 12 номеров из 80</span>
                              <div className="flex items-center gap-1">
                                <span className="text-xs bg-blue-400/20 text-blue-400 px-2 py-1 rounded">Выбрано: 12</span>
                                <span className="text-xs bg-green-400/20 text-green-400 px-2 py-1 rounded">Ставка: 200₽</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {activeScreenshot === 'selection' ? <ChevronUp className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" /> : <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />}
                      </button>
                      {activeScreenshot === 'selection' && <div className="border-t border-border/50">
                          <div className="p-6 bg-gradient-to-br from-background via-background to-muted/10">
                            <div className="space-y-6">
                              <img src={gameData.image} alt="Keno number selection screen" className="w-full h-64 object-cover rounded-lg border border-border/50" />
                              
                              <div>
                                <h4 className="font-semibold text-foreground mb-2">Описание момента</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                  Ключевой момент любой игры в Keno - выбор номеров! Игрок выбрал сбалансированную 
                                  стратегию с 12 номерами, что дает хорошее соотношение риска и потенциального выигрыша. 
                                  Номера распределены по всему полю для максимального покрытия.
                                </p>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
                                  <span className="text-blue-400 block mb-1 text-sm">Выбрано номеров</span>
                                  <span className="text-2xl font-bold text-blue-400">12/80</span>
                                  <div className="text-xs text-blue-400/70 mt-1">Сбалансированная стратегия</div>
                                </div>
                                <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-lg">
                                  <span className="text-green-400 block mb-1 text-sm">Размер ставки</span>
                                  <span className="text-2xl font-bold text-green-400">200₽</span>
                                  <div className="text-xs text-green-400/70 mt-1">Средний размер</div>
                                </div>
                                <div className="bg-purple-500/10 border border-purple-500/20 p-4 rounded-lg">
                                  <span className="text-purple-400 block mb-1 text-sm">Макс. выигрыш</span>
                                  <span className="text-2xl font-bold text-purple-400">200,000₽</span>
                                  <div className="text-xs text-purple-400/70 mt-1">При 12/12</div>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 p-4 rounded-lg">
                                  <h5 className="font-medium text-foreground mb-3 flex items-center gap-2">
                                    🎯 Выбранная стратегия:
                                  </h5>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex justify-between items-center">
                                      <span className="text-muted-foreground">Вероятность выигрыша:</span>
                                      <span className="text-blue-400 font-medium">74.5%</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <span className="text-muted-foreground">Мин. для выигрыша:</span>
                                      <span className="text-green-400 font-medium">4 номера</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <span className="text-muted-foreground">Покрытие поля:</span>
                                      <span className="text-purple-400 font-medium">15%</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <span className="text-muted-foreground">RTP стратегии:</span>
                                      <span className="text-cyan-400 font-medium">95.2%</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 p-4 rounded-lg">
                                  <h5 className="font-medium text-foreground mb-3 flex items-center gap-2">
                                    🎮 Элементы интерфейса:
                                  </h5>
                                  <div className="space-y-2 text-sm">
                                    <div className="text-muted-foreground">• Интерактивная сетка 8x10 номеров</div>
                                    <div className="text-muted-foreground">• Счетчик выбранных номеров</div>
                                    <div className="text-muted-foreground">• Динамическая таблица выплат</div>
                                    <div className="text-muted-foreground">• Кнопки быстрого выбора</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>}
                    </div>

                  </div>
                </div>
                
                <div className="pt-6 border-t">
                  <div className="flex gap-4">
                    <Link to="/#games" className="flex-1">
                      <Button variant="outline" className="w-full bg-muted/20 hover:bg-muted/30 text-foreground px-[20px] py-[20px]">
                        Назад к играм
                      </Button>
                    </Link>
                    <Link to="/#contact" className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-accent via-primary-glow to-primary text-primary-foreground px-[20px] py-[15px]">
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
                <h2 className="text-2xl font-semibold mb-6 text-center">Демо-версия игры</h2>
                
                {/* Device Selection Buttons */}
                <div className="flex gap-2 mb-6 p-1 bg-muted/30 rounded-lg">
                  <button onClick={() => setSelectedDevice('mobile')} className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md transition-all ${selectedDevice === 'mobile' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}>
                    <Smartphone className="w-4 h-4" />
                    <span className="text-sm font-medium">Телефон</span>
                  </button>
                  <button onClick={() => setIsDesktopModalOpen(true)} className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md transition-all text-muted-foreground hover:text-foreground hover:bg-muted/50">
                    <Monitor className="w-4 h-4" />
                    <span className="text-sm font-medium">Десктоп</span>
                  </button>
                  <button onClick={() => setIsTabletModalOpen(true)} className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md transition-all text-muted-foreground hover:text-foreground hover:bg-muted/50">
                    <Tablet className="w-4 h-4" />
                    <span className="text-sm font-medium">Планшет</span>
                  </button>
                </div>

                {/* Device Preview */}
                <div className="flex justify-center">
                  <div className="phone-frame relative">
                    <div className="phone-screen">
                      <iframe src="https://dev-dot-casino-games-462502.lm.r.appspot.com/keno" className="w-full h-full border-0 rounded-[20px]" title="Keno Mobile Demo Game" allow="fullscreen" />
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground text-center mt-4">
                  Попробуйте игру на разных устройствах! Это полнофункциональная демо-версия.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Desktop Modal */}
      <Dialog open={isDesktopModalOpen} onOpenChange={setIsDesktopModalOpen}>
        <DialogContent className="max-w-7xl w-full h-[95vh] p-0">
          <iframe src="https://dev-dot-casino-games-462502.lm.r.appspot.com/keno" className="w-full h-full rounded-lg border-0" title="Keno Desktop Demo Game" allow="fullscreen" />
        </DialogContent>
      </Dialog>

      {/* Tablet Modal */}
      <Dialog open={isTabletModalOpen} onOpenChange={setIsTabletModalOpen}>
        <DialogContent className="max-w-fit p-8 bg-background/95 backdrop-blur">
          <div className="tablet-frame relative mx-auto">
            <div className="tablet-screen">
              <iframe src="https://dev-dot-casino-games-462502.lm.r.appspot.com/keno" className="w-full h-full border-0 rounded-[15px]" title="Keno Tablet Demo Game" allow="fullscreen" />
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>;
};
export default Keno;