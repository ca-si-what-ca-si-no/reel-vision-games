import { useCallback, useEffect, useRef, useState } from 'react';

import { Globe, Trophy, Users, Zap } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const SCROLL_INTERVAL_MS = 3000;
const ANIMATION_DELAY_MULTIPLIER = 100;

const features = [
  {
    icon: Trophy,
    title: 'Премиум качество',
    description: 'Высококачественная графика и передовые игровые механики',
  },
  {
    icon: Users,
    title: 'Опытная команда',
    description: 'Более 50+ специалистов с опытом в игровой индустрии',
  },
  {
    icon: Globe,
    title: 'Глобальный охват',
    description: 'Работаем с операторами и интеграторами по всему миру',
  },
  {
    icon: Zap,
    title: 'Быстрая интеграция',
    description: 'Простое API и техническая поддержка 24/7',
  },
];

const useAutoScroll = (api: CarouselApi) => {
  const intervalRef = useRef<NodeJS.Timeout>();

  const startAutoScroll = useCallback(() => {
    if (!api) {
      return;
    }

    intervalRef.current = setInterval(() => {
      api.scrollNext();
    }, SCROLL_INTERVAL_MS);
  }, [api]);

  const stopAutoScroll = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  useEffect(() => {
    if (!api) {
      return () => {};
    }

    startAutoScroll();
    return () => {
      stopAutoScroll();
    };
  }, [api, startAutoScroll, stopAutoScroll]);

  return { startAutoScroll, stopAutoScroll };
};

const StatisticsSection = () => (
  <div className="mt-20 text-center">
    <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
      <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
        <div className="mb-2 text-4xl font-bold text-accent">3+</div>
        <div className="text-muted-foreground">Готовых продукта</div>
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
        <div className="mb-2 text-4xl font-bold text-accent">90-99%</div>
        <div className="text-muted-foreground">Настраиваемый RTP</div>
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
        <div className="mb-2 text-4xl font-bold text-accent">24ч</div>
        <div className="text-muted-foreground">Интеграция</div>
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '800ms' }}>
        <div className="mb-2 text-4xl font-bold text-accent">24/7</div>
        <div className="text-muted-foreground">Поддержка</div>
      </div>
    </div>
  </div>
);

const About = () => {
  const [api, setApi] = useState<CarouselApi>();
  const { startAutoScroll, stopAutoScroll } = useAutoScroll(api);

  return (
    <section
      id="about"
      className="snap-section relative flex min-h-screen items-center justify-center"
    >
      <div className="container mx-auto w-full px-6">
        <div className="mb-16 animate-fade-in text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            <span className="text-foreground">Кто мы</span>{' '}
            <span className="bg-gradient-accent bg-clip-text text-transparent">такие</span>
          </h2>
        </div>

        <Carousel
          setApi={setApi}
          className="mx-auto w-full max-w-5xl"
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
          opts={{
            align: 'start',
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {features.map((feature, index) => (
              <CarouselItem key={index} className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3">
                <Card
                  className="gaming-border card-shadow smooth-transition group animate-slide-in hover:shadow-glow"
                  style={{ animationDelay: `${index * ANIMATION_DELAY_MULTIPLIER}ms` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="smooth-transition mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-accent group-hover:scale-110">
                      <feature.icon className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <h3 className="mb-4 text-xl font-semibold text-foreground">{feature.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <StatisticsSection />
      </div>
    </section>
  );
};

export default About;
