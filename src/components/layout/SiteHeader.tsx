import Image from "next/image";
import Link from "next/link";
import { mainNav, site } from "@/config/site";
import { Bag, Menu, Search, User } from "@/components/icons";
import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label={site.name} className={cn("block shrink-0", className)}>
      <Image src="/brand/logo.png" alt={site.name} width={868} height={160} priority className="h-7 w-auto sm:h-8" />
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-card/95 backdrop-blur">
      <div className="mx-auto flex h-[88px] max-w-[1680px] items-center justify-between gap-6 px-4 sm:px-10">
        <div className="flex items-center gap-3">
          {/* Menu mobile: <details> agar tanpa JS */}
          <details className="relative lg:hidden">
            <summary aria-label="Buka menu" className="grid h-9 w-9 cursor-pointer place-items-center">
              <Menu className="h-5 w-5" />
            </summary>
            <nav className="absolute left-0 top-11 w-60 rounded-[var(--radius)] border border-line bg-card p-3 shadow-soft">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block rounded-lg px-3 py-2 text-sm font-medium hover:bg-paper",
                    item.highlight && "text-coral",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>
          <Logo />
        </div>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-10 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-base font-medium transition-colors hover:text-coral",
                item.highlight ? "text-coral" : "text-ink",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <Link href="/cari" aria-label="Cari produk" className="hover:text-terra">
            <Search className="h-5 w-5" />
          </Link>
          <Link href="/akun" aria-label="Akun saya" className="hover:text-terra">
            <User className="h-5 w-5" />
          </Link>
          <Link href="/keranjang" aria-label="Keranjang" className="hover:text-terra">
            <Bag className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
