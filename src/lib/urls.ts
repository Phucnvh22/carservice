import { site } from "@/lib/site"

export const absUrl = (path: string) => {
  if (!path) return site.siteUrl
  if (path.startsWith("http://") || path.startsWith("https://")) return path
  const normalized = path.startsWith("/") ? path : `/${path}`
  return `${site.siteUrl}${normalized}`
}

