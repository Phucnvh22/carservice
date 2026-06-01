import { MetadataRoute } from 'next'
import { absUrl } from '@/lib/urls'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/bang-gia',
    '/san-bay-hue',
    '/city-tour-hue',
    '/thue-xe-tu-lai-hue',
  ]

  return routes.map((route) => ({
    url: absUrl(route),
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
