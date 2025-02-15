import React from 'react'
import { ArrowRight, Building2, FileText, Wrench, Chrome, Check, ArrowUpRight } from 'lucide-react';

function page() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
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
                        <div className="flex gap-6">
                            <button className="group bg-black text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-900 transition-all">
                                Pre-order Now
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 rounded-full font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/4 right-8 w-32 h-32 border-2 border-black rotate-45"></div>
                <div className="absolute bottom-1/4 left-8 w-16 h-16 bg-black rotate-12"></div>
            </div>

            {/* Features Section */}
            <div className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-8">Everything You Need to Win Tenders</h2>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                                        <Building2 className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">HR Management</h3>
                                        <p className="text-gray-600">Streamline your company structure and team organization for efficient tender responses.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                                        <FileText className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Smart File Manager</h3>
                                        <p className="text-gray-600">Intuitive document organization system designed specifically for tender preparation.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                                        <Wrench className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Built-in Tools</h3>
                                        <p className="text-gray-600">Essential tools including resume builder and currency converter at your fingertips.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square bg-gray-100 rounded-full overflow-hidden relative">
                                <img src="/api/placeholder/600/600" alt="Platform Interface" className="absolute inset-0 w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-black rounded-3xl rotate-12"></div>
                            <div className="absolute -top-8 -right-8 w-32 h-32 border-4 border-black rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Plans Section */}
            <div className="py-24">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16">Choose Your Plan</h2>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Pro Plan */}
                        <div className="group p-8 rounded-3xl border-2 border-gray-200 hover:border-black transition-colors">
                            <h3 className="text-2xl font-bold mb-2">Pro Plan</h3>
                            <p className="text-gray-600 mb-8">Perfect for small to medium businesses</p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <Check className="w-5 h-5" />
                                    <span>HR Module</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Check className="w-5 h-5" />
                                    <span>File Manager</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Check className="w-5 h-5" />
                                    <span>Basic Tools</span>
                                </li>
                            </ul>
                            <button className="w-full py-4 border-2 border-black text-black rounded-full font-semibold group-hover:bg-black group-hover:text-white transition-colors">
                                Pre-order Pro
                            </button>
                        </div>

                        {/* Plus Plan */}
                        <div className="relative p-8 rounded-3xl bg-black text-white">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-6 py-1 rounded-full text-sm font-bold">
                                RECOMMENDED
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Plus Plan</h3>
                            <p className="text-gray-300 mb-8">For businesses serious about scaling</p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-white" />
                                    <span>Everything in Pro</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-white" />
                                    <span>Advanced Tools</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Chrome className="w-5 h-5 text-white" />
                                    <span>Tender Grabber Extension</span>
                                </li>
                            </ul>
                            <button className="w-full py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-colors">
                                Pre-order Plus
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="relative py-24 bg-black text-white overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-64 h-64 border border-white/10 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 border border-white/10 rounded-full transform translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="container mx-auto px-4 relative">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Tender Process?</h2>
                        <p className="text-xl mb-12 text-gray-400">
                            Join the waitlist today and get exclusive early-bird pricing
                        </p>
                        <button className="group bg-white text-black px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-gray-100 transition-colors">
                            Get Started Now
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="py-8 border-t border-gray-200">
                <div className="container mx-auto px-4 text-center text-gray-600">
                    <p>© 2025 Your Company Name. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default page