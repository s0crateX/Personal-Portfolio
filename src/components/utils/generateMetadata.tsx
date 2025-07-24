// src/utils/generateMetadata.ts
import { siteConfig } from '@/src/configs/config';

interface MetadataParams {
  title?: string;
  description?: string;
  path: string;
  image?: string;
  keywords?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export const generateMetadata = ({
  title,
  description,
  path,
  image,
  keywords,
  type = 'website',
  publishedTime,
  modifiedTime
}: MetadataParams) => {
  const titlePrefix = siteConfig.titlePrefix || '';
  const fullPath = `${siteConfig.baseUrl}${path}`;
  const pageTitle = title ? `${title} | ${siteConfig.author}` : siteConfig.metadata.title;
  const pageDescription = description || siteConfig.metadata.description;
  const pageImage = image || siteConfig.metadata.ogImage;
  const pageKeywords = keywords ? `${keywords}, ${siteConfig.metadata.keywords}` : siteConfig.metadata.keywords;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    url: fullPath,
    type: type,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: fullPath,
      type: type,
      site_name: siteConfig.author,
      locale: siteConfig.metadata.locale,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.author} - ${title || 'Portfolio'}`
        }
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime })
    },
    twitter: {
      card: 'summary_large_image',
      site: siteConfig.metadata.twitterHandle,
      creator: siteConfig.metadata.twitterHandle,
      title: pageTitle,
      description: pageDescription,
      images: [pageImage]
    },
    alternates: {
      canonical: fullPath,
      languages: {
        'en-US': fullPath,
        'en-GB': fullPath,
        'en-AU': fullPath
      }
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
      yandex: process.env.YANDEX_VERIFICATION,
      bing: process.env.BING_VERIFICATION
    },
    other: {
      'theme-color': '#000000',
      'color-scheme': 'dark light',
      'format-detection': 'telephone=no',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
      'msapplication-TileColor': '#000000',
      'msapplication-config': '/favicon/browserconfig.xml'
    },
    link: [
      {
        rel: 'icon',
        href: '/favicon.ico',
        sizes: 'any'
      },
      {
        rel: 'icon',
        href: '/favicon/favicon.jpg',
        type: 'image/jpeg',
        sizes: '192x192'
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicon/favicon.jpg',
        sizes: '180x180'
      },
      {
        rel: 'manifest',
        href: '/manifest.webmanifest'
      },
      {
        rel: 'sitemap',
        href: '/sitemap.xml'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous'
      }
    ]
  };
};
