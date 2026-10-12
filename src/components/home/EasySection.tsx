import { easySection as c } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Constellation, Heart, HappyBox, PaperPlane, StarCluster } from "@/components/icons/doodles";
import { cn } from "@/lib/cn";

const statDoodles = [Heart, Constellation, StarCluster];

export function EasySection() {
  return (
    <section className="mt-4 bg-paper py-14 md:py-20">
      <Container>
        {/* ilustrasi utama */}
        <div className="relative mx-auto h-[190px] w-[300px] text-ink">
          <PaperPlane className="absolute left-2 top-10 w-16 -rotate-12" />
          <PaperPlane className="absolute right-0 top-0 w-14 rotate-6" />
          <HappyBox className="absolute bottom-0 left-1/2 w-[240px] -translate-x-1/2" />
        </div>

        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="text-[40px] font-bold sm:text-[52px]">{c.title}</h2>
          <p className="mx-auto mt-4 max-w-[640px] text-lg font-normal leading-snug">{c.text}</p>
        </div>

        {/* statistik zig-zag: kiri – kanan – kiri */}
        <ul className="mx-auto mt-10 max-w-[940px] space-y-10 md:-space-y-6">
          {c.stats.map((s, i) => {
            const Doodle = statDoodles[i];
            const right = i % 2 === 1;
            return (
              <li key={s.value} className={cn("flex", right ? "md:justify-end md:text-right" : "")}>
                <div className="max-w-[360px]">
                  <Doodle className={cn("mb-2 h-auto text-ink", i === 0 ? "w-12" : "w-24", right && "md:ml-auto")} />
                  <p className="font-serif text-[40px] font-bold leading-none underline decoration-2 underline-offset-4">
                    {s.value}
                  </p>
                  <p className="mt-4 text-lg font-medium leading-snug">{s.title}</p>
                  <p className="mt-2 text-[13px] tracking-wide">{s.note}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 text-center">
          <h2 className="text-[30px] font-bold sm:text-[38px]">{c.learn.title}</h2>
          <p className="mt-4 text-lg font-normal">{c.learn.text}</p>
          <Button href={c.learn.cta.href} size="md" className="mt-6 px-8 text-xs">
            {c.learn.cta.label}
          </Button>
        </div>

        <ul className="mx-auto mt-12 grid max-w-[920px] grid-cols-2 gap-y-8 text-center md:grid-cols-4">
          {c.features.map((f) => (
            <li key={f.title}>
              <p className="font-serif text-xl font-bold">{f.title}</p>
              <p className="mt-2 text-[13px] font-medium">{f.label}</p>
              <p className="mt-1 text-[10px]">{f.note}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
