"use client";

import { stories as c } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { CircleButton } from "@/components/ui/CircleButton";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useRail } from "@/components/ui/useRail";
import { Play } from "@/components/icons";

export function Stories() {
  const rail = useRail();
  // lebar thumb progress = porsi yang terlihat, posisinya mengikuti scroll
  const thumb = Math.max(rail.visible, 0.15);

  return (
    <Container className="pt-14">
      <SectionHeading title={c.title} />

      <div ref={rail.ref} className="no-scrollbar mt-9 flex snap-x snap-mandatory gap-6 overflow-x-auto">
        {c.items.map((s) => (
          <button
            key={s.caption}
            type="button"
            className="group relative w-[220px] shrink-0 snap-start text-left sm:w-[267px]"
            aria-label={`Putar video: ${s.caption}`}
          >
            <ImageSlot tone={s.tone} className="aspect-[2/3] rounded-md">
              <span className="absolute inset-0 grid place-items-center">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-card text-ink shadow transition group-hover:scale-110">
                  <Play className="ml-0.5 h-5 w-5" />
                </span>
              </span>
              <span className="absolute inset-x-0 top-[58%] text-center font-print text-sm text-cream drop-shadow">
                {s.caption}
              </span>
            </ImageSlot>
          </button>
        ))}
      </div>

      <div className="mt-7 flex items-center gap-6">
        <div className="relative h-0.5 flex-1 bg-line">
          <div
            className="absolute inset-y-0 bg-terra transition-[left]"
            style={{ width: `${thumb * 100}%`, left: `${rail.progress * (1 - thumb) * 100}%` }}
          />
        </div>
        <div className="flex gap-2">
          <CircleButton direction="prev" onClick={rail.prev} />
          <CircleButton direction="next" onClick={rail.next} />
        </div>
      </div>
    </Container>
  );
}
