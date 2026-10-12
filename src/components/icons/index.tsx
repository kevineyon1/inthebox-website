/**
 * Ikon garis (stroke) — ringan, tanpa dependency.
 * Semua mengikuti `currentColor`, jadi warna diatur lewat class text-*.
 */
type P = React.SVGProps<SVGSVGElement>;

const base = (props: P) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

export const Pin = (p: P) => (
  <svg {...base(p)}><path d="M12 21s-6-5.3-6-10.5A6 6 0 0 1 18 10.5C18 15.7 12 21 12 21z" /><circle cx="12" cy="10.5" r="2.2" /></svg>
);
export const Gift = (p: P) => (
  <svg {...base(p)}><rect x="3.5" y="8" width="17" height="4" rx="1" /><path d="M5 12v8h14v-8M12 8v12M12 8S10.5 4 8 4.5 7.5 8 12 8zM12 8s1.5-4 4-3.5S16.5 8 12 8z" /></svg>
);
export const Search = (p: P) => (
  <svg {...base(p)}><circle cx="11" cy="11" r="6.5" /><path d="M20 20l-4.2-4.2" /></svg>
);
export const User = (p: P) => (
  <svg {...base(p)}><circle cx="12" cy="8" r="3.8" /><path d="M4.5 20.5c1.2-4 4-5.8 7.5-5.8s6.3 1.8 7.5 5.8" /></svg>
);
export const Bag = (p: P) => (
  <svg {...base(p)}><path d="M5 8h14l-1 12.5H6L5 8z" /><path d="M9 8V6.5a3 3 0 0 1 6 0V8" /></svg>
);
export const Menu = (p: P) => (
  <svg {...base(p)}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const ChevronLeft = (p: P) => (
  <svg {...base({ strokeWidth: 2.2, ...p })}><path d="M15 5l-7 7 7 7" /></svg>
);
export const ChevronRight = (p: P) => (
  <svg {...base({ strokeWidth: 2.2, ...p })}><path d="M9 5l7 7-7 7" /></svg>
);
export const ChevronDown = (p: P) => (
  <svg {...base({ strokeWidth: 2.2, ...p })}><path d="M6 9l6 6 6-6" /></svg>
);
export const ArrowRight = (p: P) => (
  <svg {...base({ strokeWidth: 2, ...p })}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const Play = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p}><path d="M8 5.5v13l10.5-6.5L8 5.5z" fill="currentColor" /></svg>
);

/* --- Ikon value proposition (lebih besar, gaya garis tipis) --- */
export const ShieldCheck = (p: P) => (
  <svg {...base({ strokeWidth: 1.3, ...p })}><path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.3-7.5 9.5-4.3-1.2-7.5-4.9-7.5-9.5V6L12 3z" /><path d="M8.7 12.2l2.3 2.3 4.4-4.6" /><path d="M19.5 3.5l.6-1.3M21 5.5l1.3-.4" /></svg>
);
export const Truck = (p: P) => (
  <svg {...base({ strokeWidth: 1.3, ...p })}><path d="M2.5 7.5h11v8.5h-11zM13.5 10.5h4l3 3v2.5h-7" /><circle cx="6.5" cy="17" r="1.8" /><circle cx="17" cy="17" r="1.8" /><path d="M1 11h3M1.5 13.5h2" /></svg>
);
export const BoxOpen = (p: P) => (
  <svg {...base({ strokeWidth: 1.3, ...p })}><path d="M3.5 9l8.5 3.5L20.5 9M12 12.5V21M3.5 9v8.5L12 21l8.5-3.5V9" /><path d="M3.5 9L6 5.5l8.5 3.3M20.5 9L18 5.5 9.5 8.8" /><path d="M17.5 2.5l.4 1.2 1.2.4-1.2.4-.4 1.2-.4-1.2-1.2-.4 1.2-.4z" /></svg>
);
export const ChatBubble = (p: P) => (
  <svg {...base({ strokeWidth: 1.3, ...p })}><path d="M12 3.5a8.5 8.5 0 0 0-7.4 12.7L3.5 20.5l4.4-1.1A8.5 8.5 0 1 0 12 3.5z" /><path d="M9 9.3c0 3 2.6 5.7 5.7 5.7l1-1.3-1.8-1-.8.7c-1-.4-1.9-1.3-2.3-2.3l.7-.8-1-1.8L9 9.3z" /></svg>
);
export const WhatsApp = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p}>
    <path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.4-.3z" />
  </svg>
);
export const Mail = (p: P) => (
  <svg {...base(p)}><rect x="3" y="5.5" width="18" height="13" rx="2" /><path d="M3.5 7l8.5 6 8.5-6" /></svg>
);

/* --- Sub-menu & keunggulan halaman produk --- */
export const Moon = (p: P) => (
  <svg {...base({ strokeWidth: 1.4, ...p })}><path d="M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10z" /><path d="M17 3.5l.5 1.3 1.3.5-1.3.5-.5 1.3-.5-1.3-1.3-.5 1.3-.5z" /></svg>
);
export const Card = (p: P) => (
  <svg {...base({ strokeWidth: 1.4, ...p })}><rect x="3" y="5.5" width="18" height="13" rx="2" /><path d="M3 9.5h18M6.5 15h4" /></svg>
);

/* --- Sosial --- */
export const Instagram = (p: P) => (
  <svg {...base(p)}><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="3.8" /><circle cx="17.2" cy="6.8" r=".6" fill="currentColor" /></svg>
);
export const TikTok = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p}><path fill="currentColor" d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.7a5.7 5.7 0 1 0 4.9 5.7V9a7.4 7.4 0 0 0 4.3 1.4V7.3a4.3 4.3 0 0 1-3.2-1.5z" /></svg>
);
export const Facebook = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p}><path fill="currentColor" d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4a21 21 0 0 0-2.3-.1c-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1z" /></svg>
);
export const YouTube = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p}><path fill="currentColor" d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3L10 15z" /></svg>
);
