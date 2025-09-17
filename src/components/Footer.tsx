import { ExternalLink, Mail, Send } from 'lucide-react';

import logo from '@/assets/logo.png';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center space-x-3">
              <img src={logo as string} alt="2xWet Studio Logo" className="h-10 w-10" />
              <span className="text-2xl font-bold text-foreground">
                2xWet <span className="text-accent">Studio</span>
              </span>
            </div>
            <p className="mb-6 max-w-md leading-relaxed text-muted-foreground">
              Профессиональная игровая студия, создающая инновационные решения для казино.
              Экспертиза в разработке, интеграции и поддержке игрового контента.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:business@2xwet-studio.com"
                  className="smooth-transition hover:text-accent"
                >
                  business@2xwet-studio.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Send className="h-4 w-4" />
                <a
                  href="https://t.me/2xwet_support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="smooth-transition hover:text-accent"
                >
                  @2xwet_support
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Навигация</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="smooth-transition text-muted-foreground hover:text-accent"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#games"
                  className="smooth-transition text-muted-foreground hover:text-accent"
                >
                  Наши игры
                </a>
              </li>
              <li>
                <a
                  href="#integrators"
                  className="smooth-transition text-muted-foreground hover:text-accent"
                >
                  Интеграторам
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="smooth-transition text-muted-foreground hover:text-accent"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Услуги</h3>
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

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-sm text-muted-foreground">
              © 2024 2xWet Studio. Все права защищены.
            </div>
            <div className="flex items-center">
              <Button
                size="sm"
                className="accent-gradient glow-effect group text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:brightness-110"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    const elementPosition = contactSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - 100;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth',
                    });
                  }
                }}
              >
                Начать сотрудничество
                <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
