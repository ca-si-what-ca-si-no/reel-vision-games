import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    // Закрываем мобильное меню при навигации
    setIsMenuOpen(false);
    
    // Если мы не на главной странице, переходим на главную с хешем
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      return;
    }
    
    // Если на главной странице, просто скроллим
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">2x</span>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                2xWet <span className="text-accent">Studio</span>
              </span>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {[
              { id: 'games', label: 'Игры' },
              { id: 'integrators', label: 'Интеграторам' },
              { id: 'contact', label: 'Контакты' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 rounded-lg hover:bg-accent/10 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
              </button>
            ))}
          </div>
          
          {/* CTA Button and Mobile Menu Toggle */}
          <div className="flex items-center space-x-3">
            <Button 
              size="sm" 
              className="hidden sm:flex accent-gradient text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-accent/25"
              onClick={() => scrollToSection('contact')}
            >
              Связаться
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-accent/10 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-64 opacity-100 pb-6' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="flex flex-col space-y-2 pt-4 border-t border-border/50">
            {[
              { id: 'games', label: 'Игры' },
              { id: 'integrators', label: 'Интеграторам' },
              { id: 'contact', label: 'Контакты' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center w-full px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-all duration-200 text-left"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2">
              <Button 
                className="w-full accent-gradient text-white font-semibold rounded-full"
                onClick={() => scrollToSection('contact')}
              >
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;