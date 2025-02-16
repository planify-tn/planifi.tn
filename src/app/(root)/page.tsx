import React from 'react'
import HeroSection from '@/components/heroSection';
import Features from '@/components/features';
import Pricing from '@/components/pricing';
import FAQ from '@/components/faq';

function page() {
    return (
        <div className="min-h-screen bg-white">
            <HeroSection />

            <Features />

            <Pricing />

            <FAQ />
        </div>
    )
}

export default page