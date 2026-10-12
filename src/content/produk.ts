/**
 * Konten halaman /produk (di luar daftar produk — daftar produk ada di katalog.ts).
 * CATATAN: klaim keunggulan (garansi, uji coba, cicilan) dan teks pengujian masih
 * contoh dari referensi — mohon dikonfirmasi sebelum go-live.
 */
export const produkPage = {
  eyebrow: "PRODUK",
  title: "Semua produk in.the.box",
  text: "Kasur, sofa, dan pelengkap tidur — pilih kategori, lalu tanya harga dan stok langsung ke tim kami lewat WhatsApp.",
  featured: {
    eyebrow: "PILIHAN KAMI",
    title: "Organix Hybrid",
    text: "Material alami, sejuk sepanjang malam.",
    cta: { label: "Lihat Organix Hybrid", href: "/produk/organix-hybrid" },
    image: "/images/produk/organix-detail.jpg",
  },
  finder: {
    title: "Temukan kasur yang paling pas",
    text: "Kami bikin tidur jadi mudah. Setiap kasur dirancang untuk kebutuhan tidur yang nyata. Bandingkan kasur atau ikuti kuis 2 menit kami untuk menemukan yang paling cocok.",
    ctas: [
      { label: "Bandingkan kasur", href: "/produk/bandingkan", variant: "primary" as const },
      { label: "Ikuti kuis", href: "/kuis", variant: "outline" as const },
    ],
  },
  tested: {
    eyebrow: "DIUJI & DIPERCAYA",
    title: "Kami bekerja keras membuat kasur yang teruji dan diakui para ahli tidur.*",
    text: "Dari kasur paling terjangkau sampai yang paling lengkap, kamu tidak akan salah pilih dengan in.the.box.",
    cta: { label: "Ikuti kuis tidur", href: "/kuis" },
    note: "*Klaim pengujian akan diperbarui dengan data resmi.",
    image: "/images/home/hero.jpg",
  },
  bundle: {
    title: "Buat bundle sendiri & hemat 25%",
    text: "Pilih kasur, bantal, dan guling sesukamu, lalu nikmati potongan harga untuk kombinasi yang pas buat kamarmu.",
    cta: { label: "Buat bundle", href: "/bundling" },
    image: "/images/produk/dash-plus.jpg",
  },
  perks: [
    { icon: "shield", label: "Tenang, terlindungi", title: "Garansi resmi*" },
    { icon: "moon", label: "Tidur dulu, putuskan nanti", title: "Uji coba di rumah*" },
    { icon: "truck", label: "Langsung ke rumahmu", title: "Gratis ongkir*" },
    { icon: "card", label: "Bayar sesuai kemampuan", title: "Cicilan 0%*" },
    { icon: "chat", label: "Tanya dulu sebelum beli", title: "Konsultasi via WhatsApp" },
  ],
  perksNote: "*Syarat & ketentuan berlaku. Detail lengkap di halaman bantuan.",
  faqs: [
    {
      q: "Apa bedanya kasur in.the.box dengan kasur lain?",
      a: "Setiap kasur dirancang untuk kebutuhan tidur yang nyata dan dikirim dalam kotak, jadi mudah dibawa masuk ke kamar mana pun.",
    },
    {
      q: "Bagaimana cara membersihkan kasur? Apakah covernya bisa dilepas?",
      a: "Bersihkan noda dengan kain lembap dan sabun lembut. Hindari mencuci seluruh cover dengan mesin agar bentuknya tetap terjaga.",
    },
    {
      q: "Bagaimana cara mengetahui harga dan stok?",
      a: "Klik \"Tanya harga\" pada produk yang kamu minati — kamu akan langsung terhubung ke WhatsApp tim kami.",
    },
    {
      q: "Apa itu kasur dalam kotak? Berapa lama sampai mengembang penuh?",
      a: "Kasur dikompres dan digulung ke dalam kotak. Setelah dibuka, kasur siap dipakai dalam beberapa jam dan mengembang penuh dalam 24 jam.",
    },
  ],
};
