import { valueProps } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { BoxOpen, ChatBubble, ShieldCheck, Truck } from "@/components/icons";

const icons = { shield: ShieldCheck, box: BoxOpen, truck: Truck, chat: ChatBubble };

export function ValueProps() {
  return (
    <Container className="pt-12 md:pt-16">
      <ul className="grid grid-cols-2 gap-y-8 rounded-[var(--radius)] bg-paper px-4 py-9 md:grid-cols-4 md:py-11">
        {valueProps.map((v) => {
          const Icon = icons[v.icon];
          return (
            <li key={v.title} className="flex flex-col items-center px-2 text-center">
              <Icon className="h-11 w-11 text-terra" />
              <p className="mt-4 text-xs font-medium">{v.title}</p>
              <p className="mt-0.5 text-[11px] text-ink-soft">{v.text}</p>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
