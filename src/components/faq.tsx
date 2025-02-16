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
        }
    ];


    return (
        <section className="container mx-auto px-4 relative">
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
            )
        </section>
    )
}

export default FAQ