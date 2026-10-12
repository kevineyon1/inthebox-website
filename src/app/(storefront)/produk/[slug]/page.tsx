import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Card, Gift, Moon, ShieldCheck, Truck, WhatsApp } from "@/components/icons";
import { ProductCard } from "@/components/katalog/ProductCard";
import { allKatalogItems, findKatalogItem } from "@/content/katalog";
import { waLink } from "@/lib/whatsapp";

type Props = { params: Promise<{ slug: string }> };

const benefitIcons = { shield: ShieldCheck, truck: Truck, gift: Gift, card: Card, moon: Moon };

export function generateStaticParams() {
  return allKatalogItems.map(({ item }) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return { title: findKatalogItem(slug)?.item.name ?? "Product" };
}

export default async function ProdukDetailPage({ params }: Props) {
  const { slug } = await params;
  const found = findKatalogItem(slug);
  if (!found) notFound();
  const { item, kategori } = found;
  const others = kategori.items.filter((i) => i.slug !== item.slug);

  return (
    <Container className="pb-20 pt-8 md:pt-12">
      <nav aria-label="Breadcrumb" className="text-sm text-ink-soft">
        <Link href="/produk" className="hover:text-ink">
          Product
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/produk#${kategori.slug}`} className="hover:text-ink">
          {kategori.label}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{item.name}</span>
      </nav>

      <div className="mt-6 grid gap-8 md:grid-cols-[1.3fr_1fr] md:gap-14">
        <ImageSlot
          src={item.image}
          alt={item.name}
          tone={item.tone}
          label={item.name.toLowerCase()}
          priority
          sizes="(max-width: 768px) 100vw, 900px"
          className="aspect-[4/3] rounded-[0.75rem]"
        />

        <div className="md:pt-4">
          <p className="text-xs font-semibold tracking-[0.12em] text-ink-soft uppercase">{kategori.label}</p>
          <h1 className="mt-2 font-sans text-[36px] font-semibold leading-tight sm:text-[44px]">{item.name}</h1>
          <p className="mt-2 flex items-center gap-1.5 text-sm">
            <svg viewBox="0 0 20 20" className="h-4 w-4 fill-honey" aria-hidden>
              <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 14.9 4.8 17.7l1-5.9L1.5 7.7l5.9-.8L10 1.5z" />
            </svg>
            <span className="font-semibold">{item.rating.toFixed(1)}</span>
            <span className="text-ink-soft">· {item.reviewCount} ulasan</span>
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{kategori.description}</p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {item.benefits.map((b) => {
              const Icon = benefitIcons[b.icon];
              return (
                <li key={b.label} className="flex items-center gap-3 rounded-[0.75rem] border border-line bg-card px-4 py-3 text-sm font-medium">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-paper">
                    <Icon className="h-5 w-5 text-coral" />
                  </span>
                  {b.label}
                </li>
              );
            })}
          </ul>

          <div className="mt-8 rounded-[0.75rem] bg-paper p-6">
            <p className="font-medium">Harga & ketersediaan</p>
            <p className="mt-1 text-sm text-ink-soft">
              Tim kami akan membantu info harga terbaru, ukuran, dan stok lewat WhatsApp.
            </p>
            <Button
              href={waLink(`Halo, saya tertarik dengan ${item.name}. Boleh info harga, ukuran, dan stoknya?`)}
              external
              size="md"
              className="mt-5 w-full sm:w-auto"
            >
              <WhatsApp className="h-4 w-4" />
              Tanya harga via WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {others.length > 0 && (
        <section aria-labelledby="lainnya" className="mt-16 border-t border-line pt-10">
          <h2 id="lainnya" className="text-[28px] sm:text-[34px]">
            Lainnya di {kategori.label}
          </h2>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug}>
                <ProductCard item={o} headingLevel="h3" />
              </li>
            ))}
          </ul>
        </section>
      )}
    </Container>
  );
}
