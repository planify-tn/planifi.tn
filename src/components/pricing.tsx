import { Check, Chrome } from 'lucide-react'
import React from 'react'

function Pricing() {
    return (
        <section id='pricing' className='py-24 mx-auto px-4'>
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
        </section>
    )
}

export default Pricing