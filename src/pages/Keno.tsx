import { Button } from "@/components/ui/button";
import { ArrowLeft, Smartphone, Monitor, TabletSmartphone, CheckCircle, Settings, Zap, Globe, Shield, Plug } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingControls from "@/components/FloatingControls";
import CallToActionCard from "@/components/CallToActionCard";
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
                <h2 className="text-2xl font-semibold mb-6">Классика, которая работает всегда.</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Игроки понимают её с первого взгляда — выбираешь числа, получаешь результат. 
                    Никаких туториалов, никакой путаницы с правилами.
                  </p>
                  
                  <p>
                    Поддержка почти не получает вопросов благодаря простоте правил. 
                    Игроки возвращаются день за днем за честным и прозрачным геймплеем. 
                    Охват аудитории максимальный — от студентов до пенсионеров, от новичков до опытных игроков.
                  </p>
                  
                  <p>
                    Это не революция в гейминге. Это надежный инструмент, который приносит предсказуемый доход 
                    без головной боли. Как швейцарские часы — никаких сюрпризов, просто качественно выполняет свою функцию.
                  </p>
                  
                  {/* Mobile Play Button - Moved before advantages */}
                  <div className="block md:hidden mb-8">
                    <Button onClick={() => setIsMobileModalOpen(true)} className="w-full bg-gradient-to-r from-accent via-primary-glow to-primary text-primary-foreground px-6 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:brightness-110">
                      Играть
                    </Button>
                  </div>
                  
                </div>
              </div>

              {/* Technical Specifications */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">Преимущества</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="gaming-border card-shadow p-4 rounded-lg text-center">
                    <div className="w-8 h-8 mx-auto mb-2 text-primary">
                      <Settings className="w-full h-full" />
                    </div>
                    <div className="font-semibold text-primary text-sm break-words">Кастомизация</div>
                    
                  </div>
                  
                  <div className="gaming-border card-shadow p-4 rounded-lg text-center">
                    <div className="w-8 h-8 mx-auto mb-2 text-secondary">
                      <Plug className="w-full h-full" />
                    </div>
                    <div className="font-semibold text-secondary text-sm break-words">Zero-effort интеграция</div>
                    
                  </div>

                  <div className="gaming-border card-shadow p-4 rounded-lg text-center">
                    <div className="w-8 h-8 mx-auto mb-2 text-accent">
                      <Zap className="w-full h-full" />
                    </div>
                    <div className="font-semibold text-accent text-sm break-words">До x750</div>
                    
                  </div>

                  <div className="gaming-border card-shadow p-4 rounded-lg text-center">
                    <div className="text-lg mb-2">📱💻📱</div>
                    <div className="font-semibold text-primary text-sm break-words">Адаптивный дизайн</div>
                    
                  </div>

                  <div className="gaming-border card-shadow p-4 rounded-lg text-center">
                    <div className="w-8 h-8 mx-auto mb-2 text-secondary">
                      <Globe className="w-full h-full" />
                    </div>
                    <div className="font-semibold text-secondary text-sm break-words">Мультиязычность</div>
                    
                  </div>

                  <div className="gaming-border card-shadow p-4 rounded-lg text-center">
                    <div className="w-8 h-8 mx-auto mb-2 text-accent">
                      <Shield className="w-full h-full" />
                    </div>
                    <div className="font-semibold text-accent text-sm break-words">Provably Fair ✓</div>
                    
                  </div>
                </div>
              </div>

              {/* Game Process */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Процесс игры</h2>
                <div className="gaming-border card-shadow p-6 rounded-lg">
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">1. Инициализация раунда</h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>• Игрок выбирает 1-10 чисел из 40</li>
                        <li>• Система генерирует seed для Provably Fair</li>
                        <li>• Отображается хеш будущего результата</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4">
                      <h3 className="text-lg font-semibold text-green-400 mb-2">2. Транзакция ставки</h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>• Запрос на списание через API казино</li>
                        <li>• Подтверждение баланса</li>
                        <li>• Фиксация ставки в системе</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4">
                      <h3 className="text-lg font-semibold text-purple-400 mb-2">3. Генерация результата</h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>• RNG генерирует 10 чисел из 40</li>
                        <li>• Использование seed + server seed</li>
                        <li>• Результат неизменяем после генерации</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h3 className="text-lg font-semibold text-yellow-400 mb-2">4. Расчет выигрыша</h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>• Сравнение выборов игрока с результатом</li>
                        <li>• Применение коэффициента из таблицы выплат</li>
                        <li>• Формирование суммы выигрыша</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-4">
                      <h3 className="text-lg font-semibold text-orange-400 mb-2">5. Завершение раунда</h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>• Начисление выигрыша через API</li>
                        <li>• Сохранение истории раунда</li>
                        <li>• Раскрытие server seed для проверки</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payout Table */}
              <div>
                <h2 className="text-2xl font-semibold mb-2">Полная таблица выплат для всех комбинаций</h2>
                <p className="text-sm text-muted-foreground mb-4">Коэффициенты для каждого количества выбранных и угаданных чисел (RTP 98%)</p>
                <div className="gaming-border card-shadow rounded-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead className="bg-muted/30">
                        <tr>
                          <th className="p-2 text-left font-semibold">Выбрано</th>
                          <th className="p-2 text-center font-semibold">0 совп.</th>
                          <th className="p-2 text-center font-semibold">1 совп.</th>
                          <th className="p-2 text-center font-semibold">2 совп.</th>
                          <th className="p-2 text-center font-semibold">3 совп.</th>
                          <th className="p-2 text-center font-semibold">4 совп.</th>
                          <th className="p-2 text-center font-semibold">5 совп.</th>
                          <th className="p-2 text-center font-semibold">6 совп.</th>
                          <th className="p-2 text-center font-semibold">7 совп.</th>
                          <th className="p-2 text-center font-semibold">8 совп.</th>
                          <th className="p-2 text-center font-semibold">9 совп.</th>
                          <th className="p-2 text-center font-semibold">10 совп.</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border/50">
                          <td className="p-2 font-medium">1</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-green-400 font-medium">x3.8</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-2 font-medium">2</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-green-400 font-medium">x1.9</td>
                          <td className="p-2 text-center text-green-400 font-medium">x4</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-2 font-medium">3</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-green-400 font-medium">x1</td>
                          <td className="p-2 text-center text-green-400 font-medium">x3.1</td>
                          <td className="p-2 text-center text-green-400 font-medium">x8</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-2 font-medium">4</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-red-300 font-medium">x0.7</td>
                          <td className="p-2 text-center text-green-400 font-medium">x2</td>
                          <td className="p-2 text-center text-green-400 font-medium">x6</td>
                          <td className="p-2 text-center text-yellow-400 font-medium">x12</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-2 font-medium">5</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-red-300 font-medium">x0.4</td>
                          <td className="p-2 text-center text-green-400 font-medium">x1.3</td>
                          <td className="p-2 text-center text-green-400 font-medium">x3.9</td>
                          <td className="p-2 text-center text-yellow-400 font-medium">x11.8</td>
                          <td className="p-2 text-center text-orange-400 font-medium">x30</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-2 font-medium">6</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-red-300 font-medium">x0.3</td>
                          <td className="p-2 text-center text-red-300 font-medium">x0.9</td>
                          <td className="p-2 text-center text-green-400 font-medium">x2.7</td>
                          <td className="p-2 text-center text-green-400 font-medium">x8.1</td>
                          <td className="p-2 text-center text-yellow-400 font-medium">x24.1</td>
                          <td className="p-2 text-center text-orange-400 font-medium">x50</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-2 font-medium">7</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-red-300 font-medium">x0.2</td>
                          <td className="p-2 text-center text-red-300 font-medium">x0.6</td>
                          <td className="p-2 text-center text-green-400 font-medium">x1.9</td>
                          <td className="p-2 text-center text-green-400 font-medium">x5.6</td>
                          <td className="p-2 text-center text-yellow-400 font-medium">x16.8</td>
                          <td className="p-2 text-center text-orange-400 font-medium">x50.3</td>
                          <td className="p-2 text-center text-red-400 font-bold">x100</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-2 font-medium">8</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-red-300 font-medium">x0.1</td>
                          <td className="p-2 text-center text-red-300 font-medium">x0.4</td>
                          <td className="p-2 text-center text-green-400 font-medium">x1.3</td>
                          <td className="p-2 text-center text-green-400 font-medium">x3.9</td>
                          <td className="p-2 text-center text-yellow-400 font-medium">x11.8</td>
                          <td className="p-2 text-center text-orange-400 font-medium">x35.4</td>
                          <td className="p-2 text-center text-red-400 font-bold">x106.2</td>
                          <td className="p-2 text-center text-red-400 font-bold">x250</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-2 font-medium">9</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-red-300 font-medium">x0.1</td>
                          <td className="p-2 text-center text-red-300 font-medium">x0.3</td>
                          <td className="p-2 text-center text-red-300 font-medium">x0.9</td>
                          <td className="p-2 text-center text-green-400 font-medium">x2.8</td>
                          <td className="p-2 text-center text-green-400 font-medium">x8.4</td>
                          <td className="p-2 text-center text-yellow-400 font-medium">x25.1</td>
                          <td className="p-2 text-center text-orange-400 font-medium">x75.4</td>
                          <td className="p-2 text-center text-red-400 font-bold">x226.2</td>
                          <td className="p-2 text-center text-red-400 font-bold">x600</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                        </tr>
                        <tr>
                          <td className="p-2 font-medium">10</td>
                          <td className="p-2 text-center text-muted-foreground">-</td>
                          <td className="p-2 text-center text-red-300 font-medium">x0.1</td>
                          <td className="p-2 text-center text-red-300 font-medium">x0.2</td>
                          <td className="p-2 text-center text-red-300 font-medium">x0.7</td>
                          <td className="p-2 text-center text-green-400 font-medium">x2</td>
                          <td className="p-2 text-center text-green-400 font-medium">x6</td>
                          <td className="p-2 text-center text-yellow-400 font-medium">x18</td>
                          <td className="p-2 text-center text-orange-400 font-medium">x54</td>
                          <td className="p-2 text-center text-red-400 font-bold">x162.1</td>
                          <td className="p-2 text-center text-red-400 font-bold">x486.4</td>
                          <td className="p-2 text-center text-red-400 font-bold text-primary">x750</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  * Полная таблица коэффициентов для RTP 98%. Любые настройки по запросу.
                </p>
              </div>

              {/* For Operators */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Что мы настраиваем</h2>
                <div className="gaming-border card-shadow p-6 rounded-lg">
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h3 className="text-lg font-semibold text-blue-400 mb-2 flex items-center gap-2">
                        🎯 Математическая модель
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        RTP без ограничений — хоть 50%, хоть 99%. Каждый коэффициент выплат настраивается отдельно. Полный контроль над волатильностью на каждом уровне выбора.
                      </p>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4">
                      <h3 className="text-lg font-semibold text-green-400 mb-2 flex items-center gap-2">
                        💸 Экономические параметры
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Любые лимиты ставок — подстроим под вашу аудиторию. Ограничение максимального выигрыша для контроля рисков. Работа со всеми валютами вашей платформы.
                      </p>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4">
                      <h3 className="text-lg font-semibold text-purple-400 mb-2 flex items-center gap-2">
                        🏢 Брендирование
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Ваш логотип прямо на игровом поле — игроки видят ваш бренд. Планируем: цветовые схемы, кастомные звуки, уникальные темы.
                      </p>
                    </div>

                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h3 className="text-lg font-semibold text-yellow-400 mb-2 flex items-center gap-2">
                        🔜 Скоро запустим
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Бэк-офис для самостоятельной настройки параметров. Расширенная визуальная кастомизация. A/B тестирование разных конфигураций.
                      </p>
                    </div>

                    <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg mt-6">
                      <p className="text-primary font-medium">
                        Главное: вы говорите — мы настраиваем. Никаких ограничений.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Integration */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Zero-effort интеграция</h2>
                <div className="gaming-border card-shadow p-6 rounded-lg">
                  <div className="space-y-6">
                    {/* What you do */}
                    <div className="border-l-4 border-green-500 pl-4">
                      <h3 className="text-lg font-semibold text-green-400 mb-2">Что делаете вы:</h3>
                      <p className="text-muted-foreground">
                        Отправляете доступ к вашему API. <span className="text-green-400 font-medium">Всё.</span>
                      </p>
                    </div>

                    {/* What we do */}
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h3 className="text-lg font-semibold text-blue-400 mb-3">Что делаем мы:</h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>• Изучаем документацию вашего API</li>
                        <li>• Пишем интеграционный слой</li>
                        <li>• Настраиваем обмен данными</li>
                        <li>• Тестируем все сценарии</li>
                        <li>• Запускаем в продакшн</li>
                      </ul>
                    </div>

                    {/* Result */}
                    <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg">
                      <h4 className="text-primary font-semibold mb-2">Результат через 3-5 дней:</h4>
                      <p className="text-primary text-sm">
                        Готовая игра в iframe, которую остается только встроить на сайт. Никакой работы для ваших разработчиков.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Demo (40%) */}
            <div className="xl:col-span-2">
              <div className="sticky top-24">
                {/* Device Preview with Side Controls */}
                <div className="flex items-start justify-center gap-4 mb-6">
                  {/* Left side - Phone and CTA aligned */}
                  <div className="flex flex-col items-start">
                    {/* Phone Preview */}
                    {selectedDevice === 'mobile' && <div className="phone-frame hidden md:block">
                        <div className="phone-screen">
                          <iframe src="https://dev-dot-casino-games-462502.lm.r.appspot.com/keno" className="w-full h-full border-0 rounded-[28px]" title="Keno Mobile Demo Game" allow="fullscreen" />
                        </div>
                      </div>}
                    
                     {/* Call to Action */}
                     <div className="mt-8 w-[400px]">
                       <CallToActionCard title="Готовы интегрировать Keno?" description="Получите полнофункциональную демо-версию с документацией API" statusText="На связи 24/7" buttonText="Запросить интеграцию" buttonLink="/#contact" />
                     </div>
                  </div>
                  
                  {/* Device Selection Buttons - Hidden on mobile */}
                  <div className="hidden md:flex flex-col gap-2">
                    <div className="gaming-border card-shadow p-2 rounded-lg">
                      <button onClick={() => setSelectedDevice('mobile')} className={`flex items-center justify-center p-3 rounded-md transition-all border ${selectedDevice === 'mobile' ? 'bg-primary text-primary-foreground shadow-md border-primary' : 'bg-background text-foreground hover:bg-muted/50 border-border hover:border-muted-foreground'}`} title="Телефон">
                        <Smartphone className="w-5 h-5" />
                      </button>
                      <button onClick={() => setIsDesktopModalOpen(true)} className="flex items-center justify-center p-3 rounded-md transition-all bg-background text-foreground hover:bg-muted/50 border border-border hover:border-muted-foreground mt-2" title="Десктоп">
                        <Monitor className="w-5 h-5" />
                      </button>
                      <button onClick={() => setIsTabletModalOpen(true)} className="flex items-center justify-center p-3 rounded-md transition-all bg-background text-foreground hover:bg-muted/50 border border-border hover:border-muted-foreground mt-2" title="Планшет">
                        <TabletSmartphone className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
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
            <iframe src="https://dev-dot-casino-games-462502.lm.r.appspot.com/keno" className="w-full h-full border-0 rounded-lg" title="Keno Mobile Demo Game" allow="fullscreen" />
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
        <DialogContent className="max-w-fit p-8 bg-background/95 backdrop-blur [&>button]:w-8 [&>button]:h-8 md:[&>button]:w-6 md:[&>button]:h-6">
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
    </div>;
};
export default Keno;