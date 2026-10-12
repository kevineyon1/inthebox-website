import { faqs } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronDown } from "@/components/icons";

type FaqItem = { q: string; a: string };

export function Faq({
  items = faqs,
  title = "Pertanyaan yang Sering Diajukan",
}: {
  items?: FaqItem[];
  title?: string;
}) {
  return (
    <Container className="pb-20 pt-16">
      <SectionHeading title={title} />
      <div className="mx-auto mt-8 max-w-[760px] rounded-[0.75rem] bg-paper px-6 py-2">
        {items.map((f) => (
          <details key={f.q} className="group border-b border-line last:border-none">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-sm font-medium">
              {f.q}
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-line transition group-open:rotate-180">
                <ChevronDown className="h-3.5 w-3.5" />
              </span>
            </summary>
            <p className="pb-5 pr-8 text-sm leading-relaxed text-ink-soft">{f.a}</p>
          </details>
        ))}
      </div>
    </Container>
  );
}
