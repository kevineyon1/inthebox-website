import { payLater as c } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PayLater() {
  return (
    <Container className="pt-12 text-center">
      <SectionHeading title={c.title} />
      <ul className="mx-auto mt-7 grid max-w-[720px] gap-8 sm:grid-cols-2">
        {c.items.map((item) => (
          <li key={item.brand}>
            <p className="font-serif text-lg font-bold italic text-terra">{item.brand}</p>
            <p className="mt-5 text-[15px] font-medium">{item.title}</p>
            <p className="mt-2 text-xs">{item.text}</p>
          </li>
        ))}
      </ul>
      <Button href={c.cta.href} className="mt-10 px-6 text-xs">
        {c.cta.label}
      </Button>
    </Container>
  );
}
