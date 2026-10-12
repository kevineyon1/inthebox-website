import { categoryPicks as c } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { KatalogStack } from "@/components/katalog/KatalogStack";

/**
 * Katalog homepage: semua kategori disusun ke bawah. Tanpa baris pintasan
 * kategori (KatalogNav) — jump-link ke tiap kategori hanya berguna sebagai
 * nav sticky di halaman /produk, di homepage cukup di-scroll berurutan.
 */
export function CategoryPicks() {
  return (
    <Container className="pt-12 md:pt-16">
      <SectionHeading title={c.title} subtitle={c.subtitle} />
      <div className="mt-5 flex flex-wrap justify-center gap-3">
        {c.ctas.map((b) => (
          <Button key={b.href} href={b.href} variant={b.variant} className="px-7">
            {b.label}
          </Button>
        ))}
      </div>

      <div className="mt-10">
        <KatalogStack level="h3" />
      </div>
    </Container>
  );
}
