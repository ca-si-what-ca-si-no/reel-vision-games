import { Button } from "@/components/ui/button";
import { Star, ArrowLeft, Smartphone, Monitor, Tablet, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Hilo = () => {
  const [selectedDevice, setSelectedDevice] = useState('mobile');
  const [isDesktopModalOpen, setIsDesktopModalOpen] = useState(false);
  const [isTabletModalOpen, setIsTabletModalOpen] = useState(false);
  const [activeScreenshot, setActiveScreenshot] = useState<string | null>(null);

  // Прокручиваем страницу наверх при загрузке
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gameData = {
    title: "Hilo",
    description: "Увлекательная карточная игра с простыми правилами и высокой отдачей",
    features: {
      volatility: 4,
      rtp: "96-98%",
      platforms: ["Web", "Mobile"],
      languages: ["RU", "EN"],
      maxMultiplier: "2500x"
    },
    badge: "Топ",
    image: "/lovable-uploads/e380c354-c9a4-40de-a8be-22c8b6d81ccf.png"
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
                    Hilo - это захватывающая карточная игра, где игроки угадывают, будет ли следующая карта 
                    выше или ниже текущей. Простые правила, но увлекательный геймплей с возможностью 
                    получения крупных выигрышей. Каждое правильное предсказание увеличивает множитель, 
                    но одна ошибка - и вы теряете всё!
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Технические характеристики</h2>
                  
                  {/* Основные показатели */}
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="gaming-border card-shadow p-6 rounded-lg">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400/20 to-orange-500/20 flex items-center justify-center">
                            <Star className="w-5 h-5 text-yellow-400" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">Волатильность</h3>
                            <p className="text-xs text-muted-foreground">Средне-высокая</p>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-6 h-6 ${i < gameData.features.volatility ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground/30'}`} />
                          ))}
                        </div>
                      </div>

                      <div className="gaming-border card-shadow p-6 rounded-lg">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400/20 to-emerald-500/20 flex items-center justify-center">
                            <span className="text-lg font-bold text-green-400">%</span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">RTP</h3>
                            <p className="text-xs text-muted-foreground">Возврат игроку</p>
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-green-400">{gameData.features.rtp}</div>
                      </div>
                    </div>

                    {/* Детальная информация */}
                    <div className="grid grid-cols-1 gap-4">
                      <div className="gaming-border card-shadow p-5 rounded-lg">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-medium text-foreground mb-1">Максимальный множитель</h4>
                            <p className="text-sm text-muted-foreground">Потенциальный выигрыш</p>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-green-400">{gameData.features.maxMultiplier}</div>
                            <div className="text-xs text-muted-foreground">от ставки</div>
                          </div>
                        </div>
                      </div>

                      <div className="gaming-border card-shadow p-5 rounded-lg">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-medium text-foreground mb-1">Платформы</h4>
                            <p className="text-sm text-muted-foreground">Поддерживаемые устройства</p>
                          </div>
                          <div className="flex gap-2">
                            {gameData.features.platforms.map((platform, i) => (
                              <span key={i} className="px-2 py-1 text-xs bg-accent/20 text-accent rounded-md">
                                {platform}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="gaming-border card-shadow p-5 rounded-lg">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-medium text-foreground mb-1">Локализация</h4>
                            <p className="text-sm text-muted-foreground">Доступные языки</p>
                          </div>
                          <div className="flex gap-2">
                            {gameData.features.languages.map((lang, i) => (
                              <span key={i} className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full font-medium">
                                {lang}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Дополнительные характеристики */}
                      <div className="gaming-border card-shadow p-5 rounded-lg">
                        <h4 className="font-medium text-foreground mb-3">Дополнительные параметры</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Минимальная ставка:</span>
                            <span className="text-foreground font-medium">0.10</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Максимальная ставка:</span>
                            <span className="text-foreground font-medium">100.00</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Время раунда:</span>
                            <span className="text-foreground font-medium">~30сек</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Автоигра:</span>
                            <span className="text-green-400 font-medium">✓ Да</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Особенности</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Высокий RTP от 96% до 98%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Простые и понятные правила</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Быстрый и динамичный геймплей</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Адаптивный дизайн для мобильных устройств</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Множители до 2500x</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-6">Ключевые игровые моменты</h2>
                  <div className="space-y-4">
                    
                    {/* Выигрышная серия */}
                    <div className="gaming-border card-shadow rounded-lg overflow-hidden smooth-transition hover:shadow-glow">
                      <button 
                        onClick={() => setActiveScreenshot(activeScreenshot === 'streak' ? null : 'streak')}
                        className="w-full flex items-center justify-between p-6 bg-muted/20 hover:bg-muted/30 transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-400/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center">
                                <span className="text-white text-xs font-bold">W</span>
                              </div>
                            </div>
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                              <span className="text-xs font-bold text-black">5</span>
                            </div>
                          </div>
                          <div className="text-left">
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                              Выигрышная серия
                            </h3>
                            <div className="flex items-center gap-4 mt-1">
                              <span className="text-sm text-muted-foreground">5 правильных предсказаний подряд</span>
                              <div className="flex items-center gap-1">
                                <span className="text-xs bg-green-400/20 text-green-400 px-2 py-1 rounded">Множитель: 32x</span>
                                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">Вероятность: 3.1%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {activeScreenshot === 'streak' ? (
                          <ChevronUp className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                        )}
                      </button>
                      {activeScreenshot === 'streak' && (
                        <div className="border-t border-border/50">
                          <div className="p-6 bg-gradient-to-br from-background via-background to-muted/10">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                              <div className="space-y-4">
                                <img 
                                  src={gameData.image} 
                                  alt="Hilo winning streak screen" 
                                  className="w-full h-48 object-cover rounded-lg border border-border/50"
                                />
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                  <div className="bg-muted/30 p-3 rounded-lg">
                                    <span className="text-muted-foreground block">Текущий множитель</span>
                                    <span className="text-lg font-bold text-green-400">32.00x</span>
                                  </div>
                                  <div className="bg-muted/30 p-3 rounded-lg">
                                    <span className="text-muted-foreground block">Потенциальный выигрыш</span>
                                    <span className="text-lg font-bold text-accent">3,200₽</span>
                                  </div>
                                </div>
                              </div>
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-semibold text-foreground mb-2">Описание момента</h4>
                                  <p className="text-muted-foreground text-sm leading-relaxed">
                                    Игрок находится на пике выигрышной серии из 5 правильных предсказаний. 
                                    Каждое угаданное направление карты удваивает множитель. Сейчас критический 
                                    момент - забрать выигрыш или рискнуть ради еще большего множителя.
                                  </p>
                                </div>
                                <div className="bg-muted/20 p-4 rounded-lg">
                                  <h5 className="font-medium text-foreground mb-2">Ключевые элементы интерфейса:</h5>
                                  <ul className="text-sm text-muted-foreground space-y-1">
                                    <li>• Индикатор текущей серии выигрышей</li>
                                    <li>• Динамический множитель в реальном времени</li>
                                    <li>• Кнопки "Забрать" и "Продолжить"</li>
                                    <li>• История предыдущих карт</li>
                                  </ul>
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
                            <div className="w-8 h-10 bg-gradient-to-b from-blue-400 to-cyan-500 rounded-sm flex items-center justify-center">
                              <span className="text-white text-xs font-bold">?</span>
                            </div>
                          </div>
                          <div className="text-left">
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                              Активный игровой процесс
                            </h3>
                            <div className="flex items-center gap-4 mt-1">
                              <span className="text-sm text-muted-foreground">Выбор направления карты</span>
                              <div className="flex items-center gap-1">
                                <span className="text-xs bg-blue-400/20 text-blue-400 px-2 py-1 rounded">Ставка: 100₽</span>
                                <span className="text-xs bg-purple-400/20 text-purple-400 px-2 py-1 rounded">Шанс: ~50%</span>
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
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                              <div className="space-y-4">
                                <img 
                                  src={gameData.image} 
                                  alt="Hilo gameplay screen" 
                                  className="w-full h-48 object-cover rounded-lg border border-border/50"
                                />
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                  <div className="bg-muted/30 p-3 rounded-lg">
                                    <span className="text-muted-foreground block">Текущая карта</span>
                                    <span className="text-lg font-bold text-foreground">7 ♠</span>
                                  </div>
                                  <div className="bg-muted/30 p-3 rounded-lg">
                                    <span className="text-muted-foreground block">Баланс</span>
                                    <span className="text-lg font-bold text-foreground">1,250₽</span>
                                  </div>
                                </div>
                              </div>
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-semibold text-foreground mb-2">Игровая ситуация</h4>
                                  <p className="text-muted-foreground text-sm leading-relaxed">
                                    Основной экран игры с открытой картой "7 пик". Игроку необходимо предсказать, 
                                    будет ли следующая карта выше или ниже. С картой 7 шансы примерно равны, 
                                    что делает выбор особенно интересным.
                                  </p>
                                </div>
                                <div className="bg-muted/20 p-4 rounded-lg">
                                  <h5 className="font-medium text-foreground mb-2">Элементы интерфейса:</h5>
                                  <ul className="text-sm text-muted-foreground space-y-1">
                                    <li>• Текущая открытая карта в центре</li>
                                    <li>• Кнопки "Выше" и "Ниже"</li>
                                    <li>• Индикатор баланса и ставки</li>
                                    <li>• Статистика вероятностей</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Критический выбор */}
                    <div className="gaming-border card-shadow rounded-lg overflow-hidden smooth-transition hover:shadow-glow">
                      <button 
                        onClick={() => setActiveScreenshot(activeScreenshot === 'choice' ? null : 'choice')}
                        className="w-full flex items-center justify-between p-6 bg-muted/20 hover:bg-muted/30 transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-400/20 to-pink-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                              <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs">⚡</span>
                              </div>
                            </div>
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-400 rounded-full flex items-center justify-center animate-pulse">
                              <span className="text-xs font-bold text-white">!</span>
                            </div>
                          </div>
                          <div className="text-left">
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                              Критический момент выбора
                            </h3>
                            <div className="flex items-center gap-4 mt-1">
                              <span className="text-sm text-muted-foreground">Экстремальная карта - Туз или Король</span>
                              <div className="flex items-center gap-1">
                                <span className="text-xs bg-red-400/20 text-red-400 px-2 py-1 rounded">Риск: Высокий</span>
                                <span className="text-xs bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded">Награда: 2500x</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {activeScreenshot === 'choice' ? (
                          <ChevronUp className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                        )}
                      </button>
                       {activeScreenshot === 'choice' && (
                         <div className="border-t border-border/50">
                           <div className="p-6 bg-gradient-to-br from-background via-background to-muted/10">
                             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                               <div className="space-y-4">
                                 <img 
                                   src={gameData.image} 
                                   alt="Hilo critical choice screen" 
                                   className="w-full h-48 object-cover rounded-lg border border-border/50"
                                 />
                                 <div className="grid grid-cols-2 gap-3 text-sm">
                                   <div className="bg-red-500/10 border border-red-500/20 p-3 rounded-lg">
                                     <span className="text-red-400 block text-xs">Шанс на "Выше"</span>
                                     <span className="text-lg font-bold text-red-400">7.7%</span>
                                   </div>
                                   <div className="bg-blue-500/10 border border-blue-500/20 p-3 rounded-lg">
                                     <span className="text-blue-400 block text-xs">Шанс на "Ниже"</span>
                                     <span className="text-lg font-bold text-blue-400">84.6%</span>
                                   </div>
                                 </div>
                               </div>
                               <div className="space-y-4">
                                 <div>
                                   <h4 className="font-semibold text-foreground mb-2">Критическая ситуация</h4>
                                   <p className="text-muted-foreground text-sm leading-relaxed">
                                     На экране Король - одна из самых высоких карт в колоде. Выбор "Выше" крайне 
                                     рискован (только Туз), но дает огромный множитель. Выбор "Ниже" более безопасен, 
                                     но множитель будет значительно меньше.
                                   </p>
                                 </div>
                                 <div className="bg-gradient-to-r from-red-500/10 to-yellow-500/10 border border-red-500/20 p-4 rounded-lg">
                                   <h5 className="font-medium text-foreground mb-2 flex items-center gap-2">
                                     ⚡ Особенности момента:
                                   </h5>
                                   <ul className="text-sm text-muted-foreground space-y-1">
                                     <li>• Асимметричные шансы на выигрыш</li>
                                     <li>• Динамические коэффициенты выплат</li>
                                     <li>• Психологическое давление выбора</li>
                                     <li>• Возможность забрать текущий выигрыш</li>
                                   </ul>
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

export default Hilo;