'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Locale, getDirection, localizedRoutes, RouteKey } from '../i18n.config';

type Dictionary = Record<string, any>;

interface LocaleContextType {
    locale: Locale;
    dictionary: Dictionary;
    dir: 'ltr' | 'rtl';
    changeLocale: (newLocale: Locale) => void;
    t: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

interface LocaleProviderProps {
    children: ReactNode;
    locale: Locale;
    dictionary: Dictionary;
}

export function LocaleProvider({ children, locale, dictionary }: LocaleProviderProps) {
    const [currentLocale, setCurrentLocale] = useState<Locale>(locale);
    const [currentDictionary, setCurrentDictionary] = useState<Dictionary>(dictionary);
    const [dir, setDir] = useState<'ltr' | 'rtl'>(getDirection(locale));

    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        setCurrentLocale(locale);
        setCurrentDictionary(dictionary);
        setDir(getDirection(locale));
    }, [locale, dictionary]);

    const changeLocale = (newLocale: Locale) => {
        if (newLocale === currentLocale) return;

        // Determine the new path
        let newPath: string;

        // Find current route in localizedRoutes
        const routeKey = Object.keys(localizedRoutes).find(key => {
            const route = localizedRoutes[key as RouteKey];
            return Object.values(route).some(path => pathname === path);
        }) as RouteKey | undefined;

        if (routeKey) {
            // If it's a known route, use the localized path
            newPath = localizedRoutes[routeKey][newLocale];
        } else {
            // Otherwise, replace the locale segment in the path
            if (pathname.startsWith(`/${currentLocale}/`)) {
                newPath = pathname.replace(`/${currentLocale}/`, `/${newLocale}/`);
            } else if (pathname === `/${currentLocale}`) {
                newPath = `/${newLocale}`;
            } else {
                // If no locale in path (default locale case), add the new locale
                newPath = `/${newLocale}${pathname}`;
            }
        }

        router.push(newPath);
    };

    // Function to get translations with nested key support (e.g. 'nav.home')
    const t = (key: string): string => {
        const keys = key.split('.');
        let result = currentDictionary;

        for (const k of keys) {
            if (result && typeof result === 'object' && k in result) {
                result = result[k];
            } else {
                // Return the key if translation not found
                return key;
            }
        }

        return typeof result === 'string' ? result : key;
    };

    return (
        <LocaleContext.Provider value={{
            locale: currentLocale,
            dictionary: currentDictionary,
            dir,
            changeLocale,
            t
        }}>
            {children}
        </LocaleContext.Provider>
    );
}

export function useLocale() {
    const context = useContext(LocaleContext);
    if (!context) {
        throw new Error('useLocale must be used within a LocaleProvider');
    }
    return context;
}