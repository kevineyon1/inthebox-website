# inthebox — Arsitektur Website

Marketplace multi-seller dengan 3 peran: **Buyer**, **Seller**, **Super Admin**.
Fitur inti: katalog, keranjang, checkout + payment gateway, tracking pesanan, chat via WhatsApp.

---

## 1. Tech stack

| Lapisan | Pilihan | Alasan |
|---|---|---|
| Framework | **Next.js 16 (App Router) + TypeScript** | Satu codebase untuk storefront (SEO/SSR), dashboard seller & admin, serta API. |
| Styling | **Tailwind CSS v4** + design token CSS (`src/styles/tokens.css`) | Token tunggal untuk warna/font; dashboard nanti tinggal pakai utility yang sama. |
| Database | **PostgreSQL** + **Prisma ORM** *(tahap 2)* | Relasional, cocok untuk order, stok, ledger saldo seller. |
| Auth | **Auth.js (NextAuth)** + role-based access *(tahap 2)* | Session + role `BUYER / SELLER / ADMIN`, dicek di middleware. |
| Payment | **Midtrans** atau **Xendit** *(tahap 3)* | VA, e-wallet, QRIS, kartu kredit, PayLater + webhook. |
| Ongkir & tracking | **Biteship** atau **RajaOngkir** *(tahap 3)* | Cek ongkir, buat resi, webhook status pengiriman. |
| Chat | Link **wa.me** (`src/lib/whatsapp.ts`) | Tanpa server chat — pesan otomatis berisi konteks produk/pesanan. |
| Storage gambar | **DigitalOcean Spaces** (S3-compatible) + CDN | Foto produk & bukti; `next/image` untuk optimasi. |
| Hosting | **DigitalOcean Droplet** — Docker Compose + Nginx + Let's Encrypt | `output: "standalone"` membuat image Node kecil. |

---

## 2. Peran & modul

**Buyer (storefront)**
Beranda · kategori · pencarian & filter · detail produk · halaman toko · keranjang (multi-seller) ·
checkout · pembayaran · riwayat & detail pesanan · **lacak pesanan** · ulasan · wishlist · alamat.

**Seller (`/seller`)**
Registrasi & verifikasi toko · produk & varian · stok · pesanan masuk (terima → proses → kirim + input resi) ·
saldo & penarikan dana · voucher toko · statistik penjualan · pengaturan toko (nomor WA).

**Super Admin (`/admin`)**
Verifikasi seller · moderasi produk · semua transaksi · rekonsiliasi pembayaran ·
**escrow/rekening bersama** (dana dilepas setelah pesanan diterima) · approval penarikan dana ·
banner & promo homepage · kategori · komplain/refund · laporan.

---

## 3. Struktur folder

```
src/
├── app/
│   ├── layout.tsx              # root: font, metadata, globals.css
│   ├── globals.css             # Tailwind + mapping token → utility
│   ├── (storefront)/           # sisi BUYER — header/footer publik
│   │   ├── layout.tsx
│   │   └── page.tsx            # homepage
│   ├── (seller)/seller/        # sisi SELLER — layout dashboard sendiri
│   ├── (admin)/admin/          # sisi SUPER ADMIN — layout dashboard sendiri
│   └── api/                    # (tahap 3) webhook payment & kurir
├── components/
│   ├── ui/                     # primitive: Button, Container, ImageSlot, Stars, useRail…
│   ├── layout/                 # AnnouncementBar, SiteHeader, SiteFooter, WhatsAppFloat
│   ├── home/                   # 1 file = 1 section homepage
│   └── icons/                  # ikon garis + ilustrasi doodle
├── config/site.ts              # brand, navigasi, footer, nomor WA
├── content/home.ts             # semua teks & data homepage (nanti dari DB)
├── lib/                        # helper: cn, rupiah, waLink
└── styles/tokens.css           # ★ design token — sumber tunggal warna/font
public/
└── paper.png                   # tekstur kertas latar belakang
```

**Aturan:**
- Route group `(storefront)`, `(seller)`, `(admin)` tidak memengaruhi URL, tetapi memisahkan layout & proteksi akses.
- Komponen tidak menyimpan teks hard-coded — teks ada di `content/` atau `config/`.
- Warna **hanya** lewat token (`bg-cream`, `text-ink`, `bg-terra`, …), jangan pakai hex langsung di komponen.
- Komponen server secara default; `"use client"` hanya untuk yang interaktif (carousel, slider).

---

## 4. Rencana route

| Area | Route |
|---|---|
| Buyer | `/`, `/produk`, `/produk/[slug]`, `/kategori/[slug]`, `/toko/[slug]`, `/cari`, `/keranjang`, `/checkout`, `/pembayaran/[orderId]`, `/lacak-pesanan`, `/akun`, `/akun/pesanan/[id]` |
| Seller | `/seller`, `/seller/daftar`, `/seller/produk`, `/seller/pesanan`, `/seller/saldo`, `/seller/pengaturan` |
| Admin | `/admin`, `/admin/seller`, `/admin/produk`, `/admin/transaksi`, `/admin/penarikan`, `/admin/konten`, `/admin/laporan` |
| API | `/api/webhooks/payment`, `/api/webhooks/shipping` |

---

## 5. Model data inti (draf)

```
User(id, name, email, phone, role)
Store(id, ownerId→User, name, slug, whatsapp, status: PENDING|ACTIVE|SUSPENDED)
Product(id, storeId, categoryId, name, slug, description, status)
ProductVariant(id, productId, sku, price, stock, weight)
Order(id, buyerId, code, status, subtotal, shippingCost, total)        ← 1 checkout
StoreOrder(id, orderId, storeId, status, courier, trackingNumber)    ← dipecah per seller
OrderItem(id, storeOrderId, variantId, qty, price)
Payment(id, orderId, provider, method, status, externalId, paidAt)
ShipmentEvent(id, storeOrderId, status, description, occurredAt)     ← timeline tracking
Ledger(id, storeId, type: HOLD|RELEASE|WITHDRAW, amount, refId)      ← escrow & saldo
Withdrawal(id, storeId, amount, bankAccount, status)
Review(id, orderItemId, rating, body)
```

**Alur status pesanan:**
`MENUNGGU_PEMBAYARAN → DIBAYAR → DIPROSES → DIKIRIM → DITERIMA → SELESAI`
(cabang: `DIBATALKAN`, `KOMPLAIN`, `REFUND`). Dana seller masuk `Ledger HOLD` saat DIBAYAR,
lalu `RELEASE` saat SELESAI.

---

## 6. Deploy (DigitalOcean Droplet)

```
Internet → Nginx (SSL Let's Encrypt, gzip, cache /_next/static)
             └→ container web (Next.js standalone, port 3000)
             └→ PostgreSQL (DO Managed DB disarankan, atau container + backup harian)
```
- Droplet minimal: 2 vCPU / 4 GB RAM (Ubuntu LTS).
- CI: GitHub Actions → build image → push ke DO Container Registry → `docker compose pull && up -d`.
- Secret (API key payment, DB URL) hanya di `.env` server, tidak pernah di repo.

---

## 7. Tahapan

1. **Desain & UI** ← *sedang dikerjakan* — design system, homepage, lalu halaman katalog/detail/keranjang/checkout (statis).
2. **Fondasi data** — Prisma schema, auth + role, CRUD produk seller.
3. **Transaksi** — checkout, payment gateway + webhook, ongkir, tracking.
4. **Dashboard** — seller & super admin, escrow, penarikan dana.
5. **Go-live** — Docker, Nginx, SSL, monitoring, backup.
