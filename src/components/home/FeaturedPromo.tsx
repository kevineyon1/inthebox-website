import { featuredPromo as c } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Sparkle, SparkleSolid } from "@/components/icons/doodles";

export function FeaturedPromo() {
  return (
    <Container className="pt-6">
      <div className="relative grid overflow-hidden rounded-[var(--radius)] bg-mint shadow-soft md:grid-cols-2">
        <div className="relative px-7 py-8 md:py-9">
          <span className="inline-block rounded-full bg-terra px-6 py-1.5 font-sans text-[15px] font-medium tracking-[0.12em] text-cream">
            {c.badge}
          </span>
          <h2 className="mt-5 max-w-[400px] font-sans text-[34px] font-medium leading-[1.05] sm:text-[40px]">{c.title}</h2>
          <p className="mt-1.5 text-lg font-normal">{c.text}</p>
          <Button href={c.cta.href} className="mt-5 h-9 px-8 text-[15px]">
            {c.cta.label}
          </Button>
          <p className="mt-4 text-[8px] text-ink-soft">{c.note}</p>

          <Sparkle className="absolute right-[28%] top-5 h-6 w-6 text-ink" />
          <Sparkle className="absolute bottom-16 right-[38%] h-3 w-3 text-coral" />
          <SparkleSolid className="absolute bottom-6 right-[30%] h-6 w-6 text-coral" />
        </div>

        <ImageSlot tone={c.tone} label="promo image" className="min-h-[260px] md:mt-6 md:min-h-[300px]">
          <Sparkle className="absolute right-6 top-4 h-6 w-6 text-ink" />
        </ImageSlot>
      </div>
    </Container>
  );
}
