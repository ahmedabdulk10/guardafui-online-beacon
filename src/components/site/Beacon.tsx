export function BeaconMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M24 4 L29 14 L24 18 L19 14 Z" fill="currentColor" opacity="0.9" />
      <rect x="20" y="18" width="8" height="20" rx="1" fill="currentColor" opacity="0.85" />
      <path d="M16 38 L32 38 L34 44 L14 44 Z" fill="currentColor" />
      <path d="M10 14 L19 14 M29 14 L38 14" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

export function BeaconWatermark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 600" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="bw" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.18" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="300" cy="240" r="280" fill="url(#bw)" />
      <g opacity="0.08" stroke="currentColor" strokeWidth="1.5" fill="none">
        <path d="M300 240 L120 120" />
        <path d="M300 240 L480 120" />
        <path d="M300 240 L80 240" />
        <path d="M300 240 L520 240" />
        <path d="M300 240 L160 380" />
        <path d="M300 240 L440 380" />
      </g>
    </svg>
  );
}
