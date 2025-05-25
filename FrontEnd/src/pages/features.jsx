
import { useEffect } from "react";
import { useInView } from "react-intersection-observer"; // ✅ Correct hook
import Lottie from "lottie-react";
import {
    FaBrain, FaCamera, FaAppleAlt, FaClock, FaBed, FaRobot, FaCheckCircle
} from "react-icons/fa";

import avatarAnimation from "../assets/feature1.json";
import postureAnimation from "../assets/feature2.json";
import mealAnimation from "../assets/feature3.json";
import calendarAnimation from "../assets/feature4.json";
import sleepAnimation from "../assets/feature5.json";
import coachAnimation from "../assets/feature6.json";

const features = [
    {
        icon: <FaBrain className="text-4xl text-[#FF6B6B]" />,
        title: "AI-Powered Adaptive Workout Plans",
        idea: <Lottie animationData={avatarAnimation} loop={true} className="w-full mb-4" />,
        description: "FitMind AI crafts workout routines that evolve...",
        benefit: "Tailored training that adapts to YOU, not the other way around.",
    },
    {
        icon: <FaCamera className="text-4xl text-[#4ECDC4]" />,
        title: "Smart Form Correction via AI Feedback",
        idea: <Lottie animationData={postureAnimation} loop={true} className="w-full mb-4" />,
        description: "Use your phone or webcam to get real-time form feedback...",
        benefit: "Train safely and effectively with AI watching your back—literally.",
    },
    {
        icon: <FaAppleAlt className="text-4xl text-[#FFE66D]" />,
        title: "Macro-Based Meal Suggestions & Nutrition Coaching",
        idea: <Lottie animationData={mealAnimation} loop={true} className="w-full mb-4" />,
        description: "Receive meal plans and snack ideas...",
        benefit: "No guesswork—just personalized nutrition that fuels results.",
    },
    {
        icon: <FaClock className="text-4xl text-[#FF6B6B]" />,
        title: "Dynamic Scheduling with Smart Reminders",
        idea: <Lottie animationData={calendarAnimation} loop={true} className="w-full mb-4" />,
        description: "FitMind AI intelligently reschedules workouts...",
        benefit: "Stay consistent—even when life gets messy.",
    },
    {
        icon: <FaBed className="text-4xl text-[#4ECDC4]" />,
        title: "Sleep & Recovery Optimization",
        idea: <Lottie animationData={sleepAnimation} loop={true} className="w-full mb-4" />,
        description: "Track sleep patterns and recovery quality...",
        benefit: "Better rest = better performance. Let recovery work for you.",
    },
    {
        icon: <FaRobot className="text-4xl text-[#FFE66D]" />,
        title: "24/7 Virtual Coaching & Instant Advice",
        idea: <Lottie animationData={coachAnimation} loop={true} className="w-full mb-4" />,
        description: "Have a question at midnight? FitMind AI’s virtual assistant is ready...",
        benefit: "It’s like carrying a personal coach in your pocket—always on.",
    },
];



export default function Features() {
    return (
        <section className="py-16 px-4 md:px-20">
            <h2 className="text-4xl font-bold text-center text-[#333] mb-4">
                Why Choose <span className="text-[#DDA853]">FitMind AI</span>?
            </h2>
            <p className="text-center text-[#555] mb-12 text-lg max-w-2xl mx-auto">
                Revolutionize your fitness journey with intelligent, all-in-one personalization.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, idx) => (
                    <div
                        key={idx}
                        className="bg-[#F5F5F5] p-4 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1"
                    >
                        <div className="flex justify-center mb-2">{feature.icon}</div>
                        <div className="flex justify-center mb-2">
                            <div className="h-36 w-full max-w-[160px]">{feature.idea}</div>
                        </div>
                        <h3 className="text-base font-semibold text-center text-[#333] mb-1">
                            {feature.title}
                        </h3>
                        <p className="text-xs text-[#555] text-center mb-2 px-2">
                            🚀 {feature.description}
                        </p>
                        <p className="text-[#DDA853] text-xs font-medium flex items-center justify-center gap-2 text-center">
                            <FaCheckCircle className="text-sm" /> {feature.benefit}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
