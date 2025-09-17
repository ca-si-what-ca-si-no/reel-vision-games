import { BarChart3, Code, Globe, HeadphonesIcon, Shield, Zap } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { COMMON_NUMBERS } from '@/constants/numbers';

const Integrators = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const benefits = [
    {
      icon: Code,
      title: 'Простое API',
      description: 'Интуитивное API для быстрой интеграции игр в вашу платформу',
    },
    {
      icon: Shield,
      title: 'Настраиваемый RTP',
      description: 'Полный контроль над RTP от 90% до 99% для каждой игры',
    },
    {
      icon: Zap,
      title: 'Быстрый запуск',
      description: 'Интеграция новых игр за 24-48 часов',
    },
    {
      icon: HeadphonesIcon,
      title: 'Управление играми',
      description: 'Удобные инструменты для настройки и мониторинга игрового процесса',
    },
    {
      icon: BarChart3,
      title: 'Реалтайм аналитика',
      description: 'Подробная статистика и отчеты по производительности игр в реальном времени',
    },
    {
      icon: Globe,
      title: 'Готовые решения',
      description: 'Keno, Hilo и пакет Crash игр готовы к немедленной интеграции',
    },
  ];
  const _gamePackages = [
    {
      title: 'Keno',
      description: 'Классическая лотерейная игра',
      features: [
        'Настраиваемый RTP 90-99%',
        'Управление через API',
        'Мобильная версия',
        'Реалтайм статистика',
        'Полная документация API',
      ],
    },
    {
      title: 'Hilo',
      description: 'Карточная игра с высокой отдачей',
      features: [
        'Быстрые раунды игры',
        'Настройка лимитов ставок',
        'Адаптивный дизайн',
        'Встроенная аналитика',
        'Детальная статистика',
      ],
    },
    {
      title: 'Crash Games Pack',
      description: 'Пакет из 5 crash игр',
      features: [
        '5 уникальных crash игр',
        'Единая панель управления',
        'Высокая волатильность',
        'Настраиваемые параметры',
        '24/7 техподдержка',
      ],
    },
  ];
  return (
    <section
      id="integrators"
      className="snap-section relative flex min-h-screen items-center justify-center"
    >
      <div className="container mx-auto w-full px-6">
        <div className="mb-16 animate-fade-in text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            <span className="text-foreground">Для</span>{' '}
            <span className="bg-gradient-accent bg-clip-text text-transparent">интеграторов</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-tight text-muted-foreground md:text-xl">
            Комплексные решения для интеграции игрового контента в ваши платформы. От API до
            технической поддержки — всё для успешного запуска.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="gaming-border card-shadow smooth-transition group animate-slide-in hover:shadow-glow"
              style={{
                animationDelay: `${index * COMMON_NUMBERS.DECIMAL_PRECISION}s`,
              }}
            >
              <CardContent className="p-6">
                <div className="smooth-transition mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-accent group-hover:scale-110">
                  <benefit.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">{benefit.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Game Packages */}

        {/* CTA Section */}
        <div className="border border-border/50 bg-background/20 p-12 text-center backdrop-blur-sm">
          <h3 className="mb-6 text-3xl font-bold text-foreground">Готовы начать интеграцию?</h3>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Все игры поставляются с инструментами управления и настраиваемым RTP. Начните
            тестирование прямо сейчас!
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
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
    </section>
  );
};
export default Integrators;
