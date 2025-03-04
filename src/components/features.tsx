import { Building2, FileText, Wrench, Calendar, Globe, ShieldCheck, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Features() {
    const features = [
        {
            title: "User Management",
            description: "Secure authentication with role-based access control for seamless team collaboration on tenders.",
            icon: <ShieldCheck className="w-6 h-6 text-white" />,
            benefit: "Keep your sensitive tender documents secure while enabling team collaboration."
        },
        {
            title: "Project Management",
            description: "Customize your projects with unique views: Kanban, Gantt, and List views.",
            icon: <Calendar className="w-6 h-6 text-white" />,
            benefit: "Never miss a tender deadline with visual progress tracking."
        },
        {
            title: "Document Repository",
            description: "Intelligent document management with version control and template library.",
            icon: <FileText className="w-6 h-6 text-white" />,
            benefit: "Find the right documents instantly and maintain perfect version history."
        },
        {
            title: "Organization Management",
            description: "Manage your team's resumes, skills, and company structure for faster tender responses.",
            icon: <Building2 className="w-6 h-6 text-white" />,
            benefit: "Reduce response time by 40% with ready-to-use company information."
        },
        {
            title: "Tender Management",
            description: "Discover, track, and respond to tender opportunities all in one place.",
            icon: <Globe className="w-6 h-6 text-white" />,
            benefit: "Never miss a relevant tender opportunity with smart alerts."
        },
        {
            title: "Built-in Tools",
            description: "Essential tools including resume builder, currency converter, and compliance checkers.",
            icon: <Wrench className="w-6 h-6 text-white" />,
            benefit: "Save time with specialized tools designed for tender success."
        }
    ]

    return (
        <section id='features' className='py-24 bg-gray-50'>
            <div className='container mx-auto px-4 lg:px-0 space-y-12'>
                <div className='text-center'>
                    <h2 className="text-4xl font-bold mb-4">Comprehensive Tender Management</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        PLANIFI combines all the tools you need to win more tenders in one powerful, easy-to-use platform.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex gap-4 items-start mb-4">
                                <div className="bg-black rounded-full p-3 flex-shrink-0">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold">{feature.title}</h3>
                            </div>
                            <p className="text-gray-600 mb-4">{feature.description}</p>
                            <p className="text-sm font-medium text-black bg-gray-100 p-3 rounded-lg">
                                ✓ {feature.benefit}
                            </p>
                        </div>
                    ))}
                </div>

                <div className='flex justify-center'>
                    <Link href='/request' className="group bg-black text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-900 transition-all w-full lg:w-fit">
                        Join Waitlist
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Features