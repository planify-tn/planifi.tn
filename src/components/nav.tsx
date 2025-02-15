import { TNavItems } from '@/lib/type';
import Link from 'next/link';
import React from 'react'

function Nav() {

    const routes: TNavItems[] = [
        {
            name: 'Features',
            link: '/'
        },
        {
            name: 'Pricing',
            link: '/about'
        },
        {
            name: 'FAQ',
            link: '/work'
        }
    ];

    return (
        <nav className='sticky top-0 flex flex-col items-center justify-between w-full gap-4 p-4 lg:gap-0 lg:flex-row bg-background min-h-[var(--navbar-height)] z-50'>
            <Link href="/" className='flex items-center gap-2'>
                <img src="./logo-planifi.svg" alt="logo" width={30} />
                <span className='uppercase font-semibold'>Planifi</span>
            </Link>
            <div className='flex gap-8'>
                {routes.map((route, index) => (
                    <Link href={route.link} key={index} className='font-light text-white capitalize'>{route.name}</Link>
                ))}
            </div>
        </nav>
    )
}

export default Nav