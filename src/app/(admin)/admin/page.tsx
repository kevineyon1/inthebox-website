import Link from "next/link";

export const metadata = { title: "Super Admin" };

/** Placeholder — panel super admin dibangun di tahap berikutnya. */
export default function AdminDashboardPage() {
  return (
    <main className="grid min-h-screen place-items-center px-4 text-center">
      <div>
        <p className="font-hand text-2xl text-terra">segera hadir</p>
        <h1 className="mt-2 text-4xl">Super Admin</h1>
        <p className="mt-3 text-sm text-ink-soft">Verifikasi seller, transaksi, pencairan dana, dan laporan.</p>
        <Link href="/" className="mt-6 inline-block text-sm underline underline-offset-4">
          Kembali ke beranda
        </Link>
      </div>
    </main>
  );
}
