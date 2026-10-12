import type { Firmness } from "@/content/katalog";
import { cn } from "@/lib/cn";

/** Bar 5 segmen dengan satu titik menyala — gaya "Mattress Firmness" Casper. */
export function FirmnessBar({ firmness, label }: { firmness: Firmness; label: string }) {
  return (
    <div className="text-center">
      <p className="text-sm font-semibold">{label}</p>
      <div className="mt-3 flex justify-center gap-1.5" role="img" aria-label={`Tingkat keempukan: ${label}`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={cn("h-2.5 w-7 rounded-full sm:w-9", i === firmness - 1 ? "bg-ink" : "bg-line")}
          />
        ))}
      </div>
      <div className="mt-1.5 flex justify-between text-[11px] text-ink-soft">
        <span>Firm</span>
        <span>Empuk</span>
      </div>
    </div>
  );
}
