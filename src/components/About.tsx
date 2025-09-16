import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Trophy, Users, Globe, Zap } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

const About = () => {
  const [api, setApi] = useState<CarouselApi>()
  const intervalRef = useRef<NodeJS.Timeout>()

  const startAutoScroll = useCallback(() => {
    if (!api) return
    
    intervalRef.current = setInterval(() => {
      api.scrollNext()
    }, 3000)
  }, [api])

  const stopAutoScroll = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }, [])

  useEffect(() => {
    if (!api) return

    startAutoScroll()
    return stopAutoScroll
  }, [api, startAutoScroll, stopAutoScroll])

  const features = [
    {
      icon: Trophy,
      title: "Премиум качество",
      description: "Высококачественная графика и передовые игровые механики"
    },
    {
      icon: Users,
      title: "Опытная команда",
      description: "Более 50+ специалистов с опытом в игровой индустрии"
    },
    {
      icon: Globe,
      title: "Глобальный охват",
      description: "Работаем с операторами и интеграторами по всему миру"
    },
    {
      icon: Zap,
      title: "Быстрая интеграция",
      description: "Простое API и техническая поддержка 24/7"
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative snap-section pt-20">
      <div className="container mx-auto px-6 w-full">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-foreground">Кто мы</span>{" "}
            <span className="text-transparent bg-gradient-accent bg-clip-text">такие</span>
          </h2>
        </div>
        
        <Carousel 
          setApi={setApi}
          className="w-full max-w-5xl mx-auto"
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {features.map((feature, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card 
                  className="gaming-border card-shadow smooth-transition hover:shadow-glow group animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-accent flex items-center justify-center group-hover:scale-110 smooth-transition">
                      <feature.icon className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-accent mb-2">3+</div>
              <div className="text-muted-foreground">Готовых продукта</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold text-accent mb-2">90-99%</div>
              <div className="text-muted-foreground">Настраиваемый RTP</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-4xl font-bold text-accent mb-2">24ч</div>
              <div className="text-muted-foreground">Интеграция</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-muted-foreground">Поддержка</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;