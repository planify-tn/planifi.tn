'use client'
import React, { useState, useEffect } from 'react'
import { IFaq } from '@/lib/type';
import { Minus, Plus, Search } from 'lucide-react';

function FAQ() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const [filteredFaqs, setFilteredFaqs] = useState<(IFaq & { category: string })[]>([]);

    const categories = [
        { id: 'all', name: 'All Questions' },
        { id: 'features', name: 'Features & Usage' },
        { id: 'pricing', name: 'Pricing & Plans' },
        { id: 'technical', name: 'Technical & Hosting' },
        { id: 'team', name: 'Team & Access' }
    ];

    const faqs: (IFaq & { category: string })[] = [
        // Features & Usage FAQs
        {
            question: "How does the tender grabber extension work?",
            answer: "Our browser extension automatically detects and extracts tender information from supported websites. With one click, it imports all relevant data directly into your platform account, maintaining proper formatting and organization.",
            category: "features"
        },
        {
            question: "What file formats does the platform support?",
            answer: "PLANIFY supports all common file formats including PDF, Word, Excel, PowerPoint, image files, and CAD drawings. Our smart file manager helps organize and version control all your documents with advanced search capabilities.",
            category: "features"
        },
        {
            question: "Is there a limit to how many tenders I can manage?",
            answer: "No, all plans come with unlimited tender management. You can track and manage as many tenders as your business requires without any additional costs.",
            category: "features"
        },
        {
            question: "Can I customize the HR module for my company structure?",
            answer: "Yes, the HR module is fully customizable to match your organization's hierarchy, departments, and roles. You can easily add custom fields, create specific workflows, and adjust permissions to match your needs.",
            category: "features"
        },
        
        // Pricing & Plans FAQs
        {
            question: "What are the differences between Pro and Plus plans?",
            answer: "The Pro plan includes essential features like HR module (up to 50 employees), 10GB document storage, basic project management, and support for up to 10 team members. The Plus plan adds unlimited employees, 50GB storage, advanced project management, the browser extension for automatic tender capturing, priority support, advanced analytics, and API access for integrations.",
            category: "pricing"
        },
        {
            question: "Do you offer a free trial?",
            answer: "Yes, we offer a 14-day free trial on both Pro and Plus plans. No credit card is required to start your trial, and you'll have access to all features in your selected plan.",
            category: "pricing"
        },
        {
            question: "Are there any long-term contracts?",
            answer: "No, all our plans are billed month-to-month with no long-term commitment required. However, we do offer discounts of up to 20% for annual subscriptions, which can provide significant savings.",
            category: "pricing"
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept major credit cards (Visa, Mastercard), bank transfers, and mobile payment solutions available in Tunisia. Enterprise customers can arrange for invoice-based payments with custom billing cycles.",
            category: "pricing"
        },
        {
            question: "Can I get a refund?",
            answer: "We offer a 30-day money-back guarantee if you're not satisfied with our service. Contact our support team to process your refund, no questions asked.",
            category: "pricing"
        },
        
        // Technical & Hosting FAQs
        {
            question: "Where is my data stored?",
            answer: "Your data is securely stored in our cloud infrastructure with servers located in Europe / Tunisia, ensuring high availability and compliance with data protection regulations. All data is encrypted both in transit and at rest.",
            category: "technical"
        },
        {
            question: "Can I host PLANIFI on my own servers?",
            answer: "Yes, we offer self-hosting options for enterprise customers. Our self-hosted solution can be deployed on-premises or in your private cloud environment, giving you complete control over your data and configuration.",
            category: "technical"
        },
        {
            question: "How often is my data backed up?",
            answer: "We perform automated backups daily, with point-in-time recovery available for the last 30 days. Enterprise customers can configure custom backup schedules and longer retention periods to meet specific requirements.",
            category: "technical"
        },
        {
            question: "What is your uptime guarantee?",
            answer: "We maintain a 99.9% uptime SLA for our cloud-hosted solution, with real-time status monitoring and alerts. Our infrastructure is designed with redundancy at every level to ensure continuous availability.",
            category: "technical"
        },
        {
            question: "Which browsers are supported?",
            answer: "PLANIFI works on all modern browsers including Chrome, Firefox, Safari, and Edge. Our browser extension is currently available for Chrome and Firefox, with support for other browsers coming soon.",
            category: "technical"
        },
        {
            question: "Does PLANIFI work with other business tools?",
            answer: "Yes, PLANIFY integrates with common business tools including Office 365, Google Workspace, popular CRM systems, and project management tools. Plus plan users get API access for custom integrations with your existing systems.",
            category: "technical"
        },
        
        // Team & Access FAQs
        {
            question: "Is there a limit to how many team members I can add?",
            answer: "Pro plan supports up to 10 team members, while Plus plan allows unlimited team members. Each plan includes granular permission controls to manage access levels for different team members.",
            category: "team"
        },
        {
            question: "Can I control what different team members can access?",
            answer: "Yes, PLANIFI offers comprehensive role-based access control. Administrators can set specific permissions for each team member, controlling their access to sensitive documents, projects, and features based on their role and responsibilities.",
            category: "team"
        },
        {
            question: "How do I add team members to the platform?",
            answer: "Adding team members is simple. As an administrator, you can invite team members via email from the Team Management section. They'll receive an invitation to create an account and will be automatically added to your organization with the permissions you've assigned.",
            category: "team"
        },
        {
            question: "Can I transfer ownership of projects between team members?",
            answer: "Yes, project ownership and responsibilities can be easily transferred between team members. This is particularly useful when staff changes occur or when reorganizing your team structure for specific tender responses.",
            category: "team"
        }
    ];

    // Filter FAQs based on search term and active category
    useEffect(() => {
        const filtered = faqs.filter(faq => {
            const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
            const matchesSearch = searchTerm === '' || 
                faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
            
            return matchesCategory && matchesSearch;
        });
        
        setFilteredFaqs(filtered);
    }, [searchTerm, activeCategory]);

    return (
        <section className="container mx-auto px-4 relative py-24" id="faq">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                <p className="text-xl text-gray-600 text-center mb-12">
                    Find answers to common questions about Planify's features, pricing, and technical details
                </p>
                
                {/* Search Bar */}
                <div className="relative mb-8">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search for questions..."
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                
                {/* Category Tabs */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                activeCategory === category.id
                                    ? 'bg-black text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
                
                {/* FAQ Items */}
                <div className="space-y-4">
                    {filteredFaqs.length > 0 ? (
                        filteredFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-gray-300 transition-colors"
                            >
                                <button
                                    className="w-full px-6 py-4 text-left flex items-center justify-between font-semibold"
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    aria-expanded={openFaq === index}
                                >
                                    <span className="pr-8">{faq.question}</span>
                                    {openFaq === index ? (
                                        <Minus className="w-5 h-5 flex-shrink-0" />
                                    ) : (
                                        <Plus className="w-5 h-5 flex-shrink-0" />
                                    )}
                                </button>
                                {openFaq === index && (
                                    <div className="px-6 pb-5 text-gray-600">
                                        <p className="text-gray-600">{faq.answer}</p>
                                        <div className="mt-3 flex">
                                            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full uppercase">
                                                {categories.find(cat => cat.id === faq.category)?.name || faq.category}
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-10">
                            <p className="text-gray-500">No questions found matching your criteria.</p>
                            <button 
                                className="mt-4 text-black font-medium underline"
                                onClick={() => {
                                    setSearchTerm('');
                                    setActiveCategory('all');
                                }}
                            >
                                Reset filters
                            </button>
                        </div>
                    )}
                </div>
                
                {/* Still have questions */}
                <div className="mt-16 text-center p-8 bg-gray-50 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
                    <p className="text-gray-600 mb-6">
                        Our team is here to help you get the most out of Planify
                    </p>
                    <a 
                        href="/contact" 
                        className="inline-block bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-900 transition-colors"
                    >
                        Contact Support
                    </a>
                </div>
            </div>
        </section>
    )
}

export default FAQ