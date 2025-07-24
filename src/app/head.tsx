'use client';

import { usePathname } from 'next/navigation';
import { generateMetadata } from '@/src/components/utils/generateMetadata';
import { siteConfig } from '@/src/configs/config';
import Script from 'next/script';

const Head = () => {
  const pathname = usePathname() || '/';
  const meta = generateMetadata({
    title: pathname === '/' ? '' : pathname.slice(1).replace(/-/g, ' '),
    path: pathname
  });

  // Enhanced JSON-LD structured data for better SEO
  const generatePersonJsonLd = () => {
    const personJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': `${siteConfig.baseUrl}#person`,
      name: siteConfig.author,
      givenName: 'Ryan Dave',
      familyName: 'Chiva',
      jobTitle: siteConfig.seo.structuredData.jobTitle,
      description: siteConfig.metadata.description,
      url: siteConfig.baseUrl,
      image: {
        '@type': 'ImageObject',
        url: siteConfig.profile_image,
        width: 400,
        height: 400
      },
      sameAs: siteConfig.seo.structuredData.sameAs,
      knowsAbout: siteConfig.seo.structuredData.skills,
      worksFor: {
        '@type': 'Organization',
        name: siteConfig.seo.structuredData.worksFor
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'PH',
        addressRegion: siteConfig.seo.structuredData.location
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: siteConfig.social.email,
        contactType: 'professional'
      },
      alumniOf: [
        {
          '@type': 'Organization',
          name: 'Cisco Networking Academy',
          description: 'CCNA Certified Professional'
        }
      ]
    };

    return JSON.stringify(personJsonLd);
  };

  const generateWebsiteJsonLd = () => {
    const websiteJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${siteConfig.baseUrl}#website`,
      url: siteConfig.baseUrl,
      name: siteConfig.metadata.title,
      description: siteConfig.metadata.description,
      publisher: {
        '@id': `${siteConfig.baseUrl}#person`
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteConfig.baseUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      },
      inLanguage: 'en-US'
    };

    return JSON.stringify(websiteJsonLd);
  };

  const generateWebPageJsonLd = () => {
    const webPageJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': meta.url,
      url: meta.url,
      name: meta.title,
      description: meta.description,
      isPartOf: {
        '@id': `${siteConfig.baseUrl}#website`
      },
      about: {
        '@id': `${siteConfig.baseUrl}#person`
      },
      datePublished: new Date().toISOString(),
      dateModified: new Date().toISOString(),
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteConfig.baseUrl
          },
          ...(pathname !== '/' ? [{
            '@type': 'ListItem',
            position: 2,
            name: pathname.slice(1).replace(/-/g, ' '),
            item: meta.url
          }] : [])
        ]
      }
    };

    return JSON.stringify(webPageJsonLd);
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="robots" content={meta.robots} />
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta name="author" content={siteConfig.author} />
      <meta name="creator" content={siteConfig.author} />
      <meta name="publisher" content={siteConfig.author} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Theme and Color Scheme */}
      <meta name="theme-color" content="#000000" />
      <meta name="color-scheme" content="dark light" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Mobile App Capabilities */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content={siteConfig.author} />
      
      {/* Microsoft Tiles */}
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:url" content={meta.openGraph.url} />
      <meta property="og:type" content={meta.openGraph.type} />
      <meta property="og:site_name" content={meta.openGraph.site_name} />
      <meta property="og:title" content={meta.openGraph.title} />
      <meta property="og:description" content={meta.openGraph.description} />
      <meta property="og:image" content={meta.openGraph.images[0].url} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={meta.openGraph.images[0].alt} />
      <meta property="og:locale" content={meta.openGraph.locale} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={meta.twitter.card} />
      <meta name="twitter:site" content={meta.twitter.site} />
      <meta name="twitter:creator" content={meta.twitter.creator} />
      <meta name="twitter:title" content={meta.twitter.title} />
      <meta name="twitter:description" content={meta.twitter.description} />
      <meta name="twitter:image" content={meta.twitter.images[0]} />
      
      {/* Canonical and Alternate Links */}
      <link rel="canonical" href={meta.alternates.canonical} />
      
      {/* Favicons and Icons */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicon/favicon.jpg" type="image/jpeg" sizes="192x192" />
      <link rel="apple-touch-icon" href="/favicon/favicon.jpg" sizes="180x180" />
      <link rel="manifest" href="/manifest.webmanifest" />
      
      {/* Sitemap */}
      <link rel="sitemap" href="/sitemap.xml" />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://api.github.com" />
      <link rel="preconnect" href="https://avatars.githubusercontent.com" />
      
      {/* DNS Prefetch for External Resources */}
      <link rel="dns-prefetch" href="//github.com" />
      <link rel="dns-prefetch" href="//linkedin.com" />
      <link rel="dns-prefetch" href="//medium.com" />
      
      {/* Structured Data - Person */}
      <Script
        id="person-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generatePersonJsonLd()
        }}
      />
      
      {/* Structured Data - Website */}
      <Script
        id="website-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateWebsiteJsonLd()
        }}
      />
      
      {/* Structured Data - WebPage */}
      <Script
        id="webpage-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateWebPageJsonLd()
        }}
      />
      
      {/* Google Analytics (if you have it) */}
      {process.env.GOOGLE_ANALYTICS_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
            `}
          </Script>
        </>
      )}
    </>
  );
};

export default Head;
