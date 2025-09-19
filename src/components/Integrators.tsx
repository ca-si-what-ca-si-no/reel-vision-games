import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  BarChart3,
  Code,
  Globe,
  HeadphonesIcon,
  Shield,
  Star,
  Zap,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
const Integrators = () => {
  const [api, setApi] = useState<CarouselApi>();
  const intervalRef = useRef<NodeJS.Timeout>();
  const pauseTimeoutRef = useRef<NodeJS.Timeout>();
  const lastInteractionRef = useRef<number>(0);

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

  const handleUserInteraction = useCallback(() => {
    lastInteractionRef.current = Date.now();
    stopAutoScroll();

    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }

    pauseTimeoutRef.current = setTimeout(() => {
      startAutoScroll();
    }, 10000);
  }, [startAutoScroll, stopAutoScroll]);

  useEffect(() => {
    if (!api) return;
    startAutoScroll();
    return () => {
      stopAutoScroll();
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, [api, startAutoScroll, stopAutoScroll]);
  const scrollToSection = (sectionId: string) => {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const benefits = [
    {
      icon: Code,
      title: "Простое API",
      description:
        "Интуитивное API для быстрой интеграции игр в вашу платформу",
    },
    {
      icon: Shield,
      title: "Настраиваемый RTP",
      description: "Полный контроль над RTP от 90% до 99% для каждой игры",
    },
    {
      icon: Zap,
      title: "Быстрый запуск",
      description: "Интеграция новых игр за 24-48 часов",
    },
    {
      icon: HeadphonesIcon,
      title: "Управление играми",
      description:
        "Удобные инструменты для настройки и мониторинга игрового процесса",
    },
    {
      icon: BarChart3,
      title: "Реалтайм аналитика",
      description:
        "Подробная статистика и отчеты по производительности игр в реальном времени",
    },
    {
      icon: Globe,
      title: "Готовые решения",
      description:
        "Keno, Hilo и пакет Crash игр готовы к немедленной интеграции",
    },
  ];
  const gamePackages = [
    {
      title: "Keno",
      description: "Классическая лотерейная игра",
      features: [
        "Настраиваемый RTP 90-99%",
        "Управление через API",
        "Мобильная версия",
        "Реалтайм статистика",
        "Полная документация API",
      ],
    },
    {
      title: "Hilo",
      description: "Карточная игра с высокой отдачей",
      features: [
        "Быстрые раунды игры",
        "Настройка лимитов ставок",
        "Адаптивный дизайн",
        "Встроенная аналитика",
        "Детальная статистика",
      ],
    },
    {
      title: "Crash Games Pack",
      description: "Пакет из 5 crash игр",
      features: [
        "5 уникальных crash игр",
        "Единая панель управления",
        "Высокая волатильность",
        "Настраиваемые параметры",
        "24/7 техподдержка",
      ],
    },
  ];
  return (
    <section
      id="integrators"
      className="min-h-screen flex items-center justify-center relative py-24"
    >
      {/* Floating decorative elements */}
      <div
        className="absolute top-20 left-16 animate-float opacity-35 z-10"
        style={{
          animationDelay: "0.5s",
        }}
      >
        <Star className="w-6 h-6 text-primary-glow/35" />
      </div>
      <div
        className="absolute top-1/4 right-12 animate-float opacity-40 z-10"
        style={{
          animationDelay: "1.5s",
        }}
      >
        <Zap className="w-7 h-7 text-accent/40" />
      </div>
      <div
        className="absolute bottom-1/3 left-1/4 animate-float opacity-30 z-10"
        style={{
          animationDelay: "2.5s",
        }}
      >
        <Star className="w-4 h-4 text-primary/30" />
      </div>
      <div
        className="absolute top-1/2 right-1/4 animate-float opacity-25 z-10"
        style={{
          animationDelay: "3.5s",
        }}
      >
        <Star className="w-5 h-5 text-accent/25" />
      </div>
      <div
        className="absolute bottom-20 right-16 animate-float opacity-40 z-10"
        style={{
          animationDelay: "4s",
        }}
      >
        <Zap className="w-5 h-5 text-primary-glow/40" />
      </div>
      <div
        className="absolute top-16 left-1/3 animate-float opacity-30 z-10"
        style={{
          animationDelay: "4.5s",
        }}
      >
        <Star className="w-3 h-3 text-accent/30" />
      </div>
      <div className="max-w-[1200px] mx-auto px-6 w-full">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Для</span>{" "}
            <span className="text-transparent bg-gradient-accent bg-clip-text">
              интеграторов
            </span>
          </h2>
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
              onMouseEnter={handleUserInteraction}
              onTouchStart={handleUserInteraction}
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
              <CarouselPrevious onClick={handleUserInteraction} />
              <CarouselNext onClick={handleUserInteraction} />
            </Carousel>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="gaming-border card-shadow smooth-transition hover:shadow-glow group animate-slide-in"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
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
            Все игры поставляются с инструментами управления и настраиваемым
            RTP. Начните тестирование прямо сейчас!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="accent-gradient glow-effect font-semibold"
              onClick={() => scrollToSection("contact")}
            >
              Демо доступ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Integrators;
