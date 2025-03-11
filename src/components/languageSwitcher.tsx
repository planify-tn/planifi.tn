'use client';

import { useState } from 'react';
import { useLocale } from '../../context/localContext';
import { Locale, i18n, localeNames, localeFlags } from '../../i18n.config';

export default function LanguageSwitcher() {
    const { locale, changeLocale, } = useLocale();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const selectLanguage = (newLocale: Locale) => {
        changeLocale(newLocale);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                className="flex items-center gap-1 text-sm font-medium text-white"
                onClick={toggleDropdown}
                aria-expanded={isOpen}
            >
                <span>{localeFlags[locale]}</span>
                <span className="ml-1">{localeNames[locale]}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-md shadow-lg overflow-hidden z-50">
                    <div className="py-1">
                        {i18n.locales.map((loc) => (
                            <button
                                key={loc}
                                onClick={() => selectLanguage(loc)}
                                className={`w-full text-left px-4 py-2 text-sm ${locale === loc ? 'bg-gray-100 font-medium' : 'hover:bg-gray-50'}`}
                            >
                                <span className="mr-2">{localeFlags[loc]}</span>
                                {localeNames[loc]}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}