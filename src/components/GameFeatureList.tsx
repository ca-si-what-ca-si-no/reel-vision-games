interface GameFeature {
  label: string;
  value: string;
}

interface GameFeatureListProps {
  features: GameFeature[];
  className?: string;
}

const GameFeatureList = ({ features, className = '' }: GameFeatureListProps) => {
  return (
    <div className={className}>
      <h2 className="mb-4 text-2xl font-semibold">Особенности</h2>
      <ul className="space-y-3 text-muted-foreground">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="mt-1 text-primary">•</span>
            <span>{feature.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameFeatureList;
