# Catatan Lengkap — Membangun Website in.the.box dari Nol

Dokumen ini adalah panduan untuk **membangun ulang website ini dari nol**, lengkap dengan
referensi gambar, keputusan desain, pola teknis, dan jebakan yang sudah pernah ditemui.

| | |
|---|---|
| **Project** | Website in.the.box (brand kasur dalam kotak) |
| **Stack** | Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 |
| **Status** | Tahap desain — tampilan jadi, data produk masih dummy, belum ada transaksi |
| **Referensi desain** | casper.com (homepage + halaman produk + halaman bandingkan) |
| **Dokumen terkait** | [ARCHITECTURE.md](ARCHITECTURE.md) · [ASSETS.md](ASSETS.md) |

---

## 1. Ringkasan project

in.the.box adalah brand kasur yang dikirim dalam kotak. Website ini menampilkan katalog
produk (kasur, sofa, aksesoris), halaman detail produk, dan alat bandingkan kasur.

**Brief awal** menyebut marketplace dengan tiga peran (pembeli, seller, super admin),
pembayaran online, lacak pesanan, dan chat ke WhatsApp. Rute `/seller` dan `/admin` sudah
disiapkan sebagai placeholder, tapi fokus pengerjaan sejauh ini adalah **sisi pembeli**.

**Prinsip yang dipakai sepanjang pengerjaan:**

1. **Satu sumber kebenaran.** Warna dan font hanya di `src/styles/tokens.css`. Teks dan data
   hanya di `src/content/`. Komponen tidak menyimpan teks atau warna hard-coded.
2. **Tiru skala referensi, bukan cuma layout.** Lebar konten, ukuran font, dan tinggi header
   disamakan dengan Casper pada layar 1920px.
3. **Placeholder yang rapi.** Semua gambar lewat komponen `ImageSlot`, jadi bisa tayang
   sebelum fotonya ada dan tinggal diisi `src` saat foto siap — layout tidak bergeser.

---

## 2. Referensi gambar

### 2.1 Referensi desain (Casper)

Layout website ini meniru **casper.com**. Screenshot acuannya **sengaja tidak disimpan di repo
ini** karena itu materi desain milik perusahaan lain dan repo ini publik. Simpan sendiri secara
lokal (mis. folder `docs/references/` yang sudah masuk `.gitignore`), atau buka langsung
casper.com.

Bagian mana yang ditiru dari mana:

| Halaman referensi | Dipakai untuk |
|---|---|
| casper.com — homepage, bagian atas | Announcement bar, header, banner promo 3 kolom, hero, value props, kartu ulasan |
| casper.com — homepage, bagian tengah | Kartu kategori, strip cicilan, promo unggulan, carousel kategori, CTA kuis |
| casper.com — homepage, statistik | Section statistik zig-zag, baris keunggulan, "bayar belakangan" |
| casper.com — homepage, bagian bawah | Carousel video, kutipan media, dua kartu CTA, FAQ, footer |
| casper.com/collections/mattresses | Struktur halaman daftar produk (PLP) |
| casper.com — compare mattresses | Alat bandingkan: dropdown pilih produk, bar label penuh per atribut |

### 2.2 Hasil jadi (kondisi sekarang)

Disimpan di [`docs/screenshots/`](screenshots/), dibuat ulang tiap ada perubahan besar.

| Halaman | Desktop (1600px) | Mobile (390px) |
|---|---|---|
| Homepage | [home-desktop.jpg](screenshots/home-desktop.jpg) | [home-mobile.jpg](screenshots/home-mobile.jpg) |
| Daftar produk | [produk-desktop.jpg](screenshots/produk-desktop.jpg) | [produk-mobile.jpg](screenshots/produk-mobile.jpg) |
| Bandingkan kasur | [bandingkan-desktop.jpg](screenshots/bandingkan-desktop.jpg) | [bandingkan-mobile.jpg](screenshots/bandingkan-mobile.jpg) |
| Detail produk | [produk-detail-desktop.jpg](screenshots/produk-detail-desktop.jpg) | [produk-detail-mobile.jpg](screenshots/produk-detail-mobile.jpg) |

Cara membuat ulang screenshot ada di [bagian 11](#11-cara-mengambil-screenshot-untuk-dokumentasi).

### 2.3 Aset brand mentah

Folder [`Asset/`](../Asset/) berisi file asli dari klien (±39 MB): dua versi logo PNG dan enam
foto produk. Versi yang sudah dipotong/dikecilkan untuk web ada di `public/`.

---

## 3. Tech stack & alasannya

| Lapisan | Pilihan | Alasan |
|---|---|---|
| Framework | **Next.js 16**, App Router | Satu codebase untuk storefront, dashboard seller/admin, dan API. SSR bagus untuk SEO toko. |
| Bahasa | **TypeScript** | Struktur data produk cukup kompleks; typo ketahuan saat ketik, bukan saat tayang. |
| Styling | **Tailwind CSS v4** + CSS variable | Token warna di CSS variable, utility Tailwind untuk layout. Tanpa file config JS (v4 pakai CSS-first). |
| Font | `next/font/google` | Font di-host sendiri otomatis, tidak ada request ke Google saat runtime, tidak ada layout shift. |
| Gambar | `next/image` | Otomatis WebP/AVIF, ukuran responsif, lazy-load. |
| Ikon & ilustrasi | SVG inline buatan sendiri | Tanpa dependency, warnanya ikut `currentColor`. |

**Catatan:** dependency produksi hanya `next`, `react`, `react-dom`. Tidak ada UI library,
tidak ada animation library, tidak ada icon package. Ini disengaja supaya ringan dan mudah
dipindah/di-deploy.

---

## 4. Setup dari nol

```bash
# 1. Folder project
mkdir "Website inthebox" && cd "Website inthebox"

# 2. package.json minimal
npm init -y

# 3. Dependency
npm install next@latest react@latest react-dom@latest
npm install -D typescript@5 @types/react @types/react-dom @types/node tailwindcss @tailwindcss/postcss

# 4. Jalankan (file config dibuat manual, lihat di bawah)
npx next dev -p 3000
```

> **Kenapa tidak `create-next-app`?** Nama foldernya mengandung spasi dan huruf besar, yang
> ditolak sebagai nama package npm. Lebih cepat menyiapkan 4 file config secara manual.

**Script di `package.json`:**

```json
{
  "scripts": { "dev": "next dev", "build": "next build", "start": "next start", "lint": "next lint" }
}
```

**`postcss.config.mjs`** — satu-satunya setup Tailwind v4 yang dibutuhkan:

```js
export default { plugins: { "@tailwindcss/postcss": {} } };
```

**`next.config.ts`** — `standalone` menghasilkan server Node minimal untuk droplet:

```ts
import type { NextConfig } from "next";
const nextConfig: NextConfig = { output: "standalone" };
export default nextConfig;
```

**`tsconfig.json`** — yang penting: `"paths": { "@/*": ["./src/*"] }` supaya import pendek.

**`.env.local`** (lihat `.env.example`):

```
NEXT_PUBLIC_WA_NUMBER=6281234567890
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## 5. Design system

### 5.1 Warna

Semua di [`src/styles/tokens.css`](../src/styles/tokens.css). Palet diambil dari warna logo
in.the.box (`#3F9DC5`) ditambah warna pilihan klien.

| Token | Nilai | Dipakai untuk |
|---|---|---|
| `--cream` | `#F3FAFE` | Latar utama halaman |
| `--paper` | `#D4EFFC` | Latar section alternatif, chip, kotak FAQ |
| `--card` | `#FFFFFF` | Latar kartu |
| `--mint` | `#D4F0FE` | Kartu promo |
| `--coral` | `#3F9DC5` | **Warna brand utama** — tombol, link, ikon |
| `--terra` | `#2C7FA6` | Varian gelap untuk hover |
| `--honey` | `#F2B84B` | Aksen hangat — bintang rating, badge "Terlaris" |
| `--sage` | `#7FB9C0` | Tombol chat WhatsApp |
| `--rose` | `#6086C2` | Aksen sekunder |
| `--ink` | `#12365C` | Navy — teks utama, header bar, footer |
| `--ink-soft` | `#52708F` | Teks sekunder |
| `--line` | `#C9E3F2` | Garis & border |

> ⚠️ **Utang teknis yang disengaja:** nama token masih warisan palet lama (cokelat/kraft):
> `coral` sekarang biru, `honey` kuning, `rose` biru. Nama ini dipertahankan supaya
> perubahan palet cukup satu file tanpa menyentuh ±40 komponen. Kalau mau dirapikan,
> rename serentak: `coral→brand`, `terra→brand-dark`, `ink→navy`, `honey→accent`.

Token dihubungkan ke Tailwind di `src/app/globals.css`:

```css
@theme inline {
  --color-cream: var(--cream);
  --color-coral: var(--coral);
  /* dst — ini yang bikin class bg-cream, text-coral, border-line bisa dipakai */
}
```

### 5.2 Tipografi

Empat font dari Google Fonts, dimuat di `src/app/layout.tsx`:

| Token | Font | Dipakai untuk |
|---|---|---|
| `--serif` | Averia Serif Libre | Semua heading (h1–h4) |
| `--sans` | Poppins | Body, tombol, nama produk |
| `--hand` | Caveat | Aksen tulisan tangan |
| `--print` | Patrick Hand | Caption di kartu cerita |

**Skala dasar dinaikkan** jadi `font-size: 106.25%` pada `html` supaya ukuran teks sepadan
dengan Casper (yang memakai `--text-base: 1.125rem`).

### 5.3 Layout

| Token | Nilai | Catatan |
|---|---|---|
| `--container` | `1696px` | 1600px konten + gutter 48px. Setara `--container-max-width` Casper |
| `--container-narrow` | `1446px` | 1350px konten |
| `--radius` | `16px` | Sudut kartu besar |
| `--shadow-soft` | `0 10px 30px -12px rgba(18,54,92,.22)` | Bayangan lembut |

Header dan announcement bar pakai lebar sendiri (`max-w-[1680px]`) karena di Casper bar atas
lebih lebar dari konten.

---

## 6. Struktur folder

```
src/
├── app/
│   ├── layout.tsx              # root: font, metadata, globals.css
│   ├── globals.css             # Tailwind + mapping token + keyframes marquee
│   ├── icon.png                # favicon (konvensi Next.js)
│   ├── opengraph-image.png     # gambar saat link dibagikan
│   ├── (storefront)/           # SISI PEMBELI — header & footer publik
│   │   ├── layout.tsx
│   │   ├── page.tsx            # homepage
│   │   ├── produk/page.tsx     # daftar produk
│   │   ├── produk/[slug]/      # detail produk (28 halaman, SSG)
│   │   ├── produk/bandingkan/  # alat bandingkan kasur
│   │   ├── tentang/ · blog/    # placeholder
│   ├── (seller)/seller/        # placeholder dashboard seller
│   └── (admin)/admin/          # placeholder panel admin
├── components/
│   ├── ui/                     # primitif: Button, Container, ImageSlot, Stars, useRail…
│   ├── layout/                 # AnnouncementBar, SiteHeader, SiteFooter, WhatsAppFloat
│   ├── home/                   # 1 file = 1 section homepage
│   ├── katalog/                # ProductCard, KatalogStack, KatalogNav (dipakai 2 halaman)
│   ├── produk/                 # SplitFeature, PerksMarquee
│   ├── bandingkan/             # CompareTool, FirmnessBar
│   └── icons/                  # index.tsx (ikon garis) + doodles.tsx (ilustrasi)
├── config/site.ts              # brand, menu, footer, nomor WA
├── content/                    # SEMUA TEKS & DATA
│   ├── home.ts                 # teks homepage
│   ├── katalog.ts              # 10 kategori, 28 produk  ← inti data
│   └── produk.ts               # teks halaman /produk
├── lib/                        # cn (gabung class), rupiah, waLink
└── styles/tokens.css           # ★ token warna/font/layout
public/
├── brand/                      # logo.png, logo-white.png, og-image.png
├── images/home/ · images/produk/
└── paper.png                   # tekstur kertas latar
```

**Aturan yang dipegang:**

- Route group `(storefront)` / `(seller)` / `(admin)` tidak mengubah URL, hanya memisahkan
  layout dan nanti proteksi akses.
- Komponen **server** secara default. `"use client"` hanya untuk yang interaktif:
  `AnnouncementBar`, `CategoryPicks`→`KatalogNav`, `ShopRail`, `Stories`, `PressQuotes`,
  `ReviewHighlight`, `CompareTool`.
- Warna lewat token saja (`bg-cream`, `text-ink`), jangan hex langsung di komponen.

---

## 7. Peta route

| Route | Isi | Render |
|---|---|---|
| `/` | Homepage, 15 section | Static |
| `/produk` | 10 kategori disusun ke bawah + nav kategori sticky | Static |
| `/produk/[slug]` | Detail produk — 28 halaman | SSG (`generateStaticParams`) |
| `/produk/bandingkan` | Bandingkan hingga 3 kasur | Static |
| `/tentang`, `/blog` | Placeholder "segera hadir" | Static |
| `/seller`, `/admin` | Placeholder dashboard | Static |

**Urutan section homepage** (ubah di `src/app/(storefront)/page.tsx` — cukup pindah baris):

```
PromoBanner → Hero → ValueProps → ReviewHighlight → PaylaterStrip →
FeaturedPromo → CategoryPicks → ShopRail → QuizCta → EasySection →
PayLater → Stories → PressQuotes → DualCta → Faq
```

---

## 8. Katalog komponen

### 8.1 Primitif (`components/ui/`)

| Komponen | Fungsi |
|---|---|
| `Container` | Pembungkus lebar standar + gutter (`px-4 sm:px-8 lg:px-12`). Semua section pakai ini |
| `Button` | 5 varian (`primary`, `secondary`, `light`, `sale`, `outline`) × 2 ukuran. Otomatis jadi `<Link>` / `<a>` / `<button>` sesuai prop |
| `ImageSlot` | **Pola kunci.** Ada `src` → `next/image`; belum ada → placeholder gradien + label. 6 pilihan warna (`tone`) |
| `Stars` | Baris bintang rating |
| `CircleButton` | Tombol panah bulat untuk carousel |
| `SectionHeading` | Judul + subjudul rata tengah |
| `ComingSoon` | Halaman placeholder |
| `useRail` | **Hook carousel.** Scroll-snap + tombol prev/next + progress. Dipakai 4 komponen |

### 8.2 Layout (`components/layout/`)

`AnnouncementBar` (bar promo navy, slider teks) · `SiteHeader` (sticky, logo + 4 menu +
ikon) · `SiteFooter` (navy, 5 kolom link + newsletter + sosial) · `WhatsAppFloat` (tombol
chat mengambang).

### 8.3 Section homepage (`components/home/`)

15 file, satu section satu file: `PromoBanner`, `Hero`, `ValueProps`, `ReviewHighlight`,
`PaylaterStrip`, `FeaturedPromo`, `CategoryPicks`, `ShopRail`, `QuizCta`, `EasySection`,
`PayLater`, `Stories`, `PressQuotes`, `DualCta`, `Faq`.

Beberapa dipakai ulang di halaman lain: `PaylaterStrip`, `DualCta`, `Faq` (menerima prop
`items` + `title`), `QuizCta`.

### 8.4 Katalog (`components/katalog/`) — dipakai homepage **dan** `/produk`

| Komponen | Fungsi |
|---|---|
| `ProductCard` | Foto + badge status, nama + rating, chip benefit, link detail. Tinggi kartu disamakan (`flex-col` + `mt-auto`) |
| `KatalogStack` | Semua kategori ke bawah. Judul di atas, grid kartu selebar container (3/2/1 kolom + rail di mobile) |
| `KatalogNav` | Baris pintasan kategori. Prop `sticky` mengaktifkan mode nempel + sorotan kategori aktif (hanya dipakai di `/produk`) |

### 8.5 Lain-lain

`produk/SplitFeature` (banner 2 kolom foto+teks, varian terang/navy) ·
`produk/PerksMarquee` (strip keunggulan berjalan) · `bandingkan/CompareTool` (3 dropdown +
tabel atribut) · `bandingkan/FirmnessBar` (bar 5 segmen).

---

## 9. Struktur data

### 9.1 `src/content/katalog.ts` — inti data

10 kategori × 28 produk. Dipakai homepage, `/produk`, detail, dan bandingkan.

```ts
KatalogKategori = { slug, label, description, items: KatalogItem[] }

KatalogItem = {
  slug,            // dibuat otomatis dari nama (slugify)
  name, tone,
  image?,          // belum ada → placeholder
  spec?,           // khusus kasur: firmness, fabric, type, height → fitur bandingkan
  status?, rating, reviewCount, benefits,   // DUMMY, diisi otomatis builder
}
```

**Builder `kategori()`** mengisi otomatis: `slug` (dari nama), `benefits` (dari tabel per
kategori), dan `status`/`rating`/`reviewCount` (deterministik dari urutan, supaya tidak
berubah tiap render). Jadi menambah produk cukup menulis `{ name, tone }`.

Helper ekspor: `allKatalogItems`, `compareItems` (hanya yang punya `spec`), `findKatalogItem(slug)`.

### 9.2 File konten lain

| File | Isi |
|---|---|
| `config/site.ts` | Nama brand, nomor WA, menu atas (4 item), 5 grup link footer |
| `content/home.ts` | Teks tiap section homepage + 3 ulasan pelanggan |
| `content/produk.ts` | Judul, banner, keunggulan, FAQ halaman `/produk` |

---

## 10. Pola teknis yang perlu diketahui

### 10.1 Carousel (`useRail`)

Scroll-snap native + tombol opsional. Tidak pakai library.

```tsx
const rail = useRail<HTMLUListElement>();   // ← generic WAJIB kalau ref-nya bukan <div>
<CircleButton direction="next" onClick={rail.next} />
<ul ref={rail.ref} className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto">
```

### 10.2 Rail mobile yang rata dengan tepi halaman

Rail menembus gutter container lalu memulihkannya lewat padding, plus `scroll-px-*` supaya
kartu tidak menempel ke tepi layar saat di-snap:

```
-mx-4 px-4 scroll-px-4 sm:mx-0 sm:px-0 sm:grid
```

### 10.3 Strip berjalan (marquee)

Daftar digandakan, lalu digeser `-50%` supaya loop-nya menyambung. Keyframes di `globals.css`,
berhenti saat hover, dan mati otomatis kalau pengguna mengaktifkan *reduce motion*.

### 10.4 Offset scroll di bawah elemen sticky

Header sticky 88px, nav kategori sticky di bawahnya. Target anchor diberi `scroll-mt-28`
(homepage) atau `scroll-mt-44` (`/produk`) supaya judul tidak tertutup saat diklik.

### 10.5 Mengganti placeholder jadi foto asli

Cukup isi `image` di `katalog.ts` — tidak ada perubahan komponen, layout tidak bergeser:

```ts
{ name: "Alpha", tone: "sand", image: "/images/produk/alpha.jpg" }
```

---

## 11. Jebakan yang sudah ditemui (baca sebelum mengulang)

### 11.1 Tailwind v4: CSS custom di luar `@layer` selalu menang

**Gejala:** marquee jalan, tapi `group-hover:[animation-play-state:paused]` tidak berefek.

**Sebab:** `.animate-marquee { animation: ... }` ditulis sebagai CSS biasa (tanpa layer).
CSS tanpa layer **selalu** mengalahkan CSS di dalam `@layer`, berapa pun spesifisitasnya.
Ditambah lagi, shorthand `animation:` ikut me-reset `animation-play-state` ke `running`.

**Solusi yang dipakai:** jangan bergantung pada utility Tailwind untuk override; tulis aturan
CSS biasa yang spesifisitasnya pasti lebih tinggi (dua class):

```css
.animate-marquee { animation: marquee 32s linear infinite; }
.group:hover .animate-marquee { animation-play-state: paused; }
```

### 11.2 `params` adalah Promise di Next.js 16

```tsx
type Props = { params: Promise<{ slug: string }> };
const { slug } = await params;        // wajib di-await
```

### 11.3 Logo PNG punya banyak ruang kosong

Logo asli 1200×630 dengan logo kecil di tengah → kalau langsung dipakai, logo terlihat mungil.
Dipotong ke bounding box, lalu alpha dihitung dari kecerahan piksel supaya tepinya halus
(bukan sekadar menghapus putih, yang menghasilkan tepi bergerigi). Hasil: `public/brand/logo.png`
(868×160) + versi putih untuk footer navy.

### 11.4 Screenshot full-page tidak memuat gambar lazy-load

Gambar di bawah layar tidak ikut termuat. **Harus scroll dulu** dari atas ke bawah, kembali ke
atas, baru screenshot (lihat script di bagian 12).

### 11.5 Class `.group` dipakai di banyak komponen

Saat menguji lewat script, `document.querySelector(".group")` mengambil elemen yang salah.
Gunakan selector spesifik: `section:has(ul.animate-marquee) > div.group`. (Di CSS sendiri
tidak masalah — relasi induk-anak tetap benar.)

### 11.6 Ukuran terasa lebih kecil dari referensi

Awalnya lebar konten 1200px vs Casper 1600px, dan font dasar 16px vs 18px. Perbaikannya:
`--container: 1696px`, `html { font-size: 106.25% }`, header 88px, hero 64px.
**Pelajaran:** saat meniru desain, samakan dulu lebar konten dan skala font pada lebar layar
yang sama (1920px), baru bandingkan detail.

### 11.7 Section terakhir menempel ke footer

`DualCta` kadang jadi section terakhir (di `/produk/bandingkan`), jadi padding bawah harus
melekat di komponennya (`pt-20 pb-20`), bukan mengandalkan section sesudahnya.

### 11.8 Heredoc Bash gagal untuk file JSX

Menulis file `.tsx` lewat `cat > file <<'EOF'` sering gagal parsing. Pakai editor file
langsung, atau script Python untuk edit terprogram.

---

## 12. Cara mengambil screenshot untuk dokumentasi

Tanpa install browser tambahan — pakai Edge yang sudah ada:

```bash
npm i playwright-core
```

```js
// shot.mjs — node shot.mjs
import { chromium } from "playwright-core";
const browser = await chromium.launch({ channel: "msedge" });
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });

// WAJIB: scroll dulu supaya gambar lazy-load termuat
const h = await page.evaluate(() => document.body.scrollHeight);
for (let y = 0; y < h; y += 500) { await page.evaluate(yy => scrollTo(0, yy), y); await page.waitForTimeout(70); }
await page.evaluate(() => scrollTo(0, 0));
await page.waitForTimeout(1200);

await page.screenshot({ path: "home.png", fullPage: true });
await browser.close();
```

---

## 13. Data dummy yang HARUS diganti sebelum tayang

| Data | Lokasi | Catatan |
|---|---|---|
| **Nama produk** | `content/katalog.ts` | Dibaca dari screenshot etalase resolusi kecil. Paling tidak yakin: "Inthebox C", "Kids Series 1/2" |
| **Spesifikasi kasur** | `content/katalog.ts` → `spec` | Keempukan, jenis kain, jenis kasur, tinggi — semua taksiran |
| **Status, rating, jumlah ulasan** | `content/katalog.ts` | Dibuat otomatis oleh builder, bukan data asli |
| **Benefit produk** | `content/katalog.ts` → tabel `B` | "Garansi 10 th", "Free bantal", dll — perlu konfirmasi |
| **Klaim halaman produk** | `content/produk.ts` | "Uji coba di rumah", "diakui para ahli tidur" — ikut referensi, wajib dikonfirmasi |
| **Harga** | — | Sengaja belum ditampilkan di mana pun |
| **Nomor WhatsApp** | `.env.local` | Masih contoh |
| **Teks marketplace** | `content/home.ts` | Beberapa section masih bahasa marketplace umum ("Box Kado", carousel kategori) |

---

## 14. Kebutuhan aset

Detail ukuran ada di [ASSETS.md](ASSETS.md). Ringkasnya:

- **28 foto produk** `1200×800` (3:2) — baru 2 yang ada
- **Hero** `2400×840` + versi mobile `720×840`
- **Logo SVG** (sekarang masih PNG hasil potong)
- **Favicon** idealnya simbol saja, bukan logo penuh
- **Logo pembayaran** QRIS & PayLater (SVG)

---

## 15. Deploy ke DigitalOcean Droplet

```
Internet → Nginx (SSL Let's Encrypt, gzip, cache /_next/static)
             └→ container web (Next.js standalone, port 3000)
             └→ PostgreSQL (nanti, untuk data produk & order)
```

- `output: "standalone"` sudah diaktifkan → `.next/standalone` berisi server Node minimal.
- Droplet minimal 2 vCPU / 4 GB RAM (Ubuntu LTS).
- Secret (nomor WA, nanti API key payment) hanya di `.env` server, jangan masuk repo.

---

## 16. Tahap selanjutnya

1. **Isi data asli** — nama produk, spesifikasi, foto, harga.
2. **Halaman yang masih placeholder** — Tentang kami, Blog, kuis.
3. **Fondasi data** — Prisma + PostgreSQL, pindahkan `katalog.ts` ke database.
4. **Transaksi** — keranjang, checkout, payment gateway (Midtrans/Xendit), ongkir, lacak pesanan.
5. **Dashboard** — seller & super admin, rekening bersama, penarikan dana.
6. **Go-live** — Docker, Nginx, SSL, backup.

---

## 17. Riwayat pengerjaan

| Tahap | Yang dikerjakan |
|---|---|
| 1 | Setup project, design system, homepage 15 section meniru Casper (palet cokelat/kraft) |
| 2 | Daftar kebutuhan aset lengkap dengan ukuran |
| 3 | **Ganti arah brand:** palet biru dari logo, logo asli dipasang, foto produk masuk, menu jadi 4 item, halaman `/produk` gaya Casper PLP |
| 4 | Katalog diubah mengikuti etalase marketplace: 10 kategori, 28 produk, halaman detail per produk |
| 5 | Fitur **bandingkan kasur** (3 dropdown + 4 atribut) |
| 6 | Strip keunggulan dibuat berjalan (marquee) + perbaikan bug cascade Tailwind |
| 7 | Ulasan jadi kartu yang bisa digeser, latar dibuat putih polos |
| 8 | Kolom teks samping dihapus, kartu dirapikan sejajar, ditambah status + rating + benefit |
