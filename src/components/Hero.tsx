import { Rocket, Star, Zap } from 'lucide-react';

import { Button } from '@/components/ui/button';

import TypewriterText from './TypewriterText';

const Hero = () => {
  return (
    <section
      id="hero"
      className="snap-section relative flex min-h-screen items-center justify-center pt-20"
    >
      {/* Enhanced Floating Elements */}
      <div
        className="absolute left-10 top-20 z-10 animate-float opacity-60"
        style={{
          animationDelay: '0s',
        }}
      >
        <Star className="h-6 w-6 text-accent/60" />
      </div>
      <div
        className="absolute right-20 top-40 z-10 animate-float opacity-50"
        style={{
          animationDelay: '1s',
        }}
      >
        <Zap className="h-8 w-8 text-primary-glow/50" />
      </div>
      <div
        className="absolute bottom-32 left-20 z-10 animate-float opacity-40"
        style={{
          animationDelay: '2s',
        }}
      >
        <Star className="h-4 w-4 text-accent/40" />
      </div>
      <div
        className="absolute left-1/4 top-1/3 z-10 animate-float opacity-30"
        style={{
          animationDelay: '0.5s',
        }}
      >
        <Rocket className="h-5 w-5 text-primary/30" />
      </div>
      <div
        className="absolute bottom-1/4 right-1/3 z-10 animate-float opacity-25"
        style={{
          animationDelay: '1.5s',
        }}
      >
        <Star className="h-3 w-3 text-accent/25" />
      </div>
      <div
        className="absolute right-10 top-2/3 z-10 animate-float opacity-35"
        style={{
          animationDelay: '2.5s',
        }}
      >
        <Zap className="h-6 w-6 text-primary-glow/35" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-4xl animate-fade-in">
          <h1 className="mb-6 mt-8 text-center text-6xl font-bold leading-tight md:mt-0 md:text-8xl">
            <span className="text-foreground">Создаем</span>{' '}
            <span className="bg-gradient-accent bg-clip-text text-transparent">будущее</span>
            <br />
            <span className="text-foreground">iGaming</span>
          </h1>

          <div className="mb-8 flex items-center justify-center gap-2 text-base md:gap-4 md:text-lg">
            <div className="flex items-center gap-1 md:gap-2">
              <Rocket className="h-4 w-4 text-accent md:h-5 md:w-5" />
              <span className="text-sm font-semibold text-accent md:text-base">
                Настраиваемый RTP
              </span>
            </div>
            <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50 md:h-2 md:w-2" />
            <div className="flex items-center gap-1 md:gap-2">
              <Star className="h-4 w-4 text-primary-glow md:h-5 md:w-5" />
              <span className="text-sm text-muted-foreground md:text-base">
                Топовые предложения
              </span>
            </div>
          </div>

          <div className="mx-auto mb-10 flex min-h-[6rem] max-w-2xl items-start justify-center text-center text-lg leading-tight text-muted-foreground md:text-xl">
            <TypewriterText
              initialText="Игровая студия "
              typeText="с экспертизой в создании iGaming-решений. Наш актуальный портфолио включает увлекательные игры с гибкой настройкой и полной кастомизацией."
              speed={80}
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
            <Button
              className="min-w-[280px] transform rounded-full bg-gradient-to-r from-primary via-primary-glow to-accent px-16 py-8 text-2xl font-bold text-primary-foreground shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-glow hover:brightness-110"
              onClick={() => {
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Связаться с нами
            </Button>

            <div className="flex gap-[10px]">
              <Button
                className="min-w-[240px] transform rounded-full border border-white/20 bg-white px-14 py-8 text-2xl font-bold shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white"
                onClick={() => {
                  document
                    .getElementById('games')
                    ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                <span className="bg-gradient-accent bg-clip-text text-transparent">Каталог</span>
              </Button>

              <Button
                className="min-w-[200px] transform rounded-full border border-white/20 px-16 py-8 text-2xl font-bold shadow-2xl transition-all duration-300 hover:scale-105"
                style={
                  {
                    backgroundColor: 'white',
                    '--tw-bg-opacity': '1',
                  } as React.CSSProperties
                }
                asChild
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
