import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Shield, 
  Zap, 
  HeadphonesIcon, 
  BarChart3, 
  Globe,
  CheckCircle 
} from "lucide-react";

const Integrators = () => {
  const benefits = [
    {
      icon: Code,
      title: "Простое API",
      description: "Интуитивное API для быстрой интеграции игр в вашу платформу"
    },
    {
      icon: Shield,
      title: "Безопасность",
      description: "Сертифицированные игры с полным соответствием международным стандартам"
    },
    {
      icon: Zap,
      title: "Быстрый запуск",
      description: "Интеграция новых игр за 24-48 часов"
    },
    {
      icon: HeadphonesIcon,
      title: "Поддержка 24/7",
      description: "Круглосуточная техническая поддержка на русском и английском языках"
    },
    {
      icon: BarChart3,
      title: "Аналитика",
      description: "Подробная статистика и отчеты по производительности игр"
    },
    {
      icon: Globe,
      title: "Мультиязычность",
      description: "Поддержка 20+ языков и различных валют"
    }
  ];

  const packages = [
    {
      title: "Стартовый",
      price: "Бесплатно",
      description: "Идеально для тестирования",
      features: [
        "5 игр в портфолио",
        "Базовое API",
        "Email поддержка",
        "Стандартная аналитика"
      ],
      badge: "Популярный"
    },
    {
      title: "Профессиональный",
      price: "€2,500/мес",
      description: "Для растущих операторов",
      features: [
        "25+ игр",
        "Расширенное API",
        "24/7 поддержка",
        "Кастомизация интерфейса",
        "Детальная аналитика"
      ],
      badge: "Рекомендуем"
    },
    {
      title: "Энтерпрайз",
      price: "Индивидуально",
      description: "Для крупных операторов",
      features: [
        "Весь портфолио игр",
        "Персональный менеджер",
        "Кастомные игры",
        "SLA 99.9%",
        "Белый лейбл решения"
      ],
      badge: "VIP"
    }
  ];

  return (
    <section id="integrators" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Для</span>{" "}
            <span className="text-transparent bg-gradient-accent bg-clip-text">интеграторов</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Предоставляем полный спектр решений для интеграции наших игр 
            в ваши казино и игровые платформы.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="gaming-border card-shadow smooth-transition hover:shadow-glow group animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 smooth-transition">
                  <benefit.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Тарифные планы
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((plan, index) => (
              <Card 
                key={index}
                className={`gaming-border card-shadow smooth-transition hover:shadow-glow relative ${
                  index === 1 ? 'scale-105 border-accent/50' : ''
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {plan.badge && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                    {plan.badge}
                  </Badge>
                )}
                <CardHeader className="text-center p-8">
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">
                    {plan.title}
                  </CardTitle>
                  <div className="text-4xl font-bold text-accent mb-2">
                    {plan.price}
                  </div>
                  <p className="text-muted-foreground">
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      index === 1 ? 'accent-gradient glow-effect' : 'border-border hover:bg-card'
                    }`}
                    variant={index === 1 ? 'default' : 'outline'}
                  >
                    {index === 2 ? 'Связаться с нами' : 'Начать работу'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="gaming-border card-shadow p-12 text-center">
          <h3 className="text-3xl font-bold mb-6 text-foreground">
            Готовы начать интеграцию?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Получите доступ к нашему API и начните тестирование уже сегодня. 
            Техническая документация и примеры кода доступны сразу после регистрации.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="accent-gradient glow-effect font-semibold">
              Получить API ключ
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-card">
              Техническая документация
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Integrators;