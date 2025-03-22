import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { Providers } from "./providers";

export const metadata: Metadata = {
    title: "PLANIFI - MAAK CORP",
    description: "Affordable SAAS for small and medium businesses - Streamline your tender management process with our intuitive platform",
    metadataBase: new URL('https://planifi.tn'),
    authors: [{ name: 'MAAK CORP' }],
    keywords: [
        'tender management',
        'business software',
        'SAAS',
        'procurement',
        'bid management',
        'small business',
        'medium business',
        'Tunisia',
        'tender platform',
        'tender solutions'
    ],
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://planifi.tn',
        siteName: 'PLANIFI',
        title: 'PLANIFI - Tender Management Made Simple',
        description: 'Affordable SAAS for small and medium businesses - Streamline your tender management process',
        images: [
            {
                url: 'https://planifi.tn/og-image.svg',
                width: 1200,
                height: 630,
                alt: 'PLANIFI Platform Preview',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'PLANIFI - Tender Management Made Simple',
        description: 'Affordable SAAS for small and medium businesses',
        images: ['https://planifi.tn/twitter-image.svg'],
    },
    icons: {
        icon: [
            {
                media: '(prefers-color-scheme: dark)',
                url: '/logo_white.png',
                type: 'image/png',
            },
            {
                media: '(prefers-color-scheme: light)',
                url: '/logo_dark.png',
                type: 'image/png',
            },
        ],
        apple: [
            { url: '/icon-192x192.svg' },
        ],
        shortcut: ['/icon-512x512.svg'],
    },
    manifest: '/manifest.json',
    alternates: {
        canonical: 'https://planifi.tn'
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 5,
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(
                            {
                                "@context": "https://schema.org",
                                "@type": "SoftwareApplication",
                                "name": "PLANIFI",
                                "applicationCategory": "BusinessApplication",
                                "operatingSystem": "Web",
                                "description": "Tender management platform for small and medium businesses",
                                "offers": {
                                    "@type": "Offer",
                                    "price": "YOUR_PRICE",
                                    "priceCurrency": "TND",
                                    "priceValidUntil": "2024-12-31"
                                },
                                "featureList": [
                                    "HR Module",
                                    "File Management",
                                    "Tender Tracking",
                                    "Browser Extension"
                                ],
                                "aggregateRating": {
                                    "@type": "AggregateRating",
                                    "ratingValue": "4.8",
                                    "ratingCount": "150"
                                }
                            }
                        )
                    }}
                />
            </head>
            <body className=" bg-white dark:bg-black text-black dark:text-white  ">
                <Providers>
                    <Nav />
                    {children}
                    <Footer /></Providers>
            </body>
        </html>
    );
}
