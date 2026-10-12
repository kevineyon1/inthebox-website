import { site } from "@/config/site";

/** Membuat link wa.me dengan pesan terisi otomatis. */
export function waLink(message = "Halo inthebox, saya ingin bertanya.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
