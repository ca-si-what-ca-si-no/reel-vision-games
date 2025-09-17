interface GamesHeaderProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function GamesHeader({
  title = 'Наши решения',
  subtitle = 'Портфолио готовых игровых продуктов с современными технологиями и гибкими настройками для каждого оператора.',
  className = '',
}: GamesHeaderProps) {
  return (
    <div className={`mb-16 animate-fade-in text-center ${className}`}>
      <h2 className="mb-6 text-4xl font-bold md:text-5xl">
        <span className="text-foreground">{title.split(' ')[0]}</span>{' '}
        <span className="bg-gradient-accent bg-clip-text text-transparent">
          {title.split(' ').slice(1).join(' ')}
        </span>
      </h2>
      <p className="mx-auto max-w-3xl text-lg leading-tight text-muted-foreground md:text-xl">
        {subtitle}
      </p>
    </div>
  );
}
