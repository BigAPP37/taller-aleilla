import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { config } from "@/config";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: `Taller Mecánico en Ripollet | Motrio ${config.brandName}`,
  description: config.seoDescription,
  metadataBase: new URL(config.domain),
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "cEJhT9KqJrzT4rvZHsYoHnDSDI0dgXYLxNKeUHy7Xpk",
  },
  openGraph: {
    title: `Taller Mecánico en Ripollet | ${config.brandName}`,
    description: config.seoDescription,
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body className="bg-zinc-950 text-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <CookieBanner />
      </body>
    </html>
  );
}
