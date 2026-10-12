import { Card, ChatBubble, Moon, ShieldCheck, Truck } from "@/components/icons";

const perkIcons = { shield: ShieldCheck, moon: Moon, truck: Truck, card: Card, chat: ChatBubble };

type Perk = { icon: string; label: string; title: string };

/**
 * Strip keunggulan yang berjalan otomatis (marquee) — gaya banner keunggulan Casper.
 * Daftar digandakan agar putarannya menyambung tanpa jeda. Berhenti sejenak saat
 * di-hover, dan otomatis diam (tanpa animasi) untuk pengguna yang mengaktifkan
 * "reduce motion", supaya tetap terbaca tanpa terpotong.
 */
export function PerksMarquee({ perks, note }: { perks: readonly Perk[]; note?: string }) {
  return (
    <section className="border-y border-line bg-card">
      <div className="group overflow-hidden">
        <ul className="flex w-max animate-marquee gap-x-16 py-6 motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-x-10 motion-reduce:gap-y-4 motion-reduce:px-4">
          {[...perks, ...perks].map((p, i) => {
            const Icon = perkIcons[p.icon as keyof typeof perkIcons];
            const isDuplicate = i >= perks.length;
            return (
              <li
                key={i}
                aria-hidden={isDuplicate}
                className={isDuplicate ? "flex shrink-0 items-center gap-3 motion-reduce:hidden" : "flex shrink-0 items-center gap-3"}
              >
                <Icon className="h-8 w-8 shrink-0 text-coral" />
                <div>
                  <p className="whitespace-nowrap text-[11px] text-ink-soft">{p.label}</p>
                  <p className="whitespace-nowrap text-sm font-semibold">{p.title}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {note && <p className="pb-4 text-center text-[11px] text-ink-soft">{note}</p>}
    </section>
  );
}
