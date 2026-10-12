/**
 * Konfigurasi global website: brand, navigasi, footer, kontak.
 * Semua teks yang tampil di header/footer diatur dari sini.
 */
export const site = {
  name: "inthebox",
  tagline: "Marketplace yang bikin belanja terasa mudah.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  whatsapp: process.env.NEXT_PUBLIC_WA_NUMBER ?? "6281234567890",
  email: "halo@inthebox.id",
};

export type NavLink = { label: string; href: string; highlight?: boolean };

export const announcements = [
  "Gratis ongkir untuk pesanan pertamamu",
  "Cicilan 0% hingga 12 bulan untuk produk pilihan",
  "Lacak pesanan kapan saja, langsung dari akunmu",
];

export const mainNav: NavLink[] = [
  { label: "Product", href: "/produk" },
  { label: "Tentang kami", href: "/tentang" },
  { label: "Blog", href: "/blog" },
  { label: "Testimoni", href: "/#testimoni" },
];

export const footerGroups: { title: string; links: NavLink[] }[] = [
  {
    title: "Kasur",
    links: [
      { label: "Best Value", href: "/produk#best-value" },
      { label: "Bed in the Box", href: "/produk#bed-in-the-box" },
      { label: "Cool Edition", href: "/produk#cool-edition" },
      { label: "Lifestyle", href: "/produk#lifestyle" },
      { label: "Kids", href: "/produk#kids" },
      { label: "Organic", href: "/produk#organic" },
      { label: "Kasur Lipat", href: "/produk#kasur-lipat" },
    ],
  },
  {
    title: "Sofa & Aksesoris",
    links: [
      { label: "Sofa", href: "/produk#sofa" },
      { label: "Sofa Pixel", href: "/produk#sofa-pixel" },
      { label: "Accessories", href: "/produk#accessories" },
      { label: "Semua Produk", href: "/produk" },
      { label: "Promo", href: "/promo" },
    ],
  },
  {
    title: "Bantuan",
    links: [
      { label: "Hubungi Kami", href: "/bantuan/kontak" },
      { label: "FAQ", href: "/bantuan/faq" },
      { label: "Lacak Pesanan", href: "/lacak-pesanan" },
      { label: "Pengembalian", href: "/bantuan/pengembalian" },
      { label: "Metode Pembayaran", href: "/bantuan/pembayaran" },
      { label: "Pengiriman", href: "/bantuan/pengiriman" },
      { label: "Garansi", href: "/bantuan/garansi" },
      { label: "Riwayat Pesanan", href: "/akun/pesanan" },
    ],
  },
  {
    title: "Tentang",
    links: [
      { label: "Kenapa inthebox?", href: "/tentang" },
      { label: "Jadi Seller", href: "/seller/daftar" },
      { label: "Karier", href: "/karier" },
      { label: "Blog", href: "/blog" },
      { label: "Peta Situs", href: "/sitemap" },
    ],
  },
  {
    title: "Seller",
    links: [
      { label: "Pusat Seller", href: "/seller" },
      { label: "Panduan Jualan", href: "/seller/panduan" },
      { label: "Biaya Layanan", href: "/seller/biaya" },
      { label: "Edukasi Seller", href: "/seller/edukasi" },
      { label: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
      { label: "Kebijakan Privasi", href: "/privasi" },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Privasi", href: "/privasi" },
  { label: "Syarat", href: "/syarat-ketentuan" },
  { label: "Aksesibilitas", href: "/aksesibilitas" },
];
