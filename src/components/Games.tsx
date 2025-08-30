import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Star, TrendingUp } from "lucide-react";

const Games = () => {
  const gameTypes = [
    {
      title: "Keno",
      description: "Классическая лотерейная игра с современным интерфейсом и настраиваемым RTP",
      features: ["Настраиваемый RTP", "Веб-интерфейс управления", "Реалтайм аналитика"],
      badge: "Популярное"
    },
    {
      title: "Hilo",
      description: "Увлекательная карточная игра с простыми правилами и высокой отдачей",
      features: ["Быстрые раунды", "Мобильная оптимизация", "Настройка лимитов"],
      badge: "Топ"
    },
    {
      title: "Crash Games Pack",
      description: "Полный пакет краш-игр с уникальными механиками и дизайном",
      features: ["5 уникальных игр", "Единое управление", "Синхронизированная статистика"],
      badge: "Новинка"
    }
  ];

  return (
    <section id="games" className="py-24 relative background-grid">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Наши</span>{" "}
            <span className="text-transparent bg-gradient-accent bg-clip-text">решения</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Портфолио готовых игровых продуктов с современными технологиями 
            и гибкими настройками для каждого оператора.
          </p>
        </div>

        {/* Featured Games Showcase */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Keno Game */}
            <Card className="gaming-border card-shadow overflow-hidden group hover:shadow-glow smooth-transition">
              <div className="relative overflow-hidden">
                <img 
                  src="/lovable-uploads/255be87f-66e2-49cd-a556-b9ece8de555d.png" 
                  alt="Keno game interface" 
                  className="w-full h-64 object-cover group-hover:scale-105 smooth-transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-background/95 text-primary-glow border-primary-glow/50 font-semibold backdrop-blur-sm">
                  Keno
                </Badge>
                <Button 
                  size="sm" 
                  className="absolute bottom-4 left-4 accent-gradient"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Демо
                </Button>
              </div>
            </Card>

            {/* Hilo Game */}
            <Card className="gaming-border card-shadow overflow-hidden group hover:shadow-glow smooth-transition">
              <div className="relative overflow-hidden">
                <img 
                  src="/lovable-uploads/bf859430-c5c0-4373-aafa-f3290eb90cc3.png" 
                  alt="Hilo card game interface" 
                  className="w-full h-64 object-cover group-hover:scale-105 smooth-transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-background/95 text-accent border-accent/50 font-semibold backdrop-blur-sm">
                  Hilo
                </Badge>
                <Button 
                  size="sm" 
                  className="absolute bottom-4 left-4 accent-gradient"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Демо
                </Button>
              </div>
            </Card>

            {/* Crash Game */}
            <Card className="gaming-border card-shadow overflow-hidden group hover:shadow-glow smooth-transition">
              <div className="relative overflow-hidden">
                <img 
                  src="/lovable-uploads/b17f2fcd-8c2a-4f79-9914-3e3373e0a661.png" 
                  alt="Crash game interface" 
                  className="w-full h-64 object-cover group-hover:scale-105 smooth-transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-background/95 text-primary-glow border-primary-glow/50 font-semibold backdrop-blur-sm">
                  Crash
                </Badge>
                <Button 
                  size="sm" 
                  className="absolute bottom-4 left-4 accent-gradient"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Демо
                </Button>
              </div>
            </Card>
          </div>

          {/* Main Feature Card */}
          <Card className="gaming-border card-shadow overflow-hidden group hover:shadow-glow smooth-transition mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative overflow-hidden">
                <img 
                  src="/lovable-uploads/b17f2fcd-8c2a-4f79-9914-3e3373e0a661.png" 
                  alt="Featured crash game" 
                  className="w-full h-80 lg:h-full object-cover group-hover:scale-105 smooth-transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <Button 
                  size="lg" 
                  className="absolute bottom-6 left-6 accent-gradient glow-effect"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Попробовать все игры
                </Button>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-background/95 text-primary-glow border-primary-glow/50 font-semibold backdrop-blur-sm">
                  Полная коллекция
                </Badge>
                <h3 className="text-3xl font-bold mb-4 text-foreground">
                  Готовые игровые решения
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Keno, Hilo и пакет Crash игр с настраиваемым RTP, 
                  современным дизайном и полной интеграционной поддержкой.
                </p>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-accent fill-current" />
                    <span className="text-muted-foreground">RTP 90-99%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary-glow" />
                    <span className="text-muted-foreground">Готовы к запуску</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Game Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gameTypes.map((game, index) => (
            <Card 
              key={index}
              className="gaming-border card-shadow smooth-transition hover:shadow-glow group animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center flex flex-col h-full">
                <div className="flex-1">
                  <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
                    {game.badge}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-accent smooth-transition">
                    {game.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {game.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Особенности:</h4>
                    <ul className="space-y-1">
                      {game.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <Star className="w-3 h-3 text-accent fill-current" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-border hover:bg-card mt-auto"
                >
                  Демо версия
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;