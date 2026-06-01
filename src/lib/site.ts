export type SiteConfig = {
  brandName: string
  siteUrl: string
  phone: string
  zaloUrl: string
  defaultLocale: string
}

export const site: SiteConfig = {
  brandName: process.env.NEXT_PUBLIC_BRAND_NAME || "Hue Car Service",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  phone: process.env.NEXT_PUBLIC_PHONE || "0788 661 197",
  zaloUrl: process.env.NEXT_PUBLIC_ZALO_URL || "https://zalo.me/0788 661 197",
  defaultLocale: "vi-VN",
}

export const formatPhoneDisplay = (raw: string) => {
  const digits = raw.replace(/[^\d+]/g, "")
  return digits || raw
}

