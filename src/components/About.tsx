import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Trophy, Users, Globe, Zap } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
const About = () => {
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
  const features = [{
    icon: Trophy,
    title: "Премиум качество",
    description: "Высококачественная графика и передовые игровые механики"
  }, {
    icon: Users,
    title: "Опытная команда",
    description: "Более 50+ специалистов с опытом в игровой индустрии"
  }, {
    icon: Globe,
    title: "Глобальный охват",
    description: "Работаем с операторами и интеграторами по всему миру"
  }, {
    icon: Zap,
    title: "Быстрая интеграция",
    description: "Простое API и техническая поддержка 24/7"
  }];
  return <section id="about" className="min-h-screen flex items-center justify-center relative">
      
    </section>;
};
export default About;