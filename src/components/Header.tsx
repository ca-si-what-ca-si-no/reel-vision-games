import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
const Header = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="flex items-center space-x-3 hover:opacity-80 smooth-transition bg-transparent border-none cursor-pointer"
            >
              
              <span className="text-2xl font-bold text-foreground">
                2xWet <span className="text-accent">Studio</span>
              </span>
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-muted-foreground hover:text-foreground smooth-transition bg-transparent border-none cursor-pointer"
            >
              О нас
            </button>
            <button 
              onClick={() => scrollToSection('games')} 
              className="text-muted-foreground hover:text-foreground smooth-transition bg-transparent border-none cursor-pointer"
            >
              Игры
            </button>
            <button 
              onClick={() => scrollToSection('integrators')} 
              className="text-muted-foreground hover:text-foreground smooth-transition bg-transparent border-none cursor-pointer"
            >
              Интеграторам
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-muted-foreground hover:text-foreground smooth-transition bg-transparent border-none cursor-pointer"
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
    </header>;
};
export default Header;