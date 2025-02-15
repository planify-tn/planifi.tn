import React from 'react'
import HeroSection from '@/components/heroSection';
import Features from '@/components/features';
import Pricing from '@/components/pricing';

function page() {
    return (
        <div className="min-h-screen bg-white">
            <HeroSection />

            <Features />

            <Pricing />
        </div>
    )
}

export default page