import React from 'react'
import HeroSection from '@/components/heroSection';
import Features from '@/components/features';
import Pricing from '@/components/pricing';
import FAQ from '@/components/faq';
import SeoHead from '@/components/SeoHead';

function page() {
    return (
        <div className="min-h-screen bg-white">
            <SeoHead />

            <HeroSection />

            <Features />

            <Pricing />

            <FAQ />
        </div>
    )
}

export default page