"use client";

import { reviewHighlight as c } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CircleButton } from "@/components/ui/CircleButton";
import { Stars } from "@/components/ui/Stars";
import { useRail } from "@/components/ui/useRail";
import { User } from "@/components/icons";

/**
 * Ulasan pelanggan — kartu putih polos yang bisa digeser, gaya ulasan marketplace.
 * Tanpa panel warna di belakangnya — kartu langsung di atas latar halaman.
 */
export function ReviewHighlight() {
  const rail = useRail<HTMLUListElement>();

  return (
    <Container id="testimoni" className="scroll-mt-24 pt-12 md:pt-16">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div>
          <Stars className="text-honey" />
          <h2 className="mt-2 text-[30px] font-bold leading-[1.02] sm:text-[36px]">{c.title}</h2>
        </div>
        <div className="flex items-center gap-3">
          <Button href={c.cta.href}>{c.cta.label}</Button>
          <div className="hidden gap-2 sm:flex">
            <CircleButton direction="prev" onClick={rail.prev} />
            <CircleButton direction="next" onClick={rail.next} />
          </div>
        </div>
      </div>

      <ul
        ref={rail.ref}
        className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1"
      >
        {c.reviews.map((r) => (
          <li
            key={r.name}
            className="w-[85%] shrink-0 snap-start rounded-[0.75rem] border border-line bg-card p-5 shadow-soft sm:w-[360px] sm:p-6"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="font-serif text-lg font-semibold text-terra">{r.name}</p>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-paper text-ink-soft">
                <User className="h-5 w-5" />
              </span>
            </div>
            <Stars count={r.rating} className="mt-2 text-honey" />
            <p className="mt-3 text-sm font-semibold">{r.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{r.text}</p>
            <p className="mt-4 text-xs text-ink-soft/80">{r.date}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
}
