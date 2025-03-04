import { ArrowRight, Play } from 'lucide-react'
import React from 'react'

function HeroSection() {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 relative">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 mb-12 lg:mb-0">
                        <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                            Coming Soon - Join Waitlist
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
                            Win More Tenders, <span className="bg-black text-white px-4">With Less Effort</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Planify streamlines your entire tender process from discovery to submission with our 
                            all-in-one platform built for serious businesses.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href='/request' className="group bg-black text-white w-fit px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-900 transition-all">
                                Join Waitlist
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <button className="w-fit px-8 py-4 rounded-full font-semibold flex items-center gap-2 border-2 border-black hover:bg-gray-100 transition-all">
                                Watch Demo
                                <Play className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="mt-8 flex items-center">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
                                ))}
                            </div>
                            <p className="ml-4 text-sm text-gray-600">
                                <span className="font-bold">200+ companies</span> on the waitlist
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="rounded-lg overflow-hidden shadow-2xl">
                            <img 
                                src="/api/placeholder/800/600" 
                                alt="Planify Platform Interface" 
                                className="w-full"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-black rounded-2xl rotate-12 -z-10"></div>
                        <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-black rounded-full -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection