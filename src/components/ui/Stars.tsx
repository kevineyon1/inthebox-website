export function Stars({ count = 5, className = "text-coral" }: { count?: number; className?: string }) {
  return (
    <div className={`flex gap-1 ${className}`} aria-label={`${count} dari 5 bintang`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current" aria-hidden>
          <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 14.9 4.8 17.7l1-5.9L1.5 7.7l5.9-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}
