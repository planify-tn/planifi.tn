import { TSocialsLinks } from '@/lib/type';
import { ArrowUpRight, ArrowRight, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

function Footer() {
    const SOCIALS: TSocialsLinks[] = [
        {
            name: 'GitHub',
            href: 'https://github.com/aymkh',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
            )
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/aymkh',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
            )
        },
        {
            name: 'Twitter',
            href: 'https://x.com/__aymkh',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
            )
        },
        {
            name: 'Email',
            href: 'mailto:contact@maak-corp.tn',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
            )
        },
    ];

    const footerLinks = [
        {
            title: "Product",
            links: [
                { name: "Features", href: "/#features" },
                { name: "Pricing", href: "/#pricing" },
                { name: "Roadmap", href: "/roadmap" },
                { name: "Self-Hosted Option", href: "/self-hosted" },
                { name: "Request Demo", href: "/request-demo" }
            ]
        },
        {
            title: "Company",
            links: [
                { name: "About Us", href: "/about" },
                { name: "Blog", href: "/blog" },
                { name: "Careers", href: "/careers" },
                { name: "Contact", href: "/contact" }
            ]
        },
        {
            title: "Resources",
            links: [
                { name: "Documentation", href: "/docs" },
                { name: "Help Center", href: "/help" },
                { name: "API", href: "/api-docs" },
                { name: "Webinars", href: "/webinars" },
                { name: "Community", href: "/community" }
            ]
        },
        {
            title: "Legal",
            links: [
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Security", href: "/security" },
                { name: "Compliance", href: "/compliance" }
            ]
        }
    ];

    return (
        <footer>
            <div className="bg-gray-100 pt-16 pb-8">
                <div className="container mx-auto px-4">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
                        {/* Company Info */}
                        <div className="lg:col-span-2">
                            <Link href="/" className="flex items-center gap-2 mb-4">
                                <img src="./logo-planifi.svg" alt="Planify" width={36} />
                                <span className="text-xl font-bold">Planifi</span>
                            </Link>
                            <p className="text-gray-600 mb-6">
                                The complete tender management platform that helps organizations streamline their tender process from discovery to submission.
                            </p>
                            <div className="flex flex-col gap-3">
                                <a href="mailto:contact@maak-corp.tn" className="inline-flex items-center text-gray-700 hover:text-black">
                                    <Mail className="w-5 h-5 mr-2" />
                                    contact@maak-corp.tn
                                </a>
                                <a href="tel:+21612345678" className="inline-flex items-center text-gray-700 hover:text-black">
                                    <Phone className="w-5 h-5 mr-2" />
                                    +216 12 345 678
                                </a>
                            </div>
                        </div>
                        
                        {/* Links */}
                        {footerLinks.map((section, i) => (
                            <div key={i}>
                                <h3 className="font-bold mb-4">{section.title}</h3>
                                <ul className="space-y-2">
                                    {section.links.map((link, j) => (
                                        <li key={j}>
                                            <a 
                                                href={link.href} 
                                                className="text-gray-600 hover:text-black transition-colors"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    
                    {/* Newsletter Signup */}
                    <div className="border-t border-gray-200 pt-12 mb-12">
                        <div className="max-w-2xl mx-auto text-center">
                            <h3 className="text-2xl font-bold mb-4">Stay up to date</h3>
                            <p className="text-gray-600 mb-6">
                                Subscribe to our newsletter for the latest updates, features, and tender management tips.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                                <input 
                                    type="email" 
                                    placeholder="Your email address" 
                                    className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-black focus:border-black"
                                />
                                <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors flex-shrink-0">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Social Links & Copyright */}
                    <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-8">
                        <p className="text-gray-600 mb-4 md:mb-0">
                            © {new Date().getFullYear()} <Link href={'https://maak-corp.tn'} className="font-semibold hover:text-black transition-colors">MAAK CORP</Link>, All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            {SOCIALS.map((item, index) => (
                                <a 
                                    key={index} 
                                    target="_blank" 
                                    href={item.href} 
                                    aria-label={item.name}
                                    className="text-gray-600 hover:text-black transition-colors"
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* CTA Section */}
            <div className="relative py-24 bg-black text-white overflow-hidden">
                <div className="container mx-auto px-4 relative">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Tender Process?</h2>
                        <p className="text-xl mb-12 text-gray-400">
                            Join the waitlist today and get exclusive early-bird pricing when we launch
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/request" className="group bg-white text-black px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-gray-100 transition-colors">
                                Join Waitlist
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                            <a href="/contact-sales" className="group px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 border-2 border-white hover:bg-white/10 transition-colors">
                                Contact Sales
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/20 to-transparent"></div>
                <div className="absolute -top-16 -right-16 w-32 h-32 border border-white/20 rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/5 rounded-xl rotate-12"></div>
            </div>
        </footer>
    )
}

export default Footer