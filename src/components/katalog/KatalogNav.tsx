"use client";

import { useEffect, useState } from "react";
import { katalog } from "@/content/katalog";
import { cn } from "@/lib/cn";

/**
 * Baris pintasan kategori. Klik = lompat ke kategori di bawahnya.
 * `sticky` menempel di bawah header dan menandai kategori yang sedang dilihat.
 */
export function KatalogNav({ sticky = false, className }: { sticky?: boolean; className?: string }) {
  const [active, setActive] = useState(katalog[0].slug);

  useEffect(() => {
    if (!sticky) return;
    // Kategori aktif = kategori terakhir yang judulnya sudah melewati garis di bawah nav.
    const line = 220;
    let frame = 0;
    const update = () => {
      frame = 0;
      let current = katalog[0].slug;
      for (const k of katalog) {
        const el = document.getElementById(k.slug);
        if (el && el.getBoundingClientRect().top <= line) current = k.slug;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [sticky]);

  // Pastikan pill aktif selalu terlihat di baris yang bisa digeser (mobile).
  useEffect(() => {
    if (!sticky) return;
    const link = document.querySelector<HTMLElement>(`[data-katalog-link="${active}"]`);
    const row = link?.closest("ul");
    if (!link || !row || row.scrollWidth <= row.clientWidth) return;
    row.scrollTo({ left: link.offsetLeft - row.clientWidth / 2 + link.offsetWidth / 2, behavior: "smooth" });
  }, [active, sticky]);

  return (
    <nav
      aria-label="Kategori produk"
      className={cn(sticky && "sticky top-[88px] z-30 border-b border-line bg-cream/95 backdrop-blur", className)}
    >
      <ul
        className={cn(
          "no-scrollbar relative flex scroll-px-4 gap-2 overflow-x-auto px-4 sm:scroll-px-8 sm:px-8",
          sticky ? "mx-auto max-w-[var(--container)] py-3 lg:justify-center lg:px-12" : "-mx-4 pb-1 sm:-mx-8 lg:mx-0 lg:flex-wrap lg:justify-center lg:px-0",
        )}
      >
        {katalog.map((k) => {
          const isActive = sticky && active === k.slug;
          return (
            <li key={k.slug} className="shrink-0">
              <a
                href={`#${k.slug}`}
                data-katalog-link={k.slug}
                aria-current={isActive ? "true" : undefined}
                onClick={() => setActive(k.slug)}
                className={cn(
                  "inline-flex h-10 items-center rounded-full border px-5 text-sm font-medium whitespace-nowrap transition-colors",
                  isActive ? "border-ink bg-ink text-cream" : "border-line bg-card text-ink hover:border-ink",
                )}
              >
                {k.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
