import { Button } from "@/components/ui/button";
import { ArrowLeft, Smartphone, Monitor, Tablet, CheckCircle, Settings, Zap, Globe, Shield, TrendingUp, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingControls from "@/components/FloatingControls";

const Keno = () => {
  const [selectedDevice, setSelectedDevice] = useState('mobile');
  const [isDesktopModalOpen, setIsDesktopModalOpen] = useState(false);
  const [isTabletModalOpen, setIsTabletModalOpen] = useState(false);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);

  // Прокручиваем страницу наверх при загрузке
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gameData = {
    title: "Keno",
    badge: "Лотерея",
    image: "/lovable-uploads/8ae2ba9a-e0ad-4bcd-a93e-b8aec9370099.png"
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

          {/* 60/40 Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-12">
            {/* Left Side - Information (60%) */}
            <div className="xl:col-span-3 space-y-10">
              {/* Header */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <h1 className="text-4xl font-bold text-foreground">{gameData.title}</h1>
                  <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {gameData.badge}
                  </div>
                </div>
              </div>

              {/* Game Description */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Описание игры</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Современная интерпретация классической лотереи Keno. 40 клеток на поле, система генерирует 10 выигрышных чисел. Игрок выбирает от 1 до 10 чисел.
                  </p>
                  <p>
                    Коэффициенты выплат меняются в зависимости от количества выбранных чисел - чем больше чисел, тем выше потенциальный выигрыш, но ниже вероятность.
                  </p>
                  <p>
                    Простая механика, прозрачная математика с Provably Fair, быстрые раунды.
                  </p>
                </div>
              </div>

              {/* Technical Specifications */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">Технические характеристики</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Волатильность */}
                  <div className="gaming-border card-shadow p-6 rounded-lg h-full overflow-hidden transition-transform duration-200 hover:-translate-y-1">
                    <div className="flex items-center gap-4 justify-between">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-semibold text-foreground truncate">Волатильность</h4>
                          <p className="text-xs text-muted-foreground truncate">Настройки риска</p>
                        </div>
                      </div>
                      <div className="shrink-0 text-lg font-bold text-primary">Настраиваемая</div>
                    </div>
                  </div>
                  
                  {/* RTP */}
                  <div className="gaming-border card-shadow p-6 rounded-lg h-full overflow-hidden transition-transform duration-200 hover:-translate-y-1">
                    <div className="flex items-center gap-4 justify-between">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                          <div className="text-xl font-bold text-accent">%</div>
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-semibold text-foreground truncate">RTP</h4>
                          <p className="text-xs text-muted-foreground truncate">Без ограничений</p>
                        </div>
                      </div>
                      <div className="shrink-0 text-lg font-bold text-accent">Любой</div>
                    </div>
                  </div>

                  {/* Макс. множитель */}
                  <div className="gaming-border card-shadow p-6 rounded-lg h-full overflow-hidden transition-transform duration-200 hover:-translate-y-1">
                    <div className="flex items-center gap-4 justify-between">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                          <Trophy className="w-6 h-6 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-semibold text-foreground truncate">Макс. множитель</h4>
                          <p className="text-xs text-muted-foreground truncate">Настраиваемый</p>
                        </div>
                      </div>
                      <div className="shrink-0 text-lg font-bold text-primary">x750</div>
                    </div>
                  </div>

                  {/* Платформы */}
                  <div className="gaming-border card-shadow p-6 rounded-lg h-full overflow-hidden transition-transform duration-200 hover:-translate-y-1">
                    <div className="flex items-center gap-4 justify-between">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center">
                          <Monitor className="w-6 h-6 text-secondary" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-semibold text-foreground truncate">Платформы</h4>
                          <p className="text-xs text-muted-foreground truncate">Все устройства</p>
                        </div>
                      </div>
                      <div className="shrink-0 flex items-center gap-2 text-secondary"><Smartphone className="w-5 h-5" /><Monitor className="w-5 h-5" /><Tablet className="w-5 h-5" /></div>
                    </div>
                  </div>

                  {/* Локализация */}
                  <div className="gaming-border card-shadow p-6 rounded-lg h-full overflow-hidden transition-transform duration-200 hover:-translate-y-1">
                    <div className="flex items-center gap-4 justify-between">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center">
                          <Globe className="w-6 h-6 text-secondary" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-semibold text-foreground truncate">Локализация</h4>
                          <p className="text-xs text-muted-foreground truncate">Расширяемая</p>
                        </div>
                      </div>
                      <div className="shrink-0 text-lg font-bold text-secondary">RU • EN +</div>
                    </div>
                  </div>

                  {/* Provably Fair */}
                  <div className="gaming-border card-shadow p-6 rounded-lg h-full overflow-hidden transition-transform duration-200 hover:-translate-y-1">
                    <div className="flex items-center gap-4 justify-between">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                          <Shield className="w-6 h-6 text-accent" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-semibold text-foreground truncate">Provably Fair</h4>
                          <p className="text-xs text-muted-foreground truncate">Проверяемая честность</p>
                        </div>
                      </div>
                      <div className="shrink-0 text-lg font-bold text-accent">✓</div>
                    </div>
                  </div>
                </div>

                {/* Detailed Parameters */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Детальные параметры игры</h3>
                  <div className="gaming-border card-shadow p-6 rounded-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      
                      {/* Left Column - Gameplay */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-accent border-b border-border pb-2">
                          Игровой процесс
                        </h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Поле:</span>
                            <span className="text-foreground font-medium">40 клеток</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Выигрышных чисел:</span>
                            <span className="text-foreground font-medium">10</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Выбор игрока:</span>
                            <span className="text-foreground font-medium">от 1 до 10 чисел</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Platform Features */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-accent border-b border-border pb-2">
                          Возможности платформы
                        </h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Время раунда:</span>
                            <span className="text-foreground font-medium">~15 секунд</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">История игр:</span>
                            <span className="text-accent font-medium">✓ Встроенная</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Поддержка валют:</span>
                            <span className="text-foreground font-medium">Все валюты казино</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Game Mechanics */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Как это работает</h2>
                <div className="gaming-border card-shadow p-6 rounded-lg">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Игрок выбирает от 1 до 10 чисел из 40</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Система генерирует 10 случайных выигрышных чисел</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Выплаты зависят от количества совпадений</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Каждый раунд проверяем через Provably Fair</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Все транзакции через API казино</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Payout Table */}
              <div>
                <h2 className="text-2xl font-semibold mb-2">Пример коэффициентов</h2>
                <p className="text-sm text-muted-foreground mb-4">(Конфигурация с RTP 98%)</p>
                <div className="gaming-border card-shadow rounded-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-muted/30">
                        <tr>
                          <th className="p-3 text-left">Выбрано</th>
                          <th className="p-3 text-left">Угадано</th>
                          <th className="p-3 text-left">Коэффициент</th>
                          <th className="p-3 text-left">Вероятность</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border/50">
                          <td className="p-3">1</td>
                          <td className="p-3">1</td>
                          <td className="p-3 text-accent font-medium">3.6x</td>
                          <td className="p-3 text-muted-foreground">25%</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-3">5</td>
                          <td className="p-3">5</td>
                          <td className="p-3 text-accent font-medium">142x</td>
                          <td className="p-3 text-muted-foreground">0.77%</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-3">10</td>
                          <td className="p-3">6</td>
                          <td className="p-3 text-accent font-medium">12x</td>
                          <td className="p-3 text-muted-foreground">11.36%</td>
                        </tr>
                        <tr>
                          <td className="p-3">10</td>
                          <td className="p-3">10</td>
                          <td className="p-3 text-primary font-medium">750x</td>
                          <td className="p-3 text-muted-foreground">0.0001%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  * Любые коэффициенты по запросу казино. RTP настраивается без ограничений.
                </p>
              </div>

              {/* For Operators */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Что мы настраиваем</h2>
                <div className="gaming-border card-shadow p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>RTP - любое значение по вашему запросу</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>Коэффициенты выплат - полная кастомизация</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>Лимиты ставок - любые значения</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>Максимальный выигрыш - по вашим требованиям</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>Логотип казино на игровом поле</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-5 h-5 flex items-center justify-center text-primary">⏳</div>
                      <span>Полная кастомизация дизайна (в разработке)</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground md:col-span-2">
                      <div className="w-5 h-5 flex items-center justify-center text-primary">⏳</div>
                      <span>Бэк-офис для операторов (Q1 2025)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Integration */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Zero-effort интеграция</h2>
                <div className="gaming-border card-shadow p-6 rounded-lg">
                  <p className="text-lg font-medium text-foreground mb-4">
                    Вам не нужно ничего делать:
                  </p>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Предоставьте API вашего казино</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Мы сами всё интегрируем за 3-5 дней</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Игра управляет транзакциями через ваш API</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Балансы остаются на вашей стороне</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Готовый iframe для встраивания</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Полная техподдержка</span>
                    </li>
                  </ul>
                  <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg">
                    <p className="text-primary font-medium">
                      Ключевое преимущество: Мы берем на себя всю техническую интеграцию. Вам нужно только предоставить доступ к API.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Demo (40%) */}
            <div className="xl:col-span-2 space-y-6">
              {/* Demo Section */}
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-center">Демо-версия игры</h2>
                
                {/* Mobile Play Button - Only visible on mobile */}
                <div className="block md:hidden mb-6">
                  <Button 
                    onClick={() => setIsMobileModalOpen(true)}
                    className="w-full bg-gradient-to-r from-accent via-primary-glow to-primary text-primary-foreground px-6 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:brightness-110"
                  >
                    Играть
                  </Button>
                </div>
                
                {/* Device Selection Buttons - Hidden on mobile */}
                <div className="hidden md:flex gap-2 mb-6 p-1 bg-muted/30 rounded-lg">
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

                {/* Device Preview - Hidden on mobile */}
                <div className="hidden md:flex justify-center">
                  <div className="phone-frame relative">
                    <div className="phone-screen">
                      <iframe src="https://dev-dot-casino-games-462502.lm.r.appspot.com/keno" className="w-full h-full border-0 rounded-[20px]" title="Keno Mobile Demo Game" allow="fullscreen" />
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground text-center mt-4 mb-6">
                  Демо-версия с Provably Fair
                </p>

                {/* Integration Button */}
                <div className="text-center">
                  <Link to="/#contact">
                    <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      Запросить интеграцию
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Mobile Modal */}
      <Dialog open={isMobileModalOpen} onOpenChange={setIsMobileModalOpen}>
        <DialogContent className="max-w-[100vw] w-full h-[100vh] p-0 border-0 rounded-none [&>button]:hidden">
          <DialogTitle className="sr-only">Keno Mobile Game</DialogTitle>
          <DialogDescription className="sr-only">Полнофункциональная демо-версия игры Keno для мобильных устройств</DialogDescription>
          <div className="w-full h-full pt-12 pb-8 px-2 bg-black">
            <iframe 
              src="https://dev-dot-casino-games-462502.lm.r.appspot.com/keno" 
              className="w-full h-full border-0 rounded-lg" 
              title="Keno Mobile Demo Game" 
              allow="fullscreen" 
            />
          </div>
          <FloatingControls onClose={() => setIsMobileModalOpen(false)} />
        </DialogContent>
      </Dialog>
      
      {/* Desktop Modal */}
      <Dialog open={isDesktopModalOpen} onOpenChange={setIsDesktopModalOpen}>
        <DialogContent className="max-w-7xl w-full h-[95vh] p-0 [&>button]:w-8 [&>button]:h-8 md:[&>button]:w-6 md:[&>button]:h-6">
          <DialogTitle className="sr-only">Keno Desktop Game</DialogTitle>
          <DialogDescription className="sr-only">Полнофункциональная демо-версия игры Keno для десктопа</DialogDescription>
          <iframe src="https://dev-dot-casino-games-462502.lm.r.appspot.com/keno" className="w-full h-full rounded-lg border-0" title="Keno Desktop Demo Game" allow="fullscreen" />
        </DialogContent>
      </Dialog>

      {/* Tablet Modal */}
      <Dialog open={isTabletModalOpen} onOpenChange={setIsTabletModalOpen}>
        <DialogContent className="max-w-fit p-8 bg-transparent border-none shadow-none [&>button]:w-8 [&>button]:h-8 md:[&>button]:w-6 md:[&>button]:h-6">
          <DialogTitle className="sr-only">Keno Tablet Game</DialogTitle>
          <DialogDescription className="sr-only">Полнофункциональная демо-версия игры Keno для планшета</DialogDescription>
          <div className="tablet-frame relative mx-auto">
            <div className="tablet-screen">
              <iframe src="https://dev-dot-casino-games-462502.lm.r.appspot.com/keno" className="w-full h-full border-0 rounded-[15px]" title="Keno Tablet Demo Game" allow="fullscreen" />
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default Keno;