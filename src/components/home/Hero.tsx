import { hero as c } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";

export function Hero() {
  return (
    <Container className="pt-8 md:pt-12">
      <ImageSlot
        src={c.image.src}
        label={c.image.label}
        tone={c.image.tone}
        priority
        sizes="(max-width: 1696px) 100vw, 1600px"
        className="min-h-[480px] rounded-[var(--radius)] shadow-soft md:min-h-[600px]"
      >
        {/* gradient agar teks tetap terbaca di atas foto */}
        <div className="absolute inset-0 bg-linear-to-r from-ink/60 via-ink/25 to-transparent" />
        <div className="relative flex min-h-[480px] max-w-[820px] flex-col justify-center p-8 sm:p-12 md:min-h-[600px]">
          <h1 className="text-[42px] leading-[1.06] text-cream sm:text-[56px] lg:text-[64px]">{c.title}</h1>
          <p className="mt-6 max-w-[640px] text-lg leading-relaxed text-cream/95">{c.text}</p>
          <div>
            <Button href={c.cta.href} variant="light" size="md" className="mt-8">
              {c.cta.label}
            </Button>
          </div>
        </div>
      </ImageSlot>
    </Container>
  );
}
