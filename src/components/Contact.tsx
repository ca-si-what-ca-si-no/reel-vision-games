import { ExternalLink, Mail, MessageCircle, Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const CONTACT_INFO_ANIMATION_DELAY = '200ms';
const MIN_MESSAGE_LENGTH = 10;
const TEXTAREA_ROWS = 3;

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'business@gdeNazvanie-studio.com',
      description: 'Для деловых предложений',
    },
    {
      icon: MessageCircle,
      title: 'Telegram',
      content: '@gdeNazvanie_support',
      description: 'Быстрые ответы и поддержка',
    },
    {
      icon: ExternalLink,
      title: 'LinkedIn',
      content: '2xWet Studio',
      description: 'Профессиональная сеть и новости',
    },
  ];
  return (
    <section
      id="contact"
      className="snap-section-last relative flex min-h-screen items-center justify-center"
    >
      <div className="container mx-auto w-full px-6">
        <div className="mb-16 animate-fade-in text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            <span className="text-foreground">Свяжитесь</span>{' '}
            <span className="bg-gradient-accent bg-clip-text text-transparent">с нами</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-tight text-muted-foreground md:text-xl">
            Готовы обсудить ваш проект? Наша команда всегда готова помочь с интеграцией игр и
            ответить на все ваши вопросы.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="gaming-border card-shadow animate-slide-in p-8">
            <h3 className="mb-6 text-2xl font-bold text-foreground">Отправить сообщение</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-base font-medium text-foreground/80"
                  >
                    Имя
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Ваше имя"
                    className="border-border bg-input placeholder:text-muted-foreground/60 focus:border-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-base font-medium text-foreground/80"
                  >
                    Компания
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Название компании"
                    className="border-border bg-input placeholder:text-muted-foreground/60 focus:border-accent"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-base font-medium text-foreground/80"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="border-border bg-input placeholder:text-muted-foreground/60 focus:border-accent"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-base font-medium text-foreground/80"
                >
                  Тема
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Интеграция игр / Партнерство / Техподдержка"
                  className="border-border bg-input placeholder:text-muted-foreground/60 focus:border-accent"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-base font-medium text-foreground/80"
                >
                  Сообщение <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Расскажите подробнее о вашем проекте..."
                  rows={TEXTAREA_ROWS}
                  required
                  minLength={MIN_MESSAGE_LENGTH}
                  className="resize-none border-border bg-input placeholder:text-muted-foreground/60 focus:border-accent"
                />
              </div>

              <Button className="accent-gradient glow-effect w-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Send className="mr-2 h-5 w-5" />
                Отправить сообщение
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div
            className="animate-slide-in space-y-6"
            style={{
              animationDelay: CONTACT_INFO_ANIMATION_DELAY,
            }}
          >
            <h3 className="mb-6 text-2xl font-bold text-foreground">Контактная информация</h3>

            {contactInfo.map((info, index) => {
              let href = '';
              if (info.title === 'Email') {
                href = `mailto:${info.content}`;
              } else if (info.title === 'Telegram') {
                href = `https://t.me/${info.content.replace('@', '')}`;
              } else {
                href = 'https://linkedin.com/company/2xwet-studio';
              }

              const isExternal = info.title === 'Telegram' || info.title === 'LinkedIn';
              const target = isExternal ? '_blank' : '';
              const rel = isExternal ? 'noopener noreferrer' : '';

              return (
                <a
                  key={index}
                  href={href}
                  target={target}
                  rel={rel}
                  className="block"
                  aria-label={`Contact via ${info.title}: ${info.content}`}
                >
                  <Card className="gaming-border card-shadow smooth-transition group cursor-pointer hover:shadow-glow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="smooth-transition flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-accent group-hover:scale-110">
                          <info.icon className="h-6 w-6 text-accent-foreground" />
                        </div>
                        <div>
                          <h4 className="mb-1 font-semibold text-foreground">{info.title}</h4>
                          <div className="mb-1 font-medium text-accent">{info.content}</div>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
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
    </section>
  );
};
export default Contact;
