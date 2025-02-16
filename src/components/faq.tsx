'use client'
import React, { useState } from 'react'
import { IFaq } from '@/lib/type';
import { Minus, Plus } from 'lucide-react';

function FAQ() {

    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqs: IFaq[] = [
        {
            question: "How does the tender grabber extension work?",
            answer: "Our browser extension automatically detects and extracts tender information from supported websites. With one click, it imports all relevant data directly into your platform account, maintaining proper formatting and organization."
        },
        {
            question: "Can I customize the HR module for my company structure?",
            answer: "Yes, the HR module is fully customizable to match your organization's hierarchy, departments, and roles. You can easily add custom fields, create specific workflows, and adjust permissions to match your needs."
        },
        {
            question: "What kind of support do you provide?",
            answer: "We offer 24/7 email support for all plans. Plus plan subscribers also get priority support with dedicated account managers and phone support during business hours."
        },
        {
            question: "Is there a limit to how many tenders I can manage?",
            answer: "No, all plans come with unlimited tender management. You can track and manage as many tenders as your business requires without any additional costs."
        },
        {
            question: "What are the differences between Pro and Plus plans?",
            answer: "The Pro plan includes essential features like HR module, file management, and basic tools. The Plus plan adds advanced features including our browser extension for automatic tender capturing, priority support, and advanced analytics."
        },
        {
            question: "Can I switch between plans?",
            answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, you'll retain access to your current features until the end of your billing period."
        },
        {
            question: "Do you offer a free trial?",
            answer: "Yes, we offer a 14-day free trial on both Pro and Plus plans. No credit card is required to start your trial."
        },
        {
            question: "Are there any long-term contracts?",
            answer: "No, all our plans are billed month-to-month with no long-term commitment required. However, we do offer discounts for annual subscriptions."
        },

        // Hosting FAQs
        {
            question: "Where is my data stored?",
            answer: "Your data is securely stored in our cloud infrastructure with servers located in Europe / Tunisia, ensuring high availability and compliance with data protection regulations."
        },
        {
            question: "Can I host PLANIFI on my own servers?",
            answer: "Yes, we offer self-hosting options for enterprise customers. Contact our sales team for more information about on-premise deployment."
        },
        {
            question: "How often is my data backed up?",
            answer: "We perform automated backups daily, with point-in-time recovery available for the last 30 days."
        },
        {
            question: "What is your uptime guarantee?",
            answer: "We maintain a 99.9% uptime SLA for our cloud-hosted solution, with real-time status monitoring and alerts."
        },

        // Payment FAQs
        {
            question: "What payment methods do you accept?",
            answer: "We accept major credit cards (Visa, Mastercard), bank transfers, and mobile payment solutions available in Tunisia. Enterprise customers can arrange for invoice-based payments."
        },
        {
            question: "Is my payment information secure?",
            answer: "Yes, all payment processing is handled through secure, certified payment processors. We don't store any sensitive payment information on our servers."
        },
        {
            question: "Can I get a refund?",
            answer: "We offer a 30-day money-back guarantee if you're not satisfied with our service. Contact our support team to process your refund."
        },
        {
            question: "Can I export my data if I decide to leave?",
            answer: "Yes, you can export all your data in standard formats (CSV, Excel) at any time. We believe in data portability and making sure you're always in control of your information."
        },

        // Team & Access Management
        {
            question: "Is there a limit to how many team members I can add?",
            answer: "Pro plan supports up to 10 team members, while Plus plan allows unlimited team members. Each plan includes granular permission controls to manage access levels."
        },
        {
            question: "Can I control what different team members can access?",
            answer: "Yes, PLANIFI offers role-based access control. Administrators can set specific permissions for each team member, controlling their access to sensitive documents and features."
        },

        // Features & Usage
        {
            question: "What file formats does the platform support?",
            answer: "PLANIFI supports all common file formats including PDF, Word, Excel, PowerPoint, and image files. Our smart file manager helps organize and version control all your documents."
        },
        {
            question: "Do you offer training or onboarding support?",
            answer: "Yes, all plans include access to our knowledge base and video tutorials. Plus plan customers receive personalized onboarding sessions and priority support."
        },

        // Integration & Compatibility
        {
            question: "Does PLANIFI work with other business tools?",
            answer: "Yes, PLANIFI integrates with common business tools. Our Plus plan includes API access for custom integrations with your existing systems."
        },
        {
            question: "Which browsers are supported?",
            answer: "PLANIFI works on all modern browsers including Chrome, Firefox, Safari, and Edge. Our browser extension is currently available for Chrome and Firefox."
        },

        // Language & Support
        {
            question: "Is the platform available in multiple languages?",
            answer: "Currently, PLANIFI is available in English and French, with Arabic support coming soon. We're continuously adding support for more languages."
        },
        {
            question: "What kind of support is available for technical issues?",
            answer: "Pro plan includes email support with 24-hour response time. Plus plan users get priority support with 4-hour response time and direct phone support during business hours."
        },

        // Updates & Customization
        {
            question: "How often do you update the platform?",
            answer: "We release updates monthly, including new features, improvements, and security patches. All updates are automatically available to all users."
        },
        {
            question: "Can I request custom features for my business?",
            answer: "Plus plan customers can request custom features through our feature request system. Enterprise customers get access to custom development options."
        }
    ];


    return (
        <section className="container mx-auto px-4 relative py-24" id="faq">
            <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>

            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200"
                    >
                        <button
                            className="w-full px-6 py-4 text-left flex items-center justify-between font-semibold"
                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        >
                            {faq.question}
                            {openFaq === index ?
                                <Minus className="w-5 h-5 flex-shrink-0" /> :
                                <Plus className="w-5 h-5 flex-shrink-0" />
                            }
                        </button>
                        {openFaq === index && (
                            <div className="px-6 pb-4 text-gray-600">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FAQ