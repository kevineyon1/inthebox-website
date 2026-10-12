import Link from "next/link";
import { paylaterStrip as c } from "@/content/home";

export function PaylaterStrip() {
  return (
    <div className="mt-8 bg-paper">
      <p className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-4 text-center text-[11px]">
        <span className="font-serif text-base font-bold italic text-terra">{c.brand}</span>
        <span>{c.text}</span>
        <Link href={c.link.href} className="text-[10px] underline underline-offset-2">
          {c.link.label}
        </Link>
      </p>
    </div>
  );
}
