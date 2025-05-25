import React, { useState } from "react";

const faqs = [
    {
        question: "Do I need equipment?",
        answer:
            "Nope! FitMind builds plans for equipment-free, home, or full gym access.",
    },
    {
        question: "Can I cancel my subscription anytime?",
        answer:
            "Yes, you can cancel your subscription at any time without any penalties.",
    },
    {
        question: "Are workouts suitable for beginners?",
        answer:
            "Absolutely! Our plans are tailored to your fitness level, whether you're a beginner or advanced.",
    },
    {
        question: "Is there a mobile app available?",
        answer:
            "Yes, you can access your workouts and progress on our mobile app for both iOS and Android.",
    },
    {
        question: "Can I customize my workout plan?",
        answer:
            "Definitely! FitMind allows you to personalize your workout goals and preferences.",
    },
    {
        question: "Do you offer nutrition advice?",
        answer:
            "Yes, Pro Plan members get smart nutrition guidance tailored to their goals.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="max-w-4xl mx-auto p-8 mb-10 bg-[#F5F5F5] rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-10 text-center text-black">
                Frequently Asked Questions
            </h2>

            <div className="space-y-4">
                {faqs.map(({ question, answer }, index) => (
                    <div
                        key={index}
                        className="border border-black rounded-lg overflow-hidden"
                    >
                        <button
                            className="w-full flex justify-between items-center px-6 py-4 bg-white text-black font-semibold text-left hover:bg-gray-100 transition-colors"
                            onClick={() => toggleFAQ(index)}
                            aria-expanded={openIndex === index}
                            aria-controls={`faq-panel-${index}`}
                            id={`faq-header-${index}`}
                        >
                            <span>{question}</span>
                            <svg
                                className={`w-6 h-6 transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <div
                            id={`faq-panel-${index}`}
                            role="region"
                            aria-labelledby={`faq-header-${index}`}
                            className={`px-6 text-black bg-white transition-max-height duration-500 ease-in-out overflow-hidden ${openIndex === index ? "max-h-96 py-4" : "max-h-0 py-0"
                                }`}
                            style={{ willChange: "max-height" }}
                        >
                            {answer}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
