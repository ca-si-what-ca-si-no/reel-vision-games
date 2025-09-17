import { GameFeatures } from '@/types';

interface GameFeature {
  label: string;
  value: string;
}

interface GameFeatureListProps {
  features: GameFeature[];
  className?: string;
}

const GameFeatureList = ({ features, className = "" }: GameFeatureListProps) => {
  return (
    <div className={className}>
      <h2 className="text-2xl font-semibold mb-4">Особенности</h2>
      <ul className="space-y-3 text-muted-foreground">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>{feature.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameFeatureList;