import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const workoutsByEquipment = {
    Home: "20 mins bodyweight circuit with dumbbells",
    Gym: "45 mins strength training + cardio",
    None: "30 mins stretching and mobility exercises",
};

const weeklyGoals = [
    { day: "Mon", done: true },
    { day: "Tue", done: false },
    { day: "Wed", done: true },
    { day: "Thu", done: false },
    { day: "Fri", done: true },
    { day: "Sat", done: false },
    { day: "Sun", done: false },
];
const progressData = [
    { metric: "Strength", percent: 55 },
    { metric: "Endurance", percent: 45 },
    { metric: "Flexibility", percent: 70 },
];

export default function Demo() {
    const [equipment, setEquipment] = useState("Home");

    // Controls for progress bar animation
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const barVariants = {
        hidden: { width: 0 },
        visible: {
            width: "75%",
            transition: { duration: 1.5, ease: "easeOut" },
        },
    };

    return (<>
        <h2 className="text-4xl font-bold text-center py-16 px-4 md:px-20 text-[#333] mb-4">
            Live Preview / Interactive Demo
        </h2>
        <section className="max-w-3xl mx-auto px-4 sm:px-6 md:px-6 lg:px-8 py-6 bg-[#64865bc6] rounded-lg shadow-lg">


            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                Your Weekly Fitness Dashboard
            </h2>

            {/* Equipment Toggle */}
            <div className="flex justify-center gap-4 mb-6 flex-wrap">
                {["Home", "Gym", "None"].map((eq) => (
                    <button
                        key={eq}
                        onClick={() => setEquipment(eq)}
                        className={`px-4 py-2 rounded-full border font-semibold whitespace-nowrap ${equipment === eq
                            ? "bg-[#DDA853] text-white border-[#DDA853]"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-[#DDA853]/20"
                            } transition`}
                    >
                        {eq}
                    </button>
                ))}
            </div>

            {/* AI Generated Daily Workout */}
            <div className="mb-8 p-4 bg-[#F5F5F5] rounded-lg shadow-inner text-center">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Today's Workout</h3>
                <p className="text-gray-700">{workoutsByEquipment[equipment]}</p>
            </div>

            {/* Weekly Goal Tracker */}
            <div className="mb-8">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center">
                    Weekly Goal Tracker
                </h3>
                <div className="flex justify-start gap-4 max-w-full overflow-x-auto px-2 sm:px-0">
                    {weeklyGoals.map(({ day, done }) => (
                        <div key={day} className="flex flex-col items-center min-w-[40px]">
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${done ? "bg-[#DDA853] text-white" : "bg-gray-300 text-gray-600"
                                    }`}
                            >
                                {done ? "✓" : day[0]}
                            </div>
                            <span className="text-xs mt-1">{day}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Progress Graphs - with Framer Motion animation */}

            <div ref={ref} className="mb-8">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center">
                    Progress Graph
                </h3>
                <div className="space-y-4 max-w-md mx-auto px-2 sm:px-0">
                    {progressData.map(({ metric, percent }) => (
                        <div key={metric}>
                            <div className="flex justify-between mb-1 text-sm sm:text-base">
                                <span>{metric}</span>
                                <span>{percent}%</span>
                            </div>
                            <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
                                <motion.div
                                    className="bg-[#DDA853] h-4 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={controls}
                                    variants={{
                                        visible: {
                                            width: `${percent}%`,
                                            transition: { duration: 1.5, ease: "easeOut" },
                                        },
                                        hidden: { width: 0 },
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-6 py-3 bg-[#DDA853] text-white rounded-full font-semibold hover:bg-[#b47e3d] transition">
                    Try the Demo
                </button>
                <button className="px-6 py-3 border border-[#DDA853] text-[#F5F5F5] rounded-full font-semibold hover:bg-[#DDA853]/10 transition">
                    Start Free Today
                </button>
            </div>
        </section>
    </>
    );
}
