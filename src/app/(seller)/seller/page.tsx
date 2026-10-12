import Link from "next/link";

export const metadata = { title: "Pusat Seller" };

/** Placeholder — dashboard seller dibangun di tahap berikutnya. */
export default function SellerDashboardPage() {
  return (
    <main className="grid min-h-screen place-items-center px-4 text-center">
      <div>
        <p className="font-hand text-2xl text-terra">segera hadir</p>
        <h1 className="mt-2 text-4xl">Pusat Seller</h1>
        <p className="mt-3 text-sm text-ink-soft">Kelola produk, pesanan, pengiriman, dan saldo toko.</p>
        <Link href="/" className="mt-6 inline-block text-sm underline underline-offset-4">
          Kembali ke beranda
        </Link>
      </div>
    </main>
  );
}
