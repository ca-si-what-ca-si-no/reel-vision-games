import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Shield, Zap, HeadphonesIcon, BarChart3, Globe, CheckCircle } from "lucide-react";
const Integrators = () => {
  const benefits = [{
    icon: Code,
    title: "Простое API",
    description: "Интуитивное API для быстрой интеграции игр в вашу платформу"
  }, {
    icon: Shield,
    title: "Настраиваемый RTP",
    description: "Полный контроль над RTP от 90% до 99% для каждой игры"
  }, {
    icon: Zap,
    title: "Быстрый запуск",
    description: "Интеграция новых игр за 24-48 часов"
  }, {
    icon: HeadphonesIcon,
    title: "Управление играми",
    description: "Удобные инструменты для настройки и мониторинга игрового процесса"
  }, {
    icon: BarChart3,
    title: "Реалтайм аналитика",
    description: "Подробная статистика и отчеты по производительности игр в реальном времени"
  }, {
    icon: Globe,
    title: "Готовые решения",
    description: "Keno, Hilo и пакет Crash игр готовы к немедленной интеграции"
  }];
  const gamePackages = [{
    title: "Keno",
    description: "Классическая лотерейная игра",
    features: ["Настраиваемый RTP 90-99%", "Управление через API", "Мобильная версия", "Реалтайм статистика", "Полная документация API"]
  }, {
    title: "Hilo",
    description: "Карточная игра с высокой отдачей",
    features: ["Быстрые раунды игры", "Настройка лимитов ставок", "Адаптивный дизайн", "Встроенная аналитика", "Детальная статистика"]
  }, {
    title: "Crash Games Pack",
    description: "Пакет из 5 crash игр",
    features: ["5 уникальных crash игр", "Единая панель управления", "Высокая волатильность", "Настраиваемые параметры", "24/7 техподдержка"]
  }];
  return <section id="integrators" className="min-h-screen flex items-center justify-center relative snap-section pt-20">
      <div className="container mx-auto px-6 w-full">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Для</span>{" "}
            <span className="text-transparent bg-gradient-accent bg-clip-text">интеграторов</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-tight">
            Комплексные решения для интеграции игрового контента в ваши платформы. 
            От API до технической поддержки — всё для успешного запуска.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => <Card key={index} className="gaming-border card-shadow smooth-transition hover:shadow-glow group animate-slide-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 smooth-transition">
                  <benefit.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>)}
        </div>

        {/* Game Packages */}
        

        {/* CTA Section */}
        <div className="p-12 text-center backdrop-blur-sm bg-background/20 border border-border/50">
          <h3 className="text-3xl font-bold mb-6 text-foreground">
            Готовы начать интеграцию?
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Все игры поставляются с инструментами управления и настраиваемым RTP. 
            Начните тестирование прямо сейчас!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="accent-gradient glow-effect font-semibold" asChild>
              <a href="#contact">Демо доступ</a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Integrators;