import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AnimatedBackground from '../AnimatedBackground';

describe('AnimatedBackground', () => {
  it('renders default variant with all animation elements', () => {
    const { container } = render(<AnimatedBackground />);

    const background = container.querySelector('.animated-background');
    expect(background).toBeInTheDocument();

    const orbs = container.querySelectorAll('.floating-orb');
    expect(orbs).toHaveLength(4);

    const shapes = container.querySelectorAll('.geometric-shape');
    expect(shapes).toHaveLength(3);

    const particles = container.querySelectorAll('.particle');
    expect(particles).toHaveLength(4);

    const grid = container.querySelector('.animated-grid');
    expect(grid).toBeInTheDocument();
  });

  it('renders minimal variant with fewer elements', () => {
    const { container } = render(<AnimatedBackground variant="minimal" />);

    const background = container.querySelector('.animated-background');
    expect(background).toBeInTheDocument();
    expect(background).toHaveClass('minimal');

    const orbs = container.querySelectorAll('.floating-orb');
    expect(orbs).toHaveLength(2);

    const particles = container.querySelectorAll('.particle');
    expect(particles).toHaveLength(2);

    const shapes = container.querySelectorAll('.geometric-shape');
    expect(shapes).toHaveLength(0);

    const grid = container.querySelector('.animated-grid');
    expect(grid).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<AnimatedBackground className="custom-class" />);

    const background = container.querySelector('.animated-background');
    expect(background).toHaveClass('custom-class');
  });
});