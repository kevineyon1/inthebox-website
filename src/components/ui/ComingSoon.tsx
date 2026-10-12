import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/** Halaman sementara untuk menu yang kontennya belum siap. */
export function ComingSoon({ title, text }: { title: string; text: string }) {
  return (
    <Container className="py-24 text-center md:py-32">
      <p className="font-hand text-2xl text-terra">segera hadir</p>
      <h1 className="mt-2 text-[40px] sm:text-[52px]">{title}</h1>
      <p className="mx-auto mt-4 max-w-[520px] text-ink-soft">{text}</p>
      <Button href="/produk" size="md" className="mt-8">
        Lihat produk
      </Button>
    </Container>
  );
}
