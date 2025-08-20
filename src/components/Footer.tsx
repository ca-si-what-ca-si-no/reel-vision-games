import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="GameForge Studio Logo" className="w-10 h-10" />
              <span className="text-2xl font-bold text-foreground">
                GameForge <span className="text-accent">Studio</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Создаем инновационные игры для казино с передовыми технологиями 
              и непревзойденным качеством. Работаем с операторами по всему миру.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>business@gameforge-studio.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Москва, Россия</span>
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © 2024 GameForge Studio. Все права защищены.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-accent smooth-transition text-sm">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent smooth-transition text-sm">
                Условия использования
              </a>
              <Button 
                size="sm" 
                className="accent-gradient text-sm font-semibold"
              >
                Начать сотрудничество
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;