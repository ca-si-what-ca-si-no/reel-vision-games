import { Button } from '@/components/ui/button';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => scrollToSection('hero')}
              className="smooth-transition flex cursor-pointer items-center space-x-3 border-none bg-transparent hover:opacity-80"
            >
              <span className="text-2xl font-bold text-foreground">
                2xWet <span className="text-accent">Studio</span>
              </span>
            </button>
          </div>

          <div className="hidden items-center space-x-4 md:flex lg:space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="smooth-transition cursor-pointer border-none bg-transparent text-muted-foreground hover:text-foreground"
            >
              О нас
            </button>
            <button
              onClick={() => scrollToSection('games')}
              className="smooth-transition cursor-pointer border-none bg-transparent text-muted-foreground hover:text-foreground"
            >
              Игры
            </button>
            <button
              onClick={() => scrollToSection('integrators')}
              className="smooth-transition cursor-pointer border-none bg-transparent text-muted-foreground hover:text-foreground"
            >
              Интеграторам
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="smooth-transition cursor-pointer border-none bg-transparent text-muted-foreground hover:text-foreground"
            >
              Контакты
            </button>
          </div>

          <Button
            size="sm"
            className="accent-gradient glow-effect font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => scrollToSection('contact')}
          >
            Связаться с нами
          </Button>
        </nav>
      </div>
    </header>
  );
};
export default Header;
