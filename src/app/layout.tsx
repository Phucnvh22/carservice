import type { Metadata, Viewport } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import { SiteHeader } from "@/components/SiteHeader"
import { SiteFooter } from "@/components/SiteFooter"
import { MobileCtaBar } from "@/components/MobileCtaBar"
import { site } from "@/lib/site"
import { absUrl } from "@/lib/urls"

const inter = Inter({ subsets: ["latin", "latin-ext"], display: "swap" })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
}

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `Đặt xe Huế - Sân bay Phú Bài, City tour, Thuê xe tự lái`,
    template: `%s | ${site.brandName}`,
  },
  description:
    "Đặt xe Huế uy tín: đưa đón sân bay Phú Bài, city tour Huế, thuê xe tự lái. Giá minh bạch, hỗ trợ 24/7. Gọi ngay để chốt xe nhanh.",
  alternates: { canonical: absUrl("/") },
  openGraph: {
    type: "website",
    locale: site.defaultLocale,
    url: absUrl("/"),
    siteName: site.brandName,
    title: "Đặt xe Huế - Sân bay Phú Bài, City tour, Thuê xe tự lái",
    description:
      "Đặt xe Huế uy tín: đưa đón sân bay Phú Bài, city tour Huế, thuê xe tự lái. Giá minh bạch, hỗ trợ 24/7.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "none",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

const JsonLd = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.brandName,
    url: absUrl("/"),
    telephone: site.phone,
    areaServed: ["Huế", "Sân bay Phú Bài", "Đà Nẵng", "Hội An", "Lăng Cô"],
    serviceType: [
      "Đưa đón sân bay",
      "City tour",
      "Thuê xe tự lái",
      "Thuê xe có tài xế",
    ],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className={`${inter.className} scroll-smooth`}>
      <body className="min-h-dvh bg-porsche-white text-porsche-black antialiased selection:bg-porsche-red selection:text-white flex flex-col">
        <JsonLd />
        <SiteHeader />
        <main className="flex-1 pb-24 md:pb-0">{children}</main>
        <SiteFooter />
        <MobileCtaBar />
      </body>
    </html>
  )
}
