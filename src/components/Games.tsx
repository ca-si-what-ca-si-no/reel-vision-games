import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import gamesShowcase from "@/assets/games-showcase.jpg";
import { Play, Star, TrendingUp } from "lucide-react";

const Games = () => {
  const gameTypes = [
    {
      title: "Keno",
      description: "Классическая лотерейная игра с современным интерфейсом и настраиваемым RTP",
      features: ["Настраиваемый RTP", "Административная панель", "Реалтайм аналитика"],
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
      features: ["5 уникальных игр", "Общая админка", "Синхронизированная статистика"],
      badge: "Новинка"
    }
  ];

  return (
    <section id="games" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Наши</span>{" "}
            <span className="text-transparent bg-gradient-accent bg-clip-text">игры</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Каждая игра создается с учетом современных требований рынка 
            и предпочтений игроков со всего мира.
          </p>
        </div>

        {/* Featured Game Showcase */}
        <div className="mb-20">
          <Card className="gaming-border card-shadow overflow-hidden group hover:shadow-glow smooth-transition">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative overflow-hidden">
                <img 
                  src={gamesShowcase} 
                  alt="Gaming showcase" 
                  className="w-full h-80 lg:h-full object-cover group-hover:scale-105 smooth-transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <Button 
                  size="lg" 
                  className="absolute bottom-6 left-6 accent-gradient glow-effect"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Демо версия
                </Button>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-primary-glow/20 text-primary-glow border-primary-glow/30">
                  Хит продаж
                </Badge>
                <h3 className="text-3xl font-bold mb-4 text-foreground">
                  Crash Games Pack
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Полный пакет crash-игр с единой административной панелью. 
                  Настраиваемый RTP, детальная аналитика и простая интеграция.
                </p>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-accent fill-current" />
                    <span className="text-muted-foreground">RTP 90-99%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary-glow" />
                    <span className="text-muted-foreground">Админка включена</span>
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
              <CardContent className="p-8 text-center">
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
                <Button 
                  variant="outline" 
                  className="w-full border-border hover:bg-card"
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