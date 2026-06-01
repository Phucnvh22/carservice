import type { MetadataRoute } from "next"
import { absUrl } from "@/lib/urls"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const routes = [
    "/",
    "/dich-vu",
    "/bang-gia",
    "/diem-den",
    "/danh-gia",
    "/san-bay-hue",
    "/city-tour-hue",
    "/thue-xe-tu-lai-hue",
    "/lien-he",
  ]
  return routes.map((path) => ({
    url: absUrl(path),
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }))
}
