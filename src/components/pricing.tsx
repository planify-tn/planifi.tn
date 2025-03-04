import { Check, X } from 'lucide-react'
import React from 'react'

function Pricing() {
    const plans = [
        {
            name: "Pro Plan",
            description: "Perfect for small to medium businesses",
            price: "$49",
            period: "per user/month",
            highlighted: false,
            features: [
                "HR Module (up to 50 employees)",
                "Document Repository (10GB storage)",
                "Project Management (Basic)",
                "Tender Management (Limited)",
                "Up to 10 team members",
                "Basic Support (Email)",
                "Standard Templates"
            ],
            notIncluded: [
                "Tender Grabber Extension",
                "Advanced Analytics",
                "Custom Templates",
                "API Access"
            ],
            cta: "Pre-order Pro",
            ctaLink: "/request?plan=pro"
        },
        {
            name: "Plus Plan",
            description: "For businesses serious about scaling",
            price: "$89",
            period: "per user/month",
            highlighted: true,
            badge: "RECOMMENDED",
            features: [
                "Everything in Pro, plus:",
                "HR Module (Unlimited employees)",
                "Document Repository (50GB storage)",
                "Project Management (Advanced)",
                "Tender Management (Full featured)",
                "Unlimited team members",
                "Priority Support (Phone & Email)",
                "Tender Grabber Browser Extension",
                "Advanced Analytics Dashboard",
                "Custom Templates",
                "API Access",
                "Integration with 3rd party tools"
            ],
            cta: "Pre-order Plus",
            ctaLink: "/request?plan=plus"
        },
        {
            name: "Enterprise",
            description: "Custom solution for large organizations",
            price: "Custom",
            period: "tailored to your needs",
            highlighted: false,
            features: [
                "Everything in Plus, plus:",
                "Self-hosted option available",
                "White-labeling",
                "Dedicated account manager",
                "Custom feature development",
                "Personalized onboarding",
                "24/7 Premium support",
                "Custom integrations",
                "SLA guarantees"
            ],
            cta: "Contact Sales",
            ctaLink: "/request?plan=enterprise"
        }
    ];

    return (
        <section id='pricing' className='py-24 bg-gray-50'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-16'>
                    <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Flexible pricing options to meet the needs of any organization
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div 
                            key={index} 
                            className={`group relative ${plan.highlighted 
                                ? 'bg-black text-white' 
                                : 'bg-white border-2 border-gray-200 hover:border-black'} 
                                rounded-3xl transition-colors overflow-hidden`}
                        >
                            {plan.badge && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-6 py-1 rounded-full text-sm font-bold">
                                    {plan.badge}
                                </div>
                            )}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                                <p className={`${plan.highlighted ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                                    {plan.description}
                                </p>
                                <div className="mb-8">
                                    <span className="text-3xl font-bold">{plan.price}</span>
                                    <span className={`ml-2 ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                                        {plan.period}
                                    </span>
                                </div>
                                
                                <div className="mb-8">
                                    <h4 className={`font-semibold mb-4 ${plan.highlighted ? 'text-gray-200' : 'text-gray-700'}`}>
                                        What's included:
                                    </h4>
                                    <ul className="space-y-3">
                                        {plan.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="flex items-start gap-3">
                                                <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-white' : 'text-black'}`} />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    {plan.notIncluded && (
                                        <>
                                            <h4 className={`font-semibold my-4 ${plan.highlighted ? 'text-gray-200' : 'text-gray-700'}`}>
                                                Not included:
                                            </h4>
                                            <ul className="space-y-3">
                                                {plan.notIncluded.map((feature, fIndex) => (
                                                    <li key={fIndex} className="flex items-start gap-3">
                                                        <X className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-gray-400' : 'text-gray-400'}`} />
                                                        <span className={plan.highlighted ? 'text-gray-400' : 'text-gray-500'}>
                                                            {feature}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </div>
                                
                                <a 
                                    href={plan.ctaLink} 
                                    className={`w-full py-4 px-3 rounded-full font-semibold block text-center ${
                                        plan.highlighted 
                                            ? 'bg-white text-black hover:bg-gray-100' 
                                            : 'border-2 border-black text-black group-hover:bg-black group-hover:text-white'
                                    } transition-colors`}
                                >
                                    {plan.cta}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-lg mb-4">Need help choosing the right plan?</p>
                    <a href="/contact" className="text-black font-semibold underline">Contact our sales team</a>
                </div>
            </div>
        </section>
    )
}

export default Pricing