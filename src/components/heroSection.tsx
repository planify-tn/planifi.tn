import { ArrowRight } from 'lucide-react'
import React from 'react'

function HeroSection() {
    return (

        <section>
            <div className="relative overflow-hidden">
                {/* Abstract Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute transform rotate-45 -left-1/4 -top-1/4 w-1/2 h-1/2 bg-black"></div>
                    <div className="absolute transform -rotate-45 -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-black"></div>
                </div>

                <div className="container mx-auto px-4 py-24 relative">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-6xl font-bold text-black mb-8 leading-tight">
                            Tender Management,
                            <br />
                            <span className="bg-black text-white px-4">Reimagined</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-12 max-w-2xl">
                            Streamline your tender process with our all-in-one platform. From HR organization to automated bid capturing.
                        </p>
                        <a href='/request' className="group bg-black text-white w-fit px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-900 transition-all">
                            Pre-order Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className='hidden lg:block'>
                    <div className="absolute top-1/4 right-8 w-32 h-32 border-2 border-black rotate-45"></div>
                    <div className="absolute bottom-1/4 left-8 w-16 h-16 bg-black rotate-12"></div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection