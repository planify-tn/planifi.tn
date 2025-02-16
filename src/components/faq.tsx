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