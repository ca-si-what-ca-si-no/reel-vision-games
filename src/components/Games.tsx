import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import gamesShowcase from "@/assets/games-showcase.jpg";
import { Play, Star, TrendingUp } from "lucide-react";

const Games = () => {
  const gameTypes = [
    {
      title: "Слоты",
      description: "Современные игровые автоматы с уникальными механиками",
      count: "60+",
      badge: "Популярное"
    },
    {
      title: "Рулетка",
      description: "Классические и инновационные версии рулетки",
      count: "15+",
      badge: "Премиум"
    },
    {
      title: "Карточные игры",
      description: "Покер, блэкджек и другие карточные игры",
      count: "25+",
      badge: "Новое"
    },
    {
      title: "Краш игры",
      description: "Динамичные игры с мгновенными выплатами",
      count: "10+",
      badge: "Тренд"
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
                  Премьера
                </Badge>
                <h3 className="text-3xl font-bold mb-4 text-foreground">
                  Cosmic Fortune
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Революционный слот с уникальной механикой космических путешествий. 
                  Инновационные бонусные раунды и захватывающий геймплей.
                </p>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-accent fill-current" />
                    <span className="text-muted-foreground">RTP 96.5%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary-glow" />
                    <span className="text-muted-foreground">Высокая волатильность</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Game Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {game.description}
                </p>
                <div className="text-3xl font-bold text-accent mb-4">
                  {game.count}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-border hover:bg-card"
                >
                  Подробнее
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