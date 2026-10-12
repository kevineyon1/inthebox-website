import { promoBanner as c } from "@/content/home";
import { Button } from "@/components/ui/Button";
import { Sparkle, SparkleSolid } from "@/components/icons/doodles";

export function PromoBanner() {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <div className="mx-auto grid max-w-[1600px] items-center gap-6 px-4 py-8 sm:px-10 md:grid-cols-3 md:py-6">
        {/* kiri */}
        <div className="relative text-center">
          <h2 className="mx-auto max-w-[340px] text-[26px] font-bold leading-[1.08] text-cream">{c.left.title}</h2>
          <p className="mt-2 text-sm">{c.left.text}</p>
          <Button href={c.left.cta.href} variant="light" className="mt-5">
            {c.left.cta.label}
          </Button>
          <Sparkle className="absolute -right-2 -top-4 hidden h-8 w-8 text-cream lg:block" />
          <Sparkle className="absolute -right-8 top-8 hidden h-4 w-4 text-cream lg:block" />
        </div>

        {/* tengah */}
        <div className="flex justify-center">
          <span className="rounded-xl border-2 border-sage/70 bg-mint px-6 py-2.5 font-sans text-base font-medium tracking-[0.18em] text-ink">
            {c.badge}
          </span>
        </div>

        {/* kanan */}
        <div className="relative text-center">
          <h2 className="text-[26px] font-bold leading-[1.08] text-cream">{c.right.title}</h2>
          <p className="mt-2 text-sm">{c.right.text}</p>
          <Button href={c.right.cta.href} variant="sale" className="mt-5">
            {c.right.cta.label}
          </Button>
          <SparkleSolid className="absolute -bottom-3 left-[-28%] hidden h-4 w-4 text-coral lg:block" />
        </div>
      </div>
      <p className="absolute bottom-2 right-4 hidden text-[10px] text-cream/80 sm:right-10 md:block">{c.note}</p>
    </section>
  );
}
