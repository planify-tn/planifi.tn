'use client';
import { TNavItems } from '@/lib/type';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { ThemeSwitcher } from './themeSwitcher';
import { useLocale } from '@/../context/localContext';
import { localizedRoutes } from '@/../i18n.config';
import LanguageSwitcher from './languageSwitcher';

function Nav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { locale, t } = useLocale();

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    const routes: TNavItems[] = [
        {
            name: t('nav.features'),
            link: localizedRoutes.home[locale],
            command: () => scrollToSection('features')
        },
        {
            name: t('nav.pricing'),
            link: localizedRoutes.pricing[locale],
            command: () => scrollToSection('pricing')
        },
        {
            name: t('nav.faq'),
            link: localizedRoutes.faq[locale],
            command: () => scrollToSection('faq')
        }
    ];

    return (
        <nav className='sticky top-0 bg-black w-full p-4 z-50 shadow-md'>
            <div className="container mx-auto flex items-center justify-between">
                <Link href={localizedRoutes.home[locale]} className='flex items-center gap-2'>
                    <Image src="/logo-planifi.svg" alt="logo" width={30} height={30} />
                    <div className="flex flex-col">
                        <span className='uppercase font-semibold text-white'>Planifi</span>
                        <span className="text-xs text-gray-400">{t('nav.tagline')}</span>
                    </div>
                </Link>
                {/* Desktop Menu */}
                <div className='hidden md:flex items-center gap-8'>
                    <div className="flex gap-8">
                        {routes.map((route, index) => (
                            <button
                                key={index}
                                onClick={route.command}
                                className='text-sm font-semibold uppercase text-stone-300 hover:text-white transition-colors'
                            >
                                {route.name}
                            </button>
                        ))}
                    </div>
                    <LanguageSwitcher />
                    <ThemeSwitcher />

                    <Link href={localizedRoutes.request[locale]} className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
                        {t('nav.tryFree')}
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <LanguageSwitcher />
                    <button
                        className="text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black py-4 px-6 flex flex-col gap-4 shadow-lg">
                    {routes.map((route, index) => (
                        <button
                            key={index}
                            onClick={route.command}
                            className='text-sm font-semibold uppercase text-stone-300 hover:text-white text-left py-2 border-b border-gray-800'
                        >
                            {route.name}
                        </button>
                    ))}
                    <Link href={localizedRoutes.request[locale]} className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors text-center mt-2">
                        {t('nav.tryFree')}
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default Nav;