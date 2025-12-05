import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://hsi-tiger-tronics.vercel.app"
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://hsi-tiger-tronics.vercel.app/sitemap.xml', // Update with our actual vercel subdomain
  }
}