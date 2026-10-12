import type { Tone } from "@/components/ui/ImageSlot";

/**
 * Konten statis homepage. Tahap berikutnya data ini akan diambil dari
 * database/CMS (produk, kategori, ulasan) — komponen tidak perlu diubah.
 */

export const promoBanner = {
  left: {
    title: "Hemat hingga 20% untuk produk pilihan.*",
    text: "Belanja kebutuhan musim ini lebih ringan.",
    cta: { label: "Belanja sekarang", href: "/promo" },
  },
  badge: "PROMO SEPTEMBER",
  right: {
    title: "Diskon 25% paket bundling.*",
    text: "Plus, hemat 10% untuk pembelian 2+ produk.",
    cta: { label: "Lihat promo", href: "/bundling" },
  },
  note: "*S&K berlaku. Harga dibandingkan harga normal.",
};

export const hero = {
  title: "Temukan cara belanja yang berbeda.",
  text: "Kami bikin belanja jadi mudah. Setiap seller dikurasi, setiap pembayaran aman, dan setiap pesanan bisa kamu lacak. Ikuti kuis 2 menit dan temukan produk yang pas untukmu.",
  cta: { label: "Mulai belanja", href: "/produk" },
  image: { src: "/images/home/hero.jpg" as string | undefined, label: "hero image", tone: "coral" as Tone },
};

export const valueProps = [
  { icon: "shield", title: "Pembayaran 100% Aman", text: "Dana ditahan sampai pesanan diterima." },
  { icon: "box", title: "Seller Terverifikasi", text: "Toko dikurasi, kualitas terjaga." },
  { icon: "truck", title: "Lacak Pesanan Real-time", text: "Pantau paketmu sampai depan pintu." },
  { icon: "chat", title: "Chat via WhatsApp", text: "Tanya seller langsung, fast response." },
] as const;

export const reviewHighlight = {
  title: "10.000+ ulasan bintang 5",
  cta: { label: "Lihat semua ulasan", href: "/ulasan" },
  reviews: [
    {
      name: "Baim Wong",
      rating: 5,
      title: "Mantap banget",
      text: "Kasur baru yang packing nya simple banget, masuk ke dalam box! Kasur @inthebox.id dengan teknologi Pocket Springbed ini enak banget, nyaman dan empuk! Ada Free Bantal dan Free Ongkirnya juga lhoo! Mantap banget",
      date: "9 Sep 2020 - 6:22 pm",
    },
    {
      name: "Raffi Ahmad",
      rating: 5,
      title: "Pilih kasur INTHEBOX aja!",
      text: "Pokoknya kalau mau beli spring bed yang bagus, materialnya berkualitas, nyaman, dan harganya murah, langsung pilih kasur INTHEBOX aja. Apalagi INTHEBOX+ ini nih bagus banget. Selama gue pakai kasur INTHEBOX di rumah itu bikin tidur jadi nyenyak, pas bangun langsung segar badannya.",
      date: "10 Agu 2020 - 11:41 pm",
    },
    {
      name: "Melaney Ricardo",
      rating: 5,
      title: "Terima kasih Inthebox!",
      text: "Produk memuaskaan sekalii.. dan seru waktu unboxing ya :-D Nyaman sekalii. Pas dapet harga flash sale lagi. Mantap banget sihh klo ini Semoga aweet ya. Trimakasih Inthebox.",
      date: "8 Jun 2020 - 8:00 pm",
    },
  ],
};

export const categoryPicks = {
  title: "Lagi cari apa hari ini?",
  subtitle: "Ada in.the.box untuk setiap kebutuhan tidurmu.",
  ctas: [
    { label: "Lihat semua produk", href: "/produk", variant: "primary" as const },
    { label: "Bandingkan produk", href: "/produk/bandingkan", variant: "secondary" as const },
  ],
};

export const paylaterStrip = {
  brand: "PayLater",
  text: "Cicilan mulai 0% untuk produk pilihan.*",
  link: { label: "Cek kelayakan", href: "/bantuan/pembayaran" },
};

export const featuredPromo = {
  badge: "PROMO SEPTEMBER",
  title: "Box Kado Spesial mulai Rp99.000.*",
  text: "Apa pun momennya, kirim bahagia dengan mudah.",
  cta: { label: "Belanja Box Kado", href: "/kategori/kado" },
  note: "*Harga dibandingkan harga normal.",
  tone: "coral" as Tone,
};

export const shopRail = {
  eyebrow: "PROMO SEPTEMBER",
  title: "Hemat hingga 25% semua kategori.",
  text: "Hemat hingga 20% untuk fashion, 25% untuk bundling, 10% untuk 2+ produk, dan lainnya.",
  cta: { label: "Lihat semua", href: "/promo" },
  items: [
    { label: "Fashion", href: "/kategori/fashion", tone: "sand" as Tone },
    { label: "Bundling", href: "/bundling", tone: "sage" as Tone },
    { label: "Kecantikan", href: "/kategori/kecantikan", tone: "rose" as Tone },
    { label: "Elektronik", href: "/kategori/elektronik", tone: "ink" as Tone },
    { label: "Hobi", href: "/kategori/hobi", tone: "honey" as Tone },
  ],
};

export const quizCta = {
  title: "Yuk, temukan produk yang paling pas untukmu.",
  ctas: [
    { label: "Ikuti kuis belanja", href: "/kuis", variant: "primary" as const },
    { label: "Kuis ide kado", href: "/kuis/kado", variant: "secondary" as const },
  ],
  note: "Ikuti kuis 2 menit dan dapatkan rekomendasi personal.",
  tone: "sage" as Tone,
};

export const easySection = {
  title: "Kami bikin belanja jadi mudah.",
  text: "Setiap seller dikurasi, setiap transaksi dilindungi, dan setiap paket bisa dilacak — tapi jangan cuma percaya kata kami.",
  stats: [
    { value: "4 dari 5", title: "pembeli merekomendasikan inthebox ke teman & keluarga.*", note: "Kabar baik cepat menyebar." },
    { value: "9 dari 10", title: "pesanan sampai lebih cepat dari estimasi.†", note: "Paketmu nggak pakai lama." },
    { value: "500+ seller", title: "lokal terverifikasi, termasuk brand favorit kamu.*", note: "Lihat daftar seller pilihan di bawah." },
  ],
  learn: {
    title: "Belanja nyaman nggak harus ribet.",
    text: "Pelajari bagaimana inthebox bikin belanja jadi simpel.",
    cta: { label: "Pelajari", href: "/tentang" },
  },
  features: [
    { title: "Pasti aman", label: "Rekening bersama", note: "Dana aman sampai barang diterima." },
    { title: "Cepat & simpel", label: "Banyak metode bayar", note: "Transfer, e-wallet, QRIS, PayLater." },
    { title: "Suka produknya", label: "Garansi retur*", note: "7 hari pengembalian mudah." },
    { title: "Lacak pesanan", label: "Tracking real-time*", note: "Status kiriman update otomatis." },
  ],
};

export const payLater = {
  title: "Belanja sekarang, bayar belakangan.",
  items: [
    { brand: "QRIS", title: "Bayar instan", text: "Scan dari aplikasi bank atau e-wallet apa pun." },
    { brand: "PayLater", title: "Tanpa kartu kredit", text: "Cicil sesuai jadwalmu, persetujuan cepat." },
  ],
  cta: { label: "Lihat metode pembayaran", href: "/bantuan/pembayaran" },
};

export const stories = {
  title: "Cerita mereka, cerita kita.",
  items: [
    { caption: "unboxing hari ini", tone: "sand" as Tone },
    { caption: "kado buat ibu", tone: "sage" as Tone },
    { caption: "packing-nya rapi!", tone: "ink" as Tone },
    { caption: "outfit of the day", tone: "rose" as Tone },
    { caption: "rumah baru, dekor baru", tone: "honey" as Tone },
    { caption: "seller favorit", tone: "coral" as Tone },
  ],
};

export const pressQuotes = [
  {
    quote:
      "Kebanyakan marketplace terasa sama saja. Tapi inthebox berbeda — kurasi seller-nya ketat, pengalaman belanjanya terasa personal dan hangat.",
    source: "Media Teknologi",
  },
  {
    quote: "Fitur lacak pesanan dan chat WhatsApp langsung dengan seller membuat belanja online terasa jauh lebih tenang.",
    source: "Majalah Gaya Hidup",
  },
  {
    quote: "Rekening bersama yang menahan dana hingga barang diterima jadi alasan kuat pembeli kembali lagi.",
    source: "Portal Bisnis",
  },
];

export const dualCta = [
  {
    title: "Buka toko di inthebox",
    text: "Jangkau ribuan pembeli baru. Daftar gratis, kelola produk dan pesanan dari satu dashboard.",
    ctas: [{ label: "Daftar jadi seller", href: "/seller/daftar", variant: "primary" as const }],
    tone: "sand" as Tone,
    label: "seller photo",
    src: "/images/produk/dash-plus.jpg",
  },
  {
    title: "Ngobrol dengan tim kami",
    text: "Tim kami siap membantu kamu menemukan produk yang pas. Hubungi lewat email atau chat WhatsApp sekarang.",
    ctas: [
      { label: "Email kami", href: "mailto:halo@inthebox.id", variant: "primary" as const },
      { label: "Chat WhatsApp", href: "wa", variant: "secondary" as const },
    ],
    tone: "rose" as Tone,
    label: "customer care photo",
    src: "/images/produk/organix-detail.jpg",
  },
];

export const faqs = [
  {
    q: "Apa bedanya inthebox dengan marketplace lain?",
    a: "Setiap seller di inthebox melalui proses kurasi. Pembayaran kamu ditahan di rekening bersama dan baru diteruskan ke seller setelah pesanan diterima.",
  },
  {
    q: "Bagaimana cara melacak pesanan saya? Berapa lama pengiriman?",
    a: "Buka menu Lacak Pesanan dan masukkan nomor pesanan. Estimasi pengiriman tergantung kurir dan lokasi, umumnya 1–4 hari kerja.",
  },
  {
    q: "Metode pembayaran apa saja yang tersedia?",
    a: "Transfer bank (Virtual Account), e-wallet, QRIS, kartu kredit, dan PayLater.",
  },
  {
    q: "Bagaimana cara menghubungi seller?",
    a: "Klik tombol Chat di halaman produk atau toko — kamu akan langsung diarahkan ke WhatsApp seller.",
  },
];
