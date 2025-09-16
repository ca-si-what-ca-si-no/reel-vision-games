import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { Mail, ExternalLink, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="2xWet Studio Logo" className="w-10 h-10" />
              <span className="text-2xl font-bold text-foreground">
                2xWet <span className="text-accent">Studio</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Профессиональная игровая студия, создающая инновационные решения для казино. 
              Экспертиза в разработке, интеграции и поддержке игрового контента.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <a href="mailto:business@2xwet-studio.com" className="hover:text-accent smooth-transition">
                  business@2xwet-studio.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Send className="w-4 h-4" />
                <a href="https://t.me/2xwet_support" target="_blank" rel="noopener noreferrer" className="hover:text-accent smooth-transition">
                  @2xwet_support
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Навигация</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-accent smooth-transition">
                  О нас
                </a>
              </li>
              <li>
                <a href="#games" className="text-muted-foreground hover:text-accent smooth-transition">
                  Наши игры
                </a>
              </li>
              <li>
                <a href="#integrators" className="text-muted-foreground hover:text-accent smooth-transition">
                  Интеграторам
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-accent smooth-transition">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Услуги</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-muted-foreground">Разработка игр</span>
              </li>
              <li>
                <span className="text-muted-foreground">API интеграция</span>
              </li>
              <li>
                <span className="text-muted-foreground">Техподдержка 24/7</span>
              </li>
              <li>
                <span className="text-muted-foreground">Кастомизация</span>
              </li>
              <li>
                <span className="text-muted-foreground">Аналитика</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © 2024 2xWet Studio. Все права защищены.
            </div>
            <div className="flex items-center">
              <Button 
                size="sm" 
                className="accent-gradient glow-effect font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:brightness-110 group"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    const elementPosition = contactSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - 100;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                Начать сотрудничество
                <ExternalLink className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;