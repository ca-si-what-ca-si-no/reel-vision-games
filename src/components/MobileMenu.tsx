import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.svg";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 300);
  };

  return (
    <>
      {/* Burger Button - Fixed position */}
      <div className="fixed top-6 right-6 z-50 md:hidden">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-12 h-12 rounded-full bg-background/30 backdrop-blur-lg border border-white/10 hover:bg-background/40 transition-all duration-300"
          size="sm"
        >
          <Menu className="w-5 h-5 text-foreground" />
        </Button>
      </div>

      {/* Full Screen Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/20 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col h-full">
            {/* Header with Close */}
            <div className="flex items-center justify-end p-6">
              <Button
                onClick={() => setIsOpen(false)}
                className="w-12 h-12 rounded-full bg-transparent border border-orange-400 hover:bg-orange-400/20"
                size="sm"
              >
                <X className="w-5 h-5 text-orange-400" />
              </Button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 flex flex-col justify-center space-y-8 px-6">
              <button
                onClick={() => scrollToSection('games')}
                className="text-3xl font-semibold text-foreground hover:text-accent transition-colors duration-300 text-center py-4"
              >
                Наши игры
              </button>

              <button
                onClick={() => scrollToSection('integrators')}
                className="text-3xl font-semibold text-foreground hover:text-accent transition-colors duration-300 text-center py-4"
              >
                Для интеграторов
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="text-3xl font-semibold text-foreground hover:text-accent transition-colors duration-300 text-center py-4"
              >
                Контакты
              </button>
            </div>

            {/* Bottom CTA */}
            <div className="p-6 space-y-4">
              <div className="text-center">
                <p className="text-orange-400 text-lg font-medium mb-4 transform -rotate-2">
                  Создаем игры для вашего бренда
                </p>
                <div className="flex justify-center mb-4">
                  <svg width="60" height="40" viewBox="0 0 60 40" className="text-orange-400">
                    <path
                      d="M30 5 Q 35 15, 30 25 M 30 25 L 25 20 M 30 25 L 35 20"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg py-4 rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
              >
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;