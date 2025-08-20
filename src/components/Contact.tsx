import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  MessageCircle,
  Send
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "business@gdeNazvanie-studio.com",
      description: "Для деловых предложений"
    },
    {
      icon: MessageCircle,
      title: "Telegram",
      content: "@gdeNazvanie_support",
      description: "Быстрые ответы и поддержка"
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Свяжитесь</span>{" "}
            <span className="text-transparent bg-gradient-accent bg-clip-text">с нами</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Готовы обсудить ваш проект? Наша команда всегда готова помочь 
            с интеграцией игр и ответить на все ваши вопросы.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="gaming-border card-shadow p-8 animate-slide-in">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Отправить сообщение
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Имя
                  </label>
                  <Input 
                    placeholder="Ваше имя"
                    className="bg-input border-border focus:border-accent"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Компания
                  </label>
                  <Input 
                    placeholder="Название компании"
                    className="bg-input border-border focus:border-accent"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Email
                </label>
                <Input 
                  type="email"
                  placeholder="your@email.com"
                  className="bg-input border-border focus:border-accent"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Тема
                </label>
                <Input 
                  placeholder="Интеграция игр / Партнерство / Техподдержка"
                  className="bg-input border-border focus:border-accent"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Сообщение
                </label>
                <Textarea 
                  placeholder="Расскажите подробнее о вашем проекте..."
                  rows={3}
                  className="bg-input border-border focus:border-accent resize-none"
                />
              </div>
              
              <Button className="w-full accent-gradient glow-effect font-semibold">
                <Send className="w-5 h-5 mr-2" />
                Отправить сообщение
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Контактная информация
            </h3>
            
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="gaming-border card-shadow smooth-transition hover:shadow-glow group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 smooth-transition">
                      <info.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      <div className="text-accent font-medium mb-1">
                        {info.content}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Quick Stats */}
            <Card className="gaming-border card-shadow p-6">
              <h4 className="font-semibold text-foreground mb-4">
                Почему выбирают нас  
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">
                    &lt; 24ч
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Время ответа
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">
                    99.9%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Аптайм
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">
                    15+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Активных партнеров
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">
                    5+ лет
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Опыта в индустрии
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;