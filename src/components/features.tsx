import { Building2, FileText, Wrench } from 'lucide-react'
import React from 'react'

function Features() {


    const features = [
        {
            title: "HR Management",
            description: "Streamline your company structure and team organization for efficient tender responses.",
            icon: <Building2 className="w-6 h-6 text-white" />
        },
        {
            title: "Smart File Manager",
            description: "Intuitive document organization system designed specifically for tender preparation.",
            icon: <FileText className="w-6 h-6 text-white" />
        },
        {
            title: "Built-in Tools",
            description: "Essential tools including resume builder and currency converter at your fingertips.",
            icon: <Wrench className="w-6 h-6 text-white" />
        }
    ]

    return (
        <section>
            <div className="text-black bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className='flex flex-col gap-8'>
                            <h2 className="text-4xl font-bold">Everything You Need to Win Tenders</h2>
                            <div className="flex flex-col gap-8">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex gap-4 items-center">
                                        <div className="bg-black rounded-full p-4">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold">{feature.title}</h3>
                                            <p className="text-gray-600">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative hidden lg:block">
                            <div className="aspect-square bg-gray-100 rounded-full overflow-hidden relative">
                                <img src="/api/placeholder/600/600" alt="Platform Interface" className="absolute inset-0 w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-black rounded-3xl rotate-12"></div>
                            <div className="absolute -top-8 -right-8 w-32 h-32 border-4 border-black rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features