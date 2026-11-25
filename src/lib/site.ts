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
  phone: process.env.NEXT_PUBLIC_PHONE || "0123 456 789",
  zaloUrl: process.env.NEXT_PUBLIC_ZALO_URL || "https://zalo.me/0123456789",
  defaultLocale: "vi-VN",
}

export const formatPhoneDisplay = (raw: string) => {
  const digits = raw.replace(/[^\d+]/g, "")
  return digits || raw
}

