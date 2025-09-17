import { type GameConfiguration, type GameType } from './gameDataTypes';

export const gameConfigurations: Record<GameType, GameConfiguration> = {
  keno: {
    features: [
      { label: 'Настраиваемый RTP до 98%', value: '98%' },
      { label: 'Волатильность от 1 до 5 звезд', value: '5' },
      { label: 'Современный и интуитивно понятный интерфейс', value: 'UI' },
      { label: 'Адаптивный дизайн для всех устройств', value: 'Responsive' },
      { label: 'Поддержка Provably Fair', value: 'Fair' },
      { label: 'Высокие множители до x750', value: 'x750' },
    ],
    description: `Keno - это захватывающая лотерейная игра, которая сочетает в себе простоту классической
          лотереи с современными игровыми механиками. Игроки выбирают числа из сетки, а затем
          наблюдают, как система случайным образом определяет выигрышные номера. Чем больше
          совпадений, тем выше выигрыш!`,
    technicalFeatures: {
      minBet: '0.25',
      maxBet: '500.00',
      roundTime: '~15сек',
      autoPlay: false,
    },
  },
  crash: {
    features: [
      { label: 'Максимальный множитель до 10000x', value: '10000x' },
      { label: 'Настраиваемый RTP от 95% до 99%', value: '95-99%' },
      { label: 'Поддержка всех платформ', value: 'Cross-platform' },
      { label: 'Мультиязычность (4 языка)', value: 'Multilingual' },
      { label: 'API интеграция', value: 'API Ready' },
      { label: 'Высокая волатильность', value: '5 stars' },
      { label: 'Уникальные механики краш-игр', value: 'Unique' },
      { label: 'Современный дизайн', value: 'Modern UI' },
    ],
    description: `Crash Games Pack представляет собой полную коллекцию краш-игр с уникальными механиками и
          современным дизайном. Игроки делают ставки и наблюдают за растущим множителем, который
          может "упасть" в любой момент. Цель - вовремя забрать выигрыш до краха!`,
    technicalFeatures: {
      minBet: '0.10',
      maxBet: '1000.00',
      roundTime: '~30сек',
      autoPlay: true,
    },
  },
  hilo: {
    features: [
      { label: 'Высокий RTP до 97%', value: '97%' },
      { label: 'Средне-высокая волатильность', value: '4 stars' },
      { label: 'Простые и понятные правила', value: 'Easy' },
      { label: 'Быстрые раунды', value: 'Fast' },
      { label: 'Стратегические элементы', value: 'Strategy' },
      { label: 'Множители до x500', value: 'x500' },
      { label: 'Карточная механика', value: 'Cards' },
      { label: 'Мобильная оптимизация', value: 'Mobile' },
    ],
    description: `HiLo Games Pack - это захватывающие игры с элементами стратегии и удачи. Угадывайте, будет
          ли следующая карта выше или ниже текущей, и стройте цепочки правильных предсказаний для
          увеличения множителя!`,
    technicalFeatures: {
      minBet: '0.50',
      maxBet: '250.00',
      roundTime: '~10сек',
      autoPlay: false,
    },
  },
};
