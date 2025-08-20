import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="GdeNazvanie Studio Logo" className="w-10 h-10 animate-float" />
            <span className="text-2xl font-bold text-foreground">
              GdeNazvanie <span className="text-accent">Studio</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground smooth-transition">
              О нас
            </a>
            <a href="#games" className="text-muted-foreground hover:text-foreground smooth-transition">
              Игры
            </a>
            <a href="#integrators" className="text-muted-foreground hover:text-foreground smooth-transition">
              Интеграторам
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground smooth-transition">
              Контакты
            </a>
          </div>
          
          <Button variant="secondary" size="sm" className="accent-gradient font-semibold">
            Связаться с нами
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;