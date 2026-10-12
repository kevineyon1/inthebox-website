import Image from "next/image";
import Link from "next/link";
import { footerGroups, legalLinks, site } from "@/config/site";
import { ArrowRight, Facebook, Instagram, TikTok, WhatsApp, YouTube } from "@/components/icons";
import { waLink } from "@/lib/whatsapp";

function LinkGroup({ title, links }: (typeof footerGroups)[number]) {
  return (
    <div>
      <h3 className="border-b border-cream/70 pb-3 font-sans text-[13px] font-semibold text-cream">{title}</h3>
      <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-[13px] text-cream/75 transition hover:text-cream">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  const [shop, price, help, about, seller] = footerGroups;
  const socials = [
    { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
    { label: "TikTok", href: "https://tiktok.com", Icon: TikTok },
    { label: "Facebook", href: "https://facebook.com", Icon: Facebook },
    { label: "YouTube", href: "https://youtube.com", Icon: YouTube },
    { label: "WhatsApp", href: waLink(), Icon: WhatsApp },
  ];

  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-[var(--container)] gap-x-12 gap-y-12 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
        <LinkGroup {...shop} />
        <LinkGroup {...price} />

        <div className="md:col-span-2 lg:col-span-1">
          <Image src="/brand/logo-white.png" alt={site.name} width={868} height={160} className="mb-6 h-8 w-auto" />
          <h3 className="font-serif text-xl text-cream">Dapatkan promo &amp; info produk eksklusif</h3>
          <form className="mt-4 flex h-11 max-w-sm items-center rounded-md bg-card pl-4 pr-2" action="#">
            <label htmlFor="newsletter" className="sr-only">
              Email
            </label>
            <input
              id="newsletter"
              type="email"
              placeholder="Masukkan alamat email"
              className="h-full min-w-0 flex-1 bg-transparent text-[13px] text-ink placeholder:text-ink-soft focus:outline-none"
            />
            <button type="submit" aria-label="Daftar" className="grid h-8 w-8 place-items-center text-ink">
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
          <ul className="mt-5 flex gap-4">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-cream/85 hover:text-cream">
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <LinkGroup {...help} />
        <LinkGroup {...about} />
        <LinkGroup {...seller} />
      </div>

      <div className="bg-[#0C2542]">
        <div className="mx-auto flex max-w-[var(--container)] flex-wrap items-center justify-center gap-x-5 gap-y-1 px-4 py-3 text-[11px] text-cream/85">
          <span>
            © {new Date().getFullYear()} {site.name}. Semua hak dilindungi.
          </span>
          {legalLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-cream">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
