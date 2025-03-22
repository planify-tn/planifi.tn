import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function HeroSection() {
    return (
        <section className="py-20 ">
            <div className="container mx-auto px-4 lg:px-0 relative">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="lg:w-1/2 flex flex-col gap-8">

                        <span className="bg-black text-white px-3 py-1 w-fit rounded-full text-sm font-medium mb-4 inline-block">
                            Coming Soon - Join Waitlist
                        </span>

                        <div>
                            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
                                Win More Tenders, <span className="bg-black text-white px-4">With Less Effort</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                PLANIFI streamlines your entire tender process from discovery to submission with our
                                all-in-one platform built for serious businesses.
                            </p>
                        </div>

                        <Link href='/request' className="group bg-black text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-900 transition-all w-full lg:w-fit">
                            Join Waitlist
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
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-black rounded-2xl rotate-12 -z-10"></div>
                        <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-black rounded-full -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection