"use client";

import Link from "next/link";
import { shopRail as c } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CircleButton } from "@/components/ui/CircleButton";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { useRail } from "@/components/ui/useRail";

export function ShopRail() {
  const rail = useRail();

  return (
    <Container className="pt-4">
      <div className="grid items-center gap-6 md:grid-cols-[260px_1fr] md:gap-0">
        <div className="md:pr-8">
          <p className="text-[9px] font-medium tracking-[0.12em]">{c.eyebrow}</p>
          <h2 className="mt-1.5 text-[22px] font-bold">{c.title}</h2>
          <p className="mt-2 text-[10px] leading-relaxed">{c.text}</p>
          <Button href={c.cta.href} className="mt-4 h-8 px-4 text-[11px]">
            {c.cta.label}
          </Button>
          <div className="mt-4 flex gap-2">
            <CircleButton direction="prev" onClick={rail.prev} className="h-7 w-7" />
            <CircleButton direction="next" onClick={rail.next} className="h-7 w-7" />
          </div>
        </div>

        <div ref={rail.ref} className="no-scrollbar flex snap-x snap-mandatory gap-1 overflow-x-auto">
          {c.items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative w-[240px] shrink-0 snap-start sm:w-[290px]"
            >
              <ImageSlot tone={item.tone} className="aspect-[290/375]">
                <div className="absolute inset-0 bg-linear-to-t from-ink/35 to-transparent to-40%" />
                <span className="absolute inset-x-0 bottom-5 text-center font-sans text-xl font-semibold text-cream transition group-hover:bottom-6">
                  {item.label}
                </span>
              </ImageSlot>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
