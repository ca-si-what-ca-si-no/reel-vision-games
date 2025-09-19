const FloatingBall = () => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      className="floating-ball"
    >
      {/* Градиент для объемности */}
      <defs>
        <radialGradient id="ballGradient" cx="30%" cy="30%">
          <stop offset="0%" stopColor="hsl(var(--primary-glow))" />
          <stop offset="50%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--accent))" />
        </radialGradient>
        <radialGradient id="ballGradient2" cx="30%" cy="30%">
          <stop offset="0%" stopColor="hsl(var(--accent))" />
          <stop offset="50%" stopColor="hsl(var(--secondary))" />
          <stop offset="100%" stopColor="hsl(var(--primary))" />
        </radialGradient>
        <radialGradient id="ballGradient3" cx="30%" cy="30%">
          <stop offset="0%" stopColor="hsl(var(--secondary))" />
          <stop offset="50%" stopColor="hsl(var(--accent))" />
          <stop offset="100%" stopColor="hsl(var(--primary-glow))" />
        </radialGradient>
      </defs>

      {/* Основной шар */}
      <circle
        cx="30"
        cy="30"
        r="25"
        fill="url(#ballGradient)"
        opacity="0.8"
      />

      {/* Блик */}
      <ellipse
        cx="22"
        cy="20"
        rx="8"
        ry="12"
        fill="rgba(255, 255, 255, 0.4)"
        transform="rotate(-30 22 20)"
      />

      {/* Узор мяча */}
      <path
        d="M 15 10 Q 30 5 45 10 Q 50 30 45 50 Q 30 55 15 50 Q 10 30 15 10"
        fill="none"
        stroke="rgba(255, 255, 255, 0.3)"
        strokeWidth="1.5"
      />
      <path
        d="M 10 25 Q 30 15 50 25 Q 55 35 50 45 Q 30 50 10 45 Q 5 35 10 25"
        fill="none"
        stroke="rgba(255, 255, 255, 0.2)"
        strokeWidth="1"
      />
    </svg>
  );
};

// Компонент для разных вариантов мячей
export const FloatingBall1 = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" className="floating-ball">
    <defs>
      <radialGradient id="ballGradient1" cx="30%" cy="30%">
        <stop offset="0%" stopColor="hsl(var(--primary-glow))" />
        <stop offset="50%" stopColor="hsl(var(--primary))" />
        <stop offset="100%" stopColor="hsl(var(--accent))" />
      </radialGradient>
    </defs>
    <circle cx="30" cy="30" r="25" fill="url(#ballGradient1)" opacity="0.6" />
    <ellipse cx="22" cy="18" rx="6" ry="10" fill="rgba(255, 255, 255, 0.3)" transform="rotate(-25 22 18)" />
  </svg>
);

export const FloatingBall2 = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" className="floating-ball">
    <defs>
      <radialGradient id="ballGradient2" cx="30%" cy="30%">
        <stop offset="0%" stopColor="hsl(var(--accent))" />
        <stop offset="50%" stopColor="hsl(var(--secondary))" />
        <stop offset="100%" stopColor="hsl(var(--primary))" />
      </radialGradient>
    </defs>
    <circle cx="30" cy="30" r="25" fill="url(#ballGradient2)" opacity="0.5" />
    <ellipse cx="25" cy="20" rx="7" ry="9" fill="rgba(255, 255, 255, 0.4)" transform="rotate(-35 25 20)" />
  </svg>
);

export const FloatingBall3 = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" className="floating-ball">
    <defs>
      <radialGradient id="ballGradient3" cx="30%" cy="30%">
        <stop offset="0%" stopColor="hsl(var(--secondary))" />
        <stop offset="50%" stopColor="hsl(var(--accent))" />
        <stop offset="100%" stopColor="hsl(var(--primary-glow))" />
      </radialGradient>
    </defs>
    <circle cx="30" cy="30" r="25" fill="url(#ballGradient3)" opacity="0.4" />
    <ellipse cx="20" cy="22" rx="5" ry="8" fill="rgba(255, 255, 255, 0.5)" transform="rotate(-40 20 22)" />
  </svg>
);

export default FloatingBall;