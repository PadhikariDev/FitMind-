import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
    {
        name: "Alice Johnson",
        photo: "https://randomuser.me/api/portraits/women/68.jpg",
        goal: "Lost 10kg in 2 months",
        body: "I reached my goal faster than I ever thought possible!",
    },
    {
        name: "Mike Thompson",
        photo: "https://randomuser.me/api/portraits/men/32.jpg",
        goal: "Gained muscle and strength",
        body: "No trainer needed. This plan is amazing!",
    },
    {
        name: "Sara Lee",
        photo: "https://randomuser.me/api/portraits/women/44.jpg",
        goal: "Improved flexibility and balance",
        body: "I feel so much better and stronger every day.",
    },
    {
        name: "John Doe",
        photo: "https://randomuser.me/api/portraits/men/15.jpg",
        goal: "Lost 5kg in 1 month",
        body: "Simple, effective, and easy to follow.",
    },
    {
        name: "Emma Smith",
        photo: "https://randomuser.me/api/portraits/women/21.jpg",
        goal: "Increased endurance",
        body: "Loved how personalized this was for me.",
    },
    {
        name: "David Brown",
        photo: "https://randomuser.me/api/portraits/men/51.jpg",
        goal: "Ran my first 10k race",
        body: "Thanks to the program, I crushed my goals!",
    },
];

const containerVariants = {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

export default function AnimatedTestimonialSlider() {
    const [index, setIndex] = useState(0);
    const count = testimonials.length;

    const visibleTestimonials = [
        testimonials[index % count],
        testimonials[(index + 1) % count],
        testimonials[(index + 2) % count],
    ];

    const prev = () => {
        setIndex((prevIndex) => (prevIndex - 1 + count) % count);
    };

    const next = () => {
        setIndex((prevIndex) => (prevIndex + 1) % count);
    };

    return (
        <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto rounded-lg bg-[#E6FBFF]">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-[#333333] max-w-3xl mx-auto">
                “I reached my 6-month goal in 8 weeks — without a single trainer.”
            </h2>

            <div className="flex flex-col lg:flex-row items-center justify-center max-w-5xl mx-auto gap-6">
                {/* Prev Button */}
                <button
                    onClick={prev}
                    className="px-5 py-2 sm:px-6 sm:py-3 bg-[#DDA853] text-[#5E7B56] rounded-full font-semibold hover:bg-[#b47e3d] transition"
                >
                    Prev
                </button>

                {/* Testimonials */}
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={index}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 w-full"
                        variants={containerVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                        {visibleTestimonials.map(({ name, photo, goal, body }) => (
                            <div
                                key={name}
                                className="bg-[#73946B]/80 p-6 rounded-lg shadow-lg flex flex-col items-center text-center text-[#F5F5F5]"
                            >
                                <img
                                    src={photo}
                                    alt={`${name} photo`}
                                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-4 border-4 border-[#DDA853]"
                                />
                                <h3 className="text-lg sm:text-xl font-semibold">{name}</h3>
                                <p className="text-sm italic mb-2">{goal}</p>
                                <p className="text-sm sm:text-base">{body}</p>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Next Button */}
                <button
                    onClick={next}
                    className="px-5 py-2 sm:px-6 sm:py-3 bg-[#DDA853] text-[#5E7B56] rounded-full font-semibold hover:bg-[#b47e3d] transition"
                >
                    Next
                </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 text-[#F5F5F5] mt-12 px-4">
                <div className="flex items-center gap-3 bg-[#DDA853] px-5 py-3 rounded-full font-semibold shadow-md w-full sm:w-auto justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#73946B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2l4 -4" />
                    </svg>
                    <span className="text-sm sm:text-base">Loved by 50,000+ users</span>
                </div>

                <div className="flex items-center gap-3 bg-[#DDA853] px-5 py-3 rounded-full font-semibold shadow-md w-full sm:w-auto justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#73946B]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.182c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.388-2.462a1 1 0 00-1.175 0l-3.388 2.462c-.784.57-1.838-.196-1.54-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.043 9.4c-.783-.57-.38-1.81.588-1.81h4.182a1 1 0 00.95-.69l1.286-3.974z" />
                    </svg>
                    <span className="text-sm sm:text-base">App Store Rating 4.8 ★</span>
                </div>
            </div>
        </section>
    );
}
