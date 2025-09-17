import { cn } from '@/lib/utils';
import { type AnimatedBackgroundProps } from '@/types';

const AnimatedBackground = ({ variant = 'default', className }: AnimatedBackgroundProps) => {
  if (variant === 'minimal') {
    return (
      <div className={cn('animated-background minimal', className)}>
        <div className="floating-orb" />
        <div className="floating-orb" />
        <div className="particle" />
        <div className="particle" />
      </div>
    );
  }

  return (
    <div className={cn('animated-background', className)}>
      <div className="floating-orb" />
      <div className="floating-orb" />
      <div className="floating-orb" />
      <div className="floating-orb" />
      <div className="geometric-shape" />
      <div className="geometric-shape" />
      <div className="geometric-shape" />
      <div className="particle" />
      <div className="particle" />
      <div className="particle" />
      <div className="particle" />
      <div className="animated-grid" />
    </div>
  );
};

export default AnimatedBackground;
