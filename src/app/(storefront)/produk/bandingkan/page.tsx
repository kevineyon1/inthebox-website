import { Container } from "@/components/ui/Container";
import { CompareTool } from "@/components/bandingkan/CompareTool";
import { PerksMarquee } from "@/components/produk/PerksMarquee";
import { QuizCta } from "@/components/home/QuizCta";
import { DualCta } from "@/components/home/DualCta";
import { produkPage } from "@/content/produk";

export const metadata = { title: "Bandingkan Kasur" };

/** Alat bandingkan kasur — gaya "Compare Mattresses" Casper. */
export default function BandingkanPage() {
  return (
    <>
      <Container className="pt-10 text-center md:pt-12">
        <p className="text-sm font-medium tracking-[0.08em] text-ink-soft">BANDINGKAN KASUR</p>
        <h1 className="mt-1 text-[36px] sm:text-[48px]">Temukan yang paling cocok.</h1>
        <p className="mx-auto mt-3 max-w-[520px] text-base text-ink-soft">
          Pilih hingga 3 kasur untuk melihat spesifikasinya berdampingan.
        </p>
      </Container>

      <Container className="pt-10 pb-4">
        <CompareTool />
      </Container>

      <p className="mx-auto max-w-[var(--container)] px-4 pb-10 text-center text-[11px] text-ink-soft sm:px-8 lg:px-12">
        *Spesifikasi bersifat taksiran sementara — akan diperbarui dengan data resmi.
      </p>

      <PerksMarquee perks={produkPage.perks} note={produkPage.perksNote} />

      <QuizCta />
      <DualCta />
    </>
  );
}
