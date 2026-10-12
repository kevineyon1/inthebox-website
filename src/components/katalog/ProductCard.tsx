import Link from "next/link";
import type { KatalogItem, ProductStatus } from "@/content/katalog";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { ArrowRight, Card, Gift, Moon, ShieldCheck, Truck } from "@/components/icons";
import { cn } from "@/lib/cn";

const benefitIcons = { shield: ShieldCheck, truck: Truck, gift: Gift, card: Card, moon: Moon };

const statusStyle: Record<ProductStatus, string> = {
  Terlaris: "bg-honey text-ink",
  Promo: "bg-coral text-card",
  Baru: "bg-ink text-cream",
};

/** Kartu produk katalog: foto + status, nama + rating, chip benefit, link detail. */
export function ProductCard({
  item,
  headingLevel = "h4",
  className,
}: {
  item: KatalogItem;
  headingLevel?: "h3" | "h4";
  className?: string;
}) {
  const Heading = headingLevel;
  const href = `/produk/${item.slug}`;

  return (
    <article className={cn("group flex h-full flex-col", className)}>
      <Link href={href} className="relative block" tabIndex={-1} aria-hidden>
        <ImageSlot
          src={item.image}
          alt=""
          tone={item.tone}
          label={item.name.toLowerCase()}
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 540px"
          className="aspect-[3/2] rounded-[0.75rem] transition group-hover:shadow-soft"
        />
        {item.status && (
          <span
            className={cn(
              "absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-semibold",
              statusStyle[item.status],
            )}
          >
            {item.status}
          </span>
        )}
      </Link>

      <div className="mt-4 flex items-start justify-between gap-3">
        <Heading className="font-sans text-lg font-medium leading-snug">
          <Link href={href} className="hover:text-coral">
            {item.name}
          </Link>
        </Heading>
        <p className="flex shrink-0 items-center gap-1 pt-0.5 text-sm" aria-label={`Rating ${item.rating.toFixed(1)} dari ${item.reviewCount} ulasan`}>
          <svg viewBox="0 0 20 20" className="h-4 w-4 fill-honey" aria-hidden>
            <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 14.9 4.8 17.7l1-5.9L1.5 7.7l5.9-.8L10 1.5z" />
          </svg>
          <span className="font-semibold">{item.rating.toFixed(1)}</span>
          <span className="text-ink-soft">({item.reviewCount})</span>
        </p>
      </div>

      <ul className="mt-3 flex flex-wrap gap-2">
        {item.benefits.map((b) => {
          const Icon = benefitIcons[b.icon];
          return (
            <li
              key={b.label}
              className="inline-flex items-center gap-1.5 rounded-full bg-paper px-2.5 py-1 text-[11px] font-medium text-ink"
            >
              <Icon className="h-3.5 w-3.5 text-coral" />
              {b.label}
            </li>
          );
        })}
      </ul>

      <Link
        href={href}
        className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-medium text-coral hover:text-terra"
      >
        Lihat detail
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </article>
  );
}
