# in.the.box — Website

Website brand kasur dalam kotak: katalog produk, detail produk, dan alat bandingkan kasur.
Chat diarahkan ke WhatsApp. Dibangun dengan Next.js 16 + TypeScript + Tailwind CSS v4.

**Status:** tahap desain — tampilan sudah jadi, data produk masih dummy, belum ada transaksi.

## Dokumentasi

| Dokumen | Isi |
|---|---|
| **[docs/BUILD-NOTES.md](docs/BUILD-NOTES.md)** | **Catatan lengkap dari nol** — referensi gambar, design system, pola teknis, jebakan yang sudah ditemui. Mulai dari sini. |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | Rencana arsitektur: peran, modul, model data, deploy |
| [docs/ASSETS.md](docs/ASSETS.md) | Daftar kebutuhan foto & aset brand lengkap dengan ukuran |
| [docs/screenshots/](docs/screenshots/) | Tampilan terkini tiap halaman (desktop & mobile) |

## Menjalankan

```bash
npm install
cp .env.example .env.local   # isi NEXT_PUBLIC_WA_NUMBER
npm run dev                  # http://localhost:3000
```

## Halaman

| Route | Isi |
|---|---|
| `/` | Homepage, 15 section |
| `/produk` | 10 kategori, 28 produk |
| `/produk/[slug]` | Detail produk |
| `/produk/bandingkan` | Bandingkan hingga 3 kasur |
| `/seller`, `/admin` | Placeholder dashboard |

## Mengubah apa pun

| Ingin mengubah… | Edit file |
|---|---|
| Warna, font, lebar container | `src/styles/tokens.css` |
| Menu, footer, nomor WA | `src/config/site.ts` |
| **Produk & kategori** | `src/content/katalog.ts` |
| Teks homepage | `src/content/home.ts` |
| Teks halaman produk | `src/content/produk.ts` |
| Urutan section homepage | `src/app/(storefront)/page.tsx` |

## Menambahkan foto produk

Semua gambar lewat komponen `ImageSlot`. Selama foto belum ada, tampil placeholder berwarna.
Taruh file di `public/images/produk/`, lalu isi `image` di `src/content/katalog.ts`:

```ts
{ name: "Alpha", tone: "sand", image: "/images/produk/alpha.jpg" }
```

Layout tidak berubah — gambar otomatis `object-cover` dan dioptimasi `next/image`.
Ukuran yang disarankan ada di [docs/ASSETS.md](docs/ASSETS.md).
