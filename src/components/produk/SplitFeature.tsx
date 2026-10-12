import { ImageSlot } from "@/components/ui/ImageSlot";
import { cn } from "@/lib/cn";

/**
 * Banner dua kolom: foto + kartu teks.
 * tone "dark" = kartu navy (setara banner Consumer Reports Casper), "light" = kartu biru muda.
 */
export function SplitFeature({
  image,
  imageAlt = "",
  imageSide = "left",
  tone = "light",
  imageWidth = "half",
  children,
}: {
  image: string;
  imageAlt?: string;
  imageSide?: "left" | "right";
  tone?: "light" | "dark";
  imageWidth?: "half" | "narrow";
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid overflow-hidden rounded-[0.75rem]",
        imageWidth === "narrow" ? "md:grid-cols-[40%_60%]" : "md:grid-cols-2",
        imageSide === "right" && (imageWidth === "narrow" ? "md:grid-cols-[60%_40%]" : ""),
      )}
    >
      <ImageSlot
        src={image}
        alt={imageAlt}
        sizes="(max-width: 768px) 100vw, 800px"
        className={cn("min-h-[280px] md:min-h-[440px]", imageSide === "right" && "md:order-2")}
      />
      <div
        className={cn(
          "flex flex-col items-center justify-center px-8 py-12 text-center sm:px-14",
          tone === "dark" ? "bg-ink text-cream" : "bg-paper text-ink",
        )}
      >
        {children}
      </div>
    </div>
  );
}
