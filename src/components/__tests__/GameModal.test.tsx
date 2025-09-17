import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import GameModal from '../GameModal';

describe('GameModal', () => {
  const mockOnClose = vi.fn();
  const mockOnScreenshotChange = vi.fn();

  const defaultProps = {
    isOpen: true,
    onClose: mockOnClose,
    title: 'Test Game',
    screenshots: [
      '/screenshot1.jpg',
      '/screenshot2.jpg',
      '/screenshot3.jpg'
    ],
    activeScreenshot: '/screenshot1.jpg',
    onScreenshotChange: mockOnScreenshotChange
  };

  beforeEach(() => {
    mockOnClose.mockClear();
    mockOnScreenshotChange.mockClear();
  });

  it('renders modal when open', () => {
    render(<GameModal {...defaultProps} />);

    expect(screen.getByText('Test Game - Скриншоты')).toBeInTheDocument();
    expect(screen.getByText('Просмотр игры на различных устройствах')).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    render(<GameModal {...defaultProps} isOpen={false} />);

    expect(screen.queryByText('Test Game - Скриншоты')).not.toBeInTheDocument();
  });

  it('displays active screenshot', () => {
    render(<GameModal {...defaultProps} />);

    const mainImage = screen.getByAltText('Test Game screenshot');
    expect(mainImage).toHaveAttribute('src', '/screenshot1.jpg');
  });

  it('renders navigation buttons when multiple screenshots', () => {
    render(<GameModal {...defaultProps} />);

    const prevButton = screen.getByRole('button', { name: /previous/i });
    const nextButton = screen.getByRole('button', { name: /next/i });

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it('does not render navigation buttons with single screenshot', () => {
    render(
      <GameModal
        {...defaultProps}
        screenshots={['/screenshot1.jpg']}
      />
    );

    expect(screen.queryByRole('button', { name: /previous/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /next/i })).not.toBeInTheDocument();
  });

  it('calls onScreenshotChange when thumbnail clicked', () => {
    render(<GameModal {...defaultProps} />);

    const thumbnails = screen.getAllByAltText(/Screenshot \d+/);
    fireEvent.click(thumbnails[1]);

    expect(mockOnScreenshotChange).toHaveBeenCalledWith('/screenshot2.jpg');
  });

  it('navigates to next screenshot correctly', () => {
    render(<GameModal {...defaultProps} />);

    const nextButton = screen.getByRole('button', { name: /next/i });
    fireEvent.click(nextButton);

    expect(mockOnScreenshotChange).toHaveBeenCalledWith('/screenshot2.jpg');
  });

  it('navigates to previous screenshot correctly', () => {
    render(
      <GameModal
        {...defaultProps}
        activeScreenshot="/screenshot2.jpg"
      />
    );

    const prevButton = screen.getByRole('button', { name: /previous/i });
    fireEvent.click(prevButton);

    expect(mockOnScreenshotChange).toHaveBeenCalledWith('/screenshot1.jpg');
  });

  it('wraps around when navigating past boundaries', () => {
    render(
      <GameModal
        {...defaultProps}
        activeScreenshot="/screenshot3.jpg"
      />
    );

    const nextButton = screen.getByRole('button', { name: /next/i });
    fireEvent.click(nextButton);

    expect(mockOnScreenshotChange).toHaveBeenCalledWith('/screenshot1.jpg');
  });
});