"use client";

import { useState } from "react";
import { pressQuotes } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { CircleButton } from "@/components/ui/CircleButton";
import { QuoteMark } from "@/components/icons/doodles";
import { cn } from "@/lib/cn";

export function PressQuotes() {
  const [i, setI] = useState(0);
  const go = (d: number) => setI((v) => (v + d + pressQuotes.length) % pressQuotes.length);
  const q = pressQuotes[i];

  return (
    <Container className="pt-14">
      <figure className="relative mx-auto max-w-[880px] px-2 text-center">
        <QuoteMark className="absolute -top-4 left-0 h-9 w-12 text-line sm:left-2" />
        <blockquote className="relative min-h-[96px] text-lg font-medium leading-relaxed sm:text-xl" aria-live="polite">
          “{q.quote}” <span className="whitespace-nowrap">- {q.source}</span>
        </blockquote>
      </figure>

      <div className="mt-8 flex items-center justify-center gap-4">
        <CircleButton direction="prev" onClick={() => go(-1)} />
        <div className="flex gap-2">
          {pressQuotes.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Kutipan ${idx + 1}`}
              onClick={() => setI(idx)}
              className={cn("h-1.5 w-1.5 rounded-full", idx === i ? "bg-ink" : "bg-line")}
            />
          ))}
        </div>
        <CircleButton direction="next" onClick={() => go(1)} />
      </div>
    </Container>
  );
}
