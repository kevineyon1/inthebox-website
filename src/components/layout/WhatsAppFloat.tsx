import { WhatsApp } from "@/components/icons";
import { waLink } from "@/lib/whatsapp";

/** Tombol chat mengambang — semua chat diarahkan ke WhatsApp. */
export function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-4 z-50 inline-flex h-10 items-center gap-2 rounded-full bg-sage px-4 text-[13px] font-semibold text-ink shadow-soft transition hover:-translate-y-0.5 hover:bg-[#6AA9B1] sm:right-6"
    >
      <WhatsApp className="h-4 w-4" />
      Chat
    </a>
  );
}
