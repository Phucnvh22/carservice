import { MetadataRoute } from 'next'
import { absUrl } from '@/lib/urls'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: absUrl('/sitemap.xml'),
  }
}
