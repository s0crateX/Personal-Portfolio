import type { MetadataRoute } from 'next';
import { siteConfig } from '@/src/configs/config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/private/',
          '/admin/',
          '/api/',
          '/_next/',
          '/static/',
          '*.json',
          '*.xml'
        ],
        crawlDelay: 1
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/private/',
          '/admin/',
          '/api/'
        ]
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/private/',
          '/admin/',
          '/api/'
        ]
      },
      {
        userAgent: 'ia_archiver',
        disallow: '/'
      },
      {
        userAgent: 'SemrushBot',
        disallow: '/'
      },
      {
        userAgent: 'AhrefsBot',
        disallow: '/'
      }
    ],
    sitemap: [
      `${siteConfig.baseUrl}/sitemap.xml`,
      `${siteConfig.baseUrl}/sitemap-0.xml`
    ],
    host: siteConfig.baseUrl
  };
}
