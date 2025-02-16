'use client';
import { TNavItems } from '@/lib/type';
import Link from 'next/link';
import React from 'react'

function Nav() {

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
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
            link: '/about',
            command: () => scrollToSection('pricing')
        },
        {
            name: 'FAQ',
            link: '/work',
            command: () => scrollToSection('faq')
        }
    ];

    return (
        <nav className='sticky top-0 flex flex-col items-center justify-between w-full gap-4 p-4 lg:gap-0 lg:flex-row bg-background min-h-[var(--navbar-height)] z-50'>
            <Link href="/" className='flex items-center gap-2'>
                <img src="./logo-planifi.svg" alt="logo" width={30} />
                <span className='uppercase font-semibold text-white'>Planifi</span>
            </Link>
            <div className='flex gap-8'>
                {routes.map((route, index) => (
                    <button
                        key={index}
                        onClick={route.command}
                        className='text-sm font-semibold uppercase text-stone-300 hover:text-white'
                    >
                        {route.name}
                    </button>
                ))}
            </div>
        </nav>
    )
}

export default Nav