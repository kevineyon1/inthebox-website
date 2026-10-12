/**
 * Ilustrasi doodle bergaya tangan (pengganti doodle domba/bulan Casper).
 * Nanti bisa diganti file SVG ilustrasi final dari desainer.
 */
type P = React.SVGProps<SVGSVGElement>;

export const Sparkle = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p}>
    <path d="M12 1c.6 5.6 2.4 8.4 11 11-8.6 2.6-10.4 5.4-11 11-.6-5.6-2.4-8.4-11-11 8.6-2.6 10.4-5.4 11-11z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
);

export const SparkleSolid = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p}>
    <path d="M12 1c.6 5.6 2.4 8.4 11 11-8.6 2.6-10.4 5.4-11 11-.6-5.6-2.4-8.4-11-11 8.6-2.6 10.4-5.4 11-11z" fill="currentColor" />
  </svg>
);

/** Kotak terbuka di atas awan dengan bintang — ilustrasi utama "belanja jadi mudah". */
export const HappyBox = (p: P) => (
  <svg viewBox="0 0 240 170" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...p}>
    {/* awan */}
    <path d="M18 150c-12 0-14-20 2-22 0-18 22-24 32-12 6-16 32-16 38 2 16-6 30 6 26 20 14 2 14 12 4 12H18z" fill="var(--card)" />
    {/* box */}
    <path d="M110 88l52-16 52 16-52 16-52-16z" fill="var(--paper)" />
    <path d="M110 88v48l52 20 52-20V88" fill="var(--terra)" stroke="var(--ink)" />
    <path d="M162 104v52" stroke="var(--ink)" />
    <path d="M110 88l-16 20 52 18 16-22M214 88l16 20-52 18-16-22" fill="var(--coral)" stroke="var(--ink)" />
    {/* wajah */}
    <path d="M140 124c2 3 6 3 8 0M176 124c2 3 6 3 8 0" stroke="var(--cream)" />
    <path d="M154 136c4 4 12 4 16 0" stroke="var(--cream)" />
    {/* hati & bintang terbang */}
    <path d="M162 58c-6-8-18-2-10 8l10 8 10-8c8-10-4-16-10-8z" fill="var(--rose)" />
    <path d="M200 40l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill="var(--honey)" />
    <path d="M122 34l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
    <path d="M222 70c3 0 6-2 6-6" />
    <text x="188" y="80" fontFamily="var(--hand)" fontSize="18" fill="currentColor" stroke="none">yay!</text>
  </svg>
);

export const PaperPlane = (p: P) => (
  <svg viewBox="0 0 80 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...p}>
    <path d="M44 6l30 8-24 20-6-10-12-2 12-16z" fill="var(--card)" />
    <path d="M44 24l30-10" />
    <path d="M30 22c-10 2-18 8-26 18" strokeDasharray="3 5" />
  </svg>
);

export const Heart = (p: P) => (
  <svg viewBox="0 0 60 50" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...p}>
    <path d="M24 44S4 32 4 18C4 8 16 4 24 14 32 4 44 8 44 18c0 14-20 26-20 26z" fill="var(--rose)" />
    <path d="M50 6v8M46 10h8M54 26l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" />
  </svg>
);

export const Constellation = (p: P) => (
  <svg viewBox="0 0 110 80" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...p}>
    <path d="M58 22c-4-12 12-18 18-10 6-8 22-4 20 8 10 2 8 16-2 16H64c-10 0-12-12-6-14z" fill="var(--card)" />
    <path d="M6 38l18-4 18 6 10 18-22 8-12 10" />
    <circle cx="6" cy="38" r="3" fill="var(--card)" />
    <circle cx="24" cy="34" r="3" fill="var(--card)" />
    <circle cx="42" cy="40" r="3" fill="currentColor" />
    <circle cx="52" cy="58" r="3" fill="var(--card)" />
    <circle cx="30" cy="66" r="3" fill="currentColor" />
    <path d="M86 4l2 4 4 2-4 2-2 4-2-4-4-2 4-2z" fill="var(--honey)" />
  </svg>
);

export const StarCluster = (p: P) => (
  <svg viewBox="0 0 110 60" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden {...p}>
    <path d="M18 18l4 11 12 1-9 8 3 12-10-7-10 7 3-12-9-8 12-1z" />
    <path d="M52 10l2 6 6 1-5 4 2 6-5-4-5 4 2-6-5-4 6-1z" fill="var(--honey)" />
    <path d="M78 4l3 8 8 1-6 5 2 8-7-5-7 5 2-8-6-5 8-1z" fill="currentColor" />
    <path d="M90 30l3 8 8 1-6 5 2 8-7-5-7 5 2-8-6-5 8-1z" />
    <path d="M60 36l2 5 5 1-4 3 1 5-4-3-4 3 1-5-4-3 5-1z" fill="currentColor" />
  </svg>
);

export const QuoteMark = (p: P) => (
  <svg viewBox="0 0 48 36" aria-hidden {...p}>
    <path fill="currentColor" d="M0 36V22C0 10 6 2 18 0l2 6c-6 2-9 6-9 12h9v18H0zm28 0V22C28 10 34 2 46 0l2 6c-6 2-9 6-9 12h9v18H28z" />
  </svg>
);
