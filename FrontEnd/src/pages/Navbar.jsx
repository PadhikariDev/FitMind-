import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [featuresOpen, setFeaturesOpen] = useState(false);
    const [toolsOpen, setToolsOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);


    // Toggle dropdowns (close others if you want only one open at a time)
    const toggleFeatures = () => {
        setFeaturesOpen(!featuresOpen);
        if (loginOpen) setLoginOpen(false);
    };

    const toggleTools = () => {
        setToolsOpen(!toolsOpen);
        if (toolsOpen) setToolsOpen(false);
    }

    const toggleLogin = () => {
        setLoginOpen(!loginOpen);
        if (featuresOpen) setFeaturesOpen(false);
    };

    return (
        <nav className="fixed w-full bg-[#73946B] shadow-md px-6 md:px-12 py-6 flex justify-between items-center  top-0 z-50">
            <Link to="/">
                <div className="text-xl text-[#F5F5F5] md:ml-12 hover:cursor-pointer font-bold">
                    FitMind-AI
                </div>
            </Link>
            {/* Desktop menu */}
            <div className="hidden md:flex text-[#F5F5F5] gap-12 mr-12 text-sm font-medium items-center relative">
                <a href="#home" className="hover:text-[#DDA853]">Home</a>

                {/* Features with dropdown */}
                <div
                    className="relative cursor-pointer"
                    onMouseEnter={() => setFeaturesOpen(true)}
                    onMouseLeave={() => setFeaturesOpen(false)}
                    onClick={toggleFeatures} // for click on mobile if resized quickly
                >
                    <span className="hover:text-[#DDA853] flex items-center gap-1 select-none">
                        Features ▼
                    </span>
                    <AnimatePresence>
                        {featuresOpen && (
                            <motion.ul
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute bg-[#5E7B56] shadow-md rounded mt-2 py-2 w-40 z-10"
                            >
                                <li><a href="#ai-coaching" className="block px-4 py-2 hover:text-[#DDA853]">AI Coaching</a></li>
                                <li><a href="#meditation" className="block px-4 py-2 hover:text-[#DDA853]">Meditation</a></li>
                                <li><a href="#progress-tracking" className="block px-4 py-2 hover:text-[#DDA853]">Progress Tracking</a></li>
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>

                <a href="#workouts" className="hover:text-[#DDA853]">Workouts</a>
                {/* AI-Tools with dropdown */}
                <div
                    className="relative cursor-pointer"
                    onMouseEnter={() => setToolsOpen(true)}
                    onMouseLeave={() => setToolsOpen(false)}
                    onClick={toggleTools}
                >
                    <span className="hover:text-[#DDA853] flex items-center gap-1 select-none">
                        AI Tools ▼
                    </span>
                    <AnimatePresence>
                        {toolsOpen && (
                            <motion.ul
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute bg-[#5E7B56] shadow-md rounded mt-2 py-2 w-40 z-10"
                            >
                                <li><a href="#login" className="block px-4 py-2 hover:text-[#DDA853]">Meditation</a></li>
                                <li><a href="#create-account" className="block px-4 py-2 hover:text-[#DDA853]">Mood Tracker</a></li>
                                <li><a href="#create-account" className="block px-4 py-2 hover:text-[#DDA853]">Cognitive Exercises</a></li>
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>


                {/* Login with dropdown */}
                <div
                    className="relative cursor-pointer"
                    onMouseEnter={() => setLoginOpen(true)}
                    onMouseLeave={() => setLoginOpen(false)}
                    onClick={toggleLogin}
                >
                    <span className="hover:text-[#DDA853]600 flex items-center gap-1 select-none">
                        Access ▼
                    </span>
                    <AnimatePresence>
                        {loginOpen && (
                            <motion.ul
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute bg-[#5E7B56] shadow-md rounded mt-2 py-2 w-40 z-10"
                            >
                                <li><Link to="/login" className="block px-4 py-2 hover:text-[#DDA853]" onClick={() => setLoginOpen(false)} >Login</Link></li>
                                <li><Link
                                    to="/signup"
                                    className="block px-4 py-2 hover:text-[#DDA853]"
                                    onClick={() => setLoginOpen(false)} // Close dropdown on click
                                >Create Account</Link>
                                </li>
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>

                <a href="#about" className="hover:text-[#DDA853]">About</a>
                <a href="#contact" className="hover:text-[#DDA853]">Contact</a>
            </div>

            {/* Hamburger icon for mobile */}
            <div
                className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <XMarkIcon className="w-6 h-6 text-[#F5F5F5]" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="hamburger"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Bars3Icon className="w-6 h-6 text-[#F5F5F5]" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden absolute top-full left-0 w-full bg-[#5E7B56] shadow-md overflow-hidden z-20"
                    >
                        <ul className="flex flex-col p-4 gap-4 text-sm text-[#F5F5F5] font-medium">

                            <li><a href="#home" className="block hover:text-[#DDA853]">Home</a></li>

                            {/* Mobile Features dropdown */}
                            <li>
                                <button
                                    onClick={() => setFeaturesOpen(!featuresOpen)}
                                    className="w-full flex justify-between items-center hover:text-[#DDA853] focus:outline-none"
                                >
                                    Features {featuresOpen ? '▲' : '▼'}
                                </button>
                                <AnimatePresence>
                                    {featuresOpen && (
                                        <motion.ul
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="pl-4 mt-2 flex flex-col gap-2"
                                        >
                                            <li><a href="#ai-coaching" className="block hover:text-[#DDA853]">AI Coaching</a></li>
                                            <li><a href="#meditation" className="block hover:text-[#DDA853]">Meditation</a></li>
                                            <li><a href="#progress-tracking" className="block hover:text-[#DDA853]">Progress Tracking</a></li>
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </li>

                            <li><a href="#workouts" className="block hover:text-[#DDA853]">Workouts</a></li>
                            {/* AI-Tools  dropdown */}
                            <li>
                                <button
                                    onClick={() => setToolsOpen(!toolsOpen)}
                                    className="w-full flex justify-between items-center hover:text-[#DDA853] focus:outline-none"
                                >
                                    AI Tools {toolsOpen ? '▲' : '▼'}
                                </button>
                                <AnimatePresence>
                                    {toolsOpen && (
                                        <motion.ul
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="pl-4 mt-2 flex flex-col gap-2"
                                        >
                                            <li><a href="#ai-coaching" className="block hover:text-[#DDA853]">Meditation</a></li>
                                            <li><a href="#meditation" className="block hover:text-[#DDA853]">Mood Tracker</a></li>
                                            <li><a href="#progress-tracking" className="block hover:text-[#DDA853]">Cognitive Exercises</a></li>
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </li>

                            {/* Mobile Login dropdown */}
                            <li>
                                <button
                                    onClick={() => setLoginOpen(!loginOpen)}
                                    className="w-full flex justify-between items-center hover:text-[#DDA853] focus:outline-none"
                                >
                                    Login {loginOpen ? '▲' : '▼'}
                                </button>
                                <AnimatePresence>
                                    {loginOpen && (
                                        <motion.ul
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="pl-4 mt-2 flex flex-col gap-2"
                                        >
                                            <li><Link
                                                to="/login"
                                                className="block hover:text-[#DDA853]"
                                                onClick={() => {
                                                    setIsOpen(false); // close mobile menu after clicking
                                                    setLoginOpen(false); // close dropdown
                                                }}
                                            >
                                                Login
                                            </Link></li>
                                            <li><Link
                                                to="/signup"
                                                className="block hover:text-[#DDA853]"
                                                onClick={() => {
                                                    setIsOpen(false); // close mobile menu after clicking
                                                    setLoginOpen(false); // close dropdown
                                                }}
                                            >
                                                Create Account
                                            </Link></li>
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </li>

                            <li><a href="#about" className="block hover:text-[#DDA853]">About</a></li>
                            <li><a href="#contact" className="block hover:text-[#DDA853]">Contact</a></li>
                        </ul>
                        <div className="mt-4 mb-2 text-sm text-[#F5F5F5] text-center px-4">
                            &copy; {new Date().getFullYear()} FitMind-AI . All rights reserved.
                        </div>
                    </motion.div>

                )}
            </AnimatePresence>

        </nav>
    )
}

export default Navbar;
