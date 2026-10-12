import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Slot gambar. Selama asset belum ada, tampil placeholder bertekstur
 * dengan label. Nanti cukup isi `src` — layout tidak berubah.
 */
const tones = {
  sand: "from-[#DCEFFA] via-[#EDF7FD] to-[#C6E4F5]",
  coral: "from-[#7FC0DE] via-[#B5DCEE] to-[#3F9DC5]",
  sage: "from-[#A9D4D8] via-[#CFE8EA] to-[#7FB9C0]",
  honey: "from-[#D4F0FE] via-[#EAF8FF] to-[#B3DFF5]",
  rose: "from-[#8FA8D6] via-[#BCCBE8] to-[#6086C2]",
  ink: "from-[#2A5582] via-[#3B6B98] to-[#12365C]",
} as const;

export type Tone = keyof typeof tones;

export function ImageSlot({
  src,
  alt = "",
  label,
  tone = "sand",
  className,
  priority,
  sizes = "(max-width: 768px) 100vw, 50vw",
  children,
}: {
  src?: string;
  alt?: string;
  label?: string;
  tone?: Tone;
  className?: string;
  priority?: boolean;
  sizes?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <div
          aria-hidden
          className={cn("absolute inset-0 bg-linear-to-br", tones[tone])}
        >
          <div className="absolute inset-0 bg-[url('/paper.png')] opacity-80 mix-blend-multiply" />
          {label && (
            <span
              className={cn(
                "absolute bottom-3 left-4 font-hand text-lg",
                tone === "ink" ? "text-cream/70" : "text-ink/45",
              )}
            >
              {label}
            </span>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
