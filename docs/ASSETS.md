# Kebutuhan Asset

Ukuran **tampil** diukur langsung dari halaman di layar desktop 1440px dan mobile 390px.
Ukuran **file** = 2× ukuran tampil terbesar (agar tajam di layar retina).

**Aturan umum foto**
- Format: JPG (kualitas 80–85), profil warna sRGB. `next/image` otomatis mengonversi ke WebP/AVIF.
- Maksimal ±800 KB per file (hero ±1 MB).
- Gambar dipotong otomatis (`object-cover`), jadi **letakkan objek utama di tengah** kecuali ada catatan lain.
- Nuansa warna sebaiknya biru muda / pastel (seperti foto kamar yang sudah ada) agar menyatu dengan palet website.
- Simpan di `public/images/` sesuai nama file di tabel (foto produk di `public/images/produk/`).

---

## A. Foto

| # | Section | Nama file | Jumlah | Tampil desktop | Tampil mobile | **Ukuran file** | Rasio | Catatan komposisi |
|---|---|---|---|---|---|---|---|---|
| 1 | Hero | `hero.jpg` | 1 | 1200 × 420 | — | **2400 × 840** | ±20:7 | Sisi kiri untuk teks putih → objek di **kanan**, sisi kiri agak gelap/polos. |
| 1b | Hero (mobile) | `hero-mobile.jpg` | 1 | — | 358 × 420 | **720 × 840** | ±6:7 | Versi potret; teks menutupi hampir seluruh gambar → pilih foto yang tenang. |
| 2 | Katalog produk (homepage, /produk, detail) | `produk/<slug>.jpg` — slug mengikuti nama di `src/content/katalog.ts`, mis. `organix-hybrid.jpg` | 28 (2 sudah ada) | 401 × 267 | 304 × 203 | **1200 × 800** | 3:2 | Satu foto per produk. Detail produk memakai foto yang sama pada 4:3, jadi sisakan ruang di kiri-kanan objek. |
| 3 | Promo unggulan | `promo-featured.jpg` | 1 | 600 × 308 | 358 × 260 | **1200 × 620** | ±2:1 | Objek di tengah; di mobile sisi kiri-kanan terpotong ±15%. |
| 4 | Carousel promo | `rail-fashion.jpg`, `rail-bundling.jpg`, `rail-kecantikan.jpg`, `rail-elektronik.jpg`, `rail-hobi.jpg` | 5 | 290 × 375 | 240 × 310 | **600 × 780** | ±4:5 | Label kategori putih di **bawah** → bagian bawah foto jangan ramai. |
| 5 | Kuis / rekomendasi | `quiz-lifestyle.jpg` | 1 | 504 × 280 | 358 × 240 | **1000 × 560** | ±16:9 | Orang/aktivitas, objek di tengah. |
| 6 | Cerita pelanggan (thumbnail video) | `story-1.jpg` … `story-6.jpg` | 6 | 267 × 401 | 220 × 330 | **540 × 810** | 2:3 | Tombol play di tengah, caption di ±60% tinggi → hindari wajah persis di tengah. |
| 7 | Buka toko / Hubungi kami | `cta-seller.jpg`, `cta-support.jpg` | 2 | 588 × 441 | 358 × 269 | **1200 × 900** | 4:3 | Foto seller packing / tim CS. |

> **Catatan hero mobile:** komponen saat ini baru menerima satu gambar. Kalau `hero-mobile.jpg` tersedia, komponennya akan ditambah dukungan gambar mobile.

**Video cerita pelanggan (opsional, bisa menyusul):** 6 file MP4 (H.264), potret **720 × 1080** (2:3) atau 1080 × 1920 (9:16, atas-bawah akan terpotong), durasi ≤ 30 detik, tanpa suara penting (autoplay biasanya dimute). Tombol play belum berfungsi — dibuat saat video tersedia.

---

## B. Brand (wajib sebelum launch)

| Asset | Lokasi file | Ukuran | Format | Catatan |
|---|---|---|---|---|
| Logo utama | `public/brand/logo.svg` | tinggi tampil 32px, lebar bebas (horizontal) | SVG | ✅ Sementara pakai `logo.png` hasil potong dari PNG 1200×630. Versi SVG akan lebih tajam. |
| Logo putih | `public/brand/logo-white.svg` | sama | SVG | ✅ Sementara `logo-white.png` (dibuat dari logo biru) untuk footer navy. |
| Favicon | `src/app/favicon.ico` | 32 × 32 (+ 16 × 16 dalam satu .ico) | ICO | Simbol/ikon saja, bukan logo penuh. |
| App icon | `src/app/icon.png` | 512 × 512 | PNG | ✅ Sudah ada (logo 512×512). Idealnya simbol saja, karena logo penuh terlalu kecil di tab browser. |
| Apple icon | `src/app/apple-icon.png` | 180 × 180 | PNG | Latar solid (tidak transparan). |
| Gambar share (Open Graph) | `src/app/opengraph-image.png` | 1200 × 630 | JPG/PNG | ✅ Sudah ada (logo 1200×630). Bisa diganti versi dengan foto produk. |

---

## C. Logo pembayaran

| Asset | Lokasi file | Tampil | Format | Dipakai di |
|---|---|---|---|---|
| QRIS | `public/payments/qris.svg` | tinggi 20–24px | SVG | Section "Belanja sekarang, bayar belakangan" |
| Provider PayLater | `public/payments/paylater.svg` | tinggi 16–24px | SVG | Strip PayLater + section yang sama |

Saat ini masih berupa teks. Logo menyesuaikan payment gateway yang dipilih (Midtrans/Xendit) dan provider PayLater-nya — gunakan file logo resmi dari brand kit masing-masing.

---

## D. Tekstur & ilustrasi (opsional — versi sementara sudah ada)

| Asset | Lokasi file | Ukuran | Format | Status sekarang |
|---|---|---|---|---|
| Tekstur kertas | `public/paper.png` | tile **seamless** 300×300 s.d. 512×512 | PNG transparan, < 100 KB | Tekstur buatan sementara |
| Ilustrasi utama "Kami bikin belanja jadi mudah" | `public/illustrations/hero-doodle.svg` | tampil ±300 × 190 | SVG (atau PNG transparan 600 × 380) | Doodle kotak dibuat dengan kode |
| Doodle statistik (3) | `public/illustrations/stat-1.svg` … `stat-3.svg` | tampil lebar 48–96px | SVG | Hati, rasi bintang, bintang |
| Doodle pesawat kertas (2) | `public/illustrations/plane.svg` | tampil lebar ±60px | SVG | Dibuat dengan kode |
| Ikon keunggulan (4) | `public/icons/value-*.svg` | tampil 44 × 44 (grid 24 × 24) | SVG garis (stroke) | Ikon garis dibuat dengan kode |

Gaya ilustrasi: garis tangan, stroke navy `#12365C`, isian dari palet biru brand (`#3F9DC5`, `#6086C2`, `#D4EFFC`) + aksen kuning `#F2B84B`.

---

## Prioritas

1. **Wajib dulu:** B (brand) · hero · foto 28 produk katalog · 2 foto CTA
2. **Berikutnya:** promo unggulan · 5 foto carousel · foto kuis · logo pembayaran
3. **Boleh menyusul:** 6 thumbnail + video cerita · tekstur & ilustrasi final
