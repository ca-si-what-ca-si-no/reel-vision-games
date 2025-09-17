interface FlagIconProps {
  className?: string;
  size?: number;
}

export const RussiaFlag = ({ className = '', size = 16 }: FlagIconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 16" fill="none">
    <rect width="24" height="16" rx="2" fill="#ffffff" />
    <rect width="24" height="5.33" fill="#ffffff" />
    <rect y="5.33" width="24" height="5.33" fill="#0052b4" />
    <rect y="10.67" width="24" height="5.33" fill="#d80027" />
  </svg>
);

export const USAFlag = ({ className = '', size = 16 }: FlagIconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 16" fill="none">
    <rect width="24" height="16" rx="2" fill="#b22234" />
    <rect y="1.23" width="24" height="1.23" fill="#ffffff" />
    <rect y="3.69" width="24" height="1.23" fill="#ffffff" />
    <rect y="6.15" width="24" height="1.23" fill="#ffffff" />
    <rect y="8.62" width="24" height="1.23" fill="#ffffff" />
    <rect y="11.08" width="24" height="1.23" fill="#ffffff" />
    <rect y="13.54" width="24" height="1.23" fill="#ffffff" />
    <rect width="9.6" height="8.62" fill="#3c3b6e" />
    <g fill="#ffffff">
      <circle cx="1.2" cy="1.23" r="0.4" />
      <circle cx="2.4" cy="1.23" r="0.4" />
      <circle cx="3.6" cy="1.23" r="0.4" />
      <circle cx="4.8" cy="1.23" r="0.4" />
      <circle cx="6" cy="1.23" r="0.4" />
      <circle cx="7.2" cy="1.23" r="0.4" />
      <circle cx="8.4" cy="1.23" r="0.4" />
    </g>
  </svg>
);

export const GermanyFlag = ({ className = '', size = 16 }: FlagIconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 16" fill="none">
    <rect width="24" height="16" rx="2" fill="#ffce00" />
    <rect width="24" height="5.33" fill="#000000" />
    <rect y="5.33" width="24" height="5.33" fill="#d00" />
    <rect y="10.67" width="24" height="5.33" fill="#ffce00" />
  </svg>
);

export const FranceFlag = ({ className = '', size = 16 }: FlagIconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 16" fill="none">
    <rect width="24" height="16" rx="2" fill="#ffffff" />
    <rect width="8" height="16" fill="#0055a4" />
    <rect x="16" width="8" height="16" fill="#ef4135" />
  </svg>
);
