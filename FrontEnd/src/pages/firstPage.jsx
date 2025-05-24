import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import dashboardImg from '../assets/dashboard.png';
import mobileAppImg from '../assets/mobileApp.png';
import bgImage from '../assets/background.png';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function FirstPage() {


    function AnimatedCounter({ target, duration = 200 }) {
        const [count, setCount] = useState(0);

        useEffect(() => {
            let start = 0;
            const stepTime = Math.abs(Math.floor(duration / target));
            const timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start >= target) {
                    clearInterval(timer);
                }
            }, stepTime);

            return () => clearInterval(timer);
        }, [target, duration]);

        return <span>{count.toLocaleString()}</span>;
    }


    return (
        <div
            className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10 min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Left Content */}
            <div className="w-full md:w-1/2 space-y-6 text-center md:text-left mb-12 md:mb-0">
                <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    Your Smartest Personal Trainer — Powered by AI.
                </motion.h1>

                <motion.p
                    className="text-base sm:text-lg text-gray-700"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                >
                    Instantly get a personalized fitness plan tailored to your goals, lifestyle, and equipment — with real-time
                    feedback and adaptive tracking.
                </motion.p>

                <motion.button
                    className="bg-[#DDA853] text-white px-6 py-3 rounded-xl shadow hover:scale-105 hover:cursor-pointer transition-transform duration-300 ease-in-out"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Start My Free Plan
                </motion.button>

                <motion.div
                    className="flex items-center space-x-3 mt-6 text-gray-700"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
                >
                    {/* Stars */}
                    <div className="flex space-x-1 text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 fill-current"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.16c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.92-.755 1.688-1.54 1.118L10 13.347l-3.37 2.448c-.785.57-1.84-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L3.64 9.384c-.783-.57-.38-1.81.588-1.81h4.16a1 1 0 00.95-.69l1.286-3.957z" />
                            </svg>
                        ))}
                    </div>

                    {/* Rating Text */}
                    <span className="font-semibold text-lg text-gray-900">
                        4.9/5
                    </span>

                    {/* User Count */}
                    <span className="text-sm text-gray-600">
                        from <span className="font-medium"><AnimatedCounter target={500} duration={1000} /></span>+ happy users
                    </span>

                </motion.div>

                {[FaInstagram, FaLinkedin, FaGithub].map((Icon, idx) => (
                    <motion.a
                        key={idx}
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#DDA853] text-4xl hover:text-[#a6793d] transition-colors duration-300"
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            duration: 2 + idx * 0.3,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        }}
                    >
                        <Icon />
                    </motion.a>
                ))}

            </div>

            {/* Right Images */}
            <div className="w-full md:w-1/2 relative flex justify-center items-center h-full gap-4">
                {/* Foreground Mobile Image */}
                <motion.img
                    src={mobileAppImg}
                    alt="Mobile App"
                    className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[280px] relative z-20 drop-shadow-[0_20px_30px_rgba(115,148,107,0.4)]"
                    initial={{ opacity: 0, x: -60, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                />

                {/* Background Dashboard Image */}
                <motion.img
                    src={dashboardImg}
                    alt="Dashboard"
                    className="w-[300px] sm:w-[400px] md:w-[460px] lg:w-[500px] rounded-xl shadow-xl relative z-10 -ml-6 sm:-ml-10 drop-shadow-[0_30px_40px_rgba(115,148,107,0.3)]"
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                />
            </div>


        </div>
    );
}
