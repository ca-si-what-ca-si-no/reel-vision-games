import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import DeviceSelector from '../DeviceSelector';
import { DeviceType } from '@/types';

describe('DeviceSelector', () => {
  const mockOnDeviceChange = vi.fn();

  beforeEach(() => {
    mockOnDeviceChange.mockClear();
  });

  it('renders all device options', () => {
    render(
      <DeviceSelector
        selectedDevice="mobile"
        onDeviceChange={mockOnDeviceChange}
      />
    );

    expect(screen.getByText('Мобильный')).toBeInTheDocument();
    expect(screen.getByText('Планшет')).toBeInTheDocument();
    expect(screen.getByText('Компьютер')).toBeInTheDocument();
  });

  it('highlights selected device', () => {
    render(
      <DeviceSelector
        selectedDevice="tablet"
        onDeviceChange={mockOnDeviceChange}
      />
    );

    const tabletButton = screen.getByText('Планшет').closest('button');
    expect(tabletButton).toHaveClass('border-primary');
    expect(tabletButton).toHaveClass('bg-primary/10');
  });

  it('calls onDeviceChange when device is clicked', () => {
    render(
      <DeviceSelector
        selectedDevice="mobile"
        onDeviceChange={mockOnDeviceChange}
      />
    );

    const desktopButton = screen.getByText('Компьютер');
    fireEvent.click(desktopButton);

    expect(mockOnDeviceChange).toHaveBeenCalledWith('desktop');
  });

  it('applies custom className', () => {
    const { container } = render(
      <DeviceSelector
        selectedDevice="mobile"
        onDeviceChange={mockOnDeviceChange}
        className="custom-class"
      />
    );

    const grid = container.querySelector('.grid');
    expect(grid).toHaveClass('custom-class');
  });

  it('renders icons for each device type', () => {
    render(
      <DeviceSelector
        selectedDevice="mobile"
        onDeviceChange={mockOnDeviceChange}
      />
    );

    // Check that each button contains an SVG icon
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
      const icon = button.querySelector('svg');
      expect(icon).toBeInTheDocument();
    });
  });
});