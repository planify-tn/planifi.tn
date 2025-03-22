"use client";

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useLocale } from '../../context/localContext'
import { localizedRoutes } from '../../i18n.config';

function HeroSection() {
    const { t, locale } = useLocale();
    return (
        <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
            <div className="container mx-auto px-4 lg:px-0 relative">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="lg:w-1/2 flex flex-col gap-8">

                        <span className="bg-black text-white px-3 py-1 w-fit rounded-full text-sm font-medium mb-4 inline-block">
                            {t('hero.badge')}
                        </span>

                        <div>
                            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
                                {t('hero.title')}, <span className="bg-black text-white px-4">{t('hero.highlight')} </span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                {t('hero.description')}
                            </p>
                        </div>

                        <Link href={localizedRoutes.request[locale]}
                            className="group bg-black text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-900 transition-all w-full lg:w-fit">
                            {t('hero.cta')}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <Image
                            src="/preview.png"
                            alt="Planify Platform Interface"
                            className="w-full"
                            width={800}
                            height={600}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection