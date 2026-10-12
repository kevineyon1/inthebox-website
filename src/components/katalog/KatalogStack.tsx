import { katalog } from "@/content/katalog";
import { ProductCard } from "@/components/katalog/ProductCard";
import { cn } from "@/lib/cn";

/**
 * Semua kategori disusun ke bawah. Tiap kategori = judul di atas + grid kartu produk
 * selebar container (tanpa kolom teks di samping), supaya semua kartu sejajar.
 * Mobile: kartu bisa digeser ke samping. `level` menjaga hierarki heading tetap benar.
 */
export function KatalogStack({ level = "h3", scrollMargin = "scroll-mt-28" }: { level?: "h2" | "h3"; scrollMargin?: string }) {
  const CategoryHeading = level;
  const itemHeading = level === "h2" ? "h3" : "h4";

  return (
    <div>
      {katalog.map((k) => (
        <section
          key={k.slug}
          id={k.slug}
          aria-labelledby={`${k.slug}-title`}
          className={cn("border-t border-line py-10 first:border-t-0 lg:py-12", scrollMargin)}
        >
          <div className="flex items-baseline justify-between gap-4">
            <CategoryHeading id={`${k.slug}-title`} className="text-[28px] leading-tight sm:text-[34px]">
              {k.label}
            </CategoryHeading>
            <p className="shrink-0 text-xs font-semibold tracking-[0.12em] text-ink-soft">{k.items.length} PRODUK</p>
          </div>

          <ul className="no-scrollbar -mx-4 mt-6 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-3">
            {k.items.map((item) => (
              <li key={item.slug} className="w-[80%] shrink-0 snap-start sm:w-auto">
                <ProductCard item={item} headingLevel={itemHeading} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
