// app/page.tsx
import { redirect } from 'next/navigation';
import { i18n, Locale } from '../../i18n.config';
import { headers } from 'next/headers';

export default async function Home() {
    // Server side redirect
    const headersList = headers();
    const acceptLanguage = (await headersList).get('accept-language') || '';

    // Find the best matching locale
    let detectedLocale = i18n.defaultLocale;

    // Parse the Accept-Language header
    // Format is typically like: en-US,en;q=0.9,fr;q=0.8,de;q=0.7
    const acceptedLanguages = acceptLanguage
        .split(',')
        .map(lang => lang.split(';')[0].trim().toLowerCase())
        .filter(Boolean);

    // Find the first accepted language that matches any of our locales
    // We check for both full match (en-US) and language match (en)
    for (const lang of acceptedLanguages) {
        // Check for exact match
        if (i18n.locales.includes(lang as Locale)) {
            detectedLocale = lang as Locale;
            break;
        }

        // Check for language code match (e.g., 'en' in 'en-US')
        const languageCode = lang.split('-')[0];
        if (i18n.locales.includes(languageCode as Locale)) {
            detectedLocale = languageCode as Locale;
            break;
        }
    }

    // Redirect to the detected locale
    redirect(`/${detectedLocale}`);

    // This won't be rendered
    return null;
}