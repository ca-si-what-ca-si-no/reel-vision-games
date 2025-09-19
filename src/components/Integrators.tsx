import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Shield, Zap, HeadphonesIcon, BarChart3, Globe, CheckCircle } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
const Integrators = () => {
  const [api, setApi] = useState<CarouselApi>();
  const intervalRef = useRef<NodeJS.Timeout>();

  const startAutoScroll = useCallback(() => {
    if (!api) return;
    intervalRef.current = setInterval(() => {
      api.scrollNext();
    }, 3000);
  }, [api]);

  const stopAutoScroll = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  useEffect(() => {
    if (!api) return;
    startAutoScroll();
    return stopAutoScroll;
  }, [api, startAutoScroll, stopAutoScroll]);
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
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
  return <section id="integrators" className="min-h-screen flex items-center justify-center relative snap-section py-24">
      <div className="max-w-[1200px] mx-auto px-6 w-full">
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

        {/* Benefits - Mobile Carousel, Desktop Grid */}
        <div className="mb-12">
          {/* Mobile Carousel */}
          <div className="md:hidden">
            <Carousel 
              className="w-full max-w-sm mx-auto"
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              onMouseEnter={stopAutoScroll}
              onMouseLeave={startAutoScroll}
            >
              <CarouselContent>
                {benefits.map((benefit, index) => (
                  <CarouselItem key={index}>
                    <Card className="gaming-border card-shadow smooth-transition hover:shadow-glow group animate-slide-in h-64">
                      <CardContent className="p-6 h-full flex flex-col">
                        <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 smooth-transition">
                          <benefit.icon className="w-6 h-6 text-accent-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-foreground">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed flex-1">
                          {benefit.description}
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="gaming-border card-shadow smooth-transition hover:shadow-glow group animate-slide-in" style={{
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
              </Card>
            ))}
          </div>
        </div>

        {/* Game Packages */}
        

        {/* CTA Section */}
        <div className="p-12 text-center backdrop-blur-sm bg-background/20 border border-border/50 mt-12">
          <h3 className="text-3xl font-bold mb-6 text-foreground">
            Готовы начать интеграцию?
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Все игры поставляются с инструментами управления и настраиваемым RTP. 
            Начните тестирование прямо сейчас!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="accent-gradient glow-effect font-semibold" 
              onClick={() => scrollToSection('contact')}
            >
              Демо доступ
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Integrators;