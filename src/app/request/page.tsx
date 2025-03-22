"use client"
import React, { FormEvent } from 'react';

const LeadForm = () => {

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
                alert("Thank you for your submission!");
                e.currentTarget.reset();
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Please try again.");
        }
    };



    return (
        <section className="min-h-screen py-12">
            <h1 className='mx-auto text-3xl py-12 text-center font-semibold capitalize'>Submit your request</h1>
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
                        Company Name
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
                        Full Name
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
                        Work Email
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
                        Phone Number
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
                        Interested Plan
                    </label>
                    <select
                        id="plan"
                        name="plan"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-black focus:outline-none"
                    >
                        <option value="">Select a plan</option>
                        <option value="pro">Pro Plan</option>
                        <option value="plus">Plus Plan</option>
                        <option value="enterprise">Enterprise</option>
                    </select>
                </div>

                {/* Company Size */}
                <div>
                    <label htmlFor="size" className="block text-sm font-medium mb-2">
                        Company Size
                    </label>
                    <select
                        id="size"
                        name="size"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-black focus:outline-none"
                    >
                        <option value="">Select company size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201+">201+ employees</option>
                    </select>
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Additional Information (Optional)
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-black focus:outline-none"
                        placeholder="Tell us about your specific needs or questions..."
                    />
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
                    >
                        Submit Pre-order Request
                    </button>
                </div>

                {/* Privacy Note */}
                <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                </p>
            </form>
        </section>
    );
};

export default LeadForm;