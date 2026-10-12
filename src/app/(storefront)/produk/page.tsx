import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { KatalogNav } from "@/components/katalog/KatalogNav";
import { KatalogStack } from "@/components/katalog/KatalogStack";
import { SplitFeature } from "@/components/produk/SplitFeature";
import { PerksMarquee } from "@/components/produk/PerksMarquee";
import { PaylaterStrip } from "@/components/home/PaylaterStrip";
import { DualCta } from "@/components/home/DualCta";
import { Faq } from "@/components/home/Faq";
import { Sparkle, SparkleSolid } from "@/components/icons/doodles";
import { produkPage as c } from "@/content/produk";

export const metadata = { title: "Product" };

/** Halaman daftar produk — semua kategori etalase disusun ke bawah, gaya PLP Casper. */
export default function ProdukPage() {
  return (
    <>
      <Container className="pt-10 text-center md:pt-14">
        <p className="text-sm font-medium tracking-[0.08em] text-ink-soft">{c.eyebrow}</p>
        <h1 className="mt-1 text-[36px] sm:text-[48px]">{c.title}</h1>
        <p className="mx-auto mt-3 max-w-[620px] text-base text-ink-soft">{c.text}</p>
      </Container>

      <KatalogNav sticky className="mt-8" />

      <Container className="pt-6">
        <KatalogStack level="h2" scrollMargin="scroll-mt-44" />
      </Container>

      {/* Produk pilihan */}
      <Container className="pt-6">
        <SplitFeature image={c.featured.image} imageAlt={c.featured.title} imageWidth="narrow">
          <div className="relative">
            <p className="text-xs font-semibold tracking-[0.14em] text-ink-soft">{c.featured.eyebrow}</p>
            <h2 className="mt-3 font-sans text-[36px] font-semibold sm:text-[44px]">{c.featured.title}</h2>
            <p className="mt-2 text-lg">{c.featured.text}</p>
            <Button href={c.featured.cta.href} className="mt-6">
              {c.featured.cta.label}
            </Button>
            <Sparkle className="absolute -right-16 -top-4 hidden h-6 w-6 text-ink md:block" />
            <SparkleSolid className="absolute -left-20 bottom-2 hidden h-4 w-4 text-coral md:block" />
          </div>
        </SplitFeature>
      </Container>

      {/* Temukan kasur */}
      <Container className="pt-16 text-center">
        <h2 className="text-[36px] sm:text-[48px]">{c.finder.title}</h2>
        <p className="mx-auto mt-4 max-w-[620px] text-sm leading-relaxed text-ink-soft">{c.finder.text}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {c.finder.ctas.map((b) => (
            <Button key={b.label} href={b.href} variant={b.variant} className="px-8">
              {b.label}
            </Button>
          ))}
        </div>
      </Container>

      <div className="pt-10">
        <PaylaterStrip />
      </div>

      {/* Diuji & dipercaya */}
      <Container className="pt-6">
        <SplitFeature image={c.tested.image} imageSide="right" tone="dark">
          <p className="text-xs font-semibold tracking-[0.14em] text-cream/80">{c.tested.eyebrow}</p>
          <h2 className="mt-4 max-w-[520px] text-[26px] leading-snug text-cream sm:text-[30px]">{c.tested.title}</h2>
          <p className="mt-4 max-w-[480px] text-sm text-cream/85">{c.tested.text}</p>
          <Button href={c.tested.cta.href} variant="light" className="mt-7">
            {c.tested.cta.label}
          </Button>
          <p className="mt-6 text-[11px] text-cream/70">{c.tested.note}</p>
        </SplitFeature>
      </Container>

      {/* Bundle */}
      <Container className="pt-6">
        <SplitFeature image={c.bundle.image}>
          <h2 className="max-w-[460px] text-[32px] leading-tight sm:text-[40px]">{c.bundle.title}</h2>
          <p className="mt-4 max-w-[460px] text-sm text-ink-soft">{c.bundle.text}</p>
          <Button href={c.bundle.cta.href} className="mt-7">
            {c.bundle.cta.label}
          </Button>
        </SplitFeature>
      </Container>

      <div className="mt-14">
        <PerksMarquee perks={c.perks} note={c.perksNote} />
      </div>

      <DualCta />
      <Faq items={c.faqs} />
    </>
  );
}
