"use client"
import React, { FormEvent } from 'react';
import { useLocale } from '../../../../context/localContext';

const LeadForm = () => {
    const { t, } = useLocale();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData as never).toString(),
            });

            if (response.ok) {
                alert(t('form.success'));
                e.currentTarget.reset();
            } else {
                alert(t('form.error'));
            }
        } catch (error) {
            console.error("Error:", error);
            alert(t('form.error'));
        }
    };

    return (
        <section className="min-h-screen bg-white py-12" >
            <h1 className='mx-auto text-3xl py-12 text-center font-semibold capitalize'>{t('form.title')}</h1>
            <form
                name="preorder-contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="space-y-6 max-w-xl mx-auto"
                onSubmit={handleSubmit}
            >
                <input type="hidden" name="form-name" value="preorder-contact" />
                <p className="hidden">
                    <label>
                        Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                </p>

                {/* Company Name */}
                <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                        {t('form.company')}
                    </label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-black focus:outline-none"
                    />
                </div>

                {/* Full Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                        {t('form.fullName')}
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-black focus:outline-none"
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                        {t('form.email')}
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-black focus:outline-none"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        {t('form.phone')}
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-black focus:outline-none"
                    />
                </div>

                {/* Plan Selection */}
                <div>
                    <label htmlFor="plan" className="block text-sm font-medium mb-2">
                        {t('form.plan.label')}
                    </label>
                    <select
                        id="plan"
                        name="plan"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-black focus:outline-none"
                    >
                        <option value="">{t('form.plan.placeholder')}</option>
                        <option value="pro">{t('form.plan.pro')}</option>
                        <option value="plus">{t('form.plan.plus')}</option>
                        <option value="enterprise">{t('form.plan.enterprise')}</option>
                    </select>
                </div>

                {/* Company Size */}
                <div>
                    <label htmlFor="size" className="block text-sm font-medium mb-2">
                        {t('form.companySize.label')}
                    </label>
                    <select
                        id="size"
                        name="size"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-black focus:outline-none"
                    >
                        <option value="">{t('form.companySize.placeholder')}</option>
                        <option value="1-10">{t('form.companySize.size1')}</option>
                        <option value="11-50">{t('form.companySize.size2')}</option>
                        <option value="51-200">{t('form.companySize.size3')}</option>
                        <option value="201+">{t('form.companySize.size4')}</option>
                    </select>
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                        {t('form.message.label')}
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-black focus:outline-none"
                        placeholder={t('form.message.placeholder')}
                    />
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
                    >
                        {t('form.submit')}
                    </button>
                </div>

                {/* Privacy Note */}
                <p className="text-sm text-gray-500 text-center">
                    {t('form.privacyNote')}
                </p>
            </form>
        </section>
    );
};

export default LeadForm;