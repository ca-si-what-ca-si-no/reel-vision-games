import { Star } from 'lucide-react';

interface GameFeatures {
  volatility: number;
  rtp: string;
  platforms: string[];
  languages: string[];
  maxMultiplier: string;
  minBet?: string;
  maxBet?: string;
  roundTime?: string;
  autoPlay?: boolean;
  provablyFair?: boolean;
}

interface TechnicalSpecsProps {
  features: GameFeatures;
}

const TechnicalSpecs = ({ features }: TechnicalSpecsProps) => {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-semibold">Технические характеристики</h2>

      {/* Основные показатели */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="gaming-border card-shadow rounded-lg p-6">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-400/20 to-orange-500/20">
                <Star className="h-5 w-5 text-yellow-400" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Волатильность</h3>
                <p className="text-xs text-muted-foreground">От 1 до 5 звезд</p>
              </div>
            </div>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${i < features.volatility ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground/30'}`}
                />
              ))}
            </div>
          </div>

          <div className="gaming-border card-shadow rounded-lg p-6">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-green-400/20 to-emerald-500/20">
                <span className="text-lg font-bold text-green-400">%</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">RTP</h3>
                <p className="text-xs text-muted-foreground">Возврат игроку</p>
              </div>
            </div>
            <div className="text-2xl font-bold text-green-400">{features.rtp}</div>
          </div>
        </div>

        {/* Детальная информация */}
        <div className="grid grid-cols-1 gap-4">
          <div className="gaming-border card-shadow rounded-lg p-5">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="mb-1 font-medium text-foreground">Максимальный множитель</h4>
                <p className="text-sm text-muted-foreground">Потенциальный выигрыш</p>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-green-400">{features.maxMultiplier}</div>
                <div className="text-xs text-muted-foreground">от ставки</div>
              </div>
            </div>
          </div>

          <div className="gaming-border card-shadow rounded-lg p-5">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="mb-1 font-medium text-foreground">Адаптивный дизайн</h4>
                <p className="text-sm text-muted-foreground">Поддерживаемые устройства</p>
              </div>
              <div className="flex gap-2">
                {features.platforms.map((platform, i) => (
                  <span
                    key={i}
                    className="rounded-md bg-blue-400/20 px-2 py-1 text-xs text-blue-400"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="gaming-border card-shadow rounded-lg p-5">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="mb-1 font-medium text-foreground">Локализация</h4>
                <p className="text-sm text-muted-foreground">Доступные языки</p>
              </div>
              <div className="flex gap-2">
                {features.languages.map((lang, i) => (
                  <span
                    key={i}
                    className="rounded-md bg-green-400/20 px-2 py-1 text-xs text-green-400"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Дополнительные характеристики */}
          {(features.minBet ||
            features.maxBet ||
            features.roundTime ||
            features.autoPlay !== null ||
            features.provablyFair !== null) && (
            <div className="gaming-border card-shadow rounded-lg p-5">
              <h4 className="mb-3 font-medium text-foreground">Дополнительные параметры</h4>
              <div className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
                {features.minBet && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Минимальная ставка:</span>
                    <span className="font-medium text-foreground">{features.minBet}</span>
                  </div>
                )}
                {features.maxBet && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Максимальная ставка:</span>
                    <span className="font-medium text-foreground">{features.maxBet}</span>
                  </div>
                )}
                {features.roundTime && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Время раунда:</span>
                    <span className="font-medium text-foreground">{features.roundTime}</span>
                  </div>
                )}
                {features.autoPlay !== null && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Автоигра:</span>
                    <span
                      className={`font-medium ${features.autoPlay ? 'text-green-400' : 'text-red-400'}`}
                    >
                      {features.autoPlay ? '✓ Да' : '✗ Нет'}
                    </span>
                  </div>
                )}
                {features.provablyFair !== null && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Provably Fair:</span>
                    <span
                      className={`font-medium ${features.provablyFair ? 'text-green-400' : 'text-red-400'}`}
                    >
                      {features.provablyFair ? '✓ Поддерживается' : '✗ Не поддерживается'}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechnicalSpecs;
