import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

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
        'medium business'
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
                url: '/og-image.jpg',
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
        images: ['/twitter-image.jpg'],
        creator: '@__aymkh',
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
            { url: '/apple-icon.png' },
        ],
        shortcut: ['/shortcut-icon.png'],
    },
    manifest: '/manifest.json',
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 5,
    },
    verification: {
        google: 'your-google-site-verification',
        yandex: 'your-yandex-verification',
        me: ['contact@maak-corp.tn'],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased text-black">
                <Nav />
                {children}
                <Footer />
            </body>
        </html>
    );
}
