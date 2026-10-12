import { cn } from "@/lib/cn";
import { ChevronLeft, ChevronRight } from "@/components/icons";

export function CircleButton({
  direction,
  onClick,
  className,
}: {
  direction: "prev" | "next";
  onClick?: () => void;
  className?: string;
}) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Sebelumnya" : "Berikutnya"}
      className={cn(
        "grid h-8 w-8 place-items-center rounded-full border border-line bg-card text-ink shadow-sm transition hover:border-ink",
        className,
      )}
    >
      <Icon className="h-3.5 w-3.5" />
    </button>
  );
}
