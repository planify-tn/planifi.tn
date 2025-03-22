"use client";
import { Check } from 'lucide-react'
import Link from 'next/link';
import React, { useState } from 'react'
import { useLocale } from '../../context/localContext';
import { localizedRoutes } from '../../i18n.config';

function Pricing() {
    const { t, locale } = useLocale();
    // State to track billing period
    const [billingPeriod, setBillingPeriod] = useState('monthly');

    // Plans data with both monthly and quarterly pricing
    const plans = [
        {
            key: 'pro',
            monthly: {
                price: "$199",
                period: t('pricing.monthly_period') || "per user/month",
            },
            quarterly: {
                price: "$179",
                period: t('pricing.quarterly_period') || "per user/month, billed quarterly",
            },
            highlighted: false,
            featureKeys: [
                'unlimited_projects',
                'team_members_20',
                'advanced_project_views',
                'document_repository',
                'document_versioning',
                'tender_tracking',
                'storage_5gb',
                'priority_support'
            ]
        },
        {
            key: 'plus',
            monthly: {
                price: "$130",
                period: t('pricing.monthly_period') || "per user/month",
            },
            quarterly: {
                price: "$117",
                period: t('pricing.quarterly_period') || "per user/month, billed quarterly",
            },
            highlighted: true,
            badge: t('pricing.plans.plus.badge'),
            featureKeys: [
                'unlimited_projects',
                'team_members_10',
                'basic_project_views',
                'document_repository',
                'basic_document_versioning',
                'tender_tracking',
                'storage_2gb',
                'standard_support'
            ]
        },
        {
            key: 'enterprise',
            monthly: {
                price: t('pricing.custom_price') || "Custom",
                period: t('pricing.custom_period') || "tailored to your needs",
            },
            quarterly: {
                price: t('pricing.custom_price') || "Custom",
                period: t('pricing.custom_period') || "tailored to your needs",
            },
            highlighted: false,
            featureKeys: [
                'unlimited_projects',
                'team_members_unlimited',
                'all_project_views',
                'advanced_document_repository',
                'advanced_document_versioning',
                'advanced_tender_tracking',
                'custom_storage',
                'dedicated_support',
                'custom_integrations',
                'on_premises'
            ]
        }
    ];

    return (
        <section id='pricing' className='py-24 '>
            <div className='container mx-auto px-4 lg:px-0 space-y-16'>
                <div className='text-center'>
                    <h2 className="text-4xl font-bold mb-4">{t('pricing.title')}</h2>
                    <p className="text-xl text-black max-w-2xl mx-auto">
                        {t('pricing.subtitle')}
                    </p>

                    <div className="flex flex-col items-center justify-center mt-8">
                        <div className="relative inline-flex items-center">
                            <div className="relative z-0 flex p-1 bg-gray-100 dark:bg-gray-800 rounded-full shadow-inner">
                                <button
                                    onClick={() => setBillingPeriod('monthly')}
                                    className={`relative px-6 py-2 text-sm font-medium transition-all duration-200 ease-in-out rounded-full whitespace-nowrap
                                    ${billingPeriod === 'monthly'
                                            ? 'text-white dark:text-black'
                                            : 'text-black hover:text-gray-900'}`}
                                >
                                    {t('pricing.monthly')}
                                    {billingPeriod === 'monthly' && (
                                        <span className="absolute inset-0 bg-black dark:bg-white rounded-full"
                                            style={{
                                                zIndex: -1,
                                                transition: "all 0.3s ease"
                                            }}
                                        />
                                    )}
                                </button>
                                <button
                                    onClick={() => setBillingPeriod('quarterly')}
                                    className={`relative px-6 py-2 text-sm font-medium transition-all duration-200 ease-in-out rounded-full whitespace-nowrap
                                    ${billingPeriod === 'quarterly'
                                            ? 'text-white dark:text-black'
                                            : 'text-black hover:text-gray-900'}`}
                                >
                                    {t('pricing.quarterly')}
                                    {billingPeriod === 'quarterly' && (
                                        <span className="absolute inset-0 bg-black rounded-full dark:bg-white"
                                            style={{
                                                zIndex: -1,
                                                transition: "all 0.3s ease"
                                            }}
                                        />
                                    )}
                                </button>
                            </div>
                        </div>

                        {billingPeriod === 'quarterly' && (
                            <span className="mt-2 bg-green-100 dark:bg-green-900 dark:text-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full inline-flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {t('pricing.savingsLabel')}
                            </span>
                        )}
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`group relative ${plan.highlighted
                                ? 'bg-black text-white dark:bg-white dark:text-black'
                                : 'bg-white dark:bg-black border-2 border-gray-200 hover:border-black   dark:hover:border-white'} 
                                rounded-3xl transition-colors`}
                        >
                            {plan.badge && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-stone-300 dark:bg-stone-800 text-black dark:text-white px-6 py-1 rounded-xl text-sm font-bold !z-50">
                                    {plan.badge}
                                </div>
                            )}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-1">{t(`pricing.plans.${plan.key}.name`)}</h3>
                                <p className={`${plan.highlighted ? 'text-white dark:text-black' : 'text-black dark:text-white'} mb-6`}>
                                    {t(`pricing.plans.${plan.key}.description`)}
                                </p>
                                <div className="mb-8">
                                    <span className="text-3xl font-bold">
                                        {billingPeriod === 'monthly' ? plan.monthly.price : plan.quarterly.price}
                                    </span>
                                    <span className={`ml-2 ${plan.highlighted ? 'text-white dark:text-black' : 'text-black dark:text-white'}`}>
                                        {billingPeriod === 'monthly' ? plan.monthly.period : plan.quarterly.period}
                                    </span>
                                </div>

                                <div className="mb-8">
                                    <h4 className={`font-semibold mb-4 ${plan.highlighted ? 'text-white dark:text-black' : 'text-black dark:text-white'}`}>
                                        {t('pricing.included')}
                                    </h4>
                                    <ul className="space-y-3">
                                        {plan.featureKeys.map((featureKey, fIndex) => (
                                            <li key={fIndex} className={`flex items-start gap-3`}>
                                                <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-white dark:text-black' : 'text-black dark:text-white'}`} />
                                                <span>{t(`pricing.features.${featureKey}`)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link
                                    href={`${localizedRoutes.request[locale]}?plan=${plan.key}${billingPeriod === 'quarterly' ? '&billing=quarterly' : ''}`}
                                    className={`w-full py-4 px-3 rounded-full font-semibold block text-center ${plan.highlighted
                                        ? 'bg-white dark:bg-black text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900'
                                        : 'border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-black dark:text-white group-hover:bg-black group-hover:text-white'
                                        } transition-colors`}
                                >
                                    {t(`pricing.plans.${plan.key}.cta`)}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <p className="text-lg mb-4">{t('pricing.helpText')}</p>
                    <Link href={localizedRoutes.contact[locale]} className="text-black dark:text-white font-semibold underline">
                        {t('pricing.contactSales')}
                    </Link>
                </div>

                <div className="mt-16 text-center p-8 bg-gray-50 dark:bg-black rounded-2xl border-2 border-gray-200 dark:border-gray-800">
                    <h3 className="text-2xl font-bold mb-3">{t('footer.cta.title')}</h3>

                    <Link
                        href={localizedRoutes.request[locale]}
                        className={`group bg-black text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 dark:bg-white dark:text-black transition-colors `}
                    >
                        {t('footer.cta.button')}
                        <Check className={`w-5 h-5`} />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Pricing