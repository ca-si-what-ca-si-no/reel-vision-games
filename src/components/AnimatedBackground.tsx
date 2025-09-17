import { AnimatedBackgroundProps } from '@/types';
import { cn } from '@/lib/utils';

const AnimatedBackground = ({
  variant = 'default',
  className
}: AnimatedBackgroundProps) => {
  if (variant === 'minimal') {
    return (
      <div className={cn("animated-background minimal", className)}>
        <div className="floating-orb"></div>
        <div className="floating-orb"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
    );
  }

  return (
    <div className={cn("animated-background", className)}>
      <div className="floating-orb"></div>
      <div className="floating-orb"></div>
      <div className="floating-orb"></div>
      <div className="floating-orb"></div>
      <div className="geometric-shape"></div>
      <div className="geometric-shape"></div>
      <div className="geometric-shape"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="animated-grid"></div>
    </div>
  );
};

export default AnimatedBackground;