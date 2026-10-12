"use client";

import { useState } from "react";
import Link from "next/link";
import { announcements } from "@/config/site";
import { ChevronLeft, ChevronRight, Gift, Pin } from "@/components/icons";

export function AnnouncementBar() {
  const [i, setI] = useState(0);
  const go = (d: number) => setI((v) => (v + d + announcements.length) % announcements.length);

  return (
    <div className="bg-ink text-cream">
      <div className="mx-auto flex h-[52px] max-w-[1680px] items-center justify-between px-4 text-sm sm:px-10">
        <Link href="/lacak-pesanan" className="hidden items-center gap-2 hover:underline md:flex">
          <Pin className="h-4 w-4" /> Lacak pesanan
        </Link>

        <div className="flex min-w-0 flex-1 items-center justify-center gap-6 md:flex-none">
          <button type="button" onClick={() => go(-1)} aria-label="Info sebelumnya" className="opacity-80 hover:opacity-100">
            <ChevronLeft className="h-3 w-3" />
          </button>
          <p className="min-w-0 truncate text-center font-medium md:w-[420px]" aria-live="polite">
            {announcements[i]}
          </p>
          <button type="button" onClick={() => go(1)} aria-label="Info berikutnya" className="opacity-80 hover:opacity-100">
            <ChevronRight className="h-3 w-3" />
          </button>
        </div>

        <Link href="/ajak-teman" className="hidden items-center gap-2 hover:underline md:flex">
          <Gift className="h-4 w-4" /> Ajak teman
        </Link>
      </div>
    </div>
  );
}
