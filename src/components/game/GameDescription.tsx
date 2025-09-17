import TechnicalSpecs from '@/components/TechnicalSpecs';
import { type GameData } from '@/types';

interface GameDescriptionProps {
  gameData: GameData;
  description: string;
  technicalFeatures?: Record<string, string | boolean | number>;
  className?: string;
}

export default function GameDescription({
  gameData,
  description,
  technicalFeatures,
  className = '',
}: GameDescriptionProps) {
  const defaultTechnicalFeatures = {
    ...gameData.features,
    ...technicalFeatures,
  };

  return (
    <div className={`rounded-lg border border-border bg-card p-6 ${className}`}>
      <p className="mb-6 leading-relaxed text-muted-foreground">{description}</p>

      <TechnicalSpecs features={defaultTechnicalFeatures} />
    </div>
  );
}
