import type { Metadata } from "next";
import { Averia_Serif_Libre, Caveat, Patrick_Hand, Poppins } from "next/font/google";
import { site } from "@/config/site";
import "./globals.css";

const averia = Averia_Serif_Libre({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-averia",
  display: "swap",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat", display: "swap" });
const patrick = Patrick_Hand({ subsets: ["latin"], weight: "400", variable: "--font-patrick", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${averia.variable} ${poppins.variable} ${caveat.variable} ${patrick.variable}`}>
      <body>{children}</body>
    </html>
  );
}
