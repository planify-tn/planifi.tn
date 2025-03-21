// Updated SeoHead.jsx with hreflang support
import React from 'react';
import Head from 'next/head';

function SeoHead({
  title = "Planify | Complete Tender Management Platform",
  description = "Streamline your tender process with Planify - The all-in-one platform for discovering, tracking, and winning tenders in Libya and North Africa.",
  canonicalUrl = "https://planifi.tn",
  ogImage = "/images/planify-og-image.jpg",
  language = "en", // Current page language
  alternateLanguages = [
    { code: "en", url: "https://planifi.tn/en" },
    { code: "ar", url: "https://planifi.tn/ar" },
    { code: "fr", url: "https://planifi.tn/fr" }
  ]
}) {
  // Create structured data for the organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Planify",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "249",
      "priceCurrency": "LYD"
    },
    "description": "Complete tender management platform helping organizations streamline their tender process from discovery to submission.",
    "screenshot": `${canonicalUrl}/images/planify-screenshot.jpg`,
    "softwareVersion": "1.0",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "86"
    }
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Language information */}
      <meta httpEquiv="content-language" content={language} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* hreflang tags for multi-language support */}
      {alternateLanguages.map((lang) => (
        <link
          key={lang.code}
          rel="alternate"
          hrefLang={lang.code}
          href={lang.url}
        />
      ))}
      {/* x-default hreflang for search engines */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://planifi.tn"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={language === 'en' ? 'en_US' : language === 'ar' ? 'ar_LY' : 'fr_FR'} />
      {alternateLanguages.filter(l => l.code !== language).map((lang) => (
        <meta
          key={`og-locale-${lang.code}`}
          property="og:locale:alternate"
          content={lang.code === 'en' ? 'en_US' : lang.code === 'ar' ? 'ar_LY' : 'fr_FR'}
        />
      ))}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Keywords (still helpful for some search engines) */}
      <meta name="keywords" content="tender management, bid management, Libya, tender software, procurement, tender tracking, document management, HR management, tender discovery, North Africa, tender response, Arabic" />

      {/* Robots */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Structured data / JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Favicon */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
}

export default SeoHead;