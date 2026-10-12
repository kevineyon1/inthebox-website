"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { katalog, compareItems, type KatalogItem, type MattressSpec } from "@/content/katalog";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { ChevronDown } from "@/components/icons";
import { FirmnessBar } from "@/components/bandingkan/FirmnessBar";
import { cn } from "@/lib/cn";

type Column = { item: KatalogItem; spec: MattressSpec } | null;

const DEFAULTS = compareItems.slice(0, 3).map(({ item }) => item.slug);

/** Bar label penuh lebar yang membagi tiap baris atribut — gaya "Mattress Firmness" Casper. */
function RowLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="col-span-3 bg-paper px-4 py-3 text-center text-sm font-semibold">
      {children}
    </div>
  );
}

function ProductSelect({
  value,
  otherValues,
  onChange,
}: {
  value: string;
  otherValues: string[];
  onChange: (slug: string) => void;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Pilih kasur"
        className="h-11 w-full appearance-none rounded-full border border-line bg-card px-4 pr-9 text-sm font-medium text-ink"
      >
        {katalog
          .filter((k) => k.items.some((i) => i.spec))
          .map((k) => (
            <optgroup key={k.slug} label={k.label}>
              {k.items
                .filter((i) => i.spec && (i.slug === value || !otherValues.includes(i.slug)))
                .map((i) => (
                  <option key={i.slug} value={i.slug}>
                    {i.name}
                  </option>
                ))}
            </optgroup>
          ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ink-soft" />
    </div>
  );
}

/**
 * Alat bandingkan kasur — pilih hingga 3 kasur, lihat spesifikasinya berdampingan.
 * Hanya menampilkan produk yang punya `spec` (kategori kasur, bukan sofa/aksesoris).
 */
export function CompareTool() {
  const [slugs, setSlugs] = useState<string[]>(DEFAULTS);

  const columns: Column[] = useMemo(
    () =>
      slugs.map((slug) => {
        const found = compareItems.find(({ item }) => item.slug === slug);
        return found ? { item: found.item, spec: found.item.spec! } : null;
      }),
    [slugs],
  );

  const setColumn = (index: number, slug: string) => {
    setSlugs((prev) => prev.map((s, i) => (i === index ? slug : s)));
  };

  return (
    <div className="overflow-x-auto">
      <div className="mx-auto grid min-w-[720px] max-w-[900px] grid-cols-3 gap-x-4 gap-y-6 sm:gap-x-6">
        {/* Pemilih produk */}
        {columns.map((col, i) => (
          <ProductSelect
            key={i}
            value={slugs[i]}
            otherValues={slugs.filter((_, j) => j !== i)}
            onChange={(slug) => setColumn(i, slug)}
          />
        ))}

        {/* Kartu produk */}
        {columns.map((col, i) => (
          <div key={i} className={cn(!col && "opacity-40")}>
            {col && (
              <>
                <ImageSlot
                  src={col.item.image}
                  alt={col.item.name}
                  tone={col.item.tone}
                  label={col.item.name.toLowerCase()}
                  sizes="(max-width: 900px) 33vw, 280px"
                  className="aspect-[4/3] rounded-[0.75rem]"
                />
                <Link href={`/produk/${col.item.slug}`} className="mt-3 block text-center font-sans text-lg font-medium hover:text-coral">
                  {col.item.name}
                </Link>
              </>
            )}
          </div>
        ))}

        {/* Tingkat keempukan */}
        <RowLabel>Tingkat Keempukan</RowLabel>
        {columns.map((col, i) => (
          <div key={i} className="flex items-center justify-center px-2">
            {col && <FirmnessBar firmness={col.spec.firmness} label={col.spec.firmnessLabel} />}
          </div>
        ))}

        {/* Jenis kain */}
        <RowLabel>Jenis Kain</RowLabel>
        {columns.map((col, i) => (
          <p key={i} className="px-2 text-center text-sm font-medium">
            {col?.spec.fabric}
          </p>
        ))}

        {/* Jenis kasur */}
        <RowLabel>Jenis Kasur</RowLabel>
        {columns.map((col, i) => (
          <p key={i} className="px-2 text-center text-sm font-medium">
            {col?.spec.type}
          </p>
        ))}

        {/* Tinggi kasur */}
        <RowLabel>Tinggi Kasur</RowLabel>
        {columns.map((col, i) => (
          <p key={i} className="text-center font-serif text-[30px] font-bold leading-none text-ink">
            {col?.spec.height}
          </p>
        ))}
      </div>
    </div>
  );
}
