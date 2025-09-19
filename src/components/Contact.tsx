import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Send, Linkedin } from "lucide-react";
const Contact = () => {
  const contactInfo = [{
    icon: Mail,
    title: "Email",
    content: "business@gdeNazvanie-studio.com",
    description: "Для деловых предложений"
  }, {
    icon: MessageCircle,
    title: "Telegram",
    content: "@gdeNazvanie_support",
    description: "Быстрые ответы и поддержка"
  }, {
    icon: Linkedin,
    title: "LinkedIn",
    content: "2xWet Studio",
    description: "Профессиональная сеть и новости"
  }];
  return <section id="contact" className="min-h-screen flex items-center justify-center relative snap-section">
      <div className="container mx-auto px-6 w-full">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Свяжитесь</span>{" "}
            <span className="text-transparent bg-gradient-accent bg-clip-text">с нами</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-tight">
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
                  <label className="text-base font-medium text-foreground/80 mb-2 block">
                    Имя
                  </label>
                  <Input placeholder="Ваше имя" className="bg-input border-border focus:border-accent placeholder:text-muted-foreground/60" />
                </div>
                <div>
                  <label className="text-base font-medium text-foreground/80 mb-2 block">
                    Компания
                  </label>
                  <Input placeholder="Название компании" className="bg-input border-border focus:border-accent placeholder:text-muted-foreground/60" />
                </div>
              </div>
              
              <div>
                <label className="text-base font-medium text-foreground/80 mb-2 block">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input type="email" placeholder="your@email.com" required className="bg-input border-border focus:border-accent placeholder:text-muted-foreground/60" />
              </div>
              
              <div>
                <label className="text-base font-medium text-foreground/80 mb-2 block">
                  Тема
                </label>
                <Input placeholder="Интеграция игр / Партнерство / Техподдержка" className="bg-input border-border focus:border-accent placeholder:text-muted-foreground/60" />
              </div>
              
              <div>
                <label className="text-base font-medium text-foreground/80 mb-2 block">
                  Сообщение <span className="text-red-500">*</span>
                </label>
                <Textarea placeholder="Расскажите подробнее о вашем проекте..." rows={3} required minLength={10} className="bg-input border-border focus:border-accent resize-none placeholder:text-muted-foreground/60" />
              </div>
              
              <Button className="w-full accent-gradient glow-effect font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Send className="w-5 h-5 mr-2" />
                Отправить сообщение
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-slide-in" style={{
          animationDelay: '0.2s'
        }}>
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Контактная информация
            </h3>
            
            {contactInfo.map((info, index) => {
              const href = info.title === "Email" 
                ? `mailto:${info.content}` 
                : info.title === "Telegram"
                ? `https://t.me/${info.content.replace('@', '')}`
                : `https://linkedin.com/company/2xwet-studio`;
              const target = info.title === "Telegram" || info.title === "LinkedIn" ? "_blank" : undefined;
              const rel = info.title === "Telegram" || info.title === "LinkedIn" ? "noopener noreferrer" : undefined;
              
              return (
                <a key={index} href={href} target={target} rel={rel} className="block">
                  <Card className="gaming-border card-shadow smooth-transition hover:shadow-glow group cursor-pointer">
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
                </a>
              );
            })}
            
            {/* Quick Stats */}
            
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;