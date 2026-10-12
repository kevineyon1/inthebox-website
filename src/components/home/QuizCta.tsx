import { quizCta as c } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";

export function QuizCta() {
  return (
    <Container className="pt-12">
      <div className="grid overflow-hidden rounded-[var(--radius)] bg-mint shadow-soft md:grid-cols-[58%_42%]">
        <div className="flex flex-col justify-center px-7 py-9">
          <h2 className="max-w-[440px] text-[30px] leading-[1.1] sm:text-[36px]">{c.title}</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {c.ctas.map((b) => (
              <Button key={b.href} href={b.href} variant={b.variant} className="px-5 text-[11px]">
                {b.label}
              </Button>
            ))}
          </div>
          <p className="mt-4 text-[11px]">{c.note}</p>
        </div>
        <ImageSlot tone={c.tone} label="lifestyle image" className="min-h-[240px] md:min-h-[280px]" />
      </div>
    </Container>
  );
}
