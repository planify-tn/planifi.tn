'use client';
import { TNavItems } from '@/lib/type';
import Link from 'next/link';
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { ThemeSwitcher } from './themeSwitcher';

function Nav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    const routes: TNavItems[] = [
        {
            name: 'Features',
            link: '/',
            command: () => scrollToSection('features')
        },
        {
            name: 'Pricing',
            link: '/pricing',
            command: () => scrollToSection('pricing')
        },
        {
            name: 'FAQ',
            link: '/faq',
            command: () => scrollToSection('faq')
        }
    ];

    return (
        <nav className='sticky top-0 bg-black w-full p-4 z-50 shadow-md'>
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/" className='flex items-center gap-2'>
                    <Image src="./logo-planifi.svg" alt="logo" width={30} height={30} />
                    <div className="flex flex-col">
                        <span className='uppercase font-semibold text-white'>Planifi</span>
                        <span className="text-xs text-gray-400">Tender Management Platform</span>
                    </div>
                </Link>
                <ThemeSwitcher />
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
                    <Link href="/request" className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
                        Try Free
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
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
                    <Link href="/request" className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors text-center mt-2">
                        Try Free
                    </Link>
                </div>
            )}
        </nav>
    )
}

export default Nav