import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "ru" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

const translations = {
  ru: {
    // Navigation
    "nav.games": "Игры",
    "nav.integrators": "Интеграторам",
    "nav.contact": "Контакты",
    "nav.cta": "Связаться",

    // Hero Section
    "hero.title.part1": "Zero-effort",
    "hero.title.part2": "игровые решения",
    "hero.subtitle": "Инновационные решения для игровой индустрии",
    "hero.description":
      "Мы специализируемся на разработке современных онлайн-игр с фокусом на качество, инновации и пользовательский опыт.",
    "hero.cta": "Связаться с нами",
    "hero.learn_more": "Узнать больше",

    // Games Section
    "games.keno.description":
      "Классическая лотерейная игра с современным интерфейсом и настраиваемым RTP",
    "games.crash.description": "Crash-игра с уникальным дизайном и механиками",
    "games.hilo.description":
      "Увлекательная карточная игра с простыми правилами и высокой отдачей",
    "games.badge.popular": "Популярное",
    "games.badge.coming_soon": "Скоро в продаже",

    // Integrators Section
    "integrators.benefit.zero_effort.title": "Zero-effort интеграция",
    "integrators.benefit.zero_effort.description":
      "Вы даёте API — мы делаем всю интеграцию. Ваши разработчики не тратят ни дня на внедрение наших игр.",
    "integrators.benefit.flexible_math.title": "Гибкая математика",
    "integrators.benefit.flexible_math.description":
      "RTP без ограничений, настройка каждого коэффициента, полный контроль над экономикой игр.",
    "integrators.benefit.fast_launch.title": "Запуск за 3-5 дней",
    "integrators.benefit.fast_launch.description":
      "От первого контакта до работающей игры на вашем сайте.",
    "integrators.benefit.provably_fair.title": "Provably Fair",
    "integrators.benefit.provably_fair.description":
      "Встроенная проверка честности в каждую игру. Ваши игроки могут проверить любой раунд — полная прозрачность.",
    "integrators.benefit.customization.title": "Гибкая кастомизация",
    "integrators.benefit.customization.description":
      "Добавим ваш логотип на игровое поле, адаптируем под ваш бренд.",
    "integrators.benefit.sla.title": "SLA и поддержка",
    "integrators.benefit.sla.description":
      "Гарантированный uptime 99.9%, мониторинг 24/7, помощь на всех этапах и оперативные фиксы.",

    "integrators.package.keno.description": "Классическая лотерейная игра",
    "integrators.package.keno.feature1": "Настраиваемый RTP 90-99%",
    "integrators.package.keno.feature2": "Управление через API",
    "integrators.package.keno.feature3": "Мобильная версия",
    "integrators.package.keno.feature4": "Реалтайм статистика",
    "integrators.package.keno.feature5": "Полная документация API",

    "integrators.package.hilo.description": "Карточная игра с высокой отдачей",
    "integrators.package.hilo.feature1": "Быстрые раунды игры",
    "integrators.package.hilo.feature2": "Настройка лимитов ставок",
    "integrators.package.hilo.feature3": "Адаптивный дизайн",
    "integrators.package.hilo.feature4": "Встроенная аналитика",
    "integrators.package.hilo.feature5": "Детальная статистика",

    "integrators.package.crash.description": "Пакет из 5 crash игр",
    "integrators.package.crash.feature1": "5 уникальных crash игр",
    "integrators.package.crash.feature2": "Единая панель управления",
    "integrators.package.crash.feature3": "Высокая волатильность",
    "integrators.package.crash.feature4": "Настраиваемые параметры",
    "integrators.package.crash.feature5": "24/7 техподдержка",

    // Contact Section
    "contact.title": "Свяжитесь с нами",
    "contact.subtitle": "Готовы обсудить ваш проект?",
    "contact.description": "Напишите нам, и мы ответим в течение 24 часов",
    "contact.form.name": "Имя",
    "contact.form.email": "Email",
    "contact.form.company": "Компания",
    "contact.form.message": "Сообщение",
    "contact.form.send": "Отправить сообщение",
    "contact.info.title": "Контактная информация",
    "contact.info.email": "Email",
    "contact.info.telegram": "Telegram",
    "contact.info.work_time": "Время работы",
    "contact.info.work_schedule": "Пн-Пт: 9:00-18:00 (UTC+3)",

    // Footer
    "footer.description":
      "Вы даёте API — мы запускаем игру за 3-5 дней. Никакого кода с вашей стороны.",
    "footer.quick_links": "Быстрые ссылки",
    "footer.games": "Игры",
    "footer.integrators": "Интеграторам",
    "footer.contact": "Контакты",
    "footer.company": "Компания",
    "footer.about": "О нас",
    "footer.privacy": "Политика конфиденциальности",
    "footer.terms": "Условия использования",
    "footer.social": "Социальные сети",
    "footer.copyright": "© 2025 2xWet Studio. Все права защищены.",

    // Mobile Menu
    "mobile.menu.games": "Наши игры",
    "mobile.menu.integrators": "Для интеграторов",
    "mobile.menu.contact": "Контакты",
    "mobile.menu.cta.text": "Создаем игры для вашего бренда",
    "mobile.menu.cta.button": "Связаться с нами",

    // Language Switcher
    "language.switch": "Сменить язык",
    "language.russian": "Русский",
    "language.english": "English",

    // Technical Specs
    "tech.title": "Технические характеристики",
    "tech.rtp": "RTP",
    "tech.volatility": "Волатильность",
    "tech.max_win": "Максимальный выигрыш",
    "tech.min_bet": "Минимальная ставка",
    "tech.max_bet": "Максимальная ставка",
    "tech.autoplay": "Автоигра",
    "tech.mobile": "Мобильная версия",
    "tech.languages": "Языки",
    "tech.currencies": "Валюты",
    "tech.yes": "Да",
    "tech.no": "Нет",
    "tech.medium": "Средняя",
    "tech.high": "Высокая",
    "tech.low": "Низкая",

    // About Section
    "about.title": "О нас",
    "about.subtitle": "Инновации в игровой индустрии",
    "about.description":
      "Мы — команда опытных разработчиков, дизайнеров и продуктовых менеджеров, объединенных общей страстью к созданию выдающихся игровых продуктов.",
    "about.experience.title": "Опыт работы",
    "about.experience.years": "5+ лет",
    "about.experience.description": "в разработке игр",
    "about.projects.title": "Проекты",
    "about.projects.count": "50+",
    "about.projects.description": "успешных запусков",
    "about.clients.title": "Клиенты",
    "about.clients.count": "100+",
    "about.clients.description": "довольных партнеров",
    "about.cta": "Узнать больше",

    // Hero Badges
    "hero.badge.any_rtp": "🎯 Любой RTP",
    "hero.badge.fast_integration": "⚡ Быстрая интеграция",
    "hero.badge.full_customization": "🎨 Полная кастомизация",
    "hero.badge.provably_fair": "✓ Provably Fair",

    // Games Section Extended
    "games.title.our": "Наши",
    "games.title.games": "игры",
    "games.play": "Играть!",
    "games.coming_soon": "Скоро в продаже",
    "games.dialog.description": "Описание",
    "games.dialog.features": "Характеристики игры",
    "games.dialog.volatility": "Волатильность",
    "games.dialog.platforms": "Платформы",
    "games.dialog.languages": "Языки",
    "games.dialog.max_multiplier": "Макс. множитель",
    "games.dialog.close": "Закрыть",
    "games.dialog.request_integration": "Запросить интеграцию",

    // Integrators Section Extended
    "integrators.title.for": "Для",
    "integrators.title.integrators": "интеграторов",
    "integrators.cta.title": "Готовы начать интеграцию?",
    "integrators.cta.description":
      "Keno уже готово к интеграции. Начните тестирование прямо сейчас!",
    "integrators.cta.button": "Запросить демо",

    // Keno Page
    "keno.back": "Назад к играм",
    "keno.badge": "Лотерея",
    "keno.request_integration": "Запросить интеграцию",
    "keno.description.title": "Классика, которая работает всегда",
    "keno.description.p1":
      "Игроки понимают её с первого взгляда — выбираешь числа, получаешь результат. Никаких туториалов, никакой путаницы с правилами.",
    "keno.description.p2":
      "Поддержка почти не получает вопросов благодаря простоте правил. Игроки возвращаются день за днем за честным и прозрачным геймплеем. Охват аудитории максимальный — от студентов до пенсионеров, от новичков до опытных игроков.",
    "keno.description.p3":
      "Это не революция в гейминге. Это надежный инструмент, который приносит предсказуемый доход без головной боли. Как швейцарские часы — никаких сюрпризов, просто качественно выполняет свою функцию.",
    "keno.play": "Играть",
    "keno.advantages.title": "Преимущества",
    "keno.advantages.customization": "Кастомизация",
    "keno.advantages.zero_effort": "Zero-effort интеграция",
    "keno.advantages.multiplier": "До x750",
    "keno.advantages.responsive": "Адаптивный дизайн",
    "keno.advantages.multilingual": "Мультиязычность",
    "keno.advantages.provably_fair": "Provably Fair ✓",
    "keno.process.title": "Процесс игры",
    "keno.process.init.title": "1. Инициализация раунда",
    "keno.process.init.item1": "• Игрок выбирает 1-10 чисел из 40",
    "keno.process.init.item2": "• Система генерирует seed для Provably Fair",
    "keno.process.init.item3": "• Отображается хеш будущего результата",
    "keno.process.bet.title": "2. Транзакция ставки",
    "keno.process.bet.item1": "• Запрос на списание через API казино",
    "keno.process.bet.item2": "• Подтверждение баланса",
    "keno.process.bet.item3": "• Фиксация ставки в системе",
    "keno.process.result.title": "3. Генерация результата",
    "keno.process.result.item1": "• RNG генерирует 10 чисел из 40",
    "keno.process.result.item2": "• Использование seed + server seed",
    "keno.process.result.item3": "• Результат неизменяем после генерации",
    "keno.process.calc.title": "4. Расчет выигрыша",
    "keno.process.calc.item1": "• Сравнение выборов игрока с результатом",
    "keno.process.calc.item2": "• Применение коэффициента из таблицы выплат",
    "keno.process.calc.item3": "• Формирование суммы выигрыша",
    "keno.process.complete.title": "5. Завершение раунда",
    "keno.process.complete.item1": "• Начисление выигрыша через API",
    "keno.process.complete.item2": "• Сохранение истории раунда",
    "keno.process.complete.item3": "• Раскрытие server seed для проверки",
    "keno.payout.title": "Таблица выплат",
    "keno.payout.description":
      "Коэффициенты для каждого количества выбранных и угаданных чисел",
    "keno.payout.selected": "Выбрано",
    "keno.payout.match": "совп.",
    "keno.payout.matches": "Совпадения",
    "keno.payout.note":
      "* Полная таблица коэффициентов для RTP 98%. Любые настройки по запросу.",
    "keno.customization.title": "Что мы настраиваем",
    "keno.customization.math.title": "🎯 Математическая модель",
    "keno.customization.math.description":
      "RTP без ограничений — хоть 50%, хоть 99%. Каждый коэффициент выплат настраивается отдельно. Полный контроль над волатильностью на каждом уровне выбора.",
    "keno.customization.economics.title": "💸 Экономические параметры",
    "keno.customization.economics.description":
      "Любые лимиты ставок — подстроим под вашу аудиторию. Ограничение максимального выигрыша для контроля рисков. Работа со всеми валютами вашей платформы.",
    "keno.customization.branding.title": "🏢 Брендирование",
    "keno.customization.branding.description":
      "Ваш логотип прямо на игровом поле — игроки видят ваш бренд. Планируем: цветовые схемы, кастомные звуки, уникальные темы.",
    "keno.customization.coming_soon.title": "🔜 Скоро запустим",
    "keno.customization.coming_soon.description":
      "Бэк-офис для самостоятельной настройки параметров. Расширенная визуальная кастомизация. A/B тестирование разных конфигураций.",
    "keno.customization.main_message":
      "Главное: вы говорите — мы настраиваем. Никаких ограничений.",
    "keno.integration.title": "Zero-effort интеграция",
    "keno.integration.you_do.title": "Что делаете вы:",
    "keno.integration.you_do.item1": "• Отправляете доступ к вашему API",
    "keno.integration.we_do.title": "Что делаем мы:",
    "keno.integration.we_do.item1": "• Изучаем документацию вашего API",
    "keno.integration.we_do.item2": "• Пишем интеграционный слой",
    "keno.integration.we_do.item3": "• Настраиваем обмен данными",
    "keno.integration.we_do.item4": "• Тестируем все сценарии",
    "keno.integration.we_do.item5": "• Запускаем в продакшн",
    "keno.integration.result.title": "Результат через 3-5 дней:",
    "keno.integration.result.description":
      "Готовая игра в iframe, которую остается только встроить на сайт. Никакой работы для ваших разработчиков.",
    "keno.cta.title": "Готовы интегрировать Keno?",
    "keno.cta.description":
      "Получите полнофункциональную демо-версию с документацией API",
    "keno.cta.status": "На связи 24/7",
    "keno.cta.button": "Запросить интеграцию",

    // NotFound Page
    "notfound.message": "Упс! Страница не найдена",
    "notfound.return_home": "Вернуться на главную",
  },

  en: {
    // Navigation
    "nav.games": "Games",
    "nav.integrators": "Integrators",
    "nav.contact": "Contact",
    "nav.cta": "Get in Touch",

    // Hero Section
    "hero.title.part1": "Zero-effort",
    "hero.title.part2": "gaming solutions",
    "hero.subtitle": "Innovative solutions for the gaming industry",
    "hero.description":
      "We specialize in developing modern online games with a focus on quality, innovation and user experience.",
    "hero.cta": "Get in Touch",
    "hero.learn_more": "Learn More",

    // Games Section
    "games.keno.description":
      "Classic lottery game with modern interface and customizable RTP",
    "games.crash.description": "Crash game with unique design and mechanics",
    "games.hilo.description":
      "Exciting card game with simple rules and high payout",
    "games.badge.popular": "Popular",
    "games.badge.coming_soon": "Coming Soon",

    // Integrators Section
    "integrators.benefit.zero_effort.title": "Zero-effort integration",
    "integrators.benefit.zero_effort.description":
      "You provide the API — we handle all integration. Your developers spend zero time implementing our games.",
    "integrators.benefit.flexible_math.title": "Flexible math",
    "integrators.benefit.flexible_math.description":
      "Unlimited RTP, adjust every coefficient, full control over game economics.",
    "integrators.benefit.fast_launch.title": "Launch in 3-5 days",
    "integrators.benefit.fast_launch.description":
      "From first contact to a working game on your website.",
    "integrators.benefit.provably_fair.title": "Provably Fair",
    "integrators.benefit.provably_fair.description":
      "Built-in fairness verification in every game. Your players can verify any round — complete transparency.",
    "integrators.benefit.customization.title": "Flexible customization",
    "integrators.benefit.customization.description":
      "We'll add your logo to the game field, adapt to your brand.",
    "integrators.benefit.sla.title": "SLA and support",
    "integrators.benefit.sla.description":
      "Guaranteed 99.9% uptime, 24/7 monitoring, support at all stages and quick fixes.",

    "integrators.package.keno.description": "Classic lottery game",
    "integrators.package.keno.feature1": "Customizable RTP 90-99%",
    "integrators.package.keno.feature2": "API-based management",
    "integrators.package.keno.feature3": "Mobile version",
    "integrators.package.keno.feature4": "Real-time statistics",
    "integrators.package.keno.feature5": "Complete API documentation",

    "integrators.package.hilo.description": "Card game with high payout",
    "integrators.package.hilo.feature1": "Fast game rounds",
    "integrators.package.hilo.feature2": "Bet limits customization",
    "integrators.package.hilo.feature3": "Responsive design",
    "integrators.package.hilo.feature4": "Built-in analytics",
    "integrators.package.hilo.feature5": "Detailed statistics",

    "integrators.package.crash.description": "Pack of 5 crash games",
    "integrators.package.crash.feature1": "5 unique crash games",
    "integrators.package.crash.feature2": "Unified control panel",
    "integrators.package.crash.feature3": "High volatility",
    "integrators.package.crash.feature4": "Customizable parameters",
    "integrators.package.crash.feature5": "24/7 technical support",

    // Contact Section
    "contact.title": "Contact Us",
    "contact.subtitle": "Ready to discuss your project?",
    "contact.description": "Write to us and we will respond within 24 hours",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.company": "Company",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",
    "contact.info.title": "Contact Information",
    "contact.info.email": "Email",
    "contact.info.telegram": "Telegram",
    "contact.info.work_time": "Working Hours",
    "contact.info.work_schedule": "Mon-Fri: 9:00-18:00 (UTC+3)",

    // Footer
    "footer.description":
      "You provide the API, and we launch the game in 3-5 days. No coding required on your part.",
    "footer.quick_links": "Quick Links",
    "footer.games": "Games",
    "footer.integrators": "Integrators",
    "footer.contact": "Contact",
    "footer.company": "Company",
    "footer.about": "About",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",
    "footer.social": "Social Media",
    "footer.copyright": "© 2025 2xWet Studio. All rights reserved.",

    // Mobile Menu
    "mobile.menu.games": "Our Games",
    "mobile.menu.integrators": "For Integrators",
    "mobile.menu.contact": "Contact",
    "mobile.menu.cta.text": "Creating games for your brand",
    "mobile.menu.cta.button": "Contact Us",

    // Language Switcher
    "language.switch": "Switch Language",
    "language.russian": "Русский",
    "language.english": "English",

    // Technical Specs
    "tech.title": "Technical Specifications",
    "tech.rtp": "RTP",
    "tech.volatility": "Volatility",
    "tech.max_win": "Max Win",
    "tech.min_bet": "Min Bet",
    "tech.max_bet": "Max Bet",
    "tech.autoplay": "Autoplay",
    "tech.mobile": "Mobile",
    "tech.languages": "Languages",
    "tech.currencies": "Currencies",
    "tech.yes": "Yes",
    "tech.no": "No",
    "tech.medium": "Medium",
    "tech.high": "High",
    "tech.low": "Low",

    // About Section
    "about.title": "About Us",
    "about.subtitle": "Innovation in the gaming industry",
    "about.description":
      "We are a team of experienced developers, designers and product managers united by a shared passion for creating outstanding gaming products.",
    "about.experience.title": "Experience",
    "about.experience.years": "5+ years",
    "about.experience.description": "in game development",
    "about.projects.title": "Projects",
    "about.projects.count": "50+",
    "about.projects.description": "successful launches",
    "about.clients.title": "Clients",
    "about.clients.count": "100+",
    "about.clients.description": "satisfied partners",
    "about.cta": "Learn More",

    // Hero Badges
    "hero.badge.any_rtp": "🎯 Any RTP",
    "hero.badge.fast_integration": "⚡ Fast Integration",
    "hero.badge.full_customization": "🎨 Full Customization",
    "hero.badge.provably_fair": "✓ Provably Fair",

    // Games Section Extended
    "games.title.our": "Our",
    "games.title.games": "games",
    "games.play": "Play!",
    "games.coming_soon": "Coming Soon",
    "games.dialog.description": "Description",
    "games.dialog.features": "Game Features",
    "games.dialog.volatility": "Volatility",
    "games.dialog.platforms": "Platforms",
    "games.dialog.languages": "Languages",
    "games.dialog.max_multiplier": "Max Multiplier",
    "games.dialog.close": "Close",
    "games.dialog.request_integration": "Request Integration",

    // Integrators Section Extended
    "integrators.title.for": "For",
    "integrators.title.integrators": "integrators",
    "integrators.cta.title": "Ready to start integration?",
    "integrators.cta.description":
      "Keno is ready for integration. Start testing right now!",
    "integrators.cta.button": "Request Demo",

    // Keno Page
    "keno.back": "Back to Games",
    "keno.badge": "Lottery",
    "keno.request_integration": "Request Integration",
    "keno.description.title": "Classic that always works",
    "keno.description.p1":
      "Players understand it at first glance — pick numbers, get results. No tutorials, no confusion with rules.",
    "keno.description.p2":
      "Support receives almost no questions thanks to simple rules. Players return day after day for honest and transparent gameplay. Maximum audience coverage — from students to retirees, from beginners to experienced players.",
    "keno.description.p3":
      "This is not a revolution in gaming. This is a reliable tool that brings predictable revenue without headaches. Like a Swiss watch — no surprises, just quality performance.",
    "keno.play": "Play",
    "keno.advantages.title": "Advantages",
    "keno.advantages.customization": "Customization",
    "keno.advantages.zero_effort": "Zero-effort Integration",
    "keno.advantages.multiplier": "Up to x750",
    "keno.advantages.responsive": "Responsive Design",
    "keno.advantages.multilingual": "Multilingual",
    "keno.advantages.provably_fair": "Provably Fair ✓",
    "keno.process.title": "Game Process",
    "keno.process.init.title": "1. Round Initialization",
    "keno.process.init.item1": "• Player selects 1-10 numbers from 40",
    "keno.process.init.item2": "• System generates seed for Provably Fair",
    "keno.process.init.item3": "• Hash of future result is displayed",
    "keno.process.bet.title": "2. Bet Transaction",
    "keno.process.bet.item1": "• Debit request via casino API",
    "keno.process.bet.item2": "• Balance confirmation",
    "keno.process.bet.item3": "• Bet recorded in system",
    "keno.process.result.title": "3. Result Generation",
    "keno.process.result.item1": "• RNG generates 10 numbers from 40",
    "keno.process.result.item2": "• Using seed + server seed",
    "keno.process.result.item3": "• Result is immutable after generation",
    "keno.process.calc.title": "4. Win Calculation",
    "keno.process.calc.item1": "• Compare player selections with result",
    "keno.process.calc.item2": "• Apply coefficient from payout table",
    "keno.process.calc.item3": "• Calculate win amount",
    "keno.process.complete.title": "5. Round Completion",
    "keno.process.complete.item1": "• Credit winnings via API",
    "keno.process.complete.item2": "• Save round history",
    "keno.process.complete.item3": "• Reveal server seed for verification",
    "keno.payout.title": "Payout Table",
    "keno.payout.description":
      "Coefficients for each number of selected and matched numbers",
    "keno.payout.selected": "Selected",
    "keno.payout.match": "match",
    "keno.payout.matches": "Matches",
    "keno.payout.note":
      "* Complete coefficient table for 98% RTP. Any settings upon request.",
    "keno.customization.title": "What we customize",
    "keno.customization.math.title": "🎯 Mathematical Model",
    "keno.customization.math.description":
      "RTP without limits — whether 50% or 99%. Every payout coefficient is customizable individually. Full control over volatility at every selection level.",
    "keno.customization.economics.title": "💸 Economic Parameters",
    "keno.customization.economics.description":
      "Any bet limits — we'll adjust to your audience. Maximum win limit for risk control. Works with all currencies of your platform.",
    "keno.customization.branding.title": "🏢 Branding",
    "keno.customization.branding.description":
      "Your logo right on the game field — players see your brand. Planning: color schemes, custom sounds, unique themes.",
    "keno.customization.coming_soon.title": "🔜 Coming Soon",
    "keno.customization.coming_soon.description":
      "Back office for self-service parameter settings. Extended visual customization. A/B testing of different configurations.",
    "keno.customization.main_message":
      "The main thing: you tell us — we customize. No limitations.",
    "keno.integration.title": "Zero-effort Integration",
    "keno.integration.you_do.title": "What you do:",
    "keno.integration.you_do.item1": "• Send us access to your API",
    "keno.integration.we_do.title": "What we do:",
    "keno.integration.we_do.item1": "• Study your API documentation",
    "keno.integration.we_do.item2": "• Write integration layer",
    "keno.integration.we_do.item3": "• Configure data exchange",
    "keno.integration.we_do.item4": "• Test all scenarios",
    "keno.integration.we_do.item5": "• Launch to production",
    "keno.integration.result.title": "Result in 3-5 days:",
    "keno.integration.result.description":
      "Ready game in iframe that just needs to be embedded on the site. No work for your developers.",
    "keno.cta.title": "Ready to integrate Keno?",
    "keno.cta.description":
      "Get a fully functional demo version with API documentation",
    "keno.cta.status": "Available 24/7",
    "keno.cta.button": "Request Integration",

    // NotFound Page
    "notfound.message": "Oops! Page not found",
    "notfound.return_home": "Return to Home",
  },
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem("language");
    return (stored as Language) || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
