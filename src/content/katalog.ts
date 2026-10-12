import type { Tone } from "@/components/ui/ImageSlot";

/**
 * Katalog per kategori — mengikuti susunan etalase toko marketplace in.the.box.
 * Dipakai di homepage, halaman /produk, halaman detail /produk/[slug], dan
 * fitur bandingkan kasur di /produk/bandingkan.
 *
 * CATATAN: nama produk dibaca dari screenshot etalase (resolusi kecil) — mohon dicek
 * ejaannya. Harga belum dicantumkan; kartu menampilkan link "Lihat detail".
 * Produk tanpa `image` tampil sebagai placeholder sampai fotonya tersedia.
 * `status`, `rating`, `reviewCount`, `benefits` masih DUMMY (dibuat otomatis oleh builder).
 *
 * `spec` (khusus produk kasur) SEMUA MASIH DUMMY / TAKSIRAN — dipakai untuk mengisi
 * tampilan fitur bandingkan sebelum data resmi tersedia. Mohon dikonfirmasi.
 */
export type Firmness = 1 | 2 | 3 | 4 | 5; // 1 = Firm … 5 = Soft, sama seperti skala Casper

export type MattressSpec = {
  firmness: Firmness;
  firmnessLabel: string; // contoh: "Medium Firm"
  fabric: string; // Jenis kain
  type: string; // Jenis kasur
  height: string; // Tinggi kasur, contoh: "22 cm"
};

export type BenefitIcon = "shield" | "truck" | "gift" | "card" | "moon";
export type Benefit = { icon: BenefitIcon; label: string };
export type ProductStatus = "Terlaris" | "Promo" | "Baru";

export type KatalogItem = {
  slug: string;
  name: string;
  image?: string;
  tone: Tone;
  spec?: MattressSpec;
  /* --- DUMMY: diisi otomatis oleh builder di bawah, ganti dengan data resmi --- */
  status?: ProductStatus;
  rating: number;
  reviewCount: number;
  benefits: Benefit[];
};

export type KatalogKategori = {
  slug: string;
  label: string;
  description: string;
  items: KatalogItem[];
};

type ItemInput = Omit<KatalogItem, "slug" | "status" | "rating" | "reviewCount" | "benefits">;

/* Benefit per kategori — DUMMY, sesuaikan dengan program resmi. */
const B = {
  garansi10: { icon: "shield", label: "Garansi 10 th" },
  garansi1: { icon: "shield", label: "Garansi 1 th" },
  ongkir: { icon: "truck", label: "Gratis ongkir" },
  bantal: { icon: "gift", label: "Free bantal" },
  cicilan: { icon: "card", label: "Cicilan 0%" },
  trial: { icon: "moon", label: "Uji 100 malam" },
} satisfies Record<string, Benefit>;

const MATTRESS: Benefit[] = [B.garansi10, B.ongkir, B.bantal];
const BENEFITS_BY_CATEGORY: Record<string, Benefit[]> = {
  "best-value": MATTRESS,
  "bed-in-the-box": [B.garansi10, B.ongkir, B.trial],
  "cool-edition": MATTRESS,
  lifestyle: MATTRESS,
  kids: [B.garansi10, B.ongkir, B.trial],
  organic: [B.garansi10, B.ongkir, B.bantal],
  sofa: [B.garansi1, B.ongkir, B.cicilan],
  "sofa-pixel": [B.garansi1, B.ongkir, B.cicilan],
  "kasur-lipat": [B.garansi1, B.ongkir, B.cicilan],
  accessories: [B.ongkir, B.cicilan],
};

/* Status, rating, dan jumlah ulasan DUMMY — deterministik supaya tidak berubah tiap render. */
let dummyIndex = 0;
const dummyMeta = () => {
  const i = dummyIndex++;
  const status: ProductStatus | undefined = i % 5 === 0 ? "Terlaris" : i % 5 === 2 ? "Promo" : i % 7 === 3 ? "Baru" : undefined;
  return { status, rating: 4.6 + ((i * 7) % 4) / 10, reviewCount: 80 + ((i * 137) % 900) };
};

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const kategori = (slug: string, label: string, description: string, items: ItemInput[]): KatalogKategori => ({
  slug,
  label,
  description,
  items: items.map((item) => ({
    ...item,
    ...dummyMeta(),
    slug: slugify(item.name),
    benefits: BENEFITS_BY_CATEGORY[slug] ?? [],
  })),
});

export const katalog: KatalogKategori[] = [
  kategori("best-value", "Best Value", "Pilihan paling hemat tanpa kompromi kenyamanan.", [
    {
      name: "Alpha",
      tone: "sand",
      spec: { firmness: 2, firmnessLabel: "Medium Firm", fabric: "Kain rajut lembut", type: "Foam Mattress", height: "18 cm" },
    },
    {
      name: "Inthebox Pro",
      tone: "sage",
      spec: { firmness: 3, firmnessLabel: "Medium", fabric: "Kain rajut breathable", type: "Foam Mattress", height: "20 cm" },
    },
    {
      name: "Super",
      tone: "rose",
      spec: { firmness: 3, firmnessLabel: "Medium", fabric: "Kain sejuk QuickCool", type: "Hybrid Mattress", height: "24 cm" },
    },
  ]),
  kategori("bed-in-the-box", "Bed in the Box", "Kasur dikirim dalam kotak, mengembang sempurna di kamarmu.", [
    {
      name: "Inthebox",
      tone: "honey",
      spec: { firmness: 3, firmnessLabel: "Medium", fabric: "Kain rajut lembut", type: "Foam Mattress", height: "20 cm" },
    },
    {
      name: "Inthebox C",
      tone: "sand",
      spec: { firmness: 4, firmnessLabel: "Medium Soft", fabric: "Kain quilted premium", type: "Foam Mattress", height: "22 cm" },
    },
    {
      name: "Inthebox Hybrid",
      tone: "sage",
      spec: { firmness: 2, firmnessLabel: "Medium Firm", fabric: "Kain sejuk QuickCool", type: "Hybrid Mattress", height: "26 cm" },
    },
  ]),
  kategori("cool-edition", "Cool Edition", "Lapisan sejuk untuk tidur nyenyak di cuaca tropis.", [
    {
      name: "Inthebox Dash",
      tone: "coral",
      spec: { firmness: 3, firmnessLabel: "Medium", fabric: "Kain sejuk QuickCool", type: "Foam Mattress", height: "22 cm" },
    },
    {
      name: "Inthebox Plus",
      tone: "ink",
      image: "/images/produk/dash-plus.jpg",
      spec: { firmness: 2, firmnessLabel: "Medium Firm", fabric: "Kain sejuk QuickCool", type: "Hybrid Mattress", height: "28 cm" },
    },
  ]),
  kategori("lifestyle", "Lifestyle", "Seri kasur untuk berbagai gaya tidur dan kebutuhan kamar.", [
    {
      name: "Inthebox Four",
      tone: "rose",
      spec: { firmness: 4, firmnessLabel: "Medium Soft", fabric: "Kain rajut lembut", type: "Foam Mattress", height: "20 cm" },
    },
    {
      name: "Inthebox Zero",
      tone: "honey",
      spec: { firmness: 3, firmnessLabel: "Medium", fabric: "Kain quilted premium", type: "Hybrid Mattress", height: "25 cm" },
    },
    {
      name: "Inthebox Three",
      tone: "sand",
      spec: { firmness: 2, firmnessLabel: "Medium Firm", fabric: "Kain rajut breathable", type: "Pocket Spring", height: "24 cm" },
    },
  ]),
  kategori("kids", "Kids", "Kasur untuk si kecil — aman, nyaman, dan tahan lama.", [
    {
      name: "Kids Series 1",
      tone: "sage",
      spec: { firmness: 2, firmnessLabel: "Medium Firm", fabric: "Kain katun organik", type: "Foam Mattress", height: "14 cm" },
    },
    {
      name: "Kids Series 2",
      tone: "coral",
      spec: { firmness: 3, firmnessLabel: "Medium", fabric: "Kain katun organik", type: "Foam Mattress", height: "16 cm" },
    },
  ]),
  kategori("organic", "Organic", "Material alami yang bernapas dan ramah lingkungan.", [
    {
      name: "Organix Hybrid",
      tone: "sage",
      image: "/images/produk/organix.jpg",
      spec: { firmness: 3, firmnessLabel: "Medium", fabric: "Kain katun organik", type: "Hybrid Mattress", height: "26 cm" },
    },
    {
      name: "Organix Plush",
      tone: "honey",
      spec: { firmness: 4, firmnessLabel: "Medium Soft", fabric: "Kain katun organik", type: "Latex Alami", height: "24 cm" },
    },
    {
      name: "Organix Lite",
      tone: "sand",
      spec: { firmness: 3, firmnessLabel: "Medium", fabric: "Kain katun organik", type: "Foam Mattress", height: "18 cm" },
    },
  ]),
  kategori("sofa", "Sofa", "Sofa dan sofabed minimalis, gratis ongkir.", [
    { name: "Sofabed", tone: "ink" },
    { name: "Sofabed X", tone: "rose" },
    { name: "Sofa 3 Seater", tone: "sand" },
  ]),
  kategori("sofa-pixel", "Sofa Pixel", "Sofa modular yang bisa disusun sesuai ruanganmu.", [
    { name: "Sofa Pixel 1 Seater", tone: "coral" },
    { name: "Sofa Pixel 2 Seater", tone: "sage" },
    { name: "Sofa Pixel 3 Seater", tone: "honey" },
  ]),
  kategori("kasur-lipat", "Kasur Lipat", "Praktis dilipat, cocok untuk tamu dan perjalanan.", [
    {
      name: "Inthebox Flip Z",
      tone: "sand",
      spec: { firmness: 2, firmnessLabel: "Medium Firm", fabric: "Kain rajut breathable", type: "Kasur Lipat Foam", height: "10 cm" },
    },
    {
      name: "Travel Mattress",
      tone: "rose",
      spec: { firmness: 3, firmnessLabel: "Medium", fabric: "Kain rajut lembut", type: "Kasur Lipat Foam", height: "8 cm" },
    },
    {
      name: "Bed To Go",
      tone: "sage",
      spec: { firmness: 2, firmnessLabel: "Medium Firm", fabric: "Kain rajut breathable", type: "Kasur Lipat Foam", height: "12 cm" },
    },
  ]),
  kategori("accessories", "Accessories", "Pelengkap tidur: bantal dan guling premium.", [
    { name: "Bantal Inthebox", tone: "honey" },
    { name: "Guling Inthebox", tone: "coral" },
  ]),
];

export const allKatalogItems = katalog.flatMap((k) => k.items.map((item) => ({ item, kategori: k })));

/** Produk yang punya `spec` — dipakai di fitur bandingkan kasur. */
export const compareItems = allKatalogItems.filter(
  (entry): entry is typeof entry & { item: KatalogItem & { spec: MattressSpec } } => Boolean(entry.item.spec),
);

export function findKatalogItem(slug: string) {
  return allKatalogItems.find(({ item }) => item.slug === slug) ?? null;
}
