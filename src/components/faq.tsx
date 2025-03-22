'use client'
import React, { useState, useEffect } from 'react'
import { IFaq } from '@/lib/type';
import { Minus, Plus, Search } from 'lucide-react';
import { useLocale } from '../../context/localContext';
import { localizedRoutes } from '../../i18n.config';
import Link from 'next/link';
import enFaqs from '../../dictionaries/faqs-en.json';
import frFaqs from '../../dictionaries/faqs-fr.json';
import arFaqs from '../../dictionaries/faqs-ar.json';
function FAQ() {

    const localizedFaqs = {
        en: enFaqs.faqs,
        fr: frFaqs.faqs,
        ar: arFaqs.faqs
    };


    const { t, locale, } = useLocale();
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const [filteredFaqs, setFilteredFaqs] = useState<(IFaq & { category: string })[]>([]);

    const categories = [
        { id: 'all', name: t('faq.categories.all') },
        { id: 'features', name: t('faq.categories.features') },
        { id: 'pricing', name: t('faq.categories.pricing') },
        { id: 'technical', name: t('faq.categories.technical') },
        { id: 'team', name: t('faq.categories.team') }
    ];
    const faqs = localizedFaqs[locale];

    useEffect(() => {
        const filtered = faqs.filter(faq => {
            const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
            const matchesSearch = searchTerm === '' ||
                faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                faq.answer.toLowerCase().includes(searchTerm.toLowerCase());

            return matchesCategory && matchesSearch;
        });

        setFilteredFaqs(filtered);
    }, [searchTerm, activeCategory, faqs]);

    return (
        <section className="container mx-auto px-4 relative py-24" id="faq">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8">{t('faq.title')}</h2>
                <p className="text-xl text-gray-600 text-center mb-12">
                    {t('faq.subtitle')}
                </p>

                {/* Search Bar */}
                <div className="relative mb-8">
                    <div className={`absolute inset-y-0  flex items-center pointer-events-none`}>
                        <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder={t('faq.searchPlaceholder')}
                        className={`block w-full  py-3 border border-gray-300 rounded-lg focus:ring-black focus:border-black`}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Category Tabs */}
                <div className={`flex flex-wrap gap-2 mb-8 `}>
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category.id
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
                                    className={`w-full px-6 py-4  flex items-center justify-between font-semibold`}
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    aria-expanded={openFaq === index}
                                >
                                    <span >{faq.question}</span>
                                    {openFaq === index ? (
                                        <Minus className="w-5 h-5 flex-shrink-0" />
                                    ) : (
                                        <Plus className="w-5 h-5 flex-shrink-0" />
                                    )}
                                </button>
                                {openFaq === index && (
                                    <div className={`px-6 pb-5 text-gray-600 `}>
                                        <p className="text-gray-600">{faq.answer}</p>
                                        <div className={`mt-3 flex `}>
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
                            <p className="text-gray-500">{t('faq.noResults')}</p>
                            <button
                                className="mt-4 text-black font-medium underline"
                                onClick={() => {
                                    setSearchTerm('');
                                    setActiveCategory('all');
                                }}
                            >
                                {t('faq.resetFilters')}
                            </button>
                        </div>
                    )}
                </div>

                {/* Still have questions */}
                <div className="mt-16 text-center p-8 bg-gray-50 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-3">{t('faq.stillHaveQuestions.title')}</h3>
                    <p className="text-gray-600 mb-6">
                        {t('faq.stillHaveQuestions.text')}
                    </p>
                    <Link
                        href={localizedRoutes.contact[locale]}
                        className="inline-block bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-900 transition-colors"
                    >
                        {t('faq.stillHaveQuestions.cta')}
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default FAQ