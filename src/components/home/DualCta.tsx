import { dualCta } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { waLink } from "@/lib/whatsapp";

export function DualCta() {
  return (
    <Container className="pt-20 pb-20">
      <div className="grid gap-10 md:grid-cols-2 md:gap-6">
        {dualCta.map((card) => (
          <article key={card.title}>
            <ImageSlot src={card.src} tone={card.tone} label={card.label} className="aspect-[4/3] rounded-md" />
            <h2 className="mt-5 font-sans text-xl font-medium">{card.title}</h2>
            <p className="mt-1.5 text-[11px]">{card.text}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {card.ctas.map((b) => {
                const isWa = b.href === "wa";
                return (
                  <Button
                    key={b.label}
                    href={isWa ? waLink() : b.href}
                    external={isWa}
                    variant={b.variant}
                    className="h-9 px-5 text-[11px]"
                  >
                    {b.label}
                  </Button>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}
