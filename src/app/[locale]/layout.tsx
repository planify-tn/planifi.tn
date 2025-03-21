import '../globals.css';
import { Metadata } from 'next';
import { LocaleProvider } from '../../../context/localContext';
import { getDictionary } from '../../../dictionaries';
import { i18n, Locale } from '../../../i18n.config';
import Nav from '@/components/nav';
import Footer from '@/components/footer';

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ locale }));
}

// Define a function to get meta information
async function getMetaInfo(locale: Locale) {
    const dictionary = await getDictionary(locale);

    return {
        dictionary,
        canonicalUrl: `https://planifi.tn/${locale}`,
        ogLocale: locale === 'en' ? 'en_US' : locale === 'fr' ? 'fr_FR' : 'ar_TN',
        isRtl: locale === 'ar'
    };
}

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    // Await the params object to get the locale
    const { locale } = await params;
    const localeTyped = locale as Locale;

    // Get meta info and dictionary
    const { dictionary, canonicalUrl, ogLocale } = await getMetaInfo(localeTyped);

    return {
        title: dictionary?.meta.title,
        description: dictionary?.meta.description,
        metadataBase: new URL('https://planifi.tn'),
        alternates: {
            canonical: canonicalUrl,
            languages: {
                'en': 'https://planifi.tn/en',
                'fr': 'https://planifi.tn/fr',
                'ar': 'https://planifi.tn/ar',
            },
        },
        openGraph: {
            type: 'website',
            locale: ogLocale,
            url: canonicalUrl,
            siteName: 'PLANIFI',
            title: dictionary?.meta.title,
            description: dictionary?.meta.description,
            // images: [
            //     {
            //         url: `https://planifi.tn/og-image-${localeTyped}.svg`,
            //         width: 1200,
            //         height: 630,
            //         alt: 'PLANIFI Platform Preview',
            //     },
            // ],
        },
    };
}

export default async function RootLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: Locale }>;
}) {
    // Await the params object to get the locale
    const { locale } = await params;

    // Get meta info and dictionary
    const { dictionary, isRtl } = await getMetaInfo(locale);

    // Create schema.org data
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "PLANIFI",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": dictionary?.meta.description,
        "offers": {
            "@type": "Offer",
            "price": "YOUR_PRICE",
            "priceCurrency": "TND",
            "priceValidUntil": "2024-12-31"
        },
        "featureList": [
            locale === "ar" ? "وحدة الموارد البشرية" : locale === "fr" ? "Module RH" : "HR Module",
            locale === "ar" ? "إدارة الملفات" : locale === "fr" ? "Gestion des fichiers" : "File Management",
            locale === "ar" ? "تتبع المناقصات" : locale === "fr" ? "Suivi des appels d'offres" : "Tender Tracking",
            locale === "ar" ? "إضافة المتصفح" : locale === "fr" ? "Extension de navigateur" : "Browser Extension"
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "150"
        }
    };

    return (
        <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schemaData)
                    }}
                />
            </head>
            <body className={`antialiased text-black ${isRtl ? 'font-arabic' : ''}`}>
                <LocaleProvider locale={locale} dictionary={dictionary}>
                    <Nav />
                    {children}
                    <Footer />
                </LocaleProvider>
            </body>
        </html>
    );
}