import { Button } from "@/components/ui/button";
import { Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Keno = () => {
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
    image: "/lovable-uploads/255be87f-66e2-49cd-a556-b9ece8de555d.png"
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
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
                  <h2 className="text-2xl font-semibold mb-4">Скриншот игры</h2>
                  <div className="rounded-lg overflow-hidden mb-6">
                    <img 
                      src={gameData.image} 
                      alt={`${gameData.title} game interface`} 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
                
                <div className="pt-6 border-t">
                  <div className="flex gap-4">
                    <Link to="/" className="flex-1">
                      <Button variant="outline" className="w-full">
                        Назад к играм
                      </Button>
                    </Link>
                    <Button className="flex-1">
                      Запросить интеграцию
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Demo Game */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="bg-muted/20 rounded-lg p-4">
                <h2 className="text-2xl font-semibold mb-4 text-center">Демо-версия игры</h2>
                <div className="rounded-lg overflow-hidden bg-background shadow-lg">
                  <iframe 
                    src="https://dev-dot-casino-games-462502.lm.r.appspot.com/keno" 
                    className="w-full h-[600px] border-0" 
                    title="Keno Demo Game" 
                    allow="fullscreen"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center mt-4">
                  Попробуйте игру прямо сейчас! Это полнофункциональная демо-версия.
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

export default Keno;