import { Star } from "lucide-react";

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
}

interface TechnicalSpecsProps {
  features: GameFeatures;
}

const TechnicalSpecs = ({ features }: TechnicalSpecsProps) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Технические характеристики</h2>
      
      {/* Основные показатели */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="gaming-border card-shadow p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400/20 to-orange-500/20 flex items-center justify-center">
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Волатильность</h3>
                <p className="text-xs text-muted-foreground">
                  {features.volatility <= 2 ? 'Низкая' : 
                   features.volatility <= 3 ? 'Средняя' : 
                   features.volatility <= 4 ? 'Средне-высокая' : 'Высокая'}
                </p>
              </div>
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-6 h-6 ${i < features.volatility ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground/30'}`} />
              ))}
            </div>
          </div>

          <div className="gaming-border card-shadow p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400/20 to-emerald-500/20 flex items-center justify-center">
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
          <div className="gaming-border card-shadow p-5 rounded-lg">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-medium text-foreground mb-1">Максимальный множитель</h4>
                <p className="text-sm text-muted-foreground">Потенциальный выигрыш</p>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-green-400">{features.maxMultiplier}</div>
                <div className="text-xs text-muted-foreground">от ставки</div>
              </div>
            </div>
          </div>

          <div className="gaming-border card-shadow p-5 rounded-lg">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-medium text-foreground mb-1">Платформы</h4>
                <p className="text-sm text-muted-foreground">Поддерживаемые устройства</p>
              </div>
              <div className="flex gap-2">
                {features.platforms.map((platform, i) => (
                  <span key={i} className="px-2 py-1 text-xs bg-accent/20 text-accent rounded-md">
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="gaming-border card-shadow p-5 rounded-lg">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-medium text-foreground mb-1">Локализация</h4>
                <p className="text-sm text-muted-foreground">Доступные языки</p>
              </div>
              <div className="flex gap-2">
                {features.languages.map((lang, i) => (
                  <span key={i} className="px-3 py-1 text-sm bg-muted/30 text-foreground border border-muted rounded-full font-medium">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Дополнительные характеристики */}
          {(features.minBet || features.maxBet || features.roundTime || features.autoPlay !== undefined) && (
            <div className="gaming-border card-shadow p-5 rounded-lg">
              <h4 className="font-medium text-foreground mb-3">Дополнительные параметры</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {features.minBet && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Минимальная ставка:</span>
                    <span className="text-foreground font-medium">{features.minBet}</span>
                  </div>
                )}
                {features.maxBet && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Максимальная ставка:</span>
                    <span className="text-foreground font-medium">{features.maxBet}</span>
                  </div>
                )}
                {features.roundTime && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Время раунда:</span>
                    <span className="text-foreground font-medium">{features.roundTime}</span>
                  </div>
                )}
                {features.autoPlay !== undefined && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Автоигра:</span>
                    <span className={`font-medium ${features.autoPlay ? 'text-green-400' : 'text-red-400'}`}>
                      {features.autoPlay ? '✓ Да' : '✗ Нет'}
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